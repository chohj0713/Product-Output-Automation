# Case Plan: 픽드랍 예약

## Metadata

| Field | Value |
| --- | --- |
| Project | Schedule Daycare |
| Feature | 픽드랍 예약 |
| Logic inventory | `outputs/pickdrop/logic-inventory.md` |
| Last updated | 2026-05-10 |

## Case Selection Rules

- Default maximum: 8 main cases.
- Hard maximum: 12 main cases unless explicitly approved.
- A main case should represent a distinct user goal, workflow, save result, or policy boundary.
- Edge cases should be grouped under the nearest parent case.
- Create a separate case for an edge case only when it changes the user goal, screen flow, save result, or responsible policy owner.

## Final Case List

| Case ID | Case Name | User Goal | Business Scope | UI Scope | Included Edge Cases | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| C-01 | 픽드랍 목록 조회 | 날짜별 픽업/하원 대상자를 확인한다. | 날짜 기준 조회, 픽업/하원 구분 | 날짜 이동, 필터, 빈 상태 | 대상 없음, 필터 조합 없음 | High |
| C-02 | 일반 예약 중 픽드랍 추가 | 일반 예약 등록 중 픽드랍을 함께 예약한다. | 모드 전환, 저장 분기 | 단계 표시, 진입 버튼, 입력 영역 | 서비스 날짜 없음, 모드 해제 | High |
| C-03 | 픽드랍 옵션/날짜 선택 | 이동 유형과 이용 날짜를 확정한다. | 편도/왕복 판정, 날짜 우선순위 | 옵션 선택, 날짜 선택, 선택 유지 | 옵션 미선택, 날짜 미선택, 가능 횟수 초과 | High |
| C-04 | 픽드랍 금액 계산 | 예상 금액과 합계 반영을 확인한다. | 편도/왕복 금액, 합계 반영 | 금액 표시, 즉시 갱신 | 가격 정보 없음, 금액 0원 | High |
| C-05 | 픽드랍 이용권 차감 | 이용권 차감 계획을 확인한다. | 편도/왕복 차감, 부족 정책 | 후보 표시, 잔여 수량, 부족 안내 | 이용권 없음, 부족, 대체 차감 | High |
| C-06 | 예약 저장 | 일반 예약과 픽드랍 예약을 정확히 저장한다. | 병합 저장, 별도 생성, 저장 차단 | 저장 버튼, 완료/실패 안내 | 겹치는 날짜, 독립 날짜, 저장 실패 | High |
| C-07 | 상세 조회 및 수정 | 저장된 픽드랍 정보를 확인하고 수정한다. | 기존값 복원, 재계산, 이력 유지 | 상세 영역, 수정 후보, 불일치 상태 | 기존 이용권 불일치 | Medium |
| C-08 | 호텔링 연계 | 호텔링 일정에 픽드랍을 연결한다. | 체크인/체크아웃 기준, 금액/이용권 분리 | 호텔링 입력, 상세 수정 | 왕복 차감 기준 미확정 | Medium |

## Dropped Or Grouped Cases

| Candidate ID | Decision | Reason |
| --- | --- | --- |
| CC-09 | Grouped under C-05 | 이용권 부족은 이용권 차감 케이스의 예외 상태다. |
| CC-10 | Grouped under C-04 | 가격 정보 없음은 금액 계산 케이스의 예외 상태다. |
| CC-11 | Grouped under C-03 | 옵션/날짜 미선택은 선택 케이스의 예외 상태다. |
| CC-12 | Grouped under C-07 | 기존 이용권 불일치는 상세 수정 케이스의 예외 상태다. |
