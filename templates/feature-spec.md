# Figma Feature Spec: <Feature Name>

Use this template for detailed Figma feature specifications based on code logic coverage.

## Output Metadata

| Field | Value |
| --- | --- |
| Figma file name | `<Figma file name>` |
| Figma URL | `<Figma URL or TBD>` |
| Figma page | `<Page name>` |
| Project | `<Project name>` |
| Feature output folder | `outputs/<feature>` |
| Prototype path | `<Prototype path>` |
| Capture index | `outputs/<feature>/capture-index.md` |
| Logic inventory | `outputs/<feature>/logic-inventory.md` |
| Coverage matrix | `outputs/<feature>/coverage-matrix.md` |
| Markdown encoding | UTF-8 |
| Last updated | `<YYYY-MM-DD>` |
| Readability validation | `<Pending / Structure passed / Visual passed>` |

## Figma Layout Standard

- One Figma section/frame per screen or case.
- Section frame width: `2160px`.
- Left capture panel: `1280px` wide.
- Right spec panel: `840px` wide.
- Gap between capture and spec panel: `40px`.
- Left panel contains the screen/modal capture and callout overlays.
- Right panel follows the reference spec structure:
  - Header frame: `120px` high.
  - Header row 1: `상황`, full width `840px`, height `40px`.
  - Header row 2: `화면명` width `360px` + `경로` width `480px`, height `40px`.
  - Header row 3: `Case`, full width `840px`, height `40px`.
  - Body rows: stacked `설명` rows.
  - Each body row has a `Number` badge and a freeform description block.

## Capture Assets

| Capture ID | File | Required | Figma Section | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| `<capture-id>` | `captures/<file>.png` | Yes | `<Section title>` | `<Pending / Provided / Placed>` | `<state, data, viewport, or replacement notes>` |

## Figma Section

- Section title: `<Number>. <Screen or case name>`
- Capture ID: `<capture-id>`
- Left side: `<target screen/modal capture>`
- Left side annotations: `P`, `1`, `2`, `3`
- Right side: reference spec panel

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | `<Feature area and current user situation>` |
| 화면명 | `<Screen or modal name>` |
| 경로 | `<Navigation path, route, or implementation path>` |
| Case | `<Specific case or scenario name>` |

## Spec Body Rows

Use `P` for policy/global notes that affect the whole screen. Use numbered rows for UI elements, options, inputs, buttons, state changes, validation, errors, and actions. Numbered rows must match the left-side Figma callouts.

### P

- Target: `<Policy or shared context title>`
- Status: `<Confirmed / Inferred / Needs confirmation>`
- Branch/condition: `<when this policy applies>`
- Constraint: `<limit, disabled state, required value, or none>`
- Persistence impact: `<none / payload field / saved entry / update behavior>`
- Lines:
  - `<Global rule, unchanged policy, compatibility note, or implemented constraint>`
  - `<Additional policy line if needed>`
- Evidence:
  - `<file>:<line> <symbol or code fact>`

### 1

- Target: `[Input / Option / Button / State / Fee / Ticket / Calendar] <Name>`
- Status: `<Confirmed / Inferred / Needs confirmation>`
- Branch/condition: `<condition that changes this behavior>`
- Constraint: `<validation, disabled condition, limit, or empty state>`
- Persistence impact: `<none / payload field / saved entry / update behavior>`
- Lines:
  - `<Changed behavior or implementation status>`
  - `<Default, validation, disabled behavior, success/failure behavior>`
  - `<Error or edge case copy if known>`
- Evidence:
  - `<file>:<line> <symbol or code fact>`

## Logic Coverage

Every section must map spec rows back to `logic-inventory.md`.

| Spec Row | Logic IDs | Coverage Status | Notes |
| --- | --- | --- | --- |
| P | `LI-001, LI-002` | Covered | `<coverage note>` |
| 1 | `LI-003` | Partial | `<missing branch or follow-up>` |

## Implementation Evidence

- `<Route/component/state/data source/copy discovered in the prototype>`

## Assumptions

- `<Assumption>`

## Open Questions

- `<Question>`

## Row Writing Rules

- Target labels should use bracketed UI type when useful: `[Input]`, `[Option]`, `[Button]`, `[Title]`, `[Modal]`, `[Toast]`, `[Table]`, `[Tab]`, `[State]`, `[Fee]`, `[Ticket]`.
- Start each row with the user-visible object name or exact UI/state area.
- Write row body as multiple short lines, not one dense paragraph.
- For options, include default, selection method, disabled condition, and option-by-option behavior when applicable.
- For actions, separate activation condition, success behavior, failure behavior, and exact error copy when known.
- Include implementation status inline only when it changes interpretation.
- Put inferred or uncertain behavior in `Assumptions` or `Open Questions`; do not present it as confirmed.
