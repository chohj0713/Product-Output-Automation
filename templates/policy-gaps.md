# Policy Gaps: <Feature Name>

Second-stage gate. Review and fill this before final output generation.

| Gap ID | Case ID | Type | Question | Why It Matters | Suggested Default | User Decision |
| --- | --- | --- | --- | --- | --- | --- |
| `<gap id>` | `<case id>` | `<policy/state/exception/copy/data>` | `<question>` | `<reason>` | `<default>` | `<fill before final spec>` |

## Rules

- Stop after this file when the user has not confirmed missing policy, state, exception, copy, or data behavior.
- Do not guess final PM behavior when the JS case inventory exposes an unresolved decision.
- Use the user's decisions here as the input for final feature spec and Figma output generation.
