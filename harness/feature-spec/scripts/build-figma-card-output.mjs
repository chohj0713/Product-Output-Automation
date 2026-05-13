#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const specPath = path.resolve(required(args.spec, "--spec"));
const outputPath = path.resolve(required(args.output, "--output"));
const feature = args.feature || path.basename(outputPath);
const outDir = args.outDir ? path.resolve(args.outDir) : path.join(outputPath, "human");
const dataPath = path.join(outDir, "figma-card-data.json");
const scriptPath = path.join(outDir, "figma-create-canonical-cards.js");

if (!existsSync(specPath)) throw new Error(`Spec not found: ${specPath}`);
mkdirSync(outDir, { recursive: true });

const markdown = readFileSync(specPath, "utf8");
const cardData = buildCardData(markdown, feature);
writeFileSync(dataPath, `${JSON.stringify(cardData, null, 2)}\n`, "utf8");
writeFileSync(scriptPath, renderFigmaScript(cardData), "utf8");

console.log(JSON.stringify({
  feature,
  specPath,
  dataPath,
  scriptPath,
  cards: cardData.cards.length,
  blocks: cardData.cards.reduce((sum, card) => sum + card.blocks.length, 0)
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

function buildCardData(markdownText, featureName) {
  const metadata = parseTableAfter(markdownText, "## Output Metadata");
  const screens = splitScreens(markdownText).map((section, index) => screenToCard(section, index, featureName));
  return {
    version: 1,
    template: {
      source: "canonical-figma-node",
      fileKey: "MGMCrXQxxIvOkCAAw3bxCq",
      nodeId: "77:501",
      width: 840,
      titleHeight: 120,
      accent: "#9fc14f",
      policyAccent: "#1e78f0"
    },
    feature: featureName,
    project: metadata.Project || "",
    generatedFrom: path.basename(specPath),
    cards: screens.length ? screens : [fallbackCard(markdownText, featureName)]
  };
}

function splitScreens(text) {
  const matches = [...text.matchAll(/^## Screen Header(?:[^\n]*)$/gm)];
  if (!matches.length) return [];
  return matches.map((match, index) => {
    const start = match.index;
    const end = matches[index + 1]?.index ?? text.length;
    return text.slice(start, end).trim();
  });
}

function screenToCard(section, index, featureName) {
  const header = parseTableAfter(section, "## Screen Header");
  const uiRows = parseTableAfter(section, "## UI Item Spec", true);
  const policyNotes = parseBulletListAfter(section, "## Policy Notes");
  const context = parseParagraphAfter(section, "## Context");
  const blocks = [];

  if (context || policyNotes.length) {
    blocks.push({
      number: "P",
      kind: "policy",
      title: featureName,
      bullets: [
        ...sentenceBullets(context).slice(0, 2),
        ...policyNotes.slice(0, 4)
      ]
    });
  }

  uiRows.slice(0, 12).forEach((row, rowIndex) => {
    blocks.push({
      number: String(rowIndex + 1),
      kind: "item",
      title: `[${inferItemType(row["UI Item"], row.Behavior, row.State)}] ${row["UI Item"] || row["Screen Area"] || `항목 ${rowIndex + 1}`}`,
      bullets: compact([
        row["Screen Area"] && `영역 : ${row["Screen Area"]}`,
        row.Behavior,
        row.Exception && `예외 : ${row.Exception}`,
        row.State && `상태 : ${row.State}`,
        row["Data Impact"] && `데이터 영향 : ${row["Data Impact"]}`
      ])
    });
  });

  return {
    id: `S-${String(index + 1).padStart(2, "0")}`,
    frameName: String(index + 1),
    situation: featureName,
    screenName: header.Screen || `Screen ${index + 1}`,
    screenPath: header["Entry Path"] || "",
    caseName: header["Primary User Goal"] || featureName,
    blocks: blocks.length ? blocks : [{
      number: "P",
      kind: "policy",
      title: featureName,
      bullets: ["화면별 UI 항목과 동작을 기준 기능명세 카드 형식으로 정리합니다."]
    }]
  };
}

function fallbackCard(text, featureName) {
  const title = text.match(/^#\s+(.+)$/m)?.[1] || featureName;
  return {
    id: "S-01",
    frameName: "1",
    situation: featureName,
    screenName: title,
    screenPath: "",
    caseName: featureName,
    blocks: [{
      number: "P",
      kind: "policy",
      title: featureName,
      bullets: sentenceBullets(text.replace(/^#+\s+/gm, "")).slice(0, 6)
    }]
  };
}

function parseTableAfter(text, heading, many = false) {
  const section = sectionAfter(text, heading);
  const lines = section.split(/\r?\n/).filter((line) => line.trim().startsWith("|"));
  if (lines.length < 2) return many ? [] : {};
  const headers = splitTableRow(lines[0]);
  const body = lines.slice(2).map((line) => splitTableRow(line)).filter((row) => row.length);
  if (many) {
    return body.map((cells) => Object.fromEntries(headers.map((header, index) => [header, cleanCell(cells[index] || "")])));
  }
  return Object.fromEntries(body.map((cells) => [cleanCell(cells[0] || ""), cleanCell(cells[1] || "")]));
}

function parseBulletListAfter(text, heading) {
  return sectionAfter(text, heading)
    .split(/\r?\n/)
    .map((line) => line.match(/^\s*[-*]\s+(.+)$/)?.[1])
    .filter(Boolean)
    .map(cleanCell);
}

function parseParagraphAfter(text, heading) {
  return sectionAfter(text, heading)
    .split(/\r?\n/)
    .filter((line) => line.trim() && !line.trim().startsWith("|") && !line.trim().startsWith("#"))
    .join(" ")
    .trim();
}

function sectionAfter(text, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = text.match(new RegExp(`^${escaped}(?:\\s[^\\n]*)?\\n([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`, "m"));
  return match?.[1] || "";
}

function splitTableRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split(/(?<!\\)\|/).map(cleanCell);
}

function cleanCell(value) {
  return String(value || "")
    .replaceAll("\\|", "|")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sentenceBullets(value) {
  return compact(String(value || "")
    .split(/(?<=[.!?。！？다])\s+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 8));
}

function compact(values) {
  return values.filter(Boolean).map(cleanCell).filter(Boolean);
}

function inferItemType(item = "", behavior = "", state = "") {
  const text = `${item} ${behavior} ${state}`.toLowerCase();
  if (/input|textarea|입력|검색/.test(text)) return "Input";
  if (/option|radio|checkbox|선택|옵션|체크/.test(text)) return "Option";
  if (/button|click|버튼|닫기|등록|저장/.test(text)) return "Button";
  if (/empty|disabled|loading|error|상태|비활성|오류/.test(text)) return "State";
  if (/calendar|date|날짜|일자/.test(text)) return "Date";
  return "Item";
}

function renderFigmaScript(data) {
  return `// Generated by harness/feature-spec/scripts/build-figma-card-output.mjs
// Run with the Figma Plugin API. It creates canonical feature-spec Container cards.
const cardData = ${JSON.stringify(data, null, 2)};

const WIDTH = 840;
const TITLE_HEIGHT = 120;
const NUMBER_SIZE = 36;
const BLACK = { r: 0.2, g: 0.2, b: 0.2 };
const WHITE = { r: 1, g: 1, b: 1 };
const ACCENT = hexToRgb(cardData.template.accent);
const POLICY = hexToRgb(cardData.template.policyAccent);
const GRAY = hexToRgb("#919191");

const FONT_REGULAR = await resolveFont([
  { family: "Pretendard", style: "Regular" },
  { family: "Inter", style: "Regular" }
]);
const FONT_BOLD = await resolveFont([
  { family: "Pretendard", style: "Bold" },
  { family: "Inter", style: "Bold" },
  { family: "Inter", style: "Regular" }
]);
const FONT_NUMBER = await resolveFont([
  { family: "Poppins", style: "ExtraBold" },
  { family: "Inter", style: "Bold" },
  { family: "Inter", style: "Regular" }
]);

const root = figma.createFrame();
root.name = \`SECTION / \${cardData.feature}\`;
root.x = 0;
root.y = 0;
root.fills = [];
root.layoutMode = "HORIZONTAL";
root.primaryAxisSizingMode = "AUTO";
root.counterAxisSizingMode = "AUTO";
root.paddingLeft = 100;
root.paddingRight = 100;
root.paddingTop = 100;
root.paddingBottom = 100;
root.itemSpacing = 80;

for (const card of cardData.cards) {
  const frame = figma.createFrame();
  frame.name = card.frameName;
  frame.resize(WIDTH, 10);
  frame.fills = [];
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "FIXED";
  frame.itemSpacing = 0;
  root.appendChild(frame);

  const container = figma.createFrame();
  container.name = "Container";
  container.resize(WIDTH, 10);
  container.fills = [];
  container.layoutMode = "VERTICAL";
  container.primaryAxisSizingMode = "AUTO";
  container.counterAxisSizingMode = "FIXED";
  container.itemSpacing = 0;
  frame.appendChild(container);

  container.appendChild(createTitle(card));
  const body = figma.createFrame();
  body.name = "-";
  body.resize(WIDTH, 10);
  body.fills = [];
  body.layoutMode = "VERTICAL";
  body.primaryAxisSizingMode = "AUTO";
  body.counterAxisSizingMode = "FIXED";
  body.itemSpacing = 0;
  container.appendChild(body);

  for (const block of card.blocks) body.appendChild(createDescription(block));
}

figma.viewport.scrollAndZoomIntoView([root]);

function createTitle(card) {
  const title = figma.createFrame();
  title.name = "Title";
  title.resize(WIDTH, TITLE_HEIGHT);
  title.fills = [];
  title.layoutMode = "VERTICAL";
  title.primaryAxisSizingMode = "FIXED";
  title.counterAxisSizingMode = "FIXED";
  title.itemSpacing = 0;

  const situation = rowFrame("상황", WIDTH, 40, ACCENT, true);
  situation.appendChild(textNode(card.situation, 20, "Bold", WHITE, 12, 8, 800, 24));
  title.appendChild(situation);

  const screenRow = figma.createFrame();
  screenRow.name = "-";
  screenRow.resize(WIDTH, 40);
  screenRow.fills = [];
  screenRow.layoutMode = "HORIZONTAL";
  screenRow.primaryAxisSizingMode = "FIXED";
  screenRow.counterAxisSizingMode = "FIXED";
  screenRow.itemSpacing = 0;
  title.appendChild(screenRow);
  screenRow.appendChild(labeledCell("화면명", card.screenName, 360, 40));
  screenRow.appendChild(labeledCell("경로", card.screenPath, 480, 40));

  const caseRow = labeledCell("Case", card.caseName, WIDTH, 40);
  caseRow.name = "Case";
  title.appendChild(caseRow);
  return title;
}

function createDescription(block) {
  const row = figma.createFrame();
  row.name = "설명";
  row.resize(WIDTH, 10);
  row.fills = [{ type: "SOLID", color: WHITE }];
  row.strokes = [{ type: "SOLID", color: BLACK }];
  row.strokeWeight = 1;
  row.layoutMode = "HORIZONTAL";
  row.primaryAxisSizingMode = "AUTO";
  row.counterAxisSizingMode = "FIXED";
  row.paddingLeft = 20;
  row.paddingRight = 20;
  row.paddingTop = 16;
  row.paddingBottom = 16;
  row.itemSpacing = 24;

  const color = block.kind === "policy" ? POLICY : ACCENT;
  const number = figma.createFrame();
  number.name = "Number";
  number.resize(NUMBER_SIZE, NUMBER_SIZE);
  number.fills = [{ type: "SOLID", color }];
  number.layoutMode = "VERTICAL";
  number.primaryAxisAlignItems = "CENTER";
  number.counterAxisAlignItems = "CENTER";
  number.appendChild(textNode(block.number, 20, "ExtraBold", WHITE, 0, 5, NUMBER_SIZE, 26, "Poppins"));
  row.appendChild(number);

  const content = figma.createFrame();
  content.name = "설명(1)";
  content.resize(740, 10);
  content.fills = [];
  content.layoutMode = "VERTICAL";
  content.primaryAxisSizingMode = "AUTO";
  content.counterAxisSizingMode = "FIXED";
  content.itemSpacing = 8;
  row.appendChild(content);

  content.appendChild(textNode(block.title, 16, "Bold", color, 0, 0, 720, 22));
  for (const bullet of block.bullets || []) {
    content.appendChild(textNode("• " + bullet, 16, "Regular", BLACK, 8, 0, 700, 24));
  }
  return row;
}

function labeledCell(label, value, width, height) {
  const cell = rowFrame(label, width, height, WHITE, false);
  cell.appendChild(textNode(label + ":", 12, "Regular", BLACK, 5, 5, 80, 16));
  const valueNode = textNode(value || "-", 14, "Bold", BLACK, 86, 9, Math.max(120, width - 110), 22);
  valueNode.textAlignHorizontal = "CENTER";
  cell.appendChild(valueNode);
  return cell;
}

function rowFrame(name, width, height, fill, isHeader) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.resize(width, height);
  frame.fills = [{ type: "SOLID", color: fill }];
  frame.strokes = [{ type: "SOLID", color: BLACK }];
  frame.strokeWeight = 1;
  frame.clipsContent = true;
  return frame;
}

function textNode(characters, size, style, color, x, y, width, height, family = "Pretendard") {
  const node = figma.createText();
  node.fontName = family === "Poppins" ? FONT_NUMBER : style === "Bold" ? FONT_BOLD : FONT_REGULAR;
  node.characters = String(characters || "");
  node.fontSize = size;
  node.fills = [{ type: "SOLID", color }];
  node.x = x;
  node.y = y;
  node.resize(width, height);
  node.textAutoResize = "HEIGHT";
  return node;
}

async function resolveFont(candidates) {
  for (const font of candidates) {
    try {
      await figma.loadFontAsync(font);
      return font;
    } catch (error) {
      // Try the next available font.
    }
  }
  throw new Error("No usable font found for canonical Figma card output.");
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const int = Number.parseInt(value, 16);
  return {
    r: ((int >> 16) & 255) / 255,
    g: ((int >> 8) & 255) / 255,
    b: (int & 255) / 255
  };
}
`;
}
