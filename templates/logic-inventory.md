# Logic Inventory: <Feature Name>

## Metadata

| Field | Value |
| --- | --- |
| Project | `<Project name>` |
| Prototype path | `<Prototype path>` |
| Feature keywords | `<keyword 1>, <keyword 2>` |
| Output folder | `outputs/<feature>` |
| Last updated | `<YYYY-MM-DD>` |

## Candidate File Roles

| File | Role | Evidence Count | Notes |
| --- | --- | ---: | --- |
| `<path>` | `<UI / State / Pricing / Ticket Usage / Persistence / Repair>` | `<count>` | `<notes>` |

## Logic Items

| ID | Category | Source | Summary | Evidence | Product Meaning |
| --- | --- | --- | --- | --- | --- |
| LI-001 | UI | `<file>:<line>` | `<short implementation fact>` | `<code symbol or copy>` | `<what this means for the user or operation>` |

## Category Guide

- `UI`: route, page, modal, data attribute, visible copy, button, input, event entrypoint.
- `State`: mode, selected values, initialized flags, derived flags, modal/form state.
- `Validation`: disabled conditions, limits, required values, empty states, error states.
- `Pricing`: fee, amount, billing, expected price, total calculation.
- `Ticket Usage`: ticket allocation, remaining count, overuse, fallback use.
- `Persistence`: submit, save, update, delete, generated payload, stored entry shape.
- `Repair/Migration`: repair, sync, existing data compatibility.
- `Edge Case`: branch behavior, fallback, exceptional data state.

## Assumptions

- `<Assumption>`

## Open Questions

- `<Question>`
