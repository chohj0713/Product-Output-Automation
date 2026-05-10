# Figma Feature Spec: 픽드랍 예약 v2

## Output Metadata

| Field | Value |
| --- | --- |
| Figma file name | `[26-XX] 픽드랍 예약` |
| Figma URL | https://www.figma.com/design/WCxDoUASusnVpKd3GWc93R/-26-XX--%ED%94%BD%EB%93%9C%EB%9E%8D-%EC%98%88%EC%95%BD?node-id=9-2 |
| Figma page | 픽드랍 기능명세 v2 |
| Project | Schedule Daycare |
| Feature output folder | `F:\OneDrive\문서\Product Output Automation\outputs\pickdrop` |
| Prototype path | `F:\OneDrive\문서\Schedule_Daycare_20260320` |
| Capture index | `F:\OneDrive\문서\Product Output Automation\outputs\pickdrop\capture-index.md` |
| Capture status | Pending; Figma uses capture slots/wire mocks |
| Markdown encoding | UTF-8 |
| Last updated | 2026-05-09 |
| Readability validation | Structure passed; visual capture replacement pending |

## Figma Section

- Section title: `1. 픽드랍 예약 진입`
- Capture ID: `pickdrop-entry`
- Left side: 예약 등록 모달 기본 상태
- Left side annotations: `P`, `1`, `2`, `3`, `4`
- Right side: specification table

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 서비스 예약 등록 중 픽드랍 예약을 이어서 진행 |
| 화면명 | 예약 등록 모달 |
| 경로 | `src/pages/reservation.js` |
| Case | `픽드랍까지 예약` 버튼으로 픽드랍 모드 진입 |

## Spec Rows

| No. | Target | Spec |
| --- | --- | --- |
| P | 예약 모드 정책 | 기본 예약 모달은 `is-pickdrop` 클래스가 없을 때 서비스 예약 모드로 동작하고, 픽드랍 진입 시 같은 모달을 픽드랍 예약 모드로 전환한다. |
| 1 | `[Input] 회원` | 회원 선택 후 회원 보유 이용권과 예약 가능 수를 로드한다. 회원 초기화 시 픽드랍 모드는 해제된다. |
| 2 | `[Option] 서비스/클래스` | 기본 예약 단계의 서비스 이용권 선택은 픽드랍 모드 진입 시 `schoolSelections`에 보관된다. |
| 3 | `[Calendar] 서비스 날짜` | `selectedDates`가 서비스 예약 날짜로 유지되며, 픽드랍 모드 최초 진입 시 `pickdropDates`의 초기값으로 복사된다. |
| 4 | `[Button] 픽드랍까지 예약` | 기본 상태에서 클릭하면 `setPickdropMode(true)`를 실행해 픽드랍 단계로 전환한다. 픽드랍 상태에서 클릭하면 픽드랍 포함 등록을 실행한다. |

## Implementation Evidence

- `src/pages/reservation.js:532` `setPickdropMode(enabled)`
- `src/pages/reservation.js:639` `selectedDates` to `pickdropDates`
- `src/pages/reservation.js:2095` `data-reservation-pickdrop-toggle`

## Assumptions

- 실제 화면 캡처가 없을 경우 Figma 좌측 화면은 와이어 캡처로 대체한다.

## Open Questions

- 픽드랍 모드의 보조 버튼명을 현재처럼 `등록`으로 유지할지, `이전`으로 바꿀지 확인이 필요하다.

---

## Figma Section

- Section title: `2. 픽드랍 옵션 및 날짜 선택`
- Capture ID: `pickdrop-option-date`
- Left side: 픽드랍 예약 모드 화면
- Left side annotations: `P`, `1`, `2`, `3`, `4`, `5`
- Right side: specification table

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 픽드랍 예약에 사용할 픽업/드랍 옵션과 날짜 선택 |
| 화면명 | 픽드랍 예약 모드 |
| 경로 | `src/pages/reservation.js`, `src/services/reservation-modal-helpers.js` |
| Case | 픽업/드랍 복수 선택 및 픽드랍 날짜 선택 |

## Spec Rows

| No. | Target | Spec |
| --- | --- | --- |
| P | 픽드랍 범위 | 픽드랍 모드의 서비스 타입은 `pickdrop`으로 해석한다. 일반 서비스의 클래스 선택과 별도로 픽드랍 날짜와 픽드랍 이용권을 관리한다. |
| 1 | `[Progress] 단계` | 픽드랍 진입 시 1단계는 완료 상태, 2단계는 활성 상태로 표시한다. |
| 2 | `[Option] 픽업` | 픽업 체크 시 `formState.pickdrops`에 `pickup`을 추가하고 금액/버튼 상태를 갱신한다. |
| 3 | `[Option] 드랍` | 드랍 체크 시 `formState.pickdrops`에 `dropoff`를 추가하고 금액/버튼 상태를 갱신한다. |
| 4 | `[Calendar] 픽드랍 날짜` | 픽드랍 모드에서 날짜 클릭은 `pickdropDates`를 토글한다. 사용자가 직접 변경하면 자동 초기화 상태를 덮어쓴다. |
| 5 | `[Ticket] 픽드랍 이용권` | 픽드랍 모드에서만 `type === "pickdrop"` 이용권 목록을 노출한다. 사용 가능한 이용권이 없으면 빈 상태 문구를 표시한다. |

## Implementation Evidence

- `src/services/reservation-modal-helpers.js` `resolveReservationModalScope`
- `src/pages/reservation.js:707` `syncPickdropTickets`
- `src/pages/reservation.js:2219` 픽드랍 옵션 change handler
- `src/pages/reservation.js:2268` 픽드랍 모드 날짜 toggle

## Assumptions

- 픽업과 드랍은 독립 체크 가능하며, 둘 다 선택하면 왕복으로 계산한다.

## Open Questions

- 픽업만/드랍만 선택한 편도 예약을 결제 상세에서 같은 `편도`로 표시할지, `픽업 편도`/`드랍 편도`로 구분할지 확인이 필요하다.

---

## Figma Section

- Section title: `3. 결제 및 이용권 차감`
- Capture ID: `pickdrop-payment`
- Left side: 우측 금액/결제 영역
- Left side annotations: `P`, `1`, `2`, `3`, `4`
- Right side: specification table

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 픽드랍 선택 결과를 금액과 이용권 차감으로 반영 |
| 화면명 | 예약 등록 모달 결제 영역 |
| 경로 | `src/services/pickdrop-policy.js`, `src/services/ticket-reservation-service.js`, `src/services/reservation-date-fee.js` |
| Case | 편도/왕복 금액 계산 및 이용권 차감 |

## Spec Rows

| No. | Target | Spec |
| --- | --- | --- |
| P | 계산 정책 | 픽업 또는 드랍 중 하나만 있으면 편도, 픽업과 드랍이 모두 있으면 왕복으로 계산한다. |
| 1 | `[Fee] 예상 금액` | 가격표의 `serviceType === "pickdrop"` 항목에서 편도/왕복 가격을 찾아 날짜별 금액을 계산한다. |
| 2 | `[Ticket] 편도 차감` | 편도 예약은 편도 이용권 1회를 우선 차감한다. 편도 이용권이 없으면 왕복 이용권 1회를 대체 차감한다. |
| 3 | `[Ticket] 왕복 차감` | 왕복 예약은 왕복 이용권 1회를 우선 차감한다. 왕복 이용권이 부족하면 편도 이용권 2회를 차감한다. |
| 4 | `[Submit] 예약 저장` | 픽드랍 포함 등록 시 서비스 날짜와 픽드랍 날짜를 합쳐 `reservation.dates`를 생성한다. 서비스 날짜에 없는 픽드랍 날짜도 별도 엔트리로 추가한다. |

## Implementation Evidence

- `src/services/pickdrop-policy.js:28` `getPickdropCountType`
- `src/services/ticket-reservation-service.js:92` `buildPickdropUsagePlan`
- `src/pages/reservation.js:1823` 픽드랍 usage plan 생성
- `src/pages/reservation.js:1909` 픽드랍 단독 날짜 엔트리 추가

## Assumptions

- 현재 구현은 픽드랍 초과 차감 가능성을 UI에 표시할 수 있으나, 차단 정책은 별도 확정이 필요하다.

## Open Questions

- 픽드랍 이용권 초과 상태에서 등록을 허용할지, 확인 모달 또는 차단 토스트를 추가할지 결정이 필요하다.

---

## Figma Section

- Section title: `4. 호텔링 연계 픽드랍`
- Capture ID: `hoteling-pickdrop`
- Left side: 호텔링 예약 모달의 픽드랍 옵션/결제 영역
- Left side annotations: `P`, `1`, `2`, `3`
- Right side: specification table

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 호텔링 예약에 픽드랍을 함께 포함 |
| 화면명 | 호텔링 예약 모달 |
| 경로 | `src/pages/hotels.html`, `src/pages/hotels.js` |
| Case | 호텔링 예약의 픽업/드랍 옵션과 픽드랍 이용권 반영 |

## Spec Rows

| No. | Target | Spec |
| --- | --- | --- |
| P | 호텔링 연계 | 호텔링 예약도 픽업/드랍 옵션, 픽드랍 금액, 픽드랍 이용권 영역을 별도로 가진다. |
| 1 | `[Option] 픽드랍` | 호텔링 모달에서 픽업/드랍 체크박스를 제공하고 선택 변경 시 `modalState.pickdrops`를 갱신한다. |
| 2 | `[Fee] 픽드랍 금액` | 호텔링 금액과 별도로 픽드랍 금액 세그먼트를 표시한다. |
| 3 | `[Ticket] 픽드랍 이용권` | 호텔링 이용권과 픽드랍 이용권을 분리해 표시하고 저장 시 픽드랍 usage를 재계산한다. |

## Implementation Evidence

- `src/pages/hotels.html` 픽드랍 옵션/금액/이용권 영역
- `src/pages/hotels.js` `buildPickdropUsagePlan`
- `src/services/pickdrop-usage-repair-service.js`

## Assumptions

- 호텔링 연계는 이번 명세에서 보조 케이스로 다루며, 주 기능은 일반 예약 모달의 픽드랍 예약이다.

## Open Questions

- 호텔링 왕복 차감 기준 날짜가 체크인/체크아웃 양일인지, 대표 날짜 1회인지 정책 확인이 필요하다.
