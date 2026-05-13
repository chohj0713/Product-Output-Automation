# Workflow: Prototype To Feature Spec And Figma

## Goal

Create feature specs from a prototype by starting from JS-derived cases, then generate Figma cards from the confirmed spec data.

## Execution Skills

1. `product-js-case-inventory`: JS case inventory and policy gap discovery.
2. `product-spec-output-generator`: final feature spec and Figma output generation after the user confirms policy/state/exception details.

## Stage 1 Output Order

1. `feature-profile.json`
2. `case-inventory.json`
3. Validate `feature-profile.json` with `schemas/feature-profile.schema.json`.
4. Validate `case-inventory.json` with `schemas/case-inventory.schema.json`.
5. `01-case-inventory.md`
6. `02-policy-gaps.md`
7. Stop and ask the user to fill or confirm the gaps.

## Stage 1 Rules

- Inspect JS event handlers, state mutation, validation guards, mode transitions, submit/save branches, pricing/ticket/date logic, and service calls.
- Build a feature profile first. Derive aliases/search terms from the feature name, optional user keywords, JS file names, selectors, and function names.
- Treat `--keywords` as optional. Ask the user to confirm terms only when feature profile confidence is low.
- Use HTML only to resolve selector labels when JS alone is ambiguous.
- Ignore CSS except when toggled classes encode product state, such as `is-active`, `is-complete`, `is-disabled`, feature-specific mode classes, or `hidden`.
- Do not list screens first.
- Do not merge cases when branch conditions differ by member, date, mode, ticket, limit, submit result, or feature option.

## Stage 2 Output Order

Run Stage 2 only after the user has reviewed `02-policy-gaps.md`.

1. `03-feature-spec.md`
2. `figma-card-data.json`
3. Validate `figma-card-data.json` with `schemas/figma-card-data.schema.json`.
4. `figma-create-canonical-cards.js`

## Output Layout

```text
outputs/<feature>/
  feature-profile.json
  case-inventory.json
  01-case-inventory.md
  02-policy-gaps.md
  03-feature-spec.md
  figma-card-data.json
  figma-create-canonical-cards.js
```

## Final Spec Rules

- Convert confirmed cases into PM-readable requirements.
- Final spec may group by feature area or modal section, but every row must trace back to confirmed cases.
- Do not include raw code paths, function names, selectors, or case IDs in the final PM-facing spec unless the user asks for audit detail.
- Do not generate final output if `02-policy-gaps.md` contains unresolved user decisions.

## Figma Final Output Shape

- Create only the written spec side as `Container`.
- Treat the reference node `MGMCrXQxxIvOkCAAw3bxCq / 77:501` as the canonical card template.
- Convert final requirements into schema-validated card-first data before creating Figma nodes.
- Follow this hierarchy:
  - Platform header frame, for example `<Feature> / <Platform>`.
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
  --output ".\outputs\<feature>"
```

Use `--keywords "<keyword1>,<keyword2>"` only when the feature name alone is ambiguous.

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

```powershell
node .\harness\feature-spec\scripts\build-figma-card-output.mjs `
  --feature "<feature>" `
  --output ".\outputs\<feature>" `
  --spec ".\outputs\<feature>\03-feature-spec.md"
```

```powershell
node .\harness\feature-spec\scripts\validate-json.mjs `
  --schema ".\harness\feature-spec\schemas\figma-card-data.schema.json" `
  --data ".\outputs\<feature>\figma-card-data.json"
```
