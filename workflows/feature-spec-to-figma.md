# Workflow: Feature Spec From Code

## Goal

Create a detailed feature specification text from a code-based prototype. The main output is Markdown text. Figma is optional and should be used only when the user explicitly asks for visual placement.

The workflow uses code analysis to prevent missing branches and constraints, but the final feature spec must not expose code evidence, file paths, line numbers, source symbols, or `LI-*` IDs.

## Required Outputs

Store all feature outputs under `outputs/<feature>/`.

```text
outputs/<feature>/
  candidate-files.md
  logic-inventory.md
  coverage-matrix.md
  open-questions.md
  <feature>-feature-spec.md
  capture-index.md
  readability-validation.md
  captures/
```

## Step 1: Code Candidate Collection

Search the prototype before writing any spec. This is internal analysis, not final spec text.

- Search feature keywords, Korean UI copy, data attributes, and related English terms.
- Identify candidate files in the relevant page, component, service, storage, and policy modules.
- Categorize discovered logic into:
  - `UI`
  - `State`
  - `Validation`
  - `Pricing`
  - `Ticket Usage`
  - `Persistence`
  - `Repair/Migration`
  - `Edge Case`
  - `Unknown`

Recommended command:

```powershell
node .\harness\feature-spec\scripts\analyze-feature.mjs `
  --feature "<feature>" `
  --prototype "<prototype path>" `
  --output ".\outputs\<feature>" `
  --keywords "<keyword1>,<keyword2>"
```

## Step 2: Logic Inventory

Create `outputs/<feature>/logic-inventory.md` using `templates/logic-inventory.md`.

The inventory is an internal working artifact. It may include source locations and code facts because it exists to prevent omission. Do not copy those source details into the final feature spec.

Separate items when they affect behavior:

- UI entry/exit paths,
- selected state and initialization,
- disabled/empty/over-limit conditions,
- pricing and allocation rules,
- save/update payload differences,
- repair or existing-data compatibility,
- fallback behavior.

## Step 3: Coverage Matrix

Create `outputs/<feature>/coverage-matrix.md` using `templates/coverage-matrix.md`.

Every logic inventory item must have exactly one status:

- `Covered`: reflected in the spec as confirmed behavior.
- `Partial`: partly reflected; missing conditions are named.
- `Not Covered`: not reflected; exclusion or follow-up required.
- `Open Question`: cannot be confirmed from code alone.

The matrix is internal. The final feature spec should summarize behavior, not show matrix IDs.

## Step 4: Feature Spec Text

Create the final feature spec using `templates/feature-spec.md`.

Each section should include:

- user situation,
- screen or workflow name,
- user-facing entry path,
- case name,
- detailed behavior rows,
- branch/condition,
- constraint,
- persistence impact,
- assumptions,
- open questions.

Do not include:

- code evidence,
- file paths,
- line numbers,
- source symbols,
- implementation evidence sections,
- `Logic Coverage` tables,
- `LI-*` IDs.

## Step 5: Capture Handling

Captures are optional for text-first specs. Use them only to clarify screen context.

- Store captures under `outputs/<feature>/captures/`.
- Maintain `outputs/<feature>/capture-index.md` when captures are used.
- Do not block text spec completion on missing captures.

## Step 6: Validation

Run Markdown validation before final delivery.

```powershell
node .\harness\feature-spec\scripts\validate-markdown.mjs `
  --output ".\outputs\<feature>" `
  --spec ".\outputs\<feature>\<feature>-feature-spec.md"
```

Required checks:

- feature spec exists,
- logic inventory exists,
- coverage matrix exists,
- capture index exists when captures are used,
- coverage statuses are present in the internal matrix,
- final feature spec has no evidence blocks or logic coverage sections,
- Korean text is not mojibake.

## Encoding Standard

- Save Markdown as UTF-8.
- Treat PowerShell mojibake as terminal display unless the file itself contains mojibake.
- If generated Korean text contains broken sequences, fix the file before delivery.
