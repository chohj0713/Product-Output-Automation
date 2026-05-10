# Figma Feature Spec: 픽드랍 예약 v3

## Output Metadata

| Field | Value |
| --- | --- |
| Figma file name | `[26-XX] 픽드랍 예약` |
| Figma URL | https://www.figma.com/design/WCxDoUASusnVpKd3GWc93R/-26-XX--%ED%94%BD%EB%93%9C%EB%9E%8D-%EC%98%88%EC%95%BD?node-id=14-2 |
| Figma page | 픽드랍 기능명세 v3 |
| Project | Schedule Daycare |
| Feature output folder | `F:\OneDrive\문서\Product Output Automation\outputs\pickdrop` |
| Prototype path | `F:\OneDrive\문서\Schedule_Daycare_20260320` |
| Capture index | `F:\OneDrive\문서\Product Output Automation\outputs\pickdrop\capture-index.md` |
| Capture status | 3 placed, 1 pending |
| Markdown encoding | UTF-8 |
| Last updated | 2026-05-09 |
| Readability validation | Structure passed; visual capture replacement partially pending |

## Capture Assets

| Capture ID | File | Required | Figma Section | Notes |
| --- | --- | --- | --- | --- |
| pickdrop-entry | `captures/screen_modal_pickdrop_list.png` | Yes | 1. 픽드랍 예약 진입 | Figma v3에 프리뷰 배치 완료 |
| pickdrop-option-date | `captures/screen_modal_booking_step_2_pickdrop.png` | Yes | 2. 픽드랍 옵션 및 날짜 선택 | Figma v3에 프리뷰 배치 완료 |
| pickdrop-payment | `captures/screen_booking_detail.png` | Yes | 3. 결제 및 이용권 차감 | Figma v3에 프리뷰 배치 완료 |
| hoteling-pickdrop | `captures/04-hoteling-pickdrop.png` | Optional | 4. 호텔링 연계 픽드랍 | 캡처 필요 |

---

## Figma Section

- Section title: `1. 픽드랍 예약 진입`
- Capture ID: `pickdrop-entry`
- Left side: 예약 등록 모달의 픽드랍 진입 화면
- Left side annotations: `P`, `1`, `2`
- Right side: reference spec panel

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 서비스 예약 등록 중 픽드랍 예약을 이어서 진행 |
| 화면명 | 예약 등록 모달 |
| 경로 | `src/pages/reservation.js` |
| Case | `픽드랍까지 예약` 버튼으로 픽드랍 모드 진입 |

## Spec Body Rows

### P

- Target: 예약 모드 전환 정책
- Lines:
  - 기본 예약 모달은 서비스 예약 모드로 시작한다.
  - `픽드랍까지 예약`을 선택하면 같은 모달 안에서 `is-pickdrop` 모드로 전환한다.
  - 픽드랍 모드에서는 서비스 예약 선택값을 보존하고 픽드랍 전용 날짜/이용권 선택으로 범위를 바꾼다.

### 1

- Target: `[Button] 픽드랍까지 예약`
- Lines:
  - 기본 예약 상태에서 버튼을 누르면 `setPickdropMode(true)`가 실행된다.
  - 픽드랍 모드 진입 후 버튼 라벨은 등록 동작으로 바뀐다.
  - 선택된 서비스 날짜가 있으면 픽드랍 초기 날짜 후보로 복사한다.

### 2

- Target: `[State] 회원/서비스 선택값`
- Lines:
  - 회원 선택, 서비스 이용권 선택, 서비스 날짜 선택값은 픽드랍 모드 진입 시 유지한다.
  - 픽드랍 이용권 목록은 `type === "pickdrop"` 옵션만 별도로 노출한다.
  - 픽드랍 가능 횟수가 0이면 이용권 영역은 빈 상태 문구를 노출한다.

## Implementation Evidence

- `src/pages/reservation.js:532` `setPickdropMode(enabled, options = {})`
- `src/pages/reservation.js:639` 서비스 선택 날짜를 `pickdropDates` 초기값으로 복사
- `src/pages/reservation.js:707` `syncPickdropTickets()`
- `src/pages/reservation.js:2095` `pickdropToggle` click handler

## Assumptions

- 버튼 라벨은 현재 구현 기준으로 작성했다. 최종 UX 문구는 디자인 검수에서 확정해야 한다.

## Open Questions

- 픽드랍 모드에서 이전 단계로 돌아가는 버튼명을 `등록`, `이전`, `서비스 예약으로 돌아가기` 중 무엇으로 확정할지 결정이 필요하다.

---

## Figma Section

- Section title: `2. 픽드랍 옵션 및 날짜 선택`
- Capture ID: `pickdrop-option-date`
- Left side: 픽드랍 예약 모드의 픽업/하원/날짜 선택 화면
- Left side annotations: `P`, `1`, `2`, `3`
- Right side: reference spec panel

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 픽드랍 예약을 위한 옵션과 이용 날짜 선택 |
| 화면명 | 픽드랍 예약 모드 |
| 경로 | `src/pages/reservation.js`, `src/services/reservation-modal-helpers.js` |
| Case | 픽업/하원 복수 선택 및 픽드랍 날짜 선택 |

## Spec Body Rows

### P

- Target: 픽드랍 예약 범위
- Lines:
  - 픽드랍 모드의 서비스 타입은 `pickdrop`으로 해석한다.
  - 일반 서비스의 클래스/이용권 선택과 별도로 픽드랍 옵션, 날짜, 이용권을 관리한다.
  - 픽업 또는 하원 중 하나 이상 선택되어야 픽드랍 금액과 이용권 차감 대상이 생긴다.

### 1

- Target: `[Option] 픽업`
- Lines:
  - 체크 시 `formState.pickdrops`에 `pickup`을 추가한다.
  - 체크 해제 시 `pickup`을 제거하고 금액/등록 가능 상태를 갱신한다.
  - 하원과 동시에 선택할 수 있다.

### 2

- Target: `[Option] 하원`
- Lines:
  - 체크 시 `formState.pickdrops`에 `dropoff`를 추가한다.
  - 체크 해제 시 `dropoff`를 제거하고 금액/등록 가능 상태를 갱신한다.
  - 픽업과 동시에 선택되면 왕복 기준으로 계산한다.

### 3

- Target: `[Calendar] 픽드랍 날짜`
- Lines:
  - 픽드랍 모드에서 날짜 클릭은 `pickdropDates`를 변경한다.
  - 최초 진입 시 서비스 선택 날짜를 기본값으로 복사한다.
  - 사용자가 직접 날짜를 바꾸면 이후 자동 초기화 상태를 해제한다.

## Implementation Evidence

- `src/pages/reservation.js:655` `formState.pickdrops` 초기화
- `src/pages/reservation.js:2219` 픽드랍 옵션 change handler
- `src/pages/reservation.js:2270` 픽드랍 날짜 toggle
- `src/services/reservation-modal-helpers.js` 예약 모달 scope 해석

## Assumptions

- 픽업과 하원은 독립 체크박스이며, 둘 다 선택하면 왕복으로 계산한다.

## Open Questions

- 픽업만/하원만 선택한 경우 상세 화면 표기를 모두 `편도`로 통일할지, `픽업 편도`와 `하원 편도`로 나눌지 확인이 필요하다.

---

## Figma Section

- Section title: `3. 결제 및 이용권 차감`
- Capture ID: `pickdrop-payment`
- Left side: 픽드랍 금액 및 이용권 차감 결과 영역
- Left side annotations: `P`, `1`, `2`
- Right side: reference spec panel

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 픽드랍 선택 결과를 금액과 이용권 차감으로 반영 |
| 화면명 | 예약 등록 모달 결제 영역 |
| 경로 | `src/services/pickdrop-policy.js`, `src/services/ticket-reservation-service.js`, `src/services/reservation-date-fee.js` |
| Case | 편도/왕복 금액 계산 및 픽드랍 이용권 차감 |

## Spec Body Rows

### P

- Target: 계산 정책
- Lines:
  - 픽업 또는 하원 중 하나만 선택하면 편도 기준으로 계산한다.
  - 픽업과 하원을 모두 선택하면 왕복 기준으로 계산한다.
  - 픽드랍 날짜 수만큼 금액과 이용권 사용량을 산정한다.

### 1

- Target: `[Fee] 픽드랍 예상 금액`
- Lines:
  - 가격표에서 `oneway` 또는 `roundtrip` 금액을 읽어 날짜별 금액을 계산한다.
  - 기존 서비스 결제 금액과 픽드랍 금액은 별도 세그먼트로 표시한다.
  - 최종 총액 계산에는 서비스 금액과 픽드랍 금액을 합산한다.

### 2

- Target: `[Ticket] 픽드랍 이용권 차감`
- Lines:
  - 왕복 예약은 왕복 이용권 1회를 우선 차감한다.
  - 왕복 이용권이 부족하면 편도 이용권 2회 차감을 대체 시도한다.
  - 편도 예약은 편도 이용권 1회를 우선 차감하고, 부족 시 왕복 이용권 1회를 대체 시도한다.

## Implementation Evidence

- `src/services/pickdrop-policy.js:28` `getPickdropCountType(source = {})`
- `src/services/ticket-reservation-service.js:92` `buildPickdropUsagePlan(...)`
- `src/services/reservation-date-fee.js:99` `oneway`, `roundtrip` 금액 파싱
- `src/pages/reservation.js:1823` 픽드랍 usage plan 생성
- `src/pages/reservation.js:1909` 픽드랍 단독 날짜 entry 추가

## Assumptions

- 초과 차감 가능 여부와 차단 UX는 현재 구현만으로 확정하기 어렵다.

## Open Questions

- 픽드랍 이용권 부족 상태에서 등록을 차단할지, 초과 예약을 허용하고 경고/확인만 표시할지 정책 결정이 필요하다.

---

## Figma Section

- Section title: `4. 호텔링 연계 픽드랍`
- Capture ID: `hoteling-pickdrop`
- Left side: 호텔링 예약 모달의 픽드랍 옵션/결제 영역
- Left side annotations: `P`, `1`
- Right side: reference spec panel

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 호텔링 예약에 픽업/하원 옵션을 함께 포함 |
| 화면명 | 호텔링 예약 모달 |
| 경로 | `src/pages/hotels.html`, `src/pages/hotels.js` |
| Case | 호텔링 체크인/체크아웃 기준 픽드랍 옵션과 이용권 반영 |

## Spec Body Rows

### P

- Target: 호텔링 연계 정책
- Lines:
  - 호텔링 예약에도 픽업/하원 옵션, 픽드랍 금액, 픽드랍 이용권 영역을 별도로 제공한다.
  - 체크인 날짜에는 픽업, 체크아웃 날짜에는 하원을 연결하는 구조로 저장한다.
  - 상세 변경 시 기존 픽드랍 사용량을 복구/재할당한다.

### 1

- Target: `[Option] 호텔링 픽드랍`
- Lines:
  - 호텔링 모달에서 픽업/하원 체크박스를 제공한다.
  - 선택 변경 시 `modalState.pickdrops`와 픽드랍 금액/이용권 표시를 갱신한다.
  - 저장 시 호텔링 entry별 픽드랍 사용량을 결합해 예약 데이터를 만든다.

## Implementation Evidence

- `src/pages/hotels.html:310` 호텔링 픽드랍 옵션 영역
- `src/pages/hotels.html:416` 픽드랍 금액 영역
- `src/pages/hotels.html:458` 픽드랍 이용권 영역
- `src/pages/hotels.js:3181` `buildPickdropUsagePlan(...)`
- `src/pages/hotels.js:3223` entry별 픽드랍 usage 결합

## Assumptions

- 호텔링 연계는 이번 명세에서 보조 케이스로 다루며, 캡처가 확보되면 상세 UI 행을 추가한다.

## Open Questions

- 호텔링 왕복 차감 기준이 체크인/체크아웃 각각 1회인지, 숙박 예약 1건 기준 왕복 1회인지 정책 확인이 필요하다.
