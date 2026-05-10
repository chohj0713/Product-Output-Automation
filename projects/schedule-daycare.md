# Schedule Daycare

## Project Path

```text
F:\OneDrive\문서\Schedule_Daycare_20260320
```

## Product Summary

Code-based prototype for daycare scheduling, reservation, ticket, hoteling, and operational workflows.

## Primary Users

- 관리자
- 교사
- 보호자

## Output Folders

Use feature-scoped folders for feature specs, captures, logic inventory, coverage matrix, readability reports, and related artifacts.

```text
F:\OneDrive\문서\Product Output Automation\outputs\<feature>
```

Recommended feature folder structure:

```text
outputs\<feature>\
  candidate-files.md
  logic-inventory.md
  coverage-matrix.md
  open-questions.md
  <feature>-feature-spec.md
  capture-index.md
  readability-validation.md
  captures\
    01-<case>.png
    02-<case>.png
```

## Project-Specific Discovery Rules

- Main screens and modal flows live under `src/pages`.
- Shared policies, calculations, ticket usage, billing, and repair helpers live under `src/services`.
- UI event entrypoints are usually discoverable through `data-*`, `addEventListener`, modal open handlers, and button handlers.
- State is usually held in `formState`, `modalState`, selected sets, initialized flags, and derived mode helpers.
- Save and persistence logic usually includes `submit`, `save`, `update`, payload building, reservation entry creation, or usage merging.
- Pricing logic usually includes `fee`, `price`, `amount`, `billing`, `expected`, `total`.
- Ticket logic usually includes `ticket`, `usage`, `allocation`, `remaining`, `count`, `reservable`.
- Repair and compatibility logic usually includes `repair`, `sync`, `migration`, or existing detail update flows.
- If a feature spans multiple flows, split the spec into case groups. Example: 픽드랍 has general reservation and hoteling-related cases.

## Codex Instructions

- Read the prototype code before creating feature specs.
- Use the user's requested feature as the boundary.
- Start detailed specs with `logic-inventory.md` and `coverage-matrix.md`.
- Include only behavior supported by code or explicitly requested by the user.
- Put uncertain or missing behavior in `open-questions.md` and the spec `Open Questions`.
- Save intermediate Markdown outputs under the feature output folder.
- Track screen captures in `capture-index.md`.
- Store feature-specific screenshots under `captures/`.
- Use Figma for feature specification outputs when requested.
- Use Notion for QA test case tables when requested.
