#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const outputPath = path.resolve(required(args.output, "--output"));
const specPath = path.resolve(required(args.spec, "--spec"));
const coveragePath = path.join(outputPath, "coverage-matrix.md");
const inventoryPath = path.join(outputPath, "logic-inventory.md");
const captureIndexPath = path.join(outputPath, "capture-index.md");

const results = [];
checkFile(specPath, "Feature spec");
checkFile(coveragePath, "Coverage matrix");
checkFile(inventoryPath, "Logic inventory");
checkFile(captureIndexPath, "Capture index");

if (existsSync(specPath)) {
  const spec = readFileSync(specPath, "utf8");
  requireText(spec, "Figma URL", "Feature spec metadata has Figma URL");
  requireText(spec, "Capture", "Feature spec references captures");
  requireText(spec, "Implementation Evidence", "Feature spec has implementation evidence");
  rejectMojibake(spec, "Feature spec Korean text sanity");
}

if (existsSync(coveragePath)) {
  const coverage = readFileSync(coveragePath, "utf8");
  const statuses = ["Covered", "Partial", "Not Covered", "Open Question"];
  requireAny(coverage, statuses, "Coverage matrix has recognized statuses");
  rejectMojibake(coverage, "Coverage matrix Korean text sanity");
}

if (existsSync(inventoryPath)) {
  const inventory = readFileSync(inventoryPath, "utf8");
  requireText(inventory, "Logic Items", "Logic inventory has logic items");
  rejectMojibake(inventory, "Logic inventory Korean text sanity");
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
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    result[token.slice(2)] = argv[i + 1];
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

function rejectMojibake(text, check) {
  const suspicious = ["�", "?쎈", "?곹", "?붾", "?댁", "臾몄꽌"];
  const found = suspicious.filter((token) => text.includes(token));
  results.push({ check, result: found.length === 0 ? "Pass" : "Fail", target: found.join(", ") || "none" });
}
