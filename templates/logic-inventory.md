# Logic Inventory: <Feature Name>

Summary-only internal coverage file. Use `analyze-feature.mjs --detail` for raw rows.

Structured JSON must also be written to `internal/logic-inventory.json` and validated against `harness/feature-spec/schemas/logic-inventory.schema.json`.

## Summary

| Metric | Value |
| --- | ---: |
| Candidate files | `<count>` |
| Inventory items sampled | `<count>` |

## Logic Types

| Logic Type | Count |
| --- | ---: |
| Business | `<count>` |
| UI | `<count>` |
| Integration | `<count>` |
| Unknown | `<count>` |

## DOM Selector Mapping Table

This table is required. It maps code-level DOM selectors to the PM-facing screen area or UI item that may need an update when the prototype changes.

| DOM Selector | Operation | Source | Spec Mapping Hint |
| --- | --- | --- | --- |
| `<selector>` | `<render / event-binding / state-update / input-read-write>` | `<file:line>` | `<Screen Area / UI Item>` |

## Top Candidate Files

| File | Matches | Role |
| --- | ---: | --- |
| `<path>` | `<count>` | `<role>` |
