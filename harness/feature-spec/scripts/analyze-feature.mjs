#!/usr/bin/env node
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const feature = required(args.feature, "--feature");
const projectName = args.project || args.projectName || args.projectTitle || "";
const projectIdentity = parseProjectIdentity(projectName);
const prototypePath = path.resolve(required(args.prototype, "--prototype"));
const outputPath = path.resolve(required(args.output, "--output"));
const internalPath = path.join(outputPath, "internal");
const humanPath = path.join(outputPath, "human");
const keywords = splitList(args.keywords || feature);
const specPath = args.spec ? path.resolve(args.spec) : findLatestSpec(outputPath);
const detail = args.detail === "true";

const files = listFiles(prototypePath).filter(isScannableSource);
const preprocessed = buildPreprocessedSummary(files, keywords);
const matches = collectMatches(files, keywords);
const candidates = rankFiles(matches);
const items = buildItems(matches);
const coverage = summarizeCoverage(items, specPath);
const pmArtifacts = buildPmArtifacts(feature, matches, candidates, items, projectName);

mkdirSync(outputPath, { recursive: true });
mkdirSync(internalPath, { recursive: true });
mkdirSync(humanPath, { recursive: true });

const internalOutputs = {
  "candidate-files.md": renderCandidates(feature, keywords, candidates, preprocessed),
  "preprocessed-code-summary.md": renderPreprocessedSummary(feature, preprocessed),
  "logic-inventory.md": renderInventorySummary(feature, prototypePath, keywords, candidates, items, preprocessed),
  "coverage-matrix.md": renderCoverageSummary(feature, specPath, coverage),
  "domain-rule-map.md": renderDomainRuleMap(feature, pmArtifacts.domainRules),
  "open-questions.md": renderOpenQuestions(feature, coverage)
};
for (const [name, content] of Object.entries(internalOutputs)) {
  writeFileSync(path.join(internalPath, name), content, "utf8");
  writeFileSync(path.join(outputPath, name), content, "utf8");
}

const humanOutputs = {
  "00-feature-summary.md": renderFeatureSummary(feature, pmArtifacts),
  "platform-map.md": renderPlatformMap(feature, pmArtifacts.platformMap),
  "screen-case-map.md": renderScreenCaseMap(feature, pmArtifacts.screenCaseMap),
  "policy-table.md": renderPolicyTable(feature, pmArtifacts.policies),
  "state-matrix.md": renderStateMatrix(feature, pmArtifacts.states),
  "ui-element-spec.md": renderUiElementSpec(feature, pmArtifacts.uiElements),
  "decision-log.md": renderDecisionLog(feature, pmArtifacts.decisions),
  "event-tracking.md": renderEventTracking(feature, pmArtifacts.events)
};
for (const [name, content] of Object.entries(humanOutputs)) {
  writeFileSync(path.join(humanPath, name), content, "utf8");
}

writeFileSync(path.join(outputPath, "candidate-files.md"), internalOutputs["candidate-files.md"], "utf8");
writeJson(path.join(internalPath, "preprocessed-code-summary.json"), preprocessed);
writeJson(path.join(outputPath, "preprocessed-code-summary.json"), preprocessed);
writeJson(path.join(internalPath, "logic-inventory.json"), buildLogicInventoryData(feature, prototypePath, keywords, candidates, items, preprocessed));
writeJson(path.join(outputPath, "logic-inventory.json"), buildLogicInventoryData(feature, prototypePath, keywords, candidates, items, preprocessed));
const casePlanPath = path.join(outputPath, "case-plan.md");
if (!existsSync(casePlanPath)) writeFileSync(casePlanPath, renderCasePlan(feature, items), "utf8");
if (detail) {
  writeFileSync(path.join(internalPath, "logic-inventory.detail.md"), renderDetailInventory(feature, items), "utf8");
  writeFileSync(path.join(internalPath, "coverage-matrix.detail.md"), renderDetailCoverage(feature, coverage.rows), "utf8");
  writeFileSync(path.join(outputPath, "logic-inventory.detail.md"), renderDetailInventory(feature, items), "utf8");
  writeFileSync(path.join(outputPath, "coverage-matrix.detail.md"), renderDetailCoverage(feature, coverage.rows), "utf8");
}

console.log(JSON.stringify({
  feature,
  projectName,
  projectIdentity,
  outputPath,
  internalPath,
  humanPath,
  specPath,
  candidateFileCount: candidates.length,
  inventoryItemCount: items.length,
  logicTypes: countBy(items, "logicType"),
  coverage: coverage.statusCounts,
  detail
}, null, 2));

function parseArgs(argv) {
  const result = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const next = argv[i + 1];
    result[token.slice(2)] = !next || next.startsWith("--") ? "true" : next;
    if (next && !next.startsWith("--")) i += 1;
  }
  return result;
}

function required(value, name) {
  if (!value) throw new Error(`${name} is required`);
  return value;
}

function writeJson(file, value) {
  writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function splitList(value) {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function listFiles(dir) {
  const ignored = new Set([".git", "node_modules", "dist", "build", ".cache", "coverage"]);
  return readdirSync(dir).flatMap((name) => {
    if (ignored.has(name)) return [];
    const full = path.join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) return listFiles(full);
    return stat.isFile() ? [full] : [];
  });
}

function isScannableSource(file) {
  return [".js", ".mjs", ".cjs", ".ts", ".tsx", ".jsx", ".html", ".css", ".json"].includes(path.extname(file).toLowerCase());
}

function buildPreprocessedSummary(sourceFiles, keys) {
  const normalizedKeys = keys.map((key) => key.toLowerCase());
  const domNodes = [];
  const eventListeners = [];
  const selectorReferences = [];

  for (const file of sourceFiles) {
    const ext = path.extname(file).toLowerCase();
    const lines = readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, index) => {
      const lower = line.toLowerCase();
      const isKeywordMatch = normalizedKeys.some((key) => lower.includes(key));
      if (ext === ".html" && (isKeywordMatch || line.includes("data-"))) {
        const node = extractDomNode(line, file, index + 1);
        if (node) domNodes.push(node);
      }
      if (isKeywordMatch || /querySelector|getElementById|addEventListener|data-[a-z0-9-]+/i.test(line)) {
        const selectors = extractSelectors(line);
        selectors.forEach((selector) => selectorReferences.push({
          selector,
          source: sourceRef(file, index + 1),
          operation: inferSelectorOperation(line),
          summary: cleanSummary(line)
        }));
      }
      if (/addEventListener\s*\(/.test(line) || /on[A-Z][A-Za-z0-9_]*\s*=/.test(line)) {
        eventListeners.push({
          event: extractEventName(line),
          source: sourceRef(file, index + 1),
          selector: extractSelectors(line)[0] || "",
          handler: extractHandlerName(line),
          summary: cleanSummary(line)
        });
      }
    });
  }

  const domBySelector = new Map();
  domNodes.forEach((node) => {
    const key = node.selector || `${node.tag}:${node.source}`;
    if (!domBySelector.has(key)) domBySelector.set(key, node);
  });
  const selectorMap = new Map();
  selectorReferences.forEach((row) => {
    const current = selectorMap.get(row.selector) || {
      selector: row.selector,
      sources: [],
      operations: new Set(),
      summaries: []
    };
    current.sources.push(row.source);
    current.operations.add(row.operation);
    if (current.summaries.length < 3) current.summaries.push(row.summary);
    selectorMap.set(row.selector, current);
  });

  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    keywords: keys,
    domNodes: [...domBySelector.values()].slice(0, 120),
    eventListeners: eventListeners.slice(0, 120),
    selectorMappings: [...selectorMap.values()].slice(0, 120).map((row) => ({
      selector: row.selector,
      sources: [...new Set(row.sources)].slice(0, 8),
      operations: [...row.operations],
      summaries: row.summaries
    }))
  };
}

function extractDomNode(line, file, lineNumber) {
  const tag = line.match(/<\s*([a-z0-9-]+)/i)?.[1] || "";
  if (!tag) return null;
  const dataAttrs = [...line.matchAll(/\s(data-[a-z0-9-]+)(?:=["']([^"']*)["'])?/gi)].map((match) => ({
    name: match[1],
    value: match[2] || ""
  }));
  const id = line.match(/\sid=["']([^"']+)["']/i)?.[1] || "";
  const className = line.match(/\sclass=["']([^"']+)["']/i)?.[1] || "";
  const selector = dataAttrs[0]
    ? `[${dataAttrs[0].value ? `${dataAttrs[0].name}="${dataAttrs[0].value}"` : dataAttrs[0].name}]`
    : id
      ? `#${id}`
      : className
        ? `.${className.split(/\s+/)[0]}`
        : tag;
  return {
    selector,
    tag,
    id,
    className,
    dataAttributes: dataAttrs,
    source: sourceRef(file, lineNumber),
    textHint: stripTags(line).slice(0, 120)
  };
}

function extractSelectors(line) {
  const selectors = [];
  for (const match of line.matchAll(/querySelector(?:All)?\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) {
    selectors.push(match[1]);
  }
  for (const match of line.matchAll(/getElementById\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) {
    selectors.push(`#${match[1]}`);
  }
  for (const match of line.matchAll(/data-[a-z0-9-]+(?:=["'][^"']+["'])?/gi)) {
    const attr = match[0];
    selectors.push(attr.includes("=") ? `[${attr}]` : `[${attr}]`);
  }
  return [...new Set(selectors)];
}

function inferSelectorOperation(line) {
  const text = line.toLowerCase();
  if (text.includes("addeventlistener")) return "event-binding";
  if (text.includes("classlist") || text.includes("hidden") || text.includes("disabled")) return "state-update";
  if (text.includes("textcontent") || text.includes("innerhtml") || text.includes("appendchild")) return "render";
  if (text.includes("value") || text.includes("checked")) return "input-read-write";
  return "reference";
}

function extractEventName(line) {
  return line.match(/addEventListener\(\s*["'`]([^"'`]+)["'`]/)?.[1]
    || line.match(/on([A-Z][A-Za-z0-9_]*)\s*=/)?.[1]?.toLowerCase()
    || "";
}

function extractHandlerName(line) {
  return line.match(/addEventListener\(\s*["'`][^"'`]+["'`]\s*,\s*([A-Za-z0-9_$]+)/)?.[1]
    || line.match(/=>\s*([A-Za-z0-9_$]+)\(/)?.[1]
    || "";
}

function stripTags(value) {
  return String(value || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function sourceRef(file, line) {
  return `${shortPath(file)}:${line}`;
}

function collectMatches(sourceFiles, keys) {
  const normalized = keys.map((key) => key.toLowerCase());
  const result = [];
  for (const file of sourceFiles) {
    const lines = readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, index) => {
      if (!normalized.some((key) => line.toLowerCase().includes(key))) return;
      const category = categorize(line, file);
      result.push({
        file,
        line: index + 1,
        text: line.trim(),
        category,
        logicType: toLogicType(category, line, file),
        platformType: detectPlatformType(file, line, projectIdentity),
        targetUserGroup: detectTargetUserGroup(file, line, projectIdentity),
        platform: detectPlatform(file, line, projectIdentity),
        screen: detectScreen(file, line),
        uiElementType: detectUiElementType(line, file),
        state: detectState(line),
        policyType: detectPolicyType(line),
        event: detectEvent(line),
        decision: detectDecision(line)
      });
    });
  }
  return result;
}

function categorize(line, file) {
  const text = line.toLowerCase();
  if (text.includes("addeventlistener") || text.includes("data-") || file.endsWith(".html")) return "UI";
  if (text.includes("state") || text.includes("selected") || text.includes("mode") || text.includes("classlist")) return "State";
  if (text.includes("valid") || text.includes("disabled") || text.includes("limit") || text.includes("empty") || text.includes("over")) return "Validation";
  if (text.includes("fee") || text.includes("price") || text.includes("amount") || text.includes("billing")) return "Pricing";
  if (text.includes("ticket") || text.includes("usage") || text.includes("allocation") || text.includes("count")) return "Ticket Usage";
  if (text.includes("submit") || text.includes("save") || text.includes("update") || text.includes("delete") || text.includes("reservation")) return "Persistence";
  if (text.includes("repair") || text.includes("migration") || text.includes("sync")) return "Repair/Migration";
  if (text.includes("if ") || text.includes("if(") || text.includes("else") || text.includes("switch")) return "Edge Case";
  return "Unknown";
}

function toLogicType(category, line = "", file = "") {
  const text = `${line} ${file}`.toLowerCase().replaceAll("\\", "/");
  if (["Pricing", "Ticket Usage", "Persistence", "Repair/Migration"].includes(category)) return "Business";
  if (category === "Validation") return text.includes("disabled") || text.includes("classlist") ? "UI" : "Business";
  if (["UI", "State"].includes(category)) return "UI";
  if (category === "Edge Case" || text.includes("submit") || text.includes("save") || text.includes("update")) return "Integration";
  return "Unknown";
}

function parseProjectIdentity(value = "") {
  const text = String(value || "").toLowerCase();
  return {
    platformType: detectPlatformTypeFromText(text),
    targetUserGroup: detectTargetUserGroupFromText(text)
  };
}

function detectPlatformTypeFromText(text = "") {
  if (/\b(web|desktop)\b|웹/.test(text)) return "Web";
  if (/\b(app|mobile|ios|android|aos)\b|앱/.test(text)) return "App";
  return "";
}

function detectTargetUserGroupFromText(text = "") {
  if (/\b(biz|business|admin|manager|operator|staff|owner|b2b)\b|사업자|관리자|운영자|매장/.test(text)) return "Biz";
  if (/\b(customer|cuastomer|user|consumer|general|guardian|parent|b2c)\b|고객|사용자|일반|보호자|소비자/.test(text)) return "Customer";
  return "";
}

function detectPlatformType(file, line = "", identity = {}) {
  if (identity.platformType) return identity.platformType;
  const text = `${file} ${line}`.toLowerCase().replaceAll("\\", "/");
  const detected = detectPlatformTypeFromText(text);
  if (detected) return detected;
  if (text.includes("/pages/") || text.includes(".html")) return "Web";
  return "Unspecified";
}

function detectTargetUserGroup(file, line = "", identity = {}) {
  if (identity.targetUserGroup) return identity.targetUserGroup;
  const text = `${file} ${line}`.toLowerCase().replaceAll("\\", "/");
  const detected = detectTargetUserGroupFromText(text);
  if (detected) return detected;
  if (text.includes("guest") || text.includes("mypage") || text.includes("user")) return "Customer";
  if (text.includes("admin") || text.includes("settings") || text.includes("reservation") || text.includes("src/pages")) return "Biz";
  return "Unspecified";
}

function detectPlatform(file, line = "", identity = {}) {
  const platformType = detectPlatformType(file, line, identity);
  const targetUserGroup = detectTargetUserGroup(file, line, identity);
  if (platformType !== "Unspecified" || targetUserGroup !== "Unspecified") {
    return `${targetUserGroup} ${platformType}`.trim();
  }
  const text = `${file} ${line}`.toLowerCase().replaceAll("\\", "/");
  if (text.includes("user") || text.includes("guest") || text.includes("mypage")) return "User App";
  if (text.includes("app") && !text.includes("web")) return "Biz App";
  if (text.includes("admin") || text.includes("biz") || text.includes("settings") || text.includes("src/pages")) return "Biz Web";
  return "Unspecified";
}

function detectScreen(file, line = "") {
  const normalized = file.toLowerCase().replaceAll("\\", "/");
  const base = path.basename(file, path.extname(file));
  if (normalized.includes("/pages/")) return titleCase(base);
  if (normalized.includes("/components/")) {
    const text = line.match(/data-[a-z0-9-]+/i)?.[0] || base;
    return titleCase(text.replace(/^data-/, "").replaceAll("-", " "));
  }
  return titleCase(base);
}

function detectUiElementType(line = "", file = "") {
  const text = `${line} ${file}`.toLowerCase();
  if (text.includes("datepicker") || text.includes("calendar") || text.includes("date")) return "DatePicker";
  if (text.includes("modal")) return "Modal";
  if (text.includes("toast")) return "Toast";
  if (text.includes("alert")) return "Alert";
  if (text.includes("checkbox")) return "Checkbox";
  if (text.includes("radio")) return "Radio";
  if (text.includes("select") || text.includes("dropdown")) return "Dropdown";
  if (text.includes("tab")) return "Tab";
  if (text.includes("button") || text.includes("click")) return "Button";
  if (text.includes("input") || text.includes("textarea")) return "Input";
  if (text.includes("section") || text.includes("panel") || text.includes("card")) return "Section";
  if (text.includes("option")) return "Option";
  return "";
}

function detectState(line = "") {
  const text = line.toLowerCase();
  const map = [
    ["loading", "loading"],
    ["disabled", "disabled"],
    ["selected", "selected"],
    ["unselected", "unselected"],
    ["empty", "empty"],
    ["error", "error"],
    ["invalid", "validation error"],
    ["valid", "valid"],
    ["expired", "expired"],
    ["unlimited", "unlimited"],
    ["active", "active"],
    ["pending", "pending"],
    ["available", "available"],
    ["unavailable", "unavailable"],
    ["before", "before start"],
    ["after", "after"]
  ];
  return map.find(([needle]) => text.includes(needle))?.[1] || "";
}

function detectPolicyType(line = "") {
  const text = line.toLowerCase();
  if (/(server|source of truth|authoritative)/.test(text)) return "server-authoritative policy";
  if (/(recover|repair|migration|fallback)/.test(text)) return "recovery policy";
  if (/(display|show|hide|visible|render)/.test(text)) return "display policy";
  if (/(valid|invalid|limit|permission|disabled|available|expiration|expired)/.test(text)) return "validation policy";
  if (/(usage|deduction|ticket|allocation|priority|count)/.test(text)) return "usage policy";
  if (/(setting|config|option|default)/.test(text)) return "configuration policy";
  if (/(operation|cancel|complete|status)/.test(text)) return "operational policy";
  return "";
}

function detectEvent(line = "") {
  const text = line.toLowerCase();
  if (/(datalayer|gtag|analytics|firebase|tracking|trackevent)/.test(text)) return "analytics_event";
  if (text.includes("addeventlistener") && text.includes("click")) return "click";
  if (text.includes("submit")) return "submit";
  if (text.includes("save")) return "save";
  if (text.includes("fail") || text.includes("error")) return "failure";
  if (text.includes("open") && text.includes("modal")) return "modal_open";
  return "";
}

function detectDecision(line = "") {
  const text = line.toLowerCase();
  if (/(workaround|todo|currently|for now|fallback|server|client|source of truth|existing behavior|backwards compatibility)/.test(text)) {
    return line.trim().replace(/\s+/g, " ").slice(0, 180);
  }
  return "";
}

function rankFiles(rows) {
  const grouped = new Map();
  for (const row of rows) {
    const item = grouped.get(row.file) || { file: row.file, count: 0, categories: new Set(), logicTypes: new Set() };
    item.count += 1;
    item.categories.add(row.category);
    item.logicTypes.add(row.logicType);
    grouped.set(row.file, item);
  }
  return [...grouped.values()]
    .sort((a, b) => b.count - a.count)
    .map((item) => ({ ...item, categories: [...item.categories], logicTypes: [...item.logicTypes] }));
}

function buildItems(rows) {
  return rows
    .filter((row) => row.text && !row.text.startsWith("//"))
    .sort((a, b) => score(b) - score(a) || a.file.localeCompare(b.file) || a.line - b.line)
    .slice(0, 160)
    .map((row, index) => ({
      id: `LI-${String(index + 1).padStart(3, "0")}`,
      source: `${path.relative(process.cwd(), row.file)}:${row.line}`,
      logicType: row.logicType,
      category: row.category,
      summary: row.text.replace(/\s+/g, " ").slice(0, 140)
    }));
}

function score(row) {
  const file = row.file.toLowerCase().replaceAll("\\", "/");
  const text = row.text.toLowerCase();
  return [
    file.includes("/src/pages/reservation.") && 40,
    file.includes("/src/pages/hotels.") && 35,
    file.includes("/src/services/") && 30,
    file.includes("pickdrop") && 20,
    /function |=>|export /.test(text) && 12,
    /setpickdropmode|syncpickdroptickets|submitreservation|buildpickdropusageplan/.test(text) && 30,
    /if |if\(|else|switch/.test(text) && 8,
    ["Persistence", "Ticket Usage", "Pricing", "Validation"].includes(row.category) && 10
  ].filter(Boolean).reduce((sum, value) => sum + value, 0);
}

function summarizeCoverage(items, spec) {
  const specText = spec && existsSync(spec) ? readFileSync(spec, "utf8") : "";
  const rows = items.map((item) => {
    const symbol = extractSymbol(item.summary);
    const status = symbol && specText.includes(symbol) ? "Covered" : item.category === "Unknown" ? "Open Question" : "Not Covered";
    return { ...item, status };
  });
  return {
    rows,
    statusCounts: countBy(rows, "status"),
    typeCounts: countBy(rows, "logicType"),
    categoryCounts: countBy(rows, "category")
  };
}

function extractSymbol(text) {
  return (text.match(/(?:function|const|let|export function)\s+([A-Za-z0-9_$]+)/) || [])[1] || "";
}

function renderCandidates(featureName, keys, rows, preprocessed = {}) {
  const top = rows.slice(0, 12);
  return `# Candidate Files: ${featureName}

Keywords: ${keys.map((key) => `\`${key}\``).join(", ")}

## Pre-processing Summary

| Artifact | Count | Use |
| --- | ---: | --- |
| DOM nodes | ${preprocessed.domNodes?.length || 0} | Identify visible UI surfaces before reading full files |
| Event listeners | ${preprocessed.eventListeners?.length || 0} | Identify user actions and bound handlers |
| Selector mappings | ${preprocessed.selectorMappings?.length || 0} | Connect DOM selectors to spec screen areas |

Preprocessed JSON: \`internal/preprocessed-code-summary.json\`

| File | Matches | Logic Types | Categories |
| --- | ---: | --- | --- |
${top.map((item) => `| \`${shortPath(item.file)}\` | ${item.count} | ${item.logicTypes.join(", ")} | ${item.categories.join(", ")} |`).join("\n")}

## Top DOM Selectors

| Selector | Source | Text / Role Hint |
| --- | --- | --- |
${(preprocessed.domNodes || []).slice(0, 12).map((node) => `| \`${escapePipe(node.selector)}\` | \`${escapePipe(node.source)}\` | ${escapePipe(node.textHint || node.tag)} |`).join("\n") || "| TBD | TBD | TBD |"}

## Top Event Bindings

| Event | Selector | Handler | Source |
| --- | --- | --- | --- |
${(preprocessed.eventListeners || []).slice(0, 12).map((item) => `| ${escapePipe(item.event || "event")} | \`${escapePipe(item.selector || "unmapped")}\` | ${escapePipe(item.handler || "-")} | \`${escapePipe(item.source)}\` |`).join("\n") || "| TBD | TBD | TBD | TBD |"}

Detail: run \`analyze-feature.mjs --detail\` to generate raw inventory files.
`;
}

function renderCasePlan(featureName, items) {
  return `# Screen Plan: ${featureName}

## Screen Selection Rules

- Start from actual screens, modals, drawers, and panels the user can see.
- Split screens when platform, entry path, primary user goal, or visible layout changes.
- Do not create separate screens for minor edge states; list them under the relevant screen area.
- Keep policy grouping secondary to the real screen structure.

## Logic Summary

| Logic Type | Count |
| --- | ---: |
${Object.entries(countBy(items, "logicType")).map(([key, value]) => `| ${key} | ${value} |`).join("\n")}

## Final Screen List

| Screen ID | Platform | Screen | Primary User Goal | Entry Path | Main Screen Areas | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| S-01 | <platform> | <screen> | <goal> | <path> | <areas> | High |

## Screen Area Plan

| Screen ID | Screen Area | UI Items | Behaviors / States To Cover | Policy Notes Needed |
| --- | --- | --- | --- | --- |
| S-01 | <area> | <items> | <behaviors and states> | <only policies that affect visible behavior> |

## Grouped Edge States

| Edge State | Parent Screen Area | Reason |
| --- | --- | --- |
| <edge> | S-01 / <area> | <reason> |
`;
}

function renderInventorySummary(featureName, root, keys, files, items, preprocessed = {}) {
  return `# Logic Inventory: ${featureName}

Prototype: \`${root}\`
Keywords: ${keys.map((key) => `\`${key}\``).join(", ")}

## Summary

| Metric | Value |
| --- | ---: |
| Candidate files | ${files.length} |
| Inventory items sampled | ${items.length} |

## Logic Types

| Logic Type | Count |
| --- | ---: |
${Object.entries(countBy(items, "logicType")).map(([key, value]) => `| ${key} | ${value} |`).join("\n")}

## Categories

| Category | Count |
| --- | ---: |
${Object.entries(countBy(items, "category")).map(([key, value]) => `| ${key} | ${value} |`).join("\n")}

## Top Candidate Files

| File | Matches | Role |
| --- | ---: | --- |
${files.slice(0, 8).map((item) => `| \`${shortPath(item.file)}\` | ${item.count} | ${roleGuess(item.categories)} |`).join("\n")}

## DOM Selector Mapping Table

| DOM Selector | Operation | Bound Source | Spec Mapping Hint |
| --- | --- | --- | --- |
${renderDomSelectorRows(preprocessed)}

Structured JSON: \`internal/logic-inventory.json\`

Detail: run \`analyze-feature.mjs --detail\`.
`;
}

function renderCoverageSummary(featureName, spec, coverage) {
  return `# Coverage Matrix: ${featureName}

Compared spec: ${spec ? `\`${spec}\`` : "Not found"}

## Status Summary

| Status | Count |
| --- | ---: |
${Object.entries(coverage.statusCounts).map(([key, value]) => `| ${key} | ${value} |`).join("\n")}

## Logic Type Summary

| Logic Type | Count |
| --- | ---: |
${Object.entries(coverage.typeCounts).map(([key, value]) => `| ${key} | ${value} |`).join("\n")}

## Review Note

Default output is summary-only for token efficiency. Generate detail files only when auditing a suspected omission.
`;
}

function renderPreprocessedSummary(featureName, preprocessed = {}) {
  return `# Preprocessed Code Summary: ${featureName}

## Purpose

This file is generated before detailed feature analysis to reduce context pressure. It extracts only visible DOM selectors, data attributes, and event bindings that can anchor a screen-first feature spec.

## DOM Nodes

| Selector | Tag | Source | Text / Role Hint |
| --- | --- | --- | --- |
${(preprocessed.domNodes || []).slice(0, 80).map((node) => `| \`${escapePipe(node.selector)}\` | ${escapePipe(node.tag)} | \`${escapePipe(node.source)}\` | ${escapePipe(node.textHint || "")} |`).join("\n") || "| TBD | TBD | TBD | TBD |"}

## Event Listeners

| Event | Selector | Handler | Source | Summary |
| --- | --- | --- | --- | --- |
${(preprocessed.eventListeners || []).slice(0, 80).map((item) => `| ${escapePipe(item.event || "event")} | \`${escapePipe(item.selector || "unmapped")}\` | ${escapePipe(item.handler || "-")} | \`${escapePipe(item.source)}\` | ${escapePipe(item.summary)} |`).join("\n") || "| TBD | TBD | TBD | TBD | TBD |"}

## Selector Mappings

| Selector | Operations | Sources | Summary |
| --- | --- | --- | --- |
${(preprocessed.selectorMappings || []).slice(0, 80).map((item) => `| \`${escapePipe(item.selector)}\` | ${escapePipe(item.operations.join(", "))} | ${item.sources.map((source) => `\`${escapePipe(source)}\``).join(", ")} | ${escapePipe(item.summaries.join(" / "))} |`).join("\n") || "| TBD | TBD | TBD | TBD |"}
`;
}

function renderDomSelectorRows(preprocessed = {}) {
  const mappings = preprocessed.selectorMappings || [];
  if (!mappings.length) return "| TBD | TBD | TBD | Add mapping after pre-processing. |";
  return mappings.slice(0, 40).map((item) => {
    const operations = item.operations.join(", ");
    const sources = item.sources.map((source) => `\`${escapePipe(source)}\``).join(", ");
    const hint = inferSpecMappingHint(item.selector, operations, item.summaries.join(" "));
    return `| \`${escapePipe(item.selector)}\` | ${escapePipe(operations)} | ${sources} | ${escapePipe(hint)} |`;
  }).join("\n");
}

function inferSpecMappingHint(selector = "", operations = "", summary = "") {
  const text = `${selector} ${operations} ${summary}`.toLowerCase();
  if (text.includes("modal")) return "Map to Screen Header / modal screen area";
  if (text.includes("calendar") || text.includes("date")) return "Map to Date / calendar screen area";
  if (text.includes("filter")) return "Map to Filter screen area";
  if (text.includes("submit") || text.includes("button") || text.includes("click")) return "Map to Action UI item";
  if (text.includes("ticket") || text.includes("usage")) return "Map to Ticket / payment screen area";
  if (text.includes("fee") || text.includes("amount") || text.includes("billing")) return "Map to Fee / payment screen area";
  return "Map to the nearest visible Screen Area and UI Item";
}

function buildLogicInventoryData(featureName, root, keys, files, items, preprocessed = {}) {
  return {
    version: 1,
    feature: featureName,
    prototype: root,
    keywords: keys,
    summary: {
      candidateFileCount: files.length,
      inventoryItemCount: items.length,
      logicTypes: countBy(items, "logicType"),
      categories: countBy(items, "category")
    },
    topCandidateFiles: files.slice(0, 20).map((item) => ({
      file: shortPath(item.file),
      matches: item.count,
      logicTypes: item.logicTypes,
      categories: item.categories
    })),
    items,
    domSelectorMappings: (preprocessed.selectorMappings || []).slice(0, 120)
  };
}

function renderOpenQuestions(featureName, coverage) {
  return `# Open Questions: ${featureName}

## Product Policy

| Area | Question | Owner | Status |
| --- | --- | --- | --- |
| Coverage | Review ${coverage.statusCounts["Not Covered"] || 0} not-covered sampled items only if the final spec misses a behavior. | PM/Product | Open |

## UX Copy

| Area | Question | Owner | Status |
| --- | --- | --- | --- |
| Coverage | Review UI labels and empty/error copy when creating the final case spec. | Design/PM | Open |

## Operations

| Area | Question | Owner | Status |
| --- | --- | --- | --- |
| Coverage | Resolve Unknown items only when they affect policy or save behavior. | PM/Product | Open |
`;
}

function buildPmArtifacts(featureName, matches, candidates, items, project = "") {
  const topMatches = matches
    .filter((row) => row.text)
    .sort((a, b) => score(b) - score(a) || a.file.localeCompare(b.file) || a.line - b.line)
    .slice(0, 80);
  return {
    summary: {
      featureName,
      projectName: project,
      platforms: unique(topMatches.map((row) => row.platform)).filter(Boolean),
      platformTypes: unique(topMatches.map((row) => row.platformType)).filter(Boolean),
      targetUserGroups: unique(topMatches.map((row) => row.targetUserGroup)).filter(Boolean),
      screens: unique(topMatches.map((row) => row.screen)).filter(Boolean).slice(0, 12),
      candidateCount: candidates.length,
      sampledLogicCount: items.length
    },
    platformMap: buildPlatformMapRows(topMatches),
    screenCaseMap: buildScreenCaseRows(topMatches),
    policies: buildPolicyRows(topMatches),
    states: buildStateRows(topMatches),
    uiElements: buildUiRows(topMatches),
    decisions: buildDecisionRows(topMatches),
    events: buildEventRows(topMatches),
    domainRules: buildDomainRuleRows(topMatches)
  };
}

function buildPlatformMapRows(rows) {
  const grouped = new Map();
  rows.forEach((row) => {
    const key = `${row.platform}|${row.screen}`;
    if (!grouped.has(key)) {
      grouped.set(key, {
        platform: row.platform || "Unspecified",
        platformType: row.platformType || "Unspecified",
        targetUserGroup: row.targetUserGroup || "Unspecified",
        section: inferSection(row),
        screen: row.screen || "Unspecified",
      screenArea: inferSection(row),
      role: inferPlatformRole(row)
      });
    }
  });
  return [...grouped.values()].slice(0, 24);
}

function buildScreenCaseRows(rows) {
  return buildPlatformMapRows(rows).slice(0, 24).map((row, index) => ({
    id: `S-${String(index + 1).padStart(2, "0")}`,
    platform: row.platform,
    platformType: row.platformType,
    targetUserGroup: row.targetUserGroup,
    screen: row.screen,
    path: row.section,
    screenArea: row.screenArea,
    policy: `P-${String(index + 1).padStart(2, "0")}`,
    state: `ST-${String(index + 1).padStart(2, "0")}`
  }));
}

function buildPolicyRows(rows) {
  const filtered = rows.filter((row) => row.policyType || ["Validation", "Ticket Usage", "Persistence", "Repair/Migration"].includes(row.category));
  return filtered.slice(0, 32).map((row, index) => ({
    id: `P-${String(index + 1).padStart(2, "0")}`,
    name: policyName(row),
    option: row.policyType || row.category,
    defaultValue: row.state || "Project default",
    behavior: cleanSummary(row.text),
    appliesTo: `${row.platform} / ${row.screen}`,
    notes: `${row.policyType || "policy candidate"}; use only as Policy Notes in the final screen spec`
  }));
}

function buildStateRows(rows) {
  const filtered = rows.filter((row) => row.state || row.category === "State" || row.text.toLowerCase().includes("classlist"));
  return filtered.slice(0, 32).map((row, index) => ({
    id: `ST-${String(index + 1).padStart(2, "0")}`,
    entity: row.screen || "Feature",
    state: row.state || "state candidate",
    trigger: triggerFrom(row),
    display: displayFrom(row),
    constraint: constraintFrom(row),
    action: actionFrom(row),
    recoverability: row.category === "Repair/Migration" ? "Recoverable by repair/sync" : "Review by PM/QA"
  }));
}

function buildUiRows(rows) {
  return rows.filter((row) => row.uiElementType).slice(0, 40).map((row, index) => ({
    id: `UI-${String(index + 1).padStart(2, "0")}`,
    platform: row.platform,
    screen: row.screen,
    screenArea: inferSection(row),
    no: index + 1,
    type: row.uiElementType,
    name: uiName(row),
    defaultValue: row.state || "Default",
    behavior: cleanSummary(row.text),
    error: row.category === "Validation" ? cleanSummary(row.text) : "",
    dataImpact: dataImpactFrom(row)
  }));
}

function buildDecisionRows(rows) {
  const filtered = rows.filter((row) => row.decision);
  return filtered.slice(0, 24).map((row, index) => ({
    id: `D-${String(index + 1).padStart(2, "0")}`,
    decision: cleanSummary(row.decision),
    reason: row.category,
    tradeoff: inferTradeoff(row),
    screens: `${row.platform} / ${row.screen}`,
    status: row.text.toLowerCase().includes("todo") ? "Open" : "Candidate"
  }));
}

function buildEventRows(rows) {
  const filtered = rows.filter((row) => row.event);
  return filtered.slice(0, 24).map((row) => ({
    event: eventName(row),
    trigger: row.event,
    parameters: "feature, screen, state, target_id",
    userProperty: row.platform,
    screen: row.screen,
    notes: cleanSummary(row.text)
  }));
}

function buildDomainRuleRows(rows) {
  const filtered = rows.filter((row) => ["Ticket Usage", "Persistence", "Repair/Migration", "Validation", "Pricing"].includes(row.category));
  return filtered.slice(0, 32).map((row, index) => ({
    id: `DR-${String(index + 1).padStart(2, "0")}`,
    rule: cleanSummary(row.text),
    screens: `${row.platform} / ${row.screen}`,
    policyImpact: row.policyType || row.category,
    stateImpact: row.state || "Review derived state",
    edgeCases: edgeCaseFrom(row)
  }));
}

function renderFeatureSummary(featureName, artifact) {
  return `# Feature Summary: ${featureName}

| Field | Value |
| --- | --- |
| Project | ${artifact.summary.projectName || "TBD"} |
| Feature | ${featureName} |
| Candidate files | ${artifact.summary.candidateCount} |
| Sampled logic items | ${artifact.summary.sampledLogicCount} |
| Platforms | ${artifact.summary.platforms.join(", ") || "TBD"} |
| Platform Types | ${artifact.summary.platformTypes.join(", ") || "TBD"} |
| Target User Groups | ${artifact.summary.targetUserGroups.join(", ") || "TBD"} |
| Screens | ${artifact.summary.screens.join(", ") || "TBD"} |

## PM Collaboration Outputs

- Use \`platform-map.md\` to align affected platforms.
- Use \`screen-case-map.md\` to identify actual screens, screen areas, and UI items.
- Use \`state-matrix.md\`, \`ui-element-spec.md\`, and \`decision-log.md\` before writing the final spec.
- Use \`policy-table.md\` only as supporting input for \`Policy Notes\`.
- Keep raw code evidence in \`internal/\`.
`;
}

function renderPlatformMap(featureName, rows) {
  return `# Platform Map: ${featureName}

| Platform | Platform Type | Target User Group | Section | Screen | Screen Area | Role |
| --- | --- | --- | --- | --- | --- | --- |
${rows.length ? rows.map((row) => `| ${row.platform} | ${row.platformType} | ${row.targetUserGroup} | ${escapePipe(row.section)} | ${escapePipe(row.screen)} | ${escapePipe(row.screenArea)} | ${escapePipe(row.role)} |`).join("\n") : "| TBD | TBD | TBD | TBD | TBD | TBD | TBD |"}
`;
}

function renderScreenCaseMap(featureName, rows) {
  return `# Screen Case Map: ${featureName}

| Screen ID | Platform | Platform Type | Target User Group | Screen Name | Path | Screen Area | Related Policy Note | Related State |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
${rows.length ? rows.map((row) => `| ${row.id} | ${row.platform} | ${row.platformType} | ${row.targetUserGroup} | ${escapePipe(row.screen)} | \`${escapePipe(row.path)}\` | ${escapePipe(row.screenArea)} | ${row.policy} | ${row.state} |`).join("\n") : "| S-01 | TBD | TBD | TBD | TBD | TBD | TBD | P-01 | ST-01 |"}

## Split Rule

Split screens when platform, screen name, entry path, user role, visible layout, or primary state set changes. Keep policies attached to the screen area they affect.
`;
}

function renderPolicyTable(featureName, rows) {
  return `# Policy Table: ${featureName}

| Policy ID | Policy Name | Option / Condition | Default | Visible Behavior Impact | Applies To Screen / Area | Notes |
| --- | --- | --- | --- | --- | --- | --- |
${rows.length ? rows.map((row) => `| ${row.id} | ${escapePipe(row.name)} | ${escapePipe(row.option)} | ${escapePipe(row.defaultValue)} | ${escapePipe(row.behavior)} | ${escapePipe(row.appliesTo)} | ${escapePipe(row.notes)} |`).join("\n") : "| P-01 | TBD | TBD | TBD | TBD | TBD | TBD |"}

## Usage Rule

Use these rows only to write \`Policy Notes\` or to clarify visible UI item behavior. Do not turn this table into the final spec structure.
`;
}

function renderStateMatrix(featureName, rows) {
  return `# State Matrix: ${featureName}

| State ID | Entity | State | Trigger | Display | Constraint | Action | Recoverability |
| --- | --- | --- | --- | --- | --- | --- | --- |
${rows.length ? rows.map((row) => `| ${row.id} | ${escapePipe(row.entity)} | ${escapePipe(row.state)} | ${escapePipe(row.trigger)} | ${escapePipe(row.display)} | ${escapePipe(row.constraint)} | ${escapePipe(row.action)} | ${escapePipe(row.recoverability)} |`).join("\n") : "| ST-01 | TBD | default | Initial load | TBD | TBD | TBD | TBD |"}
`;
}

function renderUiElementSpec(featureName, rows) {
  return `# UI Element Spec: ${featureName}

| Element ID | Platform | Screen | Screen Area | UI Item | Type | Behavior | Exception | State | Data Impact |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
${rows.length ? rows.map((row) => `| ${row.id} | ${escapePipe(row.platform)} | ${escapePipe(row.screen)} | ${escapePipe(row.screenArea)} | ${escapePipe(row.name)} | ${row.type} | ${escapePipe(row.behavior)} | ${escapePipe(row.error)} | ${escapePipe(row.defaultValue)} | ${escapePipe(row.dataImpact)} |`).join("\n") : "| UI-01 | TBD | TBD | TBD | TBD | Section | TBD | TBD | Default | TBD |"}
`;
}

function renderDecisionLog(featureName, rows) {
  return `# Decision Log: ${featureName}

| Decision ID | Decision | Reason | Trade-off | Affected Screens | Status |
| --- | --- | --- | --- | --- | --- |
${rows.length ? rows.map((row) => `| ${row.id} | ${escapePipe(row.decision)} | ${escapePipe(row.reason)} | ${escapePipe(row.tradeoff)} | ${escapePipe(row.screens)} | ${row.status} |`).join("\n") : "| D-01 | TBD | TBD | TBD | TBD | Open |"}
`;
}

function renderEventTracking(featureName, rows) {
  return `# Event Tracking: ${featureName}

| Event | Trigger | Parameters | User Property | Screen | Notes |
| --- | --- | --- | --- | --- | --- |
${rows.length ? rows.map((row) => `| ${escapePipe(row.event)} | ${escapePipe(row.trigger)} | ${escapePipe(row.parameters)} | ${escapePipe(row.userProperty)} | ${escapePipe(row.screen)} | ${escapePipe(row.notes)} |`).join("\n") : "| TBD | TBD | TBD | TBD | TBD | Add events when PM/analytics tracking is required. |"}
`;
}

function renderDomainRuleMap(featureName, rows) {
  return `# Domain Rule Map: ${featureName}

| Rule ID | Domain Rule | Related Screens | Policy Impact | State Impact | Edge Cases |
| --- | --- | --- | --- | --- | --- |
${rows.length ? rows.map((row) => `| ${row.id} | ${escapePipe(row.rule)} | ${escapePipe(row.screens)} | ${escapePipe(row.policyImpact)} | ${escapePipe(row.stateImpact)} | ${escapePipe(row.edgeCases)} |`).join("\n") : "| DR-01 | TBD | TBD | TBD | TBD | TBD |"}
`;
}

function renderDetailInventory(featureName, items) {
  return `# Logic Inventory Detail: ${featureName}

| ID | Logic Type | Category | Source | Summary |
| --- | --- | --- | --- | --- |
${items.map((item) => `| ${item.id} | ${item.logicType} | ${item.category} | \`${item.source}\` | ${escapePipe(item.summary)} |`).join("\n")}
`;
}

function renderDetailCoverage(featureName, rows) {
  return `# Coverage Matrix Detail: ${featureName}

| Logic ID | Logic Type | Category | Source | Summary | Status |
| --- | --- | --- | --- | --- | --- |
${rows.map((row) => `| ${row.id} | ${row.logicType} | ${row.category} | \`${row.source}\` | ${escapePipe(row.summary)} | ${row.status} |`).join("\n")}
`;
}

function findLatestSpec(outputDir) {
  if (!existsSync(outputDir)) return "";
  const dirs = [outputDir, path.join(outputDir, "human")].filter(existsSync);
  return dirs.flatMap((dir) => readdirSync(dir)
    .filter((name) => /feature-spec.*\.md$/.test(name) || /기능명세.*\.md$/.test(name))
    .map((name) => path.join(dir, name)))
    .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs)[0] || "";
}

function shortPath(file) {
  return path.relative(process.cwd(), file);
}

function roleGuess(categories) {
  if (categories.includes("Pricing")) return "pricing";
  if (categories.includes("Ticket Usage")) return "ticket usage";
  if (categories.includes("Persistence")) return "save/update";
  if (categories.includes("Repair/Migration")) return "repair";
  if (categories.includes("UI")) return "screen/UI";
  return "related";
}

function escapePipe(value) {
  return String(value).replaceAll("|", "\\|").replace(/\r?\n/g, " ");
}

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    acc[row[key]] = (acc[row[key]] || 0) + 1;
    return acc;
  }, {});
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function titleCase(value) {
  return String(value || "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function cleanSummary(value) {
  return String(value || "").replace(/\s+/g, " ").slice(0, 160);
}

function inferSection(row) {
  return shortPath(row.file).replaceAll("\\", "/");
}

function inferCaseName(row) {
  if (row.category === "Ticket Usage") return "이용권 사용/차감";
  if (row.category === "Validation") return "검증 및 제한";
  if (row.category === "Persistence") return "저장/수정";
  if (row.category === "Repair/Migration") return "복구/동기화";
  if (row.category === "Pricing") return "금액/결제";
  if (row.uiElementType) return `${row.uiElementType} 동작`;
  return "기능 동작";
}

function inferPlatformRole(row) {
  if (row.platform === "User App") return "Policy consumption";
  if (["Persistence", "Validation", "Ticket Usage"].includes(row.category)) return "Policy validation";
  return "Policy authoring";
}

function policyName(row) {
  const type = row.policyType || row.category;
  return `${type} / ${row.screen}`;
}

function triggerFrom(row) {
  if (row.event) return row.event;
  if (row.text.toLowerCase().includes("if")) return "Condition matched";
  return "Initial or user action";
}

function displayFrom(row) {
  if (row.uiElementType) return `${row.uiElementType} updates on ${row.state || row.category}`;
  return row.category;
}

function constraintFrom(row) {
  return row.category === "Validation" ? cleanSummary(row.text) : "";
}

function actionFrom(row) {
  if (row.category === "Persistence") return "Save/update data";
  if (row.category === "Repair/Migration") return "Repair or sync data";
  if (row.event) return `Track ${row.event}`;
  return "Render or recalculate";
}

function uiName(row) {
  return (row.text.match(/data-[a-z0-9-]+/i)?.[0] || row.text.match(/class=\"([^\"]+)\"/)?.[1] || row.screen || "UI element").slice(0, 80);
}

function dataImpactFrom(row) {
  if (row.category === "Persistence") return "Save target may change";
  if (row.category === "Ticket Usage") return "Ticket usage/allocation may change";
  if (row.category === "Pricing") return "Amount/total may change";
  if (row.category === "State") return "UI state may change";
  return "";
}

function inferTradeoff(row) {
  if (row.text.toLowerCase().includes("fallback")) return "Fallback improves continuity but can hide policy mismatch.";
  if (row.text.toLowerCase().includes("server")) return "Client can guide the user, but server remains final authority.";
  if (row.text.toLowerCase().includes("todo")) return "Requires PM/engineering follow-up.";
  return "Review impact before finalizing.";
}

function eventName(row) {
  const screen = String(row.screen || "feature").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  return `${screen || "feature"}_${row.event}`;
}

function edgeCaseFrom(row) {
  if (row.category === "Validation") return "Invalid/disabled/unavailable state";
  if (row.category === "Repair/Migration") return "Legacy or mismatched data";
  if (row.category === "Ticket Usage") return "Insufficient or multiple ticket options";
  return "Review during PM spec writing";
}
