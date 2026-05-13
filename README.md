# Product Output Automation

PM output automation workspace for Codex.

## Canonical Rule

Use the Codex skill as the primary operating guide:

```text
C:\Users\chohj\.codex\skills\product-output-automation
```

Repo docs are intentionally short to reduce token use.

## Folders

```text
harness/feature-spec/scripts/   analysis and validation scripts
projects/                       project-specific notes
prompts/                        short reusable prompts
templates/                      output templates
workflows/                      compact workflow docs
outputs/<feature>/              feature-specific outputs
```

Feature output shape:

```text
outputs/<feature>/
  internal/
    candidate-files.md
    logic-inventory.md
    logic-inventory.detail.md
    coverage-matrix.md
    coverage-matrix.detail.md
    domain-rule-map.md
    open-questions.md
  human/
    00-feature-summary.md
    platform-map.md
    screen-case-map.md
    policy-table.md
    state-matrix.md
    ui-element-spec.md
    decision-log.md
    event-tracking.md
    figma-card-data.json
    figma-create-canonical-cards.js
    test-scenarios.md
    <feature>-feature-spec.md
    readability-validation.md
    01-default/
    02-selected/
    03-loading/
    04-error/
    05-edgecase/
    06-platform-web/
    07-platform-app/
```

Legacy flat files are still generated at `outputs/<feature>/` for compatibility with older workflows.

## Feature Spec Standard

- Use `human/platform-map.md` to identify configured, modified, displayed, consumed, and validated platforms.
- Use `human/screen-case-map.md` to identify actual screens, screen areas, and UI items.
- Use `human/state-matrix.md`, `human/ui-element-spec.md`, and `human/decision-log.md` before writing the final feature spec.
- Use `human/policy-table.md` only as supporting policy input, not as the final organizing structure.
- Keep open questions in `internal/open-questions.md`.
- Before writing the final spec, ask the user how to handle open questions.
- Do not include screen planning or open questions in the final feature spec.
- Write final specs by actual screen.
- Use this hierarchy by default: `Platform -> Screen -> Screen Area -> UI Item -> Behavior / Exception / State / Data Impact`.
- Final specs use these sections: `Screen Header`, `Context`, `Screen Areas`, `UI Item Spec`, `Screen-level States`, and `Policy Notes`.
- Policies must support visible screen behavior only; do not use `Core Policies` as the organizing structure.
- Do not create generic callout boards without a real screen structure.
- Do not list abstract policies without tying them to visible UI.
- Keep code evidence, file paths, function names, and `LI-*` IDs out of final specs.
- Use summary internal outputs by default. Generate raw detail only with `--detail`.

## Figma Output Standard

- Final Figma output creates Container-only feature-spec sections:
  - platform header frame,
  - `SECTION` per screen/case,
  - numbered frame such as `1`, `2`, `2-1`,
  - exactly one child frame named `Container`,
  - `Container` contains `Title` and numbered `설명` blocks.
- Container descriptions translate the Markdown screen-first spec into concise PM-readable behavior notes.
- Use `MGMCrXQxxIvOkCAAw3bxCq / 77:501` as the canonical card layout reference.
- Generate card-first data before Figma creation:

```powershell
node .\harness\feature-spec\scripts\build-figma-card-output.mjs `
  --feature "<feature>" `
  --output ".\outputs\<feature>" `
  --spec ".\outputs\<feature>\human\<feature>-feature-spec.md"
```

- The command writes `human/figma-card-data.json` and `human/figma-create-canonical-cards.js`.
- Do not create a single `설명 제목` + `설명 본문` summary block; preserve `Title`, repeated `설명`, `Number`, item type labels, bullets, and policy/item color differences.

## Commands

```powershell
node .\harness\feature-spec\scripts\analyze-feature.mjs `
  --project "Schedule Daycare Biz Web" `
  --feature "pickdrop" `
  --prototype "F:\OneDrive\문서\Schedule_Daycare_20260320" `
  --output ".\outputs\pickdrop" `
  --keywords "pickdrop,픽드랍,pickup,dropoff"
```

`--project` should include platform and target user group when known. Examples:

- `Schedule Daycare Biz Web`
- `Schedule Daycare Biz App`
- `Schedule Daycare Customer App`

The harness parses:

- platform type: `Web`, `App`, `Mobile`, `iOS`, `Android`, `웹`, `앱`
- target user group: `Biz`, `Business`, `Admin`, `Customer`, `User`, `Consumer`, `사업자`, `관리자`, `고객`, `사용자`

```powershell
node .\harness\feature-spec\scripts\validate-markdown.mjs `
  --output ".\outputs\pickdrop" `
  --spec ".\outputs\pickdrop\human\pickdrop-reservation-feature-spec.md"
```

## Git Policy

- Do not commit or push automatically.
- Commit and push only when explicitly requested.
- Use Git history for old detailed outputs; do not create archive folders by default.
