# Feature Spec Checklist

## Stage 1: JS Case Inventory

- [ ] `feature-profile.json` exists and passes JSON Schema validation.
- [ ] `case-inventory.json` exists and passes JSON Schema validation.
- [ ] Feature profile confidence is not `low`, or the user has confirmed feature-specific terms.
- [ ] `01-case-inventory.md` exists.
- [ ] Case inventory is JS-first and lists concrete event paths, guards, state mutations, submit branches, and data impact.
- [ ] HTML is used only for selector label clarification.
- [ ] CSS is ignored except when toggled classes represent product state.
- [ ] Cases are split by meaningful condition differences, such as member/date/mode/ticket/limit states.
- [ ] `02-policy-gaps.md` exists.
- [ ] Policy, state, exception, copy, and data gaps are separated for user review.

## Stage 2: Final Output

- [ ] User has filled or confirmed `02-policy-gaps.md`.
- [ ] `03-feature-spec.md` is generated from confirmed cases.
- [ ] Final spec does not expose raw code paths, function names, selectors, or case IDs unless audit detail is requested.
- [ ] Final spec includes behavior, condition, exception/state, and data impact for each confirmed case.
- [ ] Figma final output uses Container-only structure.
- [ ] Figma final output uses canonical node `MGMCrXQxxIvOkCAAw3bxCq / 77:501` as the layout reference.
- [ ] `figma-card-data.json` exists before node creation.
- [ ] `figma-card-data.json` passes JSON Schema validation before script generation.
- [ ] Figma cards preserve `Title`, repeated `설명` blocks, `Number`, bullets, and policy/item color differences.
- [ ] Figma cards do not collapse content into a single `설명 제목` + `설명 본문` block.
- [ ] Validation or JSON failures are corrected by regenerating only the affected case/card, then re-validating.
