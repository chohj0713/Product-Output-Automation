# Business/UI Logic Checklist

Use this checklist before writing a detailed feature spec.

## Business Logic

- [ ] Product policy is separated from screen behavior.
- [ ] Pricing, amount, fee, or total calculation rules are listed.
- [ ] Ticket, usage, count, allocation, or remaining-count rules are listed.
- [ ] Save, update, delete, submit, or payload effects are listed.
- [ ] Required values, blocked states, over-limit states, and empty states are listed.
- [ ] Exceptional or compatibility behavior is listed.

## UI Logic

- [ ] Screen, modal, or workflow entry points are listed.
- [ ] Option, input, checkbox, tab, and button behavior is listed.
- [ ] Visible, hidden, enabled, disabled, selected, and default states are listed.
- [ ] Empty, loading, error, toast, and confirmation states are listed.
- [ ] User-facing copy questions are separated from policy questions.

## Integration Mapping

- [ ] Each important UI action has a connected business rule.
- [ ] Each important business rule has a visible UI effect or a stated background effect.
- [ ] Screen-only behavior is not mistaken for product policy.
- [ ] Background policy is not omitted because it has no visible UI.
- [ ] Open questions are classified as product policy, UX copy, or operations.
