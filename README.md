# Product Output Automation

PM output automation workspace for Codex.

## Canonical Skills

Use the two execution skills directly:

```text
C:\Users\chohj\.codex\skills\product-js-case-inventory
C:\Users\chohj\.codex\skills\product-spec-output-generator
```

## Current Workflow

The preferred workflow is **JS case-first** and split into two skills.

### Stage 1: Case Inventory

Generate only the code-derived case inventory and policy gaps.

Skill: `product-js-case-inventory`

```powershell
node .\harness\feature-spec\scripts\analyze-js-cases.mjs `
  --feature "<feature>" `
  --prototype "<prototype path>" `
  --output ".\outputs\<feature>" `
  --keywords "<keyword1>,<keyword2>"
```

Validate:

```powershell
node .\harness\feature-spec\scripts\validate-json.mjs `
  --schema ".\harness\feature-spec\schemas\case-inventory.schema.json" `
  --data ".\outputs\<feature>\case-inventory.json"
```

Stage 1 writes:

```text
outputs/<feature>/
  case-inventory.json
  01-case-inventory.md
  02-policy-gaps.md
```

Stop here until the user fills or confirms policy/state/exception/copy/data gaps.

### Stage 2: Final Output

After the user confirms gaps, generate:

Skill: `product-spec-output-generator`

```text
outputs/<feature>/
  03-feature-spec.md
  figma-card-data.json
  figma-create-canonical-cards.js
```

Figma output still uses the canonical `MGMCrXQxxIvOkCAAw3bxCq / 77:501` Container card structure.

## Analysis Rules

- JS is the source of truth.
- Track event handlers, state mutation, validation guards, mode transitions, submit branches, pricing/ticket/date logic, and service calls.
- Use HTML only to clarify selector labels when JS is ambiguous.
- Ignore CSS except when toggled classes encode product state.
- Do not start with screen lists.
- Do not generate final specs before policy gaps are reviewed.

## Folders

```text
harness/feature-spec/scripts/   analysis and validation scripts
harness/feature-spec/schemas/   JSON contracts
projects/                       project-specific notes
prompts/                        short reusable prompts
templates/                      output templates
workflows/                      compact workflow docs
outputs/<feature>/              feature-specific outputs
```

## Legacy Support

The previous `internal/` and `human/` output folders and screen-first scripts remain for compatibility, but new work should start with `analyze-js-cases.mjs`.

## Git Policy

- Do not commit or push automatically.
- Commit and push only when explicitly requested.
