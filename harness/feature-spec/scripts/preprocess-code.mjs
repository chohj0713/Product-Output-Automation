#!/usr/bin/env node
import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const prototypePath = path.resolve(required(args.prototype, "--prototype"));
const outputPath = path.resolve(required(args.output, "--output"));
const keywords = splitList(args.keywords || args.feature || "");
const internalPath = path.join(outputPath, "internal");

mkdirSync(internalPath, { recursive: true });

const files = listFiles(prototypePath).filter((file) =>
  [".html", ".js", ".mjs", ".ts", ".tsx", ".jsx"].includes(path.extname(file).toLowerCase())
);
const summary = buildSummary(files, keywords);
const jsonPath = path.join(internalPath, "preprocessed-code-summary.json");
const mdPath = path.join(internalPath, "preprocessed-code-summary.md");

writeFileSync(jsonPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
writeFileSync(mdPath, renderMarkdown(summary), "utf8");

console.log(JSON.stringify({
  outputPath,
  jsonPath,
  mdPath,
  domNodes: summary.domNodes.length,
  eventListeners: summary.eventListeners.length,
  selectorMappings: summary.selectorMappings.length
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

function buildSummary(files, keywords) {
  const keys = keywords.map((key) => key.toLowerCase());
  const domNodes = [];
  const eventListeners = [];
  const selectorRefs = [];
  files.forEach((file) => {
    const lines = readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, index) => {
      const lower = line.toLowerCase();
      const relevant = keys.length === 0 || keys.some((key) => lower.includes(key)) || /data-[a-z0-9-]+|querySelector|addEventListener/i.test(line);
      if (!relevant) return;
      if (path.extname(file).toLowerCase() === ".html") {
        const node = extractDomNode(line, file, index + 1);
        if (node) domNodes.push(node);
      }
      extractSelectors(line).forEach((selector) => selectorRefs.push({
        selector,
        source: sourceRef(file, index + 1),
        operation: inferOperation(line),
        summary: clean(line)
      }));
      if (/addEventListener\s*\(/.test(line)) {
        eventListeners.push({
          event: line.match(/addEventListener\(\s*["'`]([^"'`]+)["'`]/)?.[1] || "",
          selector: extractSelectors(line)[0] || "",
          handler: line.match(/addEventListener\(\s*["'`][^"'`]+["'`]\s*,\s*([A-Za-z0-9_$]+)/)?.[1] || "",
          source: sourceRef(file, index + 1),
          summary: clean(line)
        });
      }
    });
  });
  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    keywords,
    domNodes: uniqueBy(domNodes, (item) => item.selector + item.source).slice(0, 200),
    eventListeners: eventListeners.slice(0, 200),
    selectorMappings: groupSelectors(selectorRefs).slice(0, 200)
  };
}

function extractDomNode(line, file, lineNumber) {
  const tag = line.match(/<\s*([a-z0-9-]+)/i)?.[1] || "";
  if (!tag) return null;
  const dataAttributes = [...line.matchAll(/\s(data-[a-z0-9-]+)(?:=["']([^"']*)["'])?/gi)].map((match) => ({ name: match[1], value: match[2] || "" }));
  const id = line.match(/\sid=["']([^"']+)["']/i)?.[1] || "";
  const className = line.match(/\sclass=["']([^"']+)["']/i)?.[1] || "";
  const selector = dataAttributes[0]
    ? `[${dataAttributes[0].value ? `${dataAttributes[0].name}="${dataAttributes[0].value}"` : dataAttributes[0].name}]`
    : id ? `#${id}` : className ? `.${className.split(/\s+/)[0]}` : tag;
  return { selector, tag, id, className, dataAttributes, source: sourceRef(file, lineNumber), textHint: clean(line.replace(/<[^>]+>/g, " ")) };
}

function extractSelectors(line) {
  const selectors = [];
  for (const match of line.matchAll(/querySelector(?:All)?\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) selectors.push(match[1]);
  for (const match of line.matchAll(/getElementById\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) selectors.push(`#${match[1]}`);
  for (const match of line.matchAll(/data-[a-z0-9-]+(?:=["'][^"']+["'])?/gi)) selectors.push(`[${match[0]}]`);
  return [...new Set(selectors)];
}

function inferOperation(line) {
  const text = line.toLowerCase();
  if (text.includes("addeventlistener")) return "event-binding";
  if (text.includes("classlist") || text.includes("hidden") || text.includes("disabled")) return "state-update";
  if (text.includes("textcontent") || text.includes("innerhtml") || text.includes("appendchild")) return "render";
  if (text.includes("value") || text.includes("checked")) return "input-read-write";
  return "reference";
}

function groupSelectors(rows) {
  const map = new Map();
  rows.forEach((row) => {
    const item = map.get(row.selector) || { selector: row.selector, sources: [], operations: new Set(), summaries: [] };
    item.sources.push(row.source);
    item.operations.add(row.operation);
    if (item.summaries.length < 3) item.summaries.push(row.summary);
    map.set(row.selector, item);
  });
  return [...map.values()].map((item) => ({
    selector: item.selector,
    sources: [...new Set(item.sources)].slice(0, 8),
    operations: [...item.operations],
    summaries: item.summaries
  }));
}

function renderMarkdown(summary) {
  return `# Preprocessed Code Summary

| Metric | Count |
| --- | ---: |
| DOM nodes | ${summary.domNodes.length} |
| Event listeners | ${summary.eventListeners.length} |
| Selector mappings | ${summary.selectorMappings.length} |

## DOM Nodes

| Selector | Tag | Source | Text / Role Hint |
| --- | --- | --- | --- |
${summary.domNodes.slice(0, 80).map((node) => `| \`${escapePipe(node.selector)}\` | ${node.tag} | \`${escapePipe(node.source)}\` | ${escapePipe(node.textHint)} |`).join("\n") || "| TBD | TBD | TBD | TBD |"}

## Event Listeners

| Event | Selector | Handler | Source |
| --- | --- | --- | --- |
${summary.eventListeners.slice(0, 80).map((item) => `| ${escapePipe(item.event)} | \`${escapePipe(item.selector || "unmapped")}\` | ${escapePipe(item.handler || "-")} | \`${escapePipe(item.source)}\` |`).join("\n") || "| TBD | TBD | TBD | TBD |"}

## DOM Selector Mapping

| DOM Selector | Operation | Source | Summary |
| --- | --- | --- | --- |
${summary.selectorMappings.slice(0, 80).map((item) => `| \`${escapePipe(item.selector)}\` | ${escapePipe(item.operations.join(", "))} | \`${escapePipe(item.sources[0] || "-")}\` | ${escapePipe(item.summaries[0] || "-")} |`).join("\n") || "| TBD | TBD | TBD | TBD |"}
`;
}

function uniqueBy(rows, keyFn) {
  const seen = new Set();
  return rows.filter((row) => {
    const key = keyFn(row);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sourceRef(file, line) {
  return `${path.relative(process.cwd(), file)}:${line}`;
}

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, 160);
}

function escapePipe(value) {
  return String(value || "").replaceAll("|", "\\|").replace(/\r?\n/g, " ");
}
