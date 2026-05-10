# Feature Spec: <Feature Name>

Use this template for detailed text-first feature specifications. The final spec separates business logic from UI logic and does not expose internal code evidence.

## Output Metadata

| Field | Value |
| --- | --- |
| Project | `<Project name>` |
| Feature output folder | `outputs/<feature>` |
| Capture index | `outputs/<feature>/capture-index.md or N/A` |
| Markdown encoding | UTF-8 |
| Last updated | `<YYYY-MM-DD>` |
| Markdown validation | `<Pending / Passed>` |

## Text Spec Standard

- One section per screen, workflow, policy group, or case.
- Each section separates `Business Logic` and `UI Logic`.
- Use `Integration Notes` when UI behavior triggers or depends on business rules.
- The final text does not include code evidence, file paths, line numbers, source symbols, or internal coverage IDs.
- Put uncertain behavior in `Open Questions`; do not present it as confirmed behavior.

## Capture Assets

| Capture ID | File | Required | Spec Section | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| `<capture-id>` | `captures/<file>.png` | Yes | `<Section title>` | `<Pending / Provided / Placed>` | `<state, data, viewport, or replacement notes>` |

## Section Template

### `<Number>. <Screen, workflow, or policy group>`

#### Context

| Field | Value |
| --- | --- |
| 상황 | `<Feature area and current user situation>` |
| 화면명 | `<Screen or modal name, or N/A for policy-only sections>` |
| 경로 | `<User-facing navigation path or entry point>` |
| Case | `<Specific case or scenario name>` |

#### Business Logic

| No. | 항목 | 명세 |
| --- | --- | --- |
| B-P | `<shared policy>` | `<policy, branch, constraint, calculation, persistence, exception>` |
| B-1 | `<business rule>` | `<confirmed behavior>` |

#### UI Logic

| No. | 항목 | 명세 |
| --- | --- | --- |
| U-P | `<shared UI state>` | `<screen behavior, display, enabled/disabled state, copy, error state>` |
| U-1 | `[Input / Option / Button / State / Fee / Ticket / Calendar] <Name>` | `<user-facing behavior>` |

#### Integration Notes

| No. | 연결 | 명세 |
| --- | --- | --- |
| I-1 | `<UI action -> business rule>` | `<how a UI change affects calculation, validation, persistence, or status>` |

## Assumptions

- `<Assumption>`

## Open Questions

### Product Policy

- `<Question>`

### UX Copy

- `<Question>`

### Operations

- `<Question>`

## Row Writing Rules

- `Business Logic`에는 정책, 계산, 차감, 저장, 수정, 삭제, 제약 조건, 예외 조건을 쓴다.
- `UI Logic`에는 화면 진입, 노출/숨김, 선택, 입력, 버튼, 비활성화, 안내 문구, 오류 문구를 쓴다.
- `Integration Notes`에는 UI 조작이 어떤 정책 계산이나 저장 결과로 이어지는지 쓴다.
- Target labels may use bracketed UI type when useful: `[Input]`, `[Option]`, `[Button]`, `[Title]`, `[Modal]`, `[Toast]`, `[Table]`, `[Tab]`, `[State]`, `[Fee]`, `[Ticket]`.
- Write each row as clear product behavior, not implementation commentary.
- Do not include code evidence, file paths, line numbers, source symbols, or logic coverage IDs in the final feature spec text.
