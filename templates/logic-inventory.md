# Logic Inventory: <Feature Name>

이 문서는 최종 기능명세에 누락이 생기지 않도록 사용하는 내부 분석 산출물이다. 코드 위치, 함수명, 내부 ID는 이 문서에만 기록하고 최종 기능명세 본문에는 노출하지 않는다.

## Metadata

| Field | Value |
| --- | --- |
| Project | `<Project name>` |
| Prototype path | `<Prototype path>` |
| Feature keywords | `<keyword 1>, <keyword 2>` |
| Output folder | `outputs/<feature>` |
| Last updated | `<YYYY-MM-DD>` |

## Candidate File Roles

| File | Logic Type | Role | Evidence Count | Notes |
| --- | --- | --- | ---: | --- |
| `<path>` | `<Business / UI / Integration / Unknown>` | `<screen / policy / persistence / pricing / ticket / repair>` | `<count>` | `<notes>` |

## Business Logic Items

서비스 정책, 계산, 이용권, 저장, 수정, 삭제, 예외 처리처럼 화면과 무관하게 지켜져야 하는 규칙을 기록한다.

| ID | Logic Type | Category | Source | Summary | Evidence | Product Meaning |
| --- | --- | --- | --- | --- | --- | --- |
| LI-001 | Business | Pricing | `<file>:<line>` | `<short implementation fact>` | `<code symbol or copy>` | `<what this means for the user or operation>` |

## UI Logic Items

화면 진입, 표시/숨김, 활성/비활성, 선택 상태, 문구, 에러, 모달 흐름처럼 사용자가 화면에서 경험하는 동작을 기록한다.

| ID | Logic Type | Category | Source | Summary | Evidence | Product Meaning |
| --- | --- | --- | --- | --- | --- | --- |
| LI-101 | UI | State | `<file>:<line>` | `<short implementation fact>` | `<code symbol or copy>` | `<what this means on the screen>` |

## Integration Mapping Items

UI 조작이 어떤 비즈니스 규칙을 실행하는지, 또는 비즈니스 규칙이 어떤 화면 상태로 드러나는지 연결한다.

| ID | Business Logic | UI Logic | Mapping Summary | Risk If Missing |
| --- | --- | --- | --- | --- |
| MAP-001 | `LI-001` | `LI-101` | `<relationship>` | `<missed behavior or wrong spec risk>` |

## Category Guide

- `UI`: route, page, modal, data attribute, visible copy, button, input, event entrypoint.
- `State`: mode, selected values, initialized flags, derived flags, modal/form state.
- `Validation`: disabled conditions, limits, required values, empty states, error states.
- `Pricing`: fee, amount, billing, expected price, total calculation.
- `Ticket Usage`: ticket allocation, remaining count, overuse, fallback use.
- `Persistence`: submit, save, update, delete, generated payload, stored entry shape.
- `Repair/Migration`: repair, sync, existing data compatibility.
- `Edge Case`: branch behavior, fallback, exceptional data state.
- `Unknown`: 자동 분류가 불확실한 항목. 반드시 수동 확인한다.

## Assumptions

- `<Assumption>`

## Open Questions

- `<Question>`
