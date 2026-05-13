# Workflow: JS Case Inventory To Feature Spec

## Goal

Create deeper feature specs by starting from JS-derived cases, not screen sections. The workflow is split into two execution skills:

1. `product-js-case-inventory`: JS case inventory and policy gap discovery.
2. `product-spec-output-generator`: final feature spec and Figma output generation after the user fills missing policy/state/exception details.

## Stage 1 Output Order

1. `case-inventory.json`
2. Validate `case-inventory.json` with `schemas/case-inventory.schema.json`.
3. `01-case-inventory.md`
4. `02-policy-gaps.md`
5. Stop and ask the user to fill or confirm the gaps.

Stage 1 is JS-first:

Skill: `product-js-case-inventory`

- Inspect JS event handlers, state mutation, validation guards, mode transitions, submit/save branches, pricing/ticket/date logic, and service calls.
- Use HTML only to resolve selector labels when JS alone is ambiguous.
- Ignore CSS except when toggled classes encode product state, such as `is-active`, `is-complete`, `is-disabled`, `is-pickdrop`, or `hidden`.

## Stage 2 Output Order

Run Stage 2 only after the user has reviewed `02-policy-gaps.md`.

Skill: `product-spec-output-generator`

1. `03-feature-spec.md`
2. Validate final Markdown.
3. `figma-card-data.json`
4. Validate `figma-card-data.json` with `schemas/figma-card-data.schema.json`.
5. `figma-create-canonical-cards.js`

The previous `internal/` and `human/` layout may still exist for old outputs, but the preferred case-first layout is flat:

```text
outputs/<feature>/
  case-inventory.json
  01-case-inventory.md
  02-policy-gaps.md
  03-feature-spec.md
  figma-card-data.json
  figma-create-canonical-cards.js
```

## Case Inventory Rules

- A case must describe a concrete JS branch or event path.
- Do not list screens first.
- Do not merge these into one case:
  - member selected vs not selected,
  - date selected vs not selected,
  - mode enabled vs disabled,
  - submit success vs failure,
  - pickup only vs dropoff only vs roundtrip,
  - available ticket vs no ticket vs insufficient remaining count.
- Each case should include trigger, condition, expected behavior, state changes, data impact, UI selectors, and source reference.

## Final Spec Rules

- Convert confirmed cases into PM-readable requirements.
- Final spec may still group by feature area or modal section, but every row must trace back to a case.
- Do not include raw code paths, function names, selectors, or case IDs in the final PM-facing spec unless the user asks for audit detail.
- Do not generate final output if `02-policy-gaps.md` contains unresolved user decisions.

## Figma Final Output Shape

- Create only the written spec side as `Container`.
- Treat the reference node `MGMCrXQxxIvOkCAAw3bxCq / 77:501` as the canonical card template.
- Convert final requirements into schema-validated card-first data before creating Figma nodes.
- Follow this hierarchy:
  - Platform header frame, for example `픽드랍 / Biz Web`.
  - `SECTION` per confirmed case group.
  - Numbered frame per spec item, for example `1`, `2`, `2-1`.
  - Inside each numbered frame, create one child frame named exactly `Container`.
  - Inside `Container`, create `Title` and numbered `설명` blocks.
- Container content follows this pattern:
  - `Title`: 상황, 화면명, 화면 경로, Case.
  - `설명`: numbered behavior blocks with concise product-facing text.

## Self-correction Loop

If validation fails or JSON parsing fails:

1. Identify the failing contract and affected case or case group.
2. Return only to the previous step for that case.
3. Regenerate only the failing JSON object or Figma card block.
4. Re-run the relevant schema validation.
5. Continue only after validation passes.

## Commands

```powershell
node .\harness\feature-spec\scripts\analyze-js-cases.mjs `
  --feature "<feature>" `
  --prototype "<prototype path>" `
  --output ".\outputs\<feature>" `
  --keywords "<keyword1>,<keyword2>"
```

```powershell
node .\harness\feature-spec\scripts\validate-json.mjs `
  --schema ".\harness\feature-spec\schemas\case-inventory.schema.json" `
  --data ".\outputs\<feature>\case-inventory.json"
```

```powershell
node .\harness\feature-spec\scripts\validate-markdown.mjs `
  --output ".\outputs\<feature>" `
  --spec ".\outputs\<feature>\03-feature-spec.md"
```

```powershell
node .\harness\feature-spec\scripts\build-figma-card-output.mjs `
  --feature "<feature>" `
  --output ".\outputs\<feature>" `
  --spec ".\outputs\<feature>\03-feature-spec.md" `
  --outDir ".\outputs\<feature>"
```

```powershell
node .\harness\feature-spec\scripts\validate-json.mjs `
  --schema ".\harness\feature-spec\schemas\figma-card-data.schema.json" `
  --data ".\outputs\<feature>\figma-card-data.json"
```
