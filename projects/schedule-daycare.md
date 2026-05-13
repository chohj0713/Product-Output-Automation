# Schedule Daycare

Prototype:

```text
F:\OneDrive\문서\Schedule_Daycare_20260320
```

## Discovery Hints

- Screens and modal flows: `src/pages`.
- Shared policy, pricing, billing, ticket usage, repair helpers: `src/services`.
- UI entrypoints: `data-*`, `addEventListener`, modal open handlers, button handlers.
- State: form/modal state, selected sets, initialized flags, mode helpers.
- Persistence: submit/save/update, payload building, reservation entries, usage merging.

## Spec Rules

- Build `case-plan.md` before the final spec.
- Build `open-questions.md` before the final spec.
- Ask the user how to handle open questions before final spec writing.
- Do not include case planning or open questions in the final spec.
- Keep main cases to 8 by default.
- Put minor empty, disabled, insufficient-ticket, missing-date, and validation states under the parent case.
- Keep business and UI behavior in the same case row.
- Do not expose source evidence in the final spec.
