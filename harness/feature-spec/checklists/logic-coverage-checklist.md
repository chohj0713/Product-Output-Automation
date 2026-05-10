# Logic Coverage Checklist

Use this checklist before writing or updating a detailed feature specification.

## Discovery

- [ ] Feature keywords searched across the prototype.
- [ ] UI entrypoints identified: routes, pages, modals, buttons, data attributes.
- [ ] Event handlers identified: click, change, submit, keyboard, modal open/close.
- [ ] State variables identified: form state, modal state, selected values, derived flags.
- [ ] Service/policy functions identified: validation, pricing, ticket usage, persistence, repair.
- [ ] Related screens grouped into case groups when one feature spans multiple flows.

## Logic Inventory

- [ ] Every relevant file has a short role description.
- [ ] Branches and constraints are listed with source evidence.
- [ ] Empty/error/disabled/over-limit states are listed.
- [ ] Calculation and allocation policies are listed.
- [ ] Save/update/delete effects are listed.
- [ ] Unknown product policy is moved to Open Questions.

## Coverage Matrix

- [ ] Every logic inventory item has one status: `Covered`, `Partial`, `Not Covered`, or `Open Question`.
- [ ] Covered items point to a Figma section and spec row.
- [ ] Partial items explain what is missing.
- [ ] Not Covered items are intentional and visible.
- [ ] Open Questions are not presented as confirmed behavior.

## Figma/Markdown

- [ ] Each Figma section has a capture or clearly labeled capture slot.
- [ ] Each numbered spec row has a matching callout.
- [ ] Each callout has a matching spec row.
- [ ] Korean text is readable and not mojibake.
- [ ] Markdown metadata links to Figma URL, capture index, logic inventory, and coverage matrix.
