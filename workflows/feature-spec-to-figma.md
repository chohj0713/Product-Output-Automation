# Workflow: Logic Coverage Feature Spec To Figma

## Goal

Create a detailed feature specification from a code-based prototype. The Figma output still follows the reference layout, but the source of truth is the code logic coverage workflow:

1. collect candidate code,
2. create `logic-inventory.md`,
3. create `coverage-matrix.md`,
4. write the Markdown/Figma feature spec,
5. validate missing logic and visual readability.

This workflow is designed to prevent omitted branches, constraints, save effects, pricing rules, ticket usage rules, and edge cases.

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

Search the prototype before writing any spec.

- Search feature keywords, Korean UI copy, data attributes, and related English terms.
- Identify candidate files in `src/pages`, `src/services`, and any feature-specific modules.
- Categorize code evidence into:
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

Every inventory item must include:

- stable ID, for example `LI-001`,
- category,
- source file and line,
- short implementation summary,
- evidence,
- product meaning.

Do not collapse important branches into one vague item. Separate these when they affect behavior:

- UI entry/exit paths,
- selected state and initialization,
- disabled/empty/over-limit conditions,
- pricing and allocation rules,
- save/update payload differences,
- repair or existing-data compatibility,
- fallback behavior.

## Step 3: Coverage Matrix

Create `outputs/<feature>/coverage-matrix.md` using `templates/coverage-matrix.md`.

Every `Logic ID` from the inventory must have exactly one status:

- `Covered`: reflected in the spec as confirmed behavior.
- `Partial`: partly reflected; missing conditions are named.
- `Not Covered`: not reflected; exclusion or follow-up required.
- `Open Question`: cannot be confirmed from code alone.

The matrix must point to the Figma section and spec row when covered.

## Step 4: Feature Spec Draft

Create the feature spec using `templates/feature-spec.md`.

The Figma layout remains:

- section frame: `2160px` wide,
- left capture panel: `1280px` wide,
- right spec panel: `840px` wide,
- gap: `40px`,
- header rows: `상황`, `화면명 + 경로`, `Case`,
- body rows: `P`, `1`, `2`, `3` with matching callouts.

Each section must include:

- capture ID,
- callout list,
- spec header,
- spec body rows,
- `Logic Coverage` table,
- implementation evidence,
- assumptions,
- open questions.

Confirmed behavior, inferred behavior, and unknown behavior must be separated.

## Step 5: Capture Handling

Captures are first-class output assets.

- Store captures under `outputs/<feature>/captures/`.
- Maintain `outputs/<feature>/capture-index.md`.
- Every Figma section must reference a capture ID.
- If no capture exists, create a labeled capture slot/mock and mark the capture `Pending`.
- After placing a capture in Figma, mark it `Placed` or `Replaced`.
- Do not mix captures from different features in one folder.

## Step 6: Validation

Run both Markdown and Figma validation before final delivery.

Markdown validation:

```powershell
node .\harness\feature-spec\scripts\validate-markdown.mjs `
  --output ".\outputs\<feature>" `
  --spec ".\outputs\<feature>\<feature>-feature-spec.md"
```

Required checks:

- feature spec exists,
- logic inventory exists,
- coverage matrix exists,
- capture index exists,
- coverage statuses are present,
- Korean text is not mojibake,
- metadata references Figma URL, capture index, logic inventory, and coverage matrix.

Figma validation:

- every section has one left capture/mock and one right spec table,
- every numbered spec row has a matching left callout,
- every left callout has a matching spec row,
- text wraps inside the table,
- Korean text is not garbled, clipped, overlapped, or hidden,
- real captures are not distorted or cropped in a way that hides the target UI.

## Encoding Standard

- Save Markdown as UTF-8.
- Treat PowerShell mojibake as terminal display unless the file itself contains mojibake.
- If generated Korean text contains `�`, `?쎈`, `?곹`, `?붾`, or similar broken sequences, fix the file before delivery.
- Prefer `Get-Content -Encoding UTF8` when inspecting Markdown in PowerShell.
