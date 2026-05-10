#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const outputPath = path.resolve(required(args.output, "--output"));
const specPath = path.resolve(required(args.spec, "--spec"));
const coveragePath = path.join(outputPath, "coverage-matrix.md");
const inventoryPath = path.join(outputPath, "logic-inventory.md");
const captureIndexPath = path.join(outputPath, "capture-index.md");
const openQuestionsPath = path.join(outputPath, "open-questions.md");

const results = [];
checkFile(specPath, "Feature spec");
checkFile(coveragePath, "Coverage matrix");
checkFile(inventoryPath, "Logic inventory");
checkFile(openQuestionsPath, "Open questions");
checkFile(captureIndexPath, "Capture index");

if (existsSync(specPath)) {
  const spec = readFileSync(specPath, "utf8");
  requireText(spec, "Output Metadata", "Feature spec has output metadata");
  requireAny(spec, ["Spec Body Rows", "기능 요구사항", "Business Logic"], "Feature spec has body rows or logic sections");
  requireText(spec, "Business Logic", "Feature spec separates business logic");
  requireText(spec, "UI Logic", "Feature spec separates UI logic");
  rejectText(spec, "Evidence:", "Feature spec has no row-level evidence blocks");
  rejectText(spec, "Implementation Evidence", "Feature spec has no implementation evidence section");
  rejectText(spec, "Logic Coverage", "Feature spec has no logic coverage section");
  rejectPattern(spec, /\bLI-\d{3}\b/, "Feature spec has no internal logic IDs");
  rejectMojibake(spec, "Feature spec Korean text sanity");
}

if (existsSync(coveragePath)) {
  const coverage = readFileSync(coveragePath, "utf8");
  const statuses = ["Covered", "Partial", "Not Covered", "Open Question"];
  requireAny(coverage, statuses, "Coverage matrix has recognized statuses");
  requireText(coverage, "Logic Type", "Coverage matrix has logic type column");
  requireAny(coverage, ["Business", "UI", "Integration"], "Coverage matrix has business/UI classification");
  rejectMojibake(coverage, "Coverage matrix Korean text sanity");
}

if (existsSync(inventoryPath)) {
  const inventory = readFileSync(inventoryPath, "utf8");
  requireAny(inventory, ["Logic Items", "Business Logic Items"], "Logic inventory has logic items");
  requireText(inventory, "Logic Type", "Logic inventory has logic type column");
  requireAny(inventory, ["Business Logic Items", "UI Logic Items"], "Logic inventory separates business and UI items");
  rejectMojibake(inventory, "Logic inventory Korean text sanity");
}

if (existsSync(openQuestionsPath)) {
  const openQuestions = readFileSync(openQuestionsPath, "utf8");
  requireText(openQuestions, "Product Policy Questions", "Open questions has product policy section");
  requireText(openQuestions, "UX Copy Questions", "Open questions has UX copy section");
  requireText(openQuestions, "Operational Questions", "Open questions has operations section");
  requireText(openQuestions, "Logic Type", "Open questions has logic type column");
  rejectMojibake(openQuestions, "Open questions Korean text sanity");
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

function rejectText(text, needle, check) {
  results.push({ check, result: text.includes(needle) ? "Fail" : "Pass", target: needle });
}

function rejectPattern(text, pattern, check) {
  results.push({ check, result: pattern.test(text) ? "Fail" : "Pass", target: String(pattern) });
}

function rejectMojibake(text, check) {
  const suspicious = ["占", "�", "?怨", "?遺", "臾몄", "紐", "湲곕", "꾨", "쎈뱶"];
  const found = suspicious.filter((token) => text.includes(token));
  results.push({ check, result: found.length === 0 ? "Pass" : "Fail", target: found.join(", ") || "none" });
}
