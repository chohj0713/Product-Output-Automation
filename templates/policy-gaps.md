# Policy Gaps: <Feature Name>

Second-stage gate. Review and fill this before final output generation.

## Review Status

| Metric | Count |
| --- | ---: |
| Needs Review | `<count>` |
| Confirmed | `<count>` |
| Default Applied | `<count>` |

## Gap Review Table

| Gap ID | Case ID | Type | Question | Why It Matters | Suggested Default | User Decision | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `<gap id>` | `<case id>` | `<policy/state/exception/copy/data>` | `<question>` | `<reason>` | `<default>` | `<fill before final spec>` | `Needs Review` |

## Rules

- Stop after this file when the user has not confirmed missing policy, state, exception, copy, or data behavior.
- Do not guess final PM behavior when the JS case inventory exposes an unresolved decision.
- Use the user's decisions here as the input for final feature spec and Figma output generation.
- Ask the user the highest-impact grouped questions in chat; the user does not need to edit this file manually.
- When the user answers, update `User Decision` and set `Status` to `Confirmed`.
- If the user asks to apply defaults, copy `Suggested Default` into `User Decision` and set `Status` to `Default Applied`.
- Stage 2 can start only when no row remains `Needs Review`.
