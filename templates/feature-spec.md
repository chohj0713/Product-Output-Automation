# Feature Spec: <Feature Name>

Use this template for detailed text-first feature specifications based on internal code logic coverage.

## Output Metadata

| Field | Value |
| --- | --- |
| Project | `<Project name>` |
| Feature output folder | `outputs/<feature>` |
| Capture index | `outputs/<feature>/capture-index.md or N/A` |
| Markdown encoding | UTF-8 |
| Last updated | `<YYYY-MM-DD>` |
| Markdown validation | `<Pending / Passed>` |

## Text Spec Standard

- One section per screen, workflow, or case.
- Each section starts with `상황`, `화면명`, `경로`, and `Case`.
- Body rows use `P`, `1`, `2`, `3` numbering when row references are useful.
- Rows focus on behavior, branches, constraints, persistence impact, assumptions, and open questions.
- The final text does not include code evidence or internal coverage IDs.

## Capture Assets

| Capture ID | File | Required | Spec Section | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| `<capture-id>` | `captures/<file>.png` | Yes | `<Section title>` | `<Pending / Provided / Placed>` | `<state, data, viewport, or replacement notes>` |

## Spec Section

- Section title: `<Number>. <Screen or case name>`
- Capture ID: `<capture-id>`
- Row numbers: `P`, `1`, `2`, `3`

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | `<Feature area and current user situation>` |
| 화면명 | `<Screen or modal name>` |
| 경로 | `<User-facing navigation path or entry point>` |
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
- Do not include code evidence, file paths, line numbers, source symbols, or logic coverage IDs in the final feature spec text.
