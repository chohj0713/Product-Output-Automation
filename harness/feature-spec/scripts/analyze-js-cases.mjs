#!/usr/bin/env node
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const feature = required(args.feature, "--feature");
const prototypePath = path.resolve(required(args.prototype, "--prototype"));
const outputPath = path.resolve(required(args.output, "--output"));
const keywords = splitList(args.keywords || feature);
const maxCases = Number(args.maxCases || 160);

if (!existsSync(prototypePath)) throw new Error(`Prototype path not found: ${prototypePath}`);
mkdirSync(outputPath, { recursive: true });

const sourceFiles = listFiles(prototypePath).filter(isJavaScriptSource);
const relevantFiles = rankRelevantFiles(sourceFiles, keywords).slice(0, Number(args.maxFiles || 80));
const inventory = buildCaseInventory({
  feature,
  prototypePath,
  keywords,
  sourceFiles,
  relevantFiles,
  maxCases
});

writeJson(path.join(outputPath, "case-inventory.json"), inventory);
writeFileSync(path.join(outputPath, "01-case-inventory.md"), renderCaseInventory(inventory), "utf8");
writeFileSync(path.join(outputPath, "02-policy-gaps.md"), renderPolicyGaps(inventory), "utf8");

console.log(JSON.stringify({
  feature,
  outputPath,
  sourceFileCount: sourceFiles.length,
  relevantFileCount: relevantFiles.length,
  caseGroupCount: inventory.caseGroups.length,
  caseCount: inventory.summary.caseCount,
  policyGapCount: inventory.policyGaps.length
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

function splitList(value) {
  return String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
}

function writeJson(file, value) {
  writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
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

function isJavaScriptSource(file) {
  return [".js", ".mjs", ".cjs", ".ts", ".tsx", ".jsx"].includes(path.extname(file).toLowerCase());
}

function rankRelevantFiles(files, keys) {
  const normalized = keys.map((key) => key.toLowerCase()).filter(Boolean);
  const specific = getSpecificKeywords(keys);
  return files.map((file) => {
    const text = readFileSync(file, "utf8");
    const lower = text.toLowerCase();
    const keywordHits = normalized.reduce((sum, key) => sum + countOccurrences(lower, key), 0);
    const specificHits = specific.reduce((sum, key) => sum + countOccurrences(lower, key), 0);
    const logicHits = countPattern(text, /addEventListener|querySelector|classList|disabled|hidden|submit|save|update|delete|validate|if\s*\(|switch\s*\(/g);
    const score = specificHits * 24 + keywordHits * 4 + logicHits;
    return { file, score, keywordHits, specificHits, logicHits };
  })
    .filter((row) => row.specificHits > 0 || (!specific.length && row.score > 0))
    .sort((a, b) => b.score - a.score || a.file.localeCompare(b.file));
}

function buildCaseInventory({ feature, prototypePath, keywords, sourceFiles, relevantFiles, maxCases }) {
  const rawCases = relevantFiles.flatMap((row) => extractCasesFromFile(row.file, keywords));
  const grouped = groupCases(rawCases.slice(0, maxCases));
  const policyGaps = grouped.flatMap((group) => group.cases.flatMap((item) => inferPolicyGaps(item)));
  policyGaps.forEach((gap, index) => {
    gap.id = `GAP-${String(index + 1).padStart(3, "0")}`;
  });
  const gapByCase = new Map();
  policyGaps.forEach((gap) => {
    const current = gapByCase.get(gap.caseId) || [];
    current.push(gap.id);
    gapByCase.set(gap.caseId, current);
  });
  grouped.forEach((group) => {
    group.cases.forEach((item) => {
      item.policyGapRefs = gapByCase.get(item.id) || [];
    });
  });
  const caseCount = grouped.reduce((sum, group) => sum + group.cases.length, 0);
  return {
    version: 1,
    feature,
    prototype: prototypePath,
    generatedAt: new Date().toISOString(),
    analysisMode: "js-case-first",
    keywords,
    summary: {
      sourceFileCount: sourceFiles.length,
      relevantFileCount: relevantFiles.length,
      caseGroupCount: grouped.length,
      caseCount,
      policyGapCount: policyGaps.length
    },
    caseGroups: grouped,
    policyGaps
  };
}

function extractCasesFromFile(file, keywords) {
  const text = readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);
  const cases = [];
  lines.forEach((line, index) => {
    if (!isPotentialCaseSeed(line)) return;
    const block = collectBlock(lines, index);
    if (!matchesFeatureFocus(`${line}\n${block}`, file, keywords)) return;
    const trigger = inferTrigger(line, block);
    const selectors = unique([...extractSelectors(line), ...extractSelectors(block)]);
    const conditions = extractConditions(block);
    const stateChanges = extractStateChanges(block);
    const expectedBehavior = inferExpectedBehavior(block, line);
    const dataImpact = inferDataImpact(block);
    cases.push({
      file,
      line: index + 1,
      sourceRef: sourceRef(file, index + 1),
      title: inferCaseTitle(trigger, conditions, expectedBehavior, selectors),
      trigger,
      conditions,
      expectedBehavior,
      stateChanges,
      dataImpact,
      uiSelectors: selectors.slice(0, 12)
    });
  });
  return cases;
}

function isPotentialCaseSeed(line) {
  const hasTrigger = /addEventListener\s*\(|onclick|onchange|submit|keydown|change|click/.test(line);
  const hasLogic = /if\s*\(|switch\s*\(|classList\.toggle|classList\.add|disabled\s*=|hidden\s*=/.test(line);
  return hasTrigger || hasLogic;
}

function matchesFeatureFocus(text, file, keywords) {
  const specific = getSpecificKeywords(keywords);
  if (!specific.length) return true;
  const lower = `${text}\n${file}`.toLowerCase();
  return specific.some((key) => lower.includes(key));
}

function getSpecificKeywords(keys) {
  const generic = new Set([
    "reservation",
    "reservations",
    "booking",
    "modal",
    "form",
    "예약",
    "등록",
    "모달",
    "기능"
  ]);
  return keys
    .map((key) => key.toLowerCase().trim())
    .filter((key) => key && !generic.has(key));
}

function collectBlock(lines, startIndex) {
  const collected = [];
  let depth = 0;
  let started = false;
  for (let i = startIndex; i < Math.min(lines.length, startIndex + 90); i += 1) {
    const line = lines[i];
    collected.push(line);
    for (const char of line) {
      if (char === "{") {
        depth += 1;
        started = true;
      } else if (char === "}") {
        depth -= 1;
      }
    }
    if (started && depth <= 0 && i > startIndex) break;
  }
  return collected.join("\n");
}

function inferTrigger(line, block) {
  const event = line.match(/addEventListener\s*\(\s*["'`]([^"'`]+)["'`]/)?.[1]
    || block.match(/addEventListener\s*\(\s*["'`]([^"'`]+)["'`]/)?.[1]
    || line.match(/on(click|change|submit|input|keydown)/i)?.[1]
    || "";
  const selector = extractSelectors(line)[0] || extractSelectors(block)[0] || "";
  if (event && selector) return `${event} on ${selector}`;
  if (event) return event;
  if (/submit/i.test(block)) return "submit";
  if (/classList\.toggle|disabled\s*=|hidden\s*=/.test(block)) return "state sync";
  return "logic branch";
}

function extractSelectors(text) {
  const selectors = [];
  for (const match of text.matchAll(/querySelector(?:All)?\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) selectors.push(match[1]);
  for (const match of text.matchAll(/closest\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) selectors.push(match[1]);
  for (const match of text.matchAll(/matches\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) selectors.push(match[1]);
  for (const match of text.matchAll(/getElementById\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) selectors.push(`#${match[1]}`);
  for (const match of text.matchAll(/\[(data-[a-z0-9-]+(?:=["'][^"']+["'])?)\]/gi)) selectors.push(`[${match[1]}]`);
  return unique(selectors).filter((item) => item.length < 120);
}

function extractConditions(block) {
  const conditions = [];
  for (const match of block.matchAll(/\bif\s*\(([^]+?)\)\s*\{/g)) {
    conditions.push(cleanExpr(match[1]));
  }
  for (const match of block.matchAll(/\bconst\s+([A-Za-z0-9_$]+)\s*=\s*([^;\n]+)/g)) {
    if (/Boolean|\.size|\.length|contains|checked|disabled|hidden|===|!==|>|</.test(match[2])) {
      conditions.push(`${match[1]} = ${cleanExpr(match[2])}`);
    }
  }
  return unique(conditions).slice(0, 10);
}

function extractStateChanges(block) {
  const changes = [];
  for (const match of block.matchAll(/([A-Za-z0-9_.$?\[\]"'-]+)\.classList\.(toggle|add|remove)\(([^;\n]+)\)/g)) {
    changes.push(`${cleanExpr(match[1])}.classList.${match[2]}(${cleanExpr(match[3])})`);
  }
  for (const match of block.matchAll(/([A-Za-z0-9_.$?\[\]"'-]+)\.(disabled|hidden|checked|textContent|value)\s*=\s*([^;\n]+)/g)) {
    changes.push(`${cleanExpr(match[1])}.${match[2]} = ${cleanExpr(match[3])}`);
  }
  return unique(changes).slice(0, 12);
}

function inferExpectedBehavior(block, line) {
  const behaviors = [];
  if (/setPickdropMode\s*\(\s*true/.test(block)) behaviors.push("Enter pickdrop mode.");
  if (/setPickdropMode\s*\(\s*false/.test(block)) behaviors.push("Return to service reservation mode.");
  if (/submitReservation/.test(block)) behaviors.push("Submit reservation data.");
  if (/renderMiniCalendar/.test(block)) behaviors.push("Refresh selectable date UI.");
  if (/refreshTicketOptions/.test(block)) behaviors.push("Refresh available ticket options.");
  if (/syncPricingFee/.test(block)) behaviors.push("Recalculate pricing and fee summary.");
  if (/showToast/.test(block)) behaviors.push("Show user feedback toast.");
  if (/disabled\s*=/.test(block)) behaviors.push("Update enabled or disabled state.");
  if (/hidden\s*=/.test(block)) behaviors.push("Show or hide dependent UI.");
  if (/classList\.(toggle|add|remove)/.test(block)) behaviors.push("Update visual state classes.");
  if (!behaviors.length) behaviors.push(cleanExpr(line).slice(0, 160));
  return unique(behaviors).slice(0, 8);
}

function inferDataImpact(block) {
  const impacts = [];
  if (/submit|save|create|addReservation|notifyReservationUpdated/i.test(block)) impacts.push("write reservation data");
  if (/delete|remove/i.test(block)) impacts.push("delete or remove data");
  if (/localStorage|storage\./.test(block)) impacts.push("read/write local storage state");
  if (/ticketSelections|pickdropDates|selectedDates|pickdrops|services/.test(block)) impacts.push("mutate form state");
  if (/pricing|fee|total/i.test(block)) impacts.push("recalculate billing data");
  return unique(impacts).slice(0, 8);
}

function inferCaseTitle(trigger, conditions, expectedBehavior, selectors) {
  const selectorHint = selectors.find((item) => item.includes("pickdrop")) || selectors[0] || "";
  const conditionHint = conditions[0] ? ` when ${conditions[0]}` : "";
  const behaviorHint = expectedBehavior[0] || "handle logic";
  return `${trigger}${selectorHint && !trigger.includes(selectorHint) ? ` / ${selectorHint}` : ""}${conditionHint} -> ${behaviorHint}`;
}

function groupCases(rawCases) {
  const byGroup = new Map();
  rawCases.forEach((item) => {
    const groupTitle = inferGroupTitle(item);
    const group = byGroup.get(groupTitle) || {
      id: `CG-${String(byGroup.size + 1).padStart(2, "0")}`,
      title: groupTitle,
      sourceFiles: [],
      cases: []
    };
    const id = `${group.id}-C${String(group.cases.length + 1).padStart(2, "0")}`;
    group.sourceFiles = unique([...group.sourceFiles, shortPath(item.file)]);
    group.cases.push({
      id,
      title: item.title,
      trigger: item.trigger,
      conditions: item.conditions,
      expectedBehavior: item.expectedBehavior,
      stateChanges: item.stateChanges,
      dataImpact: item.dataImpact,
      uiSelectors: item.uiSelectors,
      sourceRefs: [item.sourceRef],
      policyGapRefs: []
    });
    byGroup.set(groupTitle, group);
  });
  return [...byGroup.values()];
}

function inferGroupTitle(item) {
  const text = `${item.trigger} ${item.title} ${item.uiSelectors.join(" ")}`.toLowerCase();
  if (text.includes("pickdrop") && text.includes("mode")) return "Pickdrop mode transition";
  if (text.includes("pickdrop") && /ticket|usage|reservable/.test(text)) return "Pickdrop ticket and usage";
  if (text.includes("pickdrop") && /date|calendar/.test(text)) return "Pickdrop date selection";
  if (text.includes("pickdrop")) return "Pickdrop option behavior";
  if (/submit|save|register/.test(text)) return "Submit and persistence";
  if (/disabled|hidden|active|complete/.test(text)) return "UI state behavior";
  return `Logic in ${path.basename(item.file)}`;
}

function inferPolicyGaps(item) {
  const gaps = [];
  const lower = `${item.title} ${item.conditions.join(" ")} ${item.expectedBehavior.join(" ")} ${item.stateChanges.join(" ")}`.toLowerCase();
  if (/disabled|enabled/.test(lower)) {
    gaps.push(gap(item.id, "state", "What exact user-facing disabled reason or tooltip should be shown?", "Code toggles disabled state but product copy is not explicit.", "Keep button disabled without tooltip unless UX specifies copy."));
  }
  if (/hidden|show or hide/.test(lower)) {
    gaps.push(gap(item.id, "state", "Should hidden dependent UI preserve previous selections or reset them?", "Visibility changes can leave stale selections unless policy is explicit.", "Reset hidden dependent selections when leaving the mode."));
  }
  if (/submit|write reservation/.test(lower)) {
    gaps.push(gap(item.id, "exception", "What should happen on submit failure or partial pickdrop reservation failure?", "Submit branch is detected but failure handling policy is not guaranteed.", "Keep modal open and show an error toast."));
  }
  if (/limit|reservable|remaining|over/.test(lower)) {
    gaps.push(gap(item.id, "policy", "How should the UI behave when selected dates exceed remaining reservable count?", "Code references limits or remaining counts.", "Trim auto-selected dates to the remaining reservable count and show count state."));
  }
  if (/textcontent|toast|label/.test(lower)) {
    gaps.push(gap(item.id, "copy", "Confirm final Korean copy for this state.", "Code changes visible text but copy may be prototype-only.", "Use current prototype copy as default."));
  }
  return gaps;
}

function gap(caseId, type, question, reason, suggestedDefault) {
  return { id: "", caseId, type, question, reason, suggestedDefault };
}

function renderCaseInventory(data) {
  return `# JS Case Inventory: ${data.feature}

This is the first-stage output. It lists JS-derived UI and business cases before final feature spec generation.

| Metric | Count |
| --- | ---: |
| JS source files scanned | ${data.summary.sourceFileCount} |
| Relevant JS files | ${data.summary.relevantFileCount} |
| Case groups | ${data.summary.caseGroupCount} |
| Cases | ${data.summary.caseCount} |
| Policy gaps | ${data.summary.policyGapCount} |

${data.caseGroups.map(renderGroup).join("\n\n")}
`;
}

function renderGroup(group) {
  return `## ${group.id}. ${group.title}

Source files: ${group.sourceFiles.map((file) => `\`${escapePipe(file)}\``).join(", ") || "-"}

| Case ID | Case | Trigger | Conditions | Expected Behavior | State Changes | Data Impact | UI Selectors | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
${group.cases.map((item) => `| ${item.id} | ${escapePipe(item.title)} | ${escapePipe(item.trigger)} | ${listCell(item.conditions)} | ${listCell(item.expectedBehavior)} | ${listCell(item.stateChanges)} | ${listCell(item.dataImpact)} | ${listCell(item.uiSelectors)} | ${listCell(item.sourceRefs)} |`).join("\n")}
`;
}

function renderPolicyGaps(data) {
  return `# Policy Gaps: ${data.feature}

Review this file before generating the final feature spec. Fill or confirm the gaps, then run the final output generation step.

| Gap ID | Case ID | Type | Question | Why It Matters | Suggested Default |
| --- | --- | --- | --- | --- | --- |
${data.policyGaps.map((gapItem) => `| ${gapItem.id} | ${gapItem.caseId} | ${gapItem.type} | ${escapePipe(gapItem.question)} | ${escapePipe(gapItem.reason)} | ${escapePipe(gapItem.suggestedDefault)} |`).join("\n") || "| - | - | - | No policy gaps detected. | - | - |"}
`;
}

function countOccurrences(text, needle) {
  if (!needle) return 0;
  return text.split(needle).length - 1;
}

function countPattern(text, pattern) {
  return [...text.matchAll(pattern)].length;
}

function sourceRef(file, line) {
  return `${shortPath(file)}:${line}`;
}

function shortPath(file) {
  return path.relative(process.cwd(), file).replaceAll("\\", "/");
}

function cleanExpr(value) {
  return String(value || "").replace(/\s+/g, " ").trim().replaceAll("|", "\\|");
}

function listCell(values) {
  const list = unique(values || []).filter(Boolean);
  return list.length ? list.map((item) => `<code>${escapePipe(item)}</code>`).join("<br>") : "-";
}

function escapePipe(value) {
  return String(value || "").replaceAll("|", "\\|").replace(/\r?\n/g, " ");
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}
