# Workflow: Feature Spec From Code

## Goal

Create a PM collaboration feature spec from code and product input. The Figma final output must use this structure: platform header -> feature sections -> numbered item frame -> `Container`.

The pipeline is contract-first: code evidence is pre-processed into structured JSON, validated against JSON Schema, then transformed into PM-readable Markdown and canonical Figma card data.

## Output Order

1. `internal/preprocessed-code-summary.json`
2. Validate `internal/preprocessed-code-summary.json` with `schemas/preprocessed-code-summary.schema.json`.
3. `internal/preprocessed-code-summary.md`
4. `internal/candidate-files.md`
5. `internal/logic-inventory.json`
6. Validate `internal/logic-inventory.json` with `schemas/logic-inventory.schema.json`.
7. `internal/logic-inventory.md`
8. `internal/coverage-matrix.md`
9. `internal/domain-rule-map.md`
10. `internal/open-questions.md`
11. `human/00-feature-summary.md`
12. `human/platform-map.md`
13. `human/screen-case-map.md`
14. `human/policy-table.md`
15. `human/state-matrix.md`
16. `human/ui-element-spec.md`
17. `human/decision-log.md`
18. `human/event-tracking.md`
19. Ask the user how to handle open questions.
20. `human/<feature>-feature-spec.md`
21. `human/readability-validation.md`
22. `human/figma-card-data.json`
23. Validate `human/figma-card-data.json` with `schemas/figma-card-data.schema.json`.
24. `human/figma-create-canonical-cards.js`

Legacy flat files may exist at `outputs/<feature>/` for compatibility.

## Figma Final Output Shape

- Create only the written spec side as `Container`.
- Treat the reference node `MGMCrXQxxIvOkCAAw3bxCq / 77:501` as the canonical card template.
- Convert the screen-first Markdown spec into schema-validated card-first data before creating Figma nodes.
- Follow this hierarchy:
  - Platform header frame, for example `픽드랍 / 비즈 Web`.
  - `SECTION` per feature screen or user-facing case.
  - Numbered frame per spec item, for example `1`, `2`, `2-1`.
  - Inside each numbered frame, create one child frame named exactly `Container`.
  - Inside `Container`, create `Title` and numbered `설명` blocks.
- Container content follows this pattern:
  - `Title`: 상황, 화면명, 화면 경로, Case.
  - `설명`: numbered behavior blocks with concise product-facing text.
  - Use screen area and UI item language inside descriptions.

## Canonical Card Data

Generate Figma data after the final Markdown spec:

```powershell
node .\harness\feature-spec\scripts\build-figma-card-output.mjs `
  --feature "<feature>" `
  --output ".\outputs\<feature>" `
  --spec ".\outputs\<feature>\human\<feature>-feature-spec.md"
```

The command writes:

- `human/figma-card-data.json`: normalized `situation`, `screenName`, `screenPath`, `caseName`, and `blocks`.
- `human/figma-create-canonical-cards.js`: Figma Plugin API script that creates the canonical `840px` `Container` cards.

## JSON Contracts

- `internal/preprocessed-code-summary.json` must contain only DOM nodes, selector mappings, and event listener summaries needed for planning.
- `internal/logic-inventory.json` must include `domSelectorMappings`; `internal/logic-inventory.md` must include a `DOM Selector Mapping Table`.
- `human/figma-card-data.json` must separate every template field: `situation`, `screenName`, `screenPath`, `caseName`, and `blocks[]`.
- A Figma card block must use separated fields: `number`, `kind`, `title`, `bullets[]`.
- Do not inject composed Markdown, tables, or multiline policy prose directly into a Figma card field.
- The Figma template constants are fixed: file key `MGMCrXQxxIvOkCAAw3bxCq`, node `77:501`, width `840`, title height `120`.

## Self-correction Loop

If validation fails or JSON parsing fails:

1. Identify the failing contract and the affected screen or screen area.
2. Return only to the previous step for that screen area.
3. Regenerate only the failing JSON object or Figma card block.
4. Re-run the relevant schema validation.
5. Continue the pipeline only after validation passes.

If Figma script generation fails:

1. Keep the canonical template unchanged.
2. Inspect `human/figma-card-data.json` for missing or merged fields.
3. Regenerate only the affected card in `cards[]`.
4. Validate `figma-card-data.json`.
5. Re-run `build-figma-card-output.mjs`.

## Rules

- Run code pre-processing before candidate selection so context is based on DOM structure, selectors, and event bindings rather than raw source volume.
- Use platform, screen, screen area, and UI item mapping before writing the final spec.
- Keep internal audit files out of the final spec.
- Ask the user how to handle open questions before final spec writing.
- Write final specs by actual screen.
- Split each screen by visible screen areas.
- Describe behavior item by item inside each screen area.
- Use this hierarchy: `Platform -> Screen -> Screen Area -> UI Item -> Behavior / Exception / State / Data Impact`.
- Final specs use `Screen Header`, `Context`, `Screen Areas`, `UI Item Spec`, `Screen-level States`, and `Policy Notes`.
- Policies support visible screen behavior only; do not use `Core Policies` as the organizing structure.
- Do not create generic callout boards without a real screen structure.
- For Figma output, convert the screen-first Markdown into Container-only numbered descriptions.
- Do not send raw Markdown tables directly to Figma.
- Do not use a single `설명 제목` + `설명 본문` text block; preserve numbered `설명` blocks, bullet hierarchy, and item type labels such as `[Input]`, `[Option]`, `[Button]`, and `[State]`.
- Final spec must not include code evidence, file paths, function names, raw coverage details, or `LI-*` IDs.
- Default internal output is summary-only. Use `--detail` only for audits.

## Open Question Handling Options

When open questions exist, ask the user to choose one:

- Resolve now: pause final spec until the user answers.
- Apply recommended defaults: write the final spec using defaults and track decisions.
- Leave as follow-up: omit unresolved behavior from final spec and keep it in `internal/open-questions.md`.

## Commands

```powershell
node .\harness\feature-spec\scripts\preprocess-code.mjs `
  --feature "<feature>" `
  --prototype "<prototype path>" `
  --output ".\outputs\<feature>" `
  --keywords "<keyword1>,<keyword2>"
```

```powershell
node .\harness\feature-spec\scripts\analyze-feature.mjs `
  --project "<project name with target/platform, e.g. Schedule Daycare Biz Web>" `
  --feature "<feature>" `
  --prototype "<prototype path>" `
  --output ".\outputs\<feature>" `
  --keywords "<keyword1>,<keyword2>"
```

```powershell
node .\harness\feature-spec\scripts\validate-json.mjs `
  --schema ".\harness\feature-spec\schemas\preprocessed-code-summary.schema.json" `
  --data ".\outputs\<feature>\internal\preprocessed-code-summary.json"
```

```powershell
node .\harness\feature-spec\scripts\validate-json.mjs `
  --schema ".\harness\feature-spec\schemas\logic-inventory.schema.json" `
  --data ".\outputs\<feature>\internal\logic-inventory.json"
```

```powershell
node .\harness\feature-spec\scripts\validate-markdown.mjs `
  --output ".\outputs\<feature>" `
  --spec ".\outputs\<feature>\human\<feature>-feature-spec.md"
```

```powershell
node .\harness\feature-spec\scripts\validate-json.mjs `
  --schema ".\harness\feature-spec\schemas\figma-card-data.schema.json" `
  --data ".\outputs\<feature>\human\figma-card-data.json"
```
