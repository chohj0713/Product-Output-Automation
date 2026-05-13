#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const outputPath = path.resolve(required(args.output, "--output"));
const specPath = path.resolve(required(args.spec, "--spec"));
const internalPath = path.join(outputPath, "internal");
const humanPath = path.join(outputPath, "human");
const hasLayeredOutput = existsSync(internalPath) || existsSync(humanPath);
const files = {
  spec: specPath,
  casePlan: path.join(outputPath, "case-plan.md"),
  inventory: path.join(outputPath, "logic-inventory.md"),
  coverage: path.join(outputPath, "coverage-matrix.md"),
  openQuestions: path.join(outputPath, "open-questions.md")
};
const internalFiles = {
  candidateFiles: path.join(internalPath, "candidate-files.md"),
  inventory: path.join(internalPath, "logic-inventory.md"),
  coverage: path.join(internalPath, "coverage-matrix.md"),
  domainRuleMap: path.join(internalPath, "domain-rule-map.md"),
  openQuestions: path.join(internalPath, "open-questions.md")
};
const humanFiles = {
  platformMap: path.join(humanPath, "platform-map.md"),
  screenCaseMap: path.join(humanPath, "screen-case-map.md"),
  policyTable: path.join(humanPath, "policy-table.md"),
  stateMatrix: path.join(humanPath, "state-matrix.md"),
  uiElementSpec: path.join(humanPath, "ui-element-spec.md"),
  decisionLog: path.join(humanPath, "decision-log.md"),
  eventTracking: path.join(humanPath, "event-tracking.md"),
  figmaCardData: path.join(humanPath, "figma-card-data.json"),
  figmaCreateScript: path.join(humanPath, "figma-create-canonical-cards.js")
};

const results = [];
for (const [label, file] of Object.entries(files)) checkFile(file, label);
if (hasLayeredOutput) {
  for (const [label, file] of Object.entries(internalFiles)) checkFile(file, `internal/${label}`);
  for (const [label, file] of Object.entries(humanFiles)) checkFile(file, `human/${label}`);
}

if (existsSync(files.spec)) {
  const spec = readFileSync(files.spec, "utf8");
  requireText(spec, "Output Metadata", "Spec has metadata");
  requireText(spec, "Screen Header", "Spec has screen header");
  requireText(spec, "Context", "Spec has context");
  requireText(spec, "Screen Areas", "Spec has screen areas");
  requireText(spec, "UI Item Spec", "Spec has UI item spec");
  requireText(spec, "Screen-level States", "Spec has screen-level states");
  requireText(spec, "Policy Notes", "Spec has policy notes");
  requireText(spec, "Screen Area", "Spec includes screen area column");
  requireText(spec, "UI Item", "Spec includes UI item column");
  requireText(spec, "Behavior", "Spec includes behavior column");
  requireText(spec, "Exception", "Spec includes exception column");
  requireText(spec, "State", "Spec includes state column");
  requireText(spec, "Data Impact", "Spec includes data impact column");
  rejectText(spec, "\n## Case Planning", "Spec keeps case planning out");
  rejectText(spec, "\n## Open Questions", "Spec keeps open questions out");
  rejectText(spec, "\n## Core Policies", "Spec is not organized by core policies");
  rejectText(spec, "\n## UI Callouts", "Spec does not use generic callout board as main structure");
  rejectText(spec, "Evidence:", "Spec has no evidence blocks");
  rejectText(spec, "Implementation Evidence", "Spec has no implementation evidence");
  rejectText(spec, "Logic Coverage", "Spec has no logic coverage section");
  rejectPattern(spec, /\bLI-\d{3}\b/, "Spec has no internal logic IDs");
  rejectPattern(spec, /(?:^|[\s`])(?:src|app|components|services|pages|storage|utils|harness|templates)[\\/][^\s`|)]+/m, "Spec has no source file paths");
  rejectPattern(spec, /\b(?:function|const|let|var|export function)\s+[A-Za-z0-9_$]+\b/, "Spec has no raw function declarations");
  rejectMojibake(spec, "Spec Korean sanity");
}

if (existsSync(files.casePlan)) {
  const text = readFileSync(files.casePlan, "utf8");
  requireText(text, "Screen Selection Rules", "Screen plan has rules");
  requireText(text, "Final Screen List", "Screen plan has final screens");
  rejectMojibake(text, "Screen plan Korean sanity");
}

if (existsSync(files.inventory)) {
  const text = readFileSync(files.inventory, "utf8");
  requireText(text, "Logic Types", "Inventory has logic type summary");
  rejectMojibake(text, "Inventory Korean sanity");
}

if (existsSync(files.coverage)) {
  const text = readFileSync(files.coverage, "utf8");
  requireText(text, "Status Summary", "Coverage has status summary");
  requireAny(text, ["Covered", "Partial", "Not Covered", "Open Question"], "Coverage has recognized statuses");
  rejectMojibake(text, "Coverage Korean sanity");
}

if (existsSync(files.openQuestions)) {
  const text = readFileSync(files.openQuestions, "utf8");
  requireText(text, "Product Policy", "Open questions has product policy");
  requireText(text, "UX Copy", "Open questions has UX copy");
  requireText(text, "Operations", "Open questions has operations");
  rejectMojibake(text, "Open questions Korean sanity");
}

if (hasLayeredOutput) {
  validateInternalOutputs(internalFiles);
  validateHumanOutputs(humanFiles);
  validateFigmaOutputs(humanFiles);
}

console.log(JSON.stringify({
  outputPath,
  specPath,
  passed: results.every((item) => item.result === "Pass"),
  results
}, null, 2));

function parseArgs(argv) {
  const result = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith("--")) continue;
    result[argv[i].slice(2)] = argv[i + 1];
    i += 1;
  }
  return result;
}

function required(value, name) {
  if (!value) throw new Error(`${name} is required`);
  return value;
}

function checkFile(file, label) {
  results.push({ check: `${label} exists`, result: existsSync(file) ? "Pass" : "Fail", target: file });
}

function requireText(text, needle, check) {
  results.push({ check, result: text.includes(needle) ? "Pass" : "Fail", target: needle });
}

function requireAny(text, needles, check) {
  results.push({ check, result: needles.some((needle) => text.includes(needle)) ? "Pass" : "Fail", target: needles.join(", ") });
}

function requirePattern(text, pattern, check) {
  results.push({ check, result: pattern.test(text) ? "Pass" : "Fail", target: String(pattern) });
}

function rejectText(text, needle, check) {
  results.push({ check, result: text.includes(needle) ? "Fail" : "Pass", target: needle });
}

function rejectPattern(text, pattern, check) {
  results.push({ check, result: pattern.test(text) ? "Fail" : "Pass", target: String(pattern) });
}

function rejectMojibake(text, check) {
  const suspicious = ["\u5360", "\uFFFD", "\u81FE", "\uF9CF", "\u6E72", "\uAFB8", "\uC3C8", "\u6FE1", "\u8084"];
  const found = suspicious.filter((token) => text.includes(token));
  results.push({ check, result: found.length === 0 ? "Pass" : "Fail", target: found.join(", ") || "none" });
}

function validateInternalOutputs(map) {
  if (existsSync(map.candidateFiles)) {
    const text = readFileSync(map.candidateFiles, "utf8");
    requireText(text, "Candidate Files", "Internal candidate files has title");
    rejectMojibake(text, "Internal candidate files Korean sanity");
  }
  if (existsSync(map.inventory)) {
    const text = readFileSync(map.inventory, "utf8");
    requireText(text, "Logic Types", "Internal inventory has logic type summary");
    rejectMojibake(text, "Internal inventory Korean sanity");
  }
  if (existsSync(map.coverage)) {
    const text = readFileSync(map.coverage, "utf8");
    requireText(text, "Status Summary", "Internal coverage has status summary");
    requireAny(text, ["Covered", "Partial", "Not Covered", "Open Question"], "Internal coverage has recognized statuses");
    rejectMojibake(text, "Internal coverage Korean sanity");
  }
  if (existsSync(map.domainRuleMap)) {
    const text = readFileSync(map.domainRuleMap, "utf8");
    requireText(text, "Domain Rule Map", "Internal domain rule map has title");
    requireText(text, "Policy Impact", "Internal domain rule map has policy impact");
    rejectMojibake(text, "Internal domain rule map Korean sanity");
  }
  if (existsSync(map.openQuestions)) {
    const text = readFileSync(map.openQuestions, "utf8");
    requireText(text, "Product Policy", "Internal open questions has product policy");
    rejectMojibake(text, "Internal open questions Korean sanity");
  }
}

function validateHumanOutputs(map) {
  const checks = [
    [map.platformMap, "Platform Map", "Platform"],
    [map.screenCaseMap, "Screen Case Map", "Screen ID"],
    [map.policyTable, "Policy Table", "Policy ID"],
    [map.stateMatrix, "State Matrix", "State ID"],
    [map.uiElementSpec, "UI Element Spec", "Element ID"],
    [map.decisionLog, "Decision Log", "Decision ID"],
    [map.eventTracking, "Event Tracking", "Event"]
  ];
  for (const [file, title, requiredColumn] of checks) {
    if (!existsSync(file)) continue;
    const text = readFileSync(file, "utf8");
    requireText(text, title, `Human ${title} has title`);
    requireText(text, requiredColumn, `Human ${title} has expected columns`);
    rejectMojibake(text, `Human ${title} Korean sanity`);
  }
}

function validateFigmaOutputs(map) {
  if (existsSync(map.figmaCardData)) {
    const text = readFileSync(map.figmaCardData, "utf8");
    requireText(text, "\"nodeId\": \"77:501\"", "Figma card data references canonical node");
    requireText(text, "\"cards\"", "Figma card data has cards");
    requireText(text, "\"blocks\"", "Figma card data has description blocks");
    requirePattern(text, /"width":\s*840/, "Figma card data keeps canonical width");
    requirePattern(text, /"titleHeight":\s*120/, "Figma card data keeps canonical title height");
  }
  if (existsSync(map.figmaCreateScript)) {
    const text = readFileSync(map.figmaCreateScript, "utf8");
    requireText(text, "Container", "Figma create script creates Container");
    requireText(text, "Title", "Figma create script creates Title");
    requireText(text, "설명", "Figma create script creates description blocks");
    requireText(text, "hexToRgb(cardData.template.accent)", "Figma create script uses canonical accent");
  }
}
