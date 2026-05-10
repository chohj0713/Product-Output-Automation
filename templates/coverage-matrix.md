# Coverage Matrix: <Feature Name>

이 문서는 내부 검증용이다. 최종 기능명세에 코드 근거, 파일 경로, 함수명, `LI-*` ID를 노출하지 않고도 누락 여부를 확인하기 위해 사용한다.

## Metadata

| Field | Value |
| --- | --- |
| Feature spec | `<feature-spec.md or Figma URL>` |
| Logic inventory | `outputs/<feature>/logic-inventory.md` |
| Capture index | `outputs/<feature>/capture-index.md` |
| Last updated | `<YYYY-MM-DD>` |

## Status Values

- `Covered`: 기능명세에 확정 동작으로 반영됨.
- `Partial`: 일부만 반영됨. 빠진 조건이나 예외를 Notes에 기록해야 함.
- `Not Covered`: 아직 기능명세에 반영되지 않음.
- `Open Question`: 코드만으로 제품 정책을 확정할 수 없음.

## Matrix

| Logic ID | Logic Type | Category | Source | Summary | Status | Spec Area | Spec Row | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LI-001 | Business | Pricing | `<file>:<line>` | `<logic summary>` | Covered | `<Business Logic / UI Logic / Open Questions>` | `<P / 1 / 2>` | `<coverage note>` |

## Business/UI Balance Review

- [ ] Business Logic 항목이 정책, 계산, 저장, 예외 조건으로 충분히 분리되어 있다.
- [ ] UI Logic 항목이 화면 진입, 표시, 선택, 활성/비활성, 에러 상태로 충분히 분리되어 있다.
- [ ] UI 조작이 Business Logic을 실행하는 지점은 Integration Mapping으로 연결되어 있다.
- [ ] `Not Covered` 항목은 명세 추가 또는 제외 사유가 기록되어 있다.
- [ ] `Partial` 항목은 빠진 조건이 구체적으로 기록되어 있다.
- [ ] `Open Question` 항목은 별도 질문 목록으로 분리되어 있다.
