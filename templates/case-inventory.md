# JS Case Inventory: <Feature Name>

First-stage output. Generate this before any final feature spec.

## Summary

| Metric | Count |
| --- | ---: |
| JS source files scanned | `<count>` |
| Relevant JS files | `<count>` |
| Case groups | `<count>` |
| Cases | `<count>` |
| Policy gaps | `<count>` |
| Feature profile confidence | `<low/medium/high>` |

## Feature Profile

| Field | Value |
| --- | --- |
| Aliases | `<feature name variants and user-provided keywords>` |
| Search terms | `<specific terms used for JS filtering>` |
| Domain terms | `<terms discovered from files, selectors, and function names>` |

## Case Group

| Case ID | Case | Trigger | Conditions | Expected Behavior | State Changes | Data Impact | UI Selectors | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `<id>` | `<case>` | `<event or branch>` | `<guard conditions>` | `<visible/business behavior>` | `<state mutation>` | `<data impact>` | `<selector>` | `<file:line>` |

## Rules

- Use JS as the source of truth.
- Build `feature-profile.json` first and use it to keep the analysis feature-specific.
- Track event handlers, state mutation, validation guards, mode transitions, submit branches, and pricing/ticket/date logic.
- Use HTML only to clarify a selector label when JS alone is ambiguous.
- Ignore CSS except when a toggled class expresses a product state such as `is-active`, `is-complete`, `is-disabled`, feature-specific mode classes, or `hidden`.
- Do not collapse multiple conditions into one generic case.
