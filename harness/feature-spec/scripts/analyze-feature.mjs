#!/usr/bin/env node
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const feature = required(args.feature, "--feature");
const prototypePath = path.resolve(required(args.prototype, "--prototype"));
const outputPath = path.resolve(required(args.output, "--output"));
const keywords = (args.keywords ? args.keywords.split(",") : [feature])
  .map((value) => value.trim())
  .filter(Boolean);
const specPath = args.spec ? path.resolve(args.spec) : findLatestSpec(outputPath);

const sourceFiles = listFiles(prototypePath).filter(isScannableSource);
const matches = collectMatches(sourceFiles, keywords);
const candidateFiles = rankCandidateFiles(matches);
const inventoryItems = buildInventory(matches);
const coverageRows = buildCoverage(inventoryItems, specPath);

mkdirSync(outputPath, { recursive: true });
writeFileSync(path.join(outputPath, "candidate-files.md"), renderCandidateFiles(feature, keywords, candidateFiles), "utf8");
writeFileSync(path.join(outputPath, "logic-inventory.md"), renderLogicInventory(feature, prototypePath, keywords, candidateFiles, inventoryItems), "utf8");
writeFileSync(path.join(outputPath, "coverage-matrix.md"), renderCoverageMatrix(feature, specPath, coverageRows), "utf8");
writeFileSync(path.join(outputPath, "open-questions.md"), renderOpenQuestions(feature, coverageRows), "utf8");

console.log(JSON.stringify({
  feature,
  keywords,
  prototypePath,
  outputPath,
  specPath,
  candidateFileCount: candidateFiles.length,
  inventoryItemCount: inventoryItems.length,
  logicTypes: countBy(inventoryItems, "logicType"),
  coverage: countBy(coverageRows, "status")
}, null, 2));

function parseArgs(argv) {
  const result = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      result[key] = "true";
    } else {
      result[key] = next;
      i += 1;
    }
  }
  return result;
}

function required(value, name) {
  if (!value) throw new Error(`${name} is required`);
  return value;
}

function listFiles(dir) {
  const ignored = new Set([".git", "node_modules", "dist", "build", ".cache", "coverage"]);
  const entries = [];
  for (const name of readdirSync(dir)) {
    if (ignored.has(name)) continue;
    const full = path.join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) entries.push(...listFiles(full));
    if (stat.isFile()) entries.push(full);
  }
  return entries;
}

function isScannableSource(file) {
  return [".js", ".mjs", ".cjs", ".ts", ".tsx", ".jsx", ".html", ".css", ".json"].includes(path.extname(file).toLowerCase());
}

function collectMatches(files, keys) {
  const normalized = keys.map((key) => key.toLowerCase());
  const result = [];
  for (const file of files) {
    const text = readFileSync(file, "utf8");
    const lines = text.split(/\r?\n/);
    lines.forEach((line, index) => {
      const lower = line.toLowerCase();
      if (!normalized.some((key) => lower.includes(key))) return;
      result.push({
        file,
        line: index + 1,
        text: line.trim(),
        category: categorize(line, file)
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
  if (category === "UI" || category === "State") return "UI";
  if (text.includes("submit") || text.includes("save") || text.includes("update")) return "Integration";
  if (text.includes("calculate") || text.includes("fee") || text.includes("ticket")) return "Business";
  if (text.includes("addeventlistener") || text.includes("data-") || text.includes(".html")) return "UI";
  if (category === "Edge Case") return "Integration";
  return "Unknown";
}

function rankCandidateFiles(matches) {
  const grouped = new Map();
  for (const match of matches) {
    const item = grouped.get(match.file) || { file: match.file, count: 0, categories: new Set(), logicTypes: new Set(), lines: [] };
    item.count += 1;
    item.categories.add(match.category);
    item.logicTypes.add(toLogicType(match.category, match.text, match.file));
    item.lines.push(match);
    grouped.set(match.file, item);
  }
  return [...grouped.values()]
    .sort((a, b) => b.count - a.count)
    .map((item) => ({ ...item, categories: [...item.categories], logicTypes: [...item.logicTypes] }));
}

function buildInventory(matches) {
  return [...matches]
    .sort((a, b) => priorityScore(b) - priorityScore(a) || a.file.localeCompare(b.file) || a.line - b.line)
    .filter((match) => match.text && !match.text.startsWith("//"))
    .slice(0, 160)
    .map((match, index) => ({
      id: `LI-${String(index + 1).padStart(3, "0")}`,
      source: `${path.relative(process.cwd(), match.file)}:${match.line}`,
      logicType: toLogicType(match.category, match.text, match.file),
      category: match.category,
      summary: summarizeLine(match.text),
      evidence: match.text
    }));
}

function priorityScore(match) {
  const file = match.file.toLowerCase().replaceAll("\\", "/");
  const text = match.text.toLowerCase();
  let score = 0;
  if (file.includes("/src/pages/reservation.")) score += 40;
  if (file.includes("/src/pages/hotels.")) score += 35;
  if (file.includes("/src/services/")) score += 30;
  if (file.includes("pickdrop")) score += 20;
  if (text.includes("function ") || text.includes("=>") || text.includes("export ")) score += 12;
  if (text.includes("setpickdropmode")) score += 30;
  if (text.includes("syncpickdroptickets")) score += 30;
  if (text.includes("submitreservation")) score += 30;
  if (text.includes("buildpickdropusageplan")) score += 30;
  if (text.includes("getpickdropcounttype")) score += 25;
  if (text.includes("addeventlistener")) score += 18;
  if (text.includes("if ") || text.includes("if(") || text.includes("else") || text.includes("switch")) score += 8;
  if (match.category === "Persistence") score += 10;
  if (match.category === "Ticket Usage") score += 10;
  if (match.category === "Pricing") score += 8;
  if (match.category === "Validation") score += 8;
  return score;
}

function summarizeLine(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/^const\s+/, "")
    .replace(/^function\s+/, "")
    .slice(0, 140);
}

function buildCoverage(items, spec) {
  const specText = spec && existsSync(spec) ? readFileSync(spec, "utf8") : "";
  return items.map((item) => {
    const [file, line] = item.source.split(":");
    const basename = path.basename(file);
    const symbol = extractSymbol(item.evidence);
    let status = "Not Covered";
    let notes = "명세에서 직접 매칭되는 항목을 찾지 못함.";
    if (symbol && specText.includes(symbol)) {
      status = "Covered";
      notes = `명세에 symbol \`${symbol}\` 언급 있음.`;
    } else if (line && specText.includes(`${basename}:${line}`)) {
      status = "Covered";
      notes = `명세에 source line \`${basename}:${line}\` 언급 있음.`;
    } else if (specText.includes(basename)) {
      status = "Partial";
      notes = `명세에 파일 \`${basename}\` 언급은 있으나 항목 단위 확인 필요.`;
    }
    if (item.category === "Unknown") {
      status = status === "Covered" ? status : "Open Question";
      notes = "자동 분류가 어려운 항목. 정책/UX 확인 필요.";
    }
    return { ...item, status, specArea: "", specRow: "", notes };
  });
}

function extractSymbol(text) {
  const patterns = [
    /function\s+([A-Za-z0-9_$]+)/,
    /const\s+([A-Za-z0-9_$]+)\s*=/,
    /let\s+([A-Za-z0-9_$]+)\s*=/,
    /([A-Za-z0-9_$]+)\?\.\s*addEventListener/,
    /export\s+function\s+([A-Za-z0-9_$]+)/
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1];
  }
  return "";
}

function findLatestSpec(outputDir) {
  if (!existsSync(outputDir)) return "";
  const specs = readdirSync(outputDir)
    .filter((name) => /feature-spec.*\.md$/.test(name) || /기능명세.*\.md$/.test(name))
    .map((name) => path.join(outputDir, name))
    .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  return specs[0] || "";
}

function renderCandidateFiles(featureName, keys, files) {
  return `# Candidate Files: ${featureName}

## Search Keywords

${keys.map((key) => `- \`${key}\``).join("\n")}

## Files

| File | Matches | Logic Types | Categories |
| --- | ---: | --- | --- |
${files.map((item) => `| \`${item.file}\` | ${item.count} | ${item.logicTypes.join(", ")} | ${item.categories.join(", ")} |`).join("\n")}
`;
}

function renderLogicInventory(featureName, root, keys, files, items) {
  return `# Logic Inventory: ${featureName}

## Metadata

| Field | Value |
| --- | --- |
| Prototype path | \`${root}\` |
| Keywords | ${keys.map((key) => `\`${key}\``).join(", ")} |
| Candidate files | ${files.length} |
| Inventory items | ${items.length} |

## Candidate File Roles

| File | Logic Type Guess | Role Guess | Evidence Count |
| --- | --- | --- | ---: |
${files.map((item) => `| \`${item.file}\` | ${logicTypeGuess(item.logicTypes)} | ${roleGuess(item.categories)} | ${item.count} |`).join("\n")}

## Business Logic Items

| ID | Logic Type | Category | Source | Summary | Evidence |
| --- | --- | --- | --- | --- | --- |
${items.filter((item) => item.logicType === "Business").map(renderInventoryRow).join("\n")}

## UI Logic Items

| ID | Logic Type | Category | Source | Summary | Evidence |
| --- | --- | --- | --- | --- | --- |
${items.filter((item) => item.logicType === "UI").map(renderInventoryRow).join("\n")}

## Integration Mapping Items

| ID | Logic Type | Category | Source | Summary | Evidence |
| --- | --- | --- | --- | --- | --- |
${items.filter((item) => item.logicType === "Integration").map(renderInventoryRow).join("\n")}

## Unknown Items

| ID | Logic Type | Category | Source | Summary | Evidence |
| --- | --- | --- | --- | --- | --- |
${items.filter((item) => item.logicType === "Unknown").map(renderInventoryRow).join("\n")}
`;
}

function renderCoverageMatrix(featureName, spec, rows) {
  return `# Coverage Matrix: ${featureName}

## Metadata

| Field | Value |
| --- | --- |
| Compared spec | ${spec ? `\`${spec}\`` : "Not found"} |
| Coverage statuses | \`Covered\`, \`Partial\`, \`Not Covered\`, \`Open Question\` |

## Matrix

| Logic ID | Logic Type | Category | Source | Summary | Status | Spec Area | Spec Row | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
${rows.map((row) => `| ${row.id} | ${row.logicType} | ${row.category} | \`${row.source}\` | ${escapePipe(row.summary)} | ${row.status} | ${row.specArea} | ${row.specRow} | ${escapePipe(row.notes)} |`).join("\n")}
`;
}

function renderOpenQuestions(featureName, rows) {
  const questions = rows.filter((row) => row.status === "Open Question" || row.status === "Not Covered");
  const policyQuestions = questions.filter((row) => row.logicType === "Business" || row.logicType === "Integration");
  const uxQuestions = questions.filter((row) => row.logicType === "UI");
  const operationalQuestions = questions.filter((row) => row.logicType === "Unknown");
  return `# Open Questions: ${featureName}

## Product Policy Questions

| Logic ID | Logic Type | Source | Question | Owner | Status |
| --- | --- | --- | --- | --- | --- |
${policyQuestions.map(renderQuestionRow).join("\n")}

## UX Copy Questions

| Logic ID | Logic Type | Source | Question | Owner | Status |
| --- | --- | --- | --- | --- | --- |
${uxQuestions.map(renderQuestionRow).join("\n")}

## Operational Questions

| Logic ID | Logic Type | Source | Question | Owner | Status |
| --- | --- | --- | --- | --- | --- |
${operationalQuestions.map(renderQuestionRow).join("\n")}
`;
}

function renderQuestionRow(row) {
  return `| ${row.id} | ${row.logicType} | \`${row.source}\` | ${questionFor(row)} | ${ownerFor(row)} | Open |`;
}

function renderInventoryRow(item) {
  return `| ${item.id} | ${item.logicType} | ${item.category} | \`${item.source}\` | ${escapePipe(item.summary)} | \`${escapePipe(item.evidence)}\` |`;
}

function logicTypeGuess(types) {
  if (types.includes("Business")) return "Business";
  if (types.includes("Integration")) return "Integration";
  if (types.includes("UI")) return "UI";
  return "Unknown";
}

function roleGuess(categories) {
  if (categories.includes("Pricing")) return "Pricing/calculation policy";
  if (categories.includes("Ticket Usage")) return "Ticket usage/allocation policy";
  if (categories.includes("Persistence")) return "Save/update flow";
  if (categories.includes("Repair/Migration")) return "Repair or synchronization flow";
  if (categories.includes("UI")) return "UI entrypoint or screen markup";
  return "Related implementation detail";
}

function questionFor(row) {
  if (row.status === "Not Covered") return `이 로직을 기능명세에 반영해야 하는가: ${escapePipe(row.summary)}`;
  return `코드만으로 정책 또는 UX를 확정할 수 있는가: ${escapePipe(row.summary)}`;
}

function ownerFor(row) {
  if (row.logicType === "UI") return "Design/PM";
  if (row.logicType === "Business") return "PM/Product";
  return "PM/Product";
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
