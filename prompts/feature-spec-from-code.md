# Prompt: JS Case Inventory From Code

Use `product-js-case-inventory`.

Project: `<Project Name>`
Feature: `<Feature Name>`
Prototype: `<Prototype Path>`

## Objective

Do not start with screens. Build a JS-first case inventory for the feature.

## Stage 1 Required Output

1. `case-inventory.json`
2. `01-case-inventory.md`
3. `02-policy-gaps.md`

Stop after Stage 1 and ask the user to fill or confirm policy, state, exception, copy, and data gaps.

## JS-first Analysis Rules

- Read JS first.
- Track event handlers, state mutation, validation guards, mode transitions, submit/save/delete branches, pricing logic, ticket logic, date logic, and service calls.
- Use HTML only when a selector label cannot be understood from JS.
- Ignore CSS except when a class toggle is the product state itself, such as `is-active`, `is-complete`, `is-disabled`, `is-pickdrop`, or `hidden`.
- Split cases by meaningful branch differences.

## Case Shape

Each case must include:

- Trigger
- Conditions
- Expected behavior
- State changes
- Data impact
- UI selectors
- Source references
- Policy gap references

## Stage 2 Required Output

Only after user confirmation, route to `product-spec-output-generator`:

1. `03-feature-spec.md`
2. `figma-card-data.json`
3. `figma-create-canonical-cards.js`

## Prohibited

- Do not generate final feature spec before policy gaps are reviewed.
- Do not organize the first output around screens.
- Do not collapse multiple JS branches into one generic case.
- Do not expose raw code paths, function names, selectors, or case IDs in final PM-facing spec unless audit detail is requested.
