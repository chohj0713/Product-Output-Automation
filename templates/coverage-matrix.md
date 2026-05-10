# Coverage Matrix: <Feature Name>

## Metadata

| Field | Value |
| --- | --- |
| Feature spec | `<feature-spec.md or Figma URL>` |
| Logic inventory | `outputs/<feature>/logic-inventory.md` |
| Capture index | `outputs/<feature>/capture-index.md` |
| Last updated | `<YYYY-MM-DD>` |

## Status Values

- `Covered`: 명세에 확정 동작으로 반영됨.
- `Partial`: 일부만 반영됨. 빠진 조건을 Notes에 적는다.
- `Not Covered`: 아직 명세에 반영되지 않음.
- `Open Question`: 코드만으로 제품 정책을 확정할 수 없음.

## Matrix

| Logic ID | Category | Source | Summary | Status | Figma Section | Spec Row | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| LI-001 | UI | `<file>:<line>` | `<logic summary>` | Covered | `<section title>` | `<P / 1 / 2>` | `<coverage note>` |

## Required Review

- [ ] `Not Covered` 항목을 명세에 추가하거나 제외 사유를 기록했다.
- [ ] `Partial` 항목의 누락 조건을 보강했다.
- [ ] `Open Question` 항목은 별도 질문 목록으로 분리했다.
- [ ] Figma 콜아웃과 Spec Row가 일치한다.
