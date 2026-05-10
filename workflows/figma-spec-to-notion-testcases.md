# Workflow: Figma Spec To Notion Test Cases

## Goal

Convert a Figma or written feature specification into QA-ready Notion test cases.

## Steps

1. Read the source feature specification.
2. Extract flows, states, validations, permissions, and edge cases.
3. Generate test cases using `templates/test-case-table.md`.
4. Save the draft in `outputs/<project>/`.
5. Create or update the Notion test case table.

## Notion Table Columns

- Feature
- Test Case ID
- Scenario
- Preconditions
- Steps
- Expected Result
- Priority
- Type
- Status
