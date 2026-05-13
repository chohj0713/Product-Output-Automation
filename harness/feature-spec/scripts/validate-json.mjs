#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const schemaPath = path.resolve(required(args.schema, "--schema"));
const dataPath = path.resolve(required(args.data, "--data"));

if (!existsSync(schemaPath)) throw new Error(`Schema not found: ${schemaPath}`);
if (!existsSync(dataPath)) throw new Error(`Data not found: ${dataPath}`);

const schema = JSON.parse(readFileSync(schemaPath, "utf8"));
const data = JSON.parse(readFileSync(dataPath, "utf8"));
const errors = validateValue(data, schema, "$");

console.log(JSON.stringify({
  schemaPath,
  dataPath,
  passed: errors.length === 0,
  errors
}, null, 2));

if (errors.length > 0) process.exitCode = 1;

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

function validateValue(value, schema, pointer) {
  const errors = [];
  if (!schema || typeof schema !== "object") return errors;
  if (schema.const !== undefined && value !== schema.const) {
    errors.push(`${pointer}: expected const ${JSON.stringify(schema.const)}, got ${JSON.stringify(value)}`);
  }
  if (schema.enum && !schema.enum.includes(value)) {
    errors.push(`${pointer}: expected one of ${schema.enum.map(JSON.stringify).join(", ")}, got ${JSON.stringify(value)}`);
  }
  if (schema.type && !matchesType(value, schema.type)) {
    errors.push(`${pointer}: expected type ${schema.type}, got ${Array.isArray(value) ? "array" : typeof value}`);
    return errors;
  }
  if (typeof value === "string" && schema.minLength !== undefined && value.length < schema.minLength) {
    errors.push(`${pointer}: expected minLength ${schema.minLength}`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems !== undefined && value.length < schema.minItems) {
      errors.push(`${pointer}: expected at least ${schema.minItems} items`);
    }
    if (schema.items) {
      value.forEach((item, index) => errors.push(...validateValue(item, schema.items, `${pointer}[${index}]`)));
    }
  }
  if (value && typeof value === "object" && !Array.isArray(value)) {
    for (const key of schema.required || []) {
      if (!(key in value)) errors.push(`${pointer}: missing required property ${key}`);
    }
    if (schema.additionalProperties === false && schema.properties) {
      Object.keys(value).forEach((key) => {
        if (!(key in schema.properties)) errors.push(`${pointer}: unexpected property ${key}`);
      });
    }
    for (const [key, childSchema] of Object.entries(schema.properties || {})) {
      if (key in value) errors.push(...validateValue(value[key], childSchema, `${pointer}.${key}`));
    }
  }
  return errors;
}

function matchesType(value, type) {
  if (type === "array") return Array.isArray(value);
  if (type === "object") return value !== null && typeof value === "object" && !Array.isArray(value);
  if (type === "number") return typeof value === "number" && Number.isFinite(value);
  return typeof value === type;
}
