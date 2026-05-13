# Product Output Automation

Prototype-based feature spec generation workspace for Codex.

## Purpose

This project has one purpose: generate PM-readable feature specs from a prototype.

The workflow is:

1. Read prototype JavaScript and extract feature cases.
2. Resolve policy/state/exception/copy gaps with the user.
3. Generate the final feature spec and Figma card output.

## Canonical Skills

Use the two execution skills directly:

```text
C:\Users\chohj\.codex\skills\product-js-case-inventory
C:\Users\chohj\.codex\skills\product-spec-output-generator
```

## Stage 1: Case Inventory

Skill: `product-js-case-inventory`

```powershell
node .\harness\feature-spec\scripts\analyze-js-cases.mjs `
  --feature "<feature>" `
  --prototype "<prototype path>" `
  --output ".\outputs\<feature>"
```

Validate:

```powershell
node .\harness\feature-spec\scripts\validate-json.mjs `
  --schema ".\harness\feature-spec\schemas\feature-profile.schema.json" `
  --data ".\outputs\<feature>\feature-profile.json"
```

```powershell
node .\harness\feature-spec\scripts\validate-json.mjs `
  --schema ".\harness\feature-spec\schemas\case-inventory.schema.json" `
  --data ".\outputs\<feature>\case-inventory.json"
```

Stage 1 writes:

```text
outputs/<feature>/
  feature-profile.json
  case-inventory.json
  01-case-inventory.md
  02-policy-gaps.md
```

Stop here until policy/state/exception/copy/data gaps are filled or confirmed.

## Stage 2: Final Output

Skill: `product-spec-output-generator`

Stage 2 writes:

```text
outputs/<feature>/
  03-feature-spec.md
  figma-card-data.json
  figma-create-canonical-cards.js
```

Figma output uses the canonical `MGMCrXQxxIvOkCAAw3bxCq / 77:501` Container card structure.

## Rules

- JS is the source of truth.
- `feature-profile.json` is created before case inventory for every requested feature.
- `--keywords` is optional; use it only when the feature name is ambiguous.
- Track event handlers, state mutation, validation guards, mode transitions, submit branches, pricing/ticket/date logic, and service calls.
- Use HTML only to clarify selector labels when JS is ambiguous.
- Ignore CSS except when toggled classes encode product state.
- Do not start with screen lists.
- Do not generate final specs before policy gaps are reviewed.

## Folders

```text
harness/feature-spec/scripts/   analysis and validation scripts
harness/feature-spec/schemas/   JSON contracts
prompts/                        short reusable prompts
templates/                      output templates
workflows/                      compact workflow docs
outputs/<feature>/              feature-specific outputs
```

## Git Policy

- Do not commit or push automatically.
- Commit and push only when explicitly requested.
