# Figma Feature Spec: 픽드랍 예약

## Output Metadata

| Field | Value |
| --- | --- |
| Figma file name | `[26-XX] 픽드랍 예약` |
| Figma URL | https://www.figma.com/design/WCxDoUASusnVpKd3GWc93R |
| Project | Schedule Daycare |
| Prototype path | `F:\OneDrive\문서\Schedule_Daycare_20260320` |
| Markdown encoding | UTF-8 |
| Last updated | 2026-05-09 |
| Readability validation | Structure checked; visual screenshot review pending |

## Figma Section

- Section title: `예약 등록 모달 - 픽드랍까지 예약 진입`
- Left side: 예약 등록 모달 기본 상태
- Left side annotations: `P`, `1`, `2`, `3`, `4`, `5`
- Right side: specification table
- Recommended layout: horizontal section with screen capture on the left and an 840px-wide spec table on the right

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 유치원/데이케어 예약 등록 중 픽드랍 예약을 이어서 등록 |
| 화면명 | 예약 등록 모달 |
| 경로 | `src/pages/reservation.js` 예약 등록 모달, `data-reservation-pickdrop-toggle` |
| Case | 서비스 예약 선택 후 `픽드랍까지 예약`으로 픽드랍 단계 진입 |

## Spec Rows

| No. | Target | Spec |
| --- | --- | --- |
| P | 예약 등록 정책 | 기본 예약 모달은 회원, 서비스/클래스, 날짜, 이용권/결제 정보를 입력한다. 픽드랍은 같은 모달 안에서 `is-pickdrop` 모드로 전환되어 별도 단계처럼 동작한다. |
| 1 | `[Input] 회원 검색` | 회원 선택 후 예약 가능 이용권과 회원별 잔여 예약 수를 로드한다. 회원 초기화 시 픽드랍 모드를 해제하고 폼 전체를 초기화한다. |
| 2 | `[Option] 클래스/서비스` | 기본 예약 단계에서는 유치원/데이케어 서비스 선택을 유지한다. 픽드랍 모드 진입 시 기존 서비스 이용권 선택은 `schoolSelections`에 보관된다. |
| 3 | `[Calendar] 서비스 예약 날짜` | 기본 예약 날짜는 `selectedDates`에 저장된다. 픽드랍 모드 진입 시 초기 픽드랍 날짜 후보로 복사된다. 픽드랍 이용권 총 예약 가능 수보다 날짜가 많으면 앞 날짜부터 제한 수만큼 유지된다. |
| 4 | `[Button] 픽드랍까지 예약` | 기본 상태에서 클릭하면 모달에 `is-pickdrop` 클래스를 적용하고 진행 단계의 1단계를 완료, 2단계를 활성화한다. 픽드랍 모드 상태에서 다시 클릭하면 픽드랍 포함 등록을 실행한다. |
| 5 | `[Button] 등록` | 기본 상태에서는 픽드랍 없이 서비스 예약만 등록한다. 픽드랍 모드에서는 등록 버튼 클릭 시 픽드랍 모드를 종료하고 기본 예약 화면으로 돌아간다. |

## Implementation Evidence

- `src/components/reservation-modal.js`: 예약 모달 마크업에 회원 검색, 픽드랍 옵션, 캘린더, 결제/이용권 영역, `픽드랍까지 예약` 버튼이 정의되어 있음.
- `src/pages/reservation.js:532`: `setPickdropMode(enabled)`가 `is-pickdrop` 클래스를 토글하고 라벨/캘린더/이용권/금액 상태를 동기화함.
- `src/pages/reservation.js:639`: 픽드랍 모드 최초 진입 시 `selectedDates`를 `pickdropDates`로 복사하고 픽드랍 가능 수로 제한함.
- `src/pages/reservation.js:2095`: `data-reservation-pickdrop-toggle` 클릭 시 모드 전환 또는 픽드랍 포함 등록을 수행함.

## Assumptions

- Figma 화면 캡처에서는 실제 프로토타입 캡처가 없을 경우 모달 구조를 재현한 와이어 캡처로 대체한다.

## Open Questions

- 픽드랍 모드에서 `등록` 버튼이 “이전” 역할로 동작하는 현재 구현을 유지할지, 버튼명을 “이전”으로 변경할지 확인이 필요하다.

---

## Figma Section

- Section title: `픽드랍 예약 모드 - 옵션 및 날짜 선택`
- Left side: 예약 등록 모달의 픽드랍 단계 상태
- Left side annotations: `P`, `1`, `2`, `3`, `4`, `5`, `6`
- Right side: specification table
- Recommended layout: horizontal section with screen capture on the left and an 840px-wide spec table on the right

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 픽드랍 단독 또는 서비스 예약에 연결된 픽드랍 예약 입력 |
| 화면명 | 픽드랍 예약 모드 |
| 경로 | `src/pages/reservation.js`, `src/services/reservation-modal-helpers.js` |
| Case | 픽업/드랍 옵션, 픽드랍 날짜, 픽드랍 이용권 선택 |

## Spec Rows

| No. | Target | Spec |
| --- | --- | --- |
| P | 픽드랍 모드 정책 | 픽드랍 모드에서는 서비스 타입을 `pickdrop`으로 해석하고, 예약 횟수 제한은 일반 서비스 제한 대신 픽드랍 이용권 합계 기준으로 계산한다. |
| 1 | `[Progress] 단계 표시` | 픽드랍 진입 시 1단계는 완료 상태, 2단계는 활성 상태로 표시한다. 모달 타이틀/단계 라벨은 픽드랍 예약 맥락으로 변경된다. |
| 2 | `[Option] 픽드랍` | `픽업`, `드랍` 체크박스를 복수 선택할 수 있다. 선택 변경 시 `formState.pickdrops`를 갱신하고 칩 선택 스타일, 액션 활성화, 금액을 즉시 동기화한다. |
| 3 | `[Default] 픽업/드랍 초기 선택` | 픽드랍 모드 진입 시 가격 정책에 편도 또는 왕복 픽드랍 금액이 있으면 픽업과 드랍을 기본 선택한다. 가격 정책이 없으면 기본 선택되지 않는다. |
| 4 | `[Calendar] 픽드랍 날짜` | 픽드랍 모드에서 날짜 클릭은 `selectedDates`가 아닌 `pickdropDates`를 토글한다. 사용자가 픽드랍 날짜를 변경하면 `pickdropDatesInitialized`를 true로 저장해 자동 복사를 덮어쓴다. |
| 5 | `[Ticket] 픽드랍 이용권 목록` | 픽드랍 모드에서만 픽드랍 이용권 영역을 노출한다. 선택 가능한 이용권은 회원 보유 이용권 중 `type === "pickdrop"`만 사용한다. |
| 6 | `[Empty] 사용 가능한 이용권 없음` | 픽드랍 이용권 후보가 없으면 픽드랍 이용권 리스트를 비우고 `사용 가능한 이용권이 없습니다.` 안내를 표시한다. |

## Implementation Evidence

- `src/services/reservation-modal-helpers.js`: `resolveReservationModalScope()`가 `is-pickdrop` 상태를 `entryType/serviceType: pickdrop`으로 해석함.
- `src/pages/reservation.js:650`: 가격 정책에 편도/왕복 픽드랍 항목이 있는지 확인해 픽업/드랍 기본 선택 여부를 결정함.
- `src/pages/reservation.js:707`: `syncPickdropTickets()`가 픽드랍 모드에서만 픽드랍 이용권 영역을 노출함.
- `src/pages/reservation.js:2219`: 픽업/드랍 체크 변경 시 `applyPickdropSelection()`과 금액/액션 동기화를 수행함.
- `src/pages/reservation.js:2268`: 픽드랍 모드 날짜 선택은 `formState.pickdropDates`를 토글함.

## Assumptions

- 픽드랍 날짜는 서비스 예약 날짜와 다를 수 있다. 단, 기본 진입 시에는 서비스 예약 날짜를 기반으로 초기화된다.

## Open Questions

- 픽업만 선택한 경우와 드랍만 선택한 경우를 UI에서 동일한 “편도”로 표현할지, 픽업/드랍 각각의 라벨을 결제 상세에 분리 표시할지 확인이 필요하다.

---

## Figma Section

- Section title: `픽드랍 결제 및 이용권 차감`
- Left side: 예약 등록 모달 우측 결제/예상 금액 영역
- Left side annotations: `P`, `1`, `2`, `3`, `4`, `5`
- Right side: specification table
- Recommended layout: horizontal section with screen capture on the left and an 840px-wide spec table on the right

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 픽드랍 옵션과 날짜 선택 후 금액 및 이용권 차감 확인 |
| 화면명 | 예약 등록 모달 결제 영역 |
| 경로 | `src/services/reservation-date-fee.js`, `src/services/ticket-reservation-service.js`, `src/pages/reservation.js` |
| Case | 편도/왕복 금액 계산과 픽드랍 이용권 배정 |

## Spec Rows

| No. | Target | Spec |
| --- | --- | --- |
| P | 계산 기준 | 픽업 또는 드랍 중 하나만 선택하면 편도, 픽업과 드랍을 모두 선택하면 왕복으로 계산한다. 선택이 없으면 픽드랍 금액과 이용권 차감은 발생하지 않는다. |
| 1 | `[Fee] 픽드랍 예상 금액` | 날짜별 픽드랍 선택 상태에 따라 가격표의 `serviceType === "pickdrop"` 항목에서 편도/왕복 가격을 찾아 합산한다. 가격 항목이 없으면 해당 금액은 0원으로 계산된다. |
| 2 | `[Ticket] 편도 이용권 차감` | 픽업 또는 드랍 하나만 선택한 날짜는 편도 이용권 1회를 우선 차감한다. 편도 이용권이 없고 왕복 이용권이 남아 있으면 왕복 이용권 1회를 대체 차감한다. |
| 3 | `[Ticket] 왕복 이용권 차감` | 픽업과 드랍을 모두 선택한 날짜는 왕복 이용권 1회를 우선 차감한다. 왕복 이용권이 부족하면 편도 이용권 2회를 차감한다. |
| 4 | `[Amount] 잔여 횟수 표시` | 픽드랍 결제 영역은 선택 전/후 잔여 횟수를 `as-is -> to-be` 형태로 표시한다. 잔여가 음수면 `초과 N회`로 표시한다. |
| 5 | `[Submit] 예약 저장` | 픽드랍 포함 등록 시 서비스 예약 날짜와 픽드랍 날짜를 합쳐 `reservation.dates`를 생성한다. 서비스 날짜에 포함되지 않은 픽드랍 날짜도 별도 엔트리로 추가된다. |

## Implementation Evidence

- `src/services/pickdrop-policy.js`: 픽업/드랍 플래그를 기준으로 `oneway`, `roundtrip` 차감 타입을 계산함.
- `src/services/reservation-date-fee.js`: 픽업/드랍 조합으로 편도/왕복 가격 항목을 찾아 날짜별 `fee.oneway` 또는 `fee.roundtrip`을 계산함.
- `src/services/ticket-reservation-service.js`: `buildPickdropUsagePlan()`이 왕복 우선/편도 대체, 편도 우선/왕복 대체 차감 규칙을 구현함.
- `src/pages/reservation.js:1887`: `pickdropDates`에 포함된 날짜만 픽업/드랍 플래그를 적용함.
- `src/pages/reservation.js:1909`: 서비스 예약 날짜에 없는 픽드랍 날짜도 예약 날짜 엔트리로 추가함.

## Assumptions

- 이용권 초과 차감이 가능한지 여부는 현재 UI상 초과 표시가 가능하나, 픽드랍 등록 차단 여부는 별도 정책 확인이 필요하다.

## Open Questions

- 픽드랍 이용권 초과 상태에서 등록을 허용할지, 별도 확인 또는 차단 토스트를 추가할지 결정이 필요하다.

---

## Figma Section

- Section title: `호텔링 예약 - 픽드랍 포함`
- Left side: 호텔링 예약 모달의 픽드랍 옵션 및 결제 영역
- Left side annotations: `P`, `1`, `2`, `3`, `4`
- Right side: specification table
- Recommended layout: horizontal section with screen capture on the left and an 840px-wide spec table on the right

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 호텔링 예약 시 픽업/드랍을 함께 예약 |
| 화면명 | 호텔링 예약 모달 |
| 경로 | `src/pages/hotels.html`, `src/pages/hotels.js`, `src/components/reservation-modal.js` |
| Case | 호텔링 예약에 픽드랍 옵션과 이용권/금액을 포함 |

## Spec Rows

| No. | Target | Spec |
| --- | --- | --- |
| P | 호텔링 연계 정책 | 호텔링 예약도 픽업/드랍 옵션, 픽드랍 예상 금액, 픽드랍 이용권 선택 영역을 가진다. 호텔링 자체 예약과 픽드랍 차감은 동일 예약 데이터 안에서 함께 관리된다. |
| 1 | `[Option] 픽드랍` | 호텔링 예약 모달에서 픽업/드랍 체크박스를 제공한다. 체크 변경 시 모달 상태의 `pickdrops`를 갱신하고 칩 스타일을 동기화한다. |
| 2 | `[Fee] 픽드랍 예상 금액` | 호텔링 결제 영역에는 호텔링 금액과 별도로 픽드랍 금액 세그먼트를 표시한다. 픽드랍 금액이 있거나 픽업/드랍 플래그가 있으면 해당 세그먼트를 노출한다. |
| 3 | `[Ticket] 픽드랍 이용권` | 결제 탭의 이용권 영역에 호텔링 이용권과 픽드랍 이용권을 분리해 표시한다. 사용 가능한 픽드랍 이용권이 없으면 빈 상태 메시지를 표시한다. |
| 4 | `[Button] 픽드랍까지 예약` | 호텔링 예약 하단에도 `픽드랍까지 예약` CTA를 제공한다. 픽드랍 변경 시 기존 예약의 픽드랍 ticket usage를 재계산해 서비스 이용권 사용 내역과 병합한다. |

## Implementation Evidence

- `src/pages/hotels.html:310`: 호텔링 예약 모달에 픽업/드랍 체크박스가 정의되어 있음.
- `src/pages/hotels.html:414`: 호텔링 결제 영역에 픽드랍 금액 세그먼트가 정의되어 있음.
- `src/pages/hotels.html:456`: 픽드랍 이용권 세그먼트와 빈 상태 메시지가 정의되어 있음.
- `src/pages/hotels.js:3039`: 호텔링 픽드랍 옵션 변경 시 `modalState.pickdrops`를 갱신함.
- `src/pages/hotels.js:3181`: 호텔링 예약 저장 시 `buildPickdropUsagePlan()`으로 픽드랍 이용권 차감을 계산함.
- `src/services/pickdrop-usage-repair-service.js`: 예약 상세 변경 시 픽드랍 ticket usage를 재계산하고 기존 서비스 usage와 병합함.

## Assumptions

- 호텔링 픽드랍은 이 명세에서 보조 케이스로 다룬다. `[26-XX] 픽드랍 예약`의 주 화면은 일반 예약 모달의 픽드랍 모드이다.

## Open Questions

- 호텔링 픽드랍의 왕복 차감 기준이 체크인/체크아웃 양일을 모두 쓰는지, 현재 구현처럼 대표 날짜 기준으로 차감하는지 정책 확인이 필요하다.
