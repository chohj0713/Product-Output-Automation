# Feature Spec: 픽드랍 예약

## Output Metadata

| Field | Value |
| --- | --- |
| Figma file name | `[26-XX] 픽드랍 예약` |
| Figma URL | https://www.figma.com/design/WCxDoUASusnVpKd3GWc93R/-26-XX--%ED%94%BD%EB%93%9C%EB%9E%8D-%EC%98%88%EC%95%BD?node-id=0-1 |
| Figma page | 픽드랍 상세 기능명세 v4 |
| Project | Schedule Daycare |
| Feature output folder | `F:\OneDrive\문서\Product Output Automation\outputs\pickdrop` |
| Capture index | `outputs/pickdrop/capture-index.md` |
| Markdown encoding | UTF-8 |
| Last updated | 2026-05-09 |
| Readability validation | Structure passed |

## Capture Assets

| Capture ID | File | Required | Spec Section | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| pickdrop-entry | `captures/screen_modal_pickdrop_list.png` | Yes | 1. 픽드랍 목록 및 예약 진입 | Placed | 목록/진입 캡처 |
| pickdrop-option-date | `captures/screen_modal_booking_step_2_pickdrop.png` | Yes | 2. 예약 모달 픽드랍 모드 | Placed | 픽드랍 옵션/날짜 선택 캡처 |
| pickdrop-payment | `captures/screen_booking_detail.png` | Yes | 3. 금액 및 이용권 차감 | Placed | 결제/상세 영역 캡처 |
| hoteling-pickdrop | `captures/04-hoteling-pickdrop.png` | Optional | 6. 호텔링 연계 픽드랍 | Pending | 캡처 필요 |

---

## Spec Section

- Section title: `1. 픽드랍 목록 및 예약 진입`
- Capture ID: `pickdrop-entry`
- Row numbers: `P`, `1`, `2`, `3`

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 픽드랍 예약 현황을 확인하거나 예약 등록 흐름으로 진입 |
| 화면명 | 픽드랍 목록 / 예약 등록 모달 진입 |
| 경로 | 픽드랍 목록 버튼 / 예약 등록 모달 |
| Case | 픽드랍 목록 확인, 날짜/필터 조작, 예약 등록 모달 진입 |

## Spec Body Rows

### P

- Target: 픽드랍 목록 정책
- Status: Confirmed
- Branch/condition: 픽드랍 목록 버튼 또는 모달 진입 시
- Constraint: 픽업/하원 필터는 독립적으로 선택 가능
- Persistence impact: none
- Lines:
  - 픽드랍 목록은 날짜 선택, 이전/다음 날짜 이동, 픽업/하원 필터를 제공한다.
  - 목록 영역은 `aria-live`로 변경 결과를 알릴 수 있는 구조다.
  - 예약 등록 모달의 픽드랍 진입과 목록 조회는 별도 케이스로 관리한다.

### 1

- Target: `[Button] 픽드랍 목록`
- Status: Confirmed
- Branch/condition: 사용자가 목록 버튼을 클릭
- Constraint: 모달 닫기/오버레이 닫기 동작 필요
- Persistence impact: none
- Lines:
  - 픽드랍 목록 모달을 열어 해당 날짜의 픽드랍 대상을 확인한다.
  - 닫기 버튼과 오버레이로 목록 모달을 닫을 수 있어야 한다.

### 2

- Target: `[Filter] 픽업 / 하원`
- Status: Confirmed
- Branch/condition: 목록 필터 변경 시
- Constraint: 둘 다 기본 선택 상태
- Persistence impact: none
- Lines:
  - 픽업 필터는 `pickup`, 하원 필터는 `dropoff` 값을 사용한다.
  - 필터 선택 결과에 따라 목록 표시 대상을 좁힌다.

### 3

- Target: `[Button] 픽드랍까지 예약`
- Status: Confirmed
- Branch/condition: 예약 등록 모달에서 픽드랍까지 예약을 선택
- Constraint: 버튼 상태는 선택 날짜/모드에 따라 달라짐
- Persistence impact: mode change only
- Lines:
  - 기본 예약 상태에서 클릭하면 픽드랍 모드로 전환한다.
  - 이미 픽드랍 모드인 경우 픽드랍 포함 저장 흐름으로 진입한다.


---

## Spec Section

- Section title: `2. 예약 모달 픽드랍 모드`
- Capture ID: `pickdrop-option-date`
- Row numbers: `P`, `1`, `2`, `3`, `4`

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 서비스 예약 중 픽드랍 옵션과 날짜를 추가 선택 |
| 화면명 | 예약 등록 모달 |
| 경로 | 예약 등록 모달 |
| Case | `is-pickdrop` 모드 진입, 옵션/날짜/이용권 표시 전환 |

## Spec Body Rows

### P

- Target: 픽드랍 모드 전환
- Status: Confirmed
- Branch/condition: `setPickdropMode(true/false)`
- Constraint: 모드별로 노출 세그먼트와 선택 대상이 달라짐
- Persistence impact: save payload branch depends on `includePickdrop`
- Lines:
  - `is-pickdrop` 클래스와 진행 표시 상태를 토글한다.
  - 서비스 예약 세그먼트와 픽드랍 세그먼트를 모드에 맞게 접거나 펼친다.
  - 최초 진입 시 서비스 선택 날짜를 픽드랍 날짜 기본값으로 복사한다.

### 1

- Target: `[State] 픽드랍 날짜`
- Status: Confirmed
- Branch/condition: 최초 진입, 날짜 클릭, 모드 이탈
- Constraint: 픽드랍 가능 횟수보다 초기 날짜가 많으면 잘라냄
- Persistence impact: saved reservation date entries
- Lines:
  - 최초 진입 시 서비스 날짜를 기본 픽드랍 날짜로 복사한다.
  - 픽드랍 가능 횟수가 제한되어 있으면 초기 날짜 수를 제한한다.
  - 사용자가 직접 날짜를 바꾸면 자동 초기화 상태를 해제한다.

### 2

- Target: `[Option] 픽업`
- Status: Confirmed
- Branch/condition: 체크/해제
- Constraint: 하원과 동시 선택 가능
- Persistence impact: reservation date `pickup`
- Lines:
  - 체크 시 `formState.pickdrops`에 `pickup`을 추가한다.
  - 저장 시 픽드랍 날짜에 `pickup: true`를 반영한다.

### 3

- Target: `[Option] 하원`
- Status: Confirmed
- Branch/condition: 체크/해제
- Constraint: 픽업과 동시 선택 시 왕복 계산
- Persistence impact: reservation date `dropoff`
- Lines:
  - 체크 시 `formState.pickdrops`에 `dropoff`를 추가한다.
  - 저장 시 픽드랍 날짜에 `dropoff: true`를 반영한다.

### 4

- Target: `[Ticket] 픽드랍 이용권 목록`
- Status: Confirmed
- Branch/condition: 픽드랍 모드 진입 또는 이용권 선택 변경
- Constraint: `type === "pickdrop"` 이용권만 표시
- Persistence impact: `ticketUsages`
- Lines:
  - 픽드랍 모드에서는 픽드랍 이용권 목록을 별도 세그먼트에 표시한다.
  - 이용 가능한 픽드랍 이용권이 없으면 빈 상태를 표시한다.


---

## Spec Section

- Section title: `3. 금액 및 이용권 차감`
- Capture ID: `pickdrop-payment`
- Row numbers: `P`, `1`, `2`, `3`

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 픽드랍 선택 결과를 금액과 이용권 차감으로 반영 |
| 화면명 | 예약 등록 모달 결제/이용권 영역 |
| 경로 | 예약 등록 모달의 결제/이용권 영역 |
| Case | 편도/왕복 판정, 금액 계산, 이용권 우선/대체 차감 |

## Spec Body Rows

### P

- Target: 편도/왕복 판정 정책
- Status: Confirmed
- Branch/condition: pickup/dropoff 조합
- Constraint: 선택 없음이면 픽드랍 차감 대상 없음
- Persistence impact: count type and ticket usage
- Lines:
  - 픽업과 하원이 모두 있으면 `roundtrip`으로 판정한다.
  - 둘 중 하나만 있으면 `oneway`로 판정한다.
  - `oneway`, `roundtrip`만 픽드랍 차감 타입으로 사용한다.

### 1

- Target: `[Fee] 픽드랍 금액`
- Status: Confirmed
- Branch/condition: 픽드랍 옵션과 날짜 수 변경
- Constraint: 가격표에 편도/왕복 금액이 있어야 함
- Persistence impact: billing amount
- Lines:
  - 가격표에서 `oneway`, `roundtrip` 금액을 읽어 픽드랍 금액을 계산한다.
  - 서비스 금액과 픽드랍 금액은 별도 세그먼트로 보여주고 총액에는 합산한다.

### 2

- Target: `[Ticket] 차감 우선순위`
- Status: Confirmed
- Branch/condition: 선택한 픽드랍 이용권과 사용 가능 잔여량
- Constraint: 이용권 부족 시 대체 차감 시도
- Persistence impact: `ticketUsages`
- Lines:
  - 왕복 예약은 왕복 이용권 1회를 우선 사용한다.
  - 왕복 이용권이 부족하면 편도 이용권 2회 사용을 시도한다.
  - 편도 예약은 편도 이용권 1회를 우선 사용하고, 부족하면 왕복 이용권 1회 사용을 시도한다.

### 3

- Target: `[Validation] 초과/빈 상태`
- Status: Partial
- Branch/condition: 가능 횟수 0, 이용권 없음, 초과 사용
- Constraint: 최종 차단/허용 정책 확인 필요
- Persistence impact: over-limit save branch
- Lines:
  - 픽드랍 가능 횟수가 0이면 이용권 영역은 빈 상태로 표시한다.
  - 초과 예약 허용 여부는 현재 코드 분기만으로 제품 정책 확정이 필요하다.


---

## Spec Section

- Section title: `4. 저장 분기 및 예약 데이터 생성`
- Capture ID: `pickdrop-payment`
- Row numbers: `P`, `1`, `2`, `3`

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 서비스 예약만 저장하거나 픽드랍까지 포함해 저장 |
| 화면명 | 예약 등록 저장 흐름 |
| 경로 | 예약 등록 저장 흐름 |
| Case | `submitReservation({ includePickdrop })` 분기와 날짜 entry 생성 |

## Spec Body Rows

### P

- Target: 저장 분기 정책
- Status: Confirmed
- Branch/condition: `includePickdrop === true`
- Constraint: 픽드랍 포함 저장 시 scope가 `pickdrop`으로 바뀜
- Persistence impact: reservation payload
- Lines:
  - 서비스 예약만 저장할 때와 픽드랍 포함 저장할 때의 scope가 다르다.
  - 픽드랍 포함 저장 시 서비스 날짜와 픽드랍 날짜를 합쳐 reservation dates를 만든다.

### 1

- Target: `[Payload] 서비스 날짜 + 픽드랍 날짜`
- Status: Confirmed
- Branch/condition: 픽드랍 날짜가 서비스 날짜와 겹치는지 여부
- Constraint: 중복 날짜는 하나의 entry에 병합
- Persistence impact: `reservation.dates`
- Lines:
  - 서비스 날짜에 해당 픽드랍 날짜가 있으면 같은 날짜 entry에 픽업/하원과 이용권 사용량을 합친다.
  - 서비스 날짜에 없는 픽드랍 날짜는 픽드랍 단독 날짜 entry로 추가한다.

### 2

- Target: `[Payload] ticketUsages`
- Status: Confirmed
- Branch/condition: 서비스 이용권과 픽드랍 이용권이 모두 있는 경우
- Constraint: usage sequence 충돌 방지
- Persistence impact: `ticketUsages`
- Lines:
  - 서비스 이용권 usage와 픽드랍 usage를 날짜별로 병합한다.
  - 병합 후 usage sequence를 다시 부여해 저장한다.

### 3

- Target: `[State] 저장 후 모드 초기화`
- Status: Confirmed
- Branch/condition: 저장 완료 또는 모달 종료
- Constraint: 다음 예약 등록에 픽드랍 상태가 남으면 안 됨
- Persistence impact: none
- Lines:
  - 저장 완료 후 픽드랍 모드를 해제한다.
  - 모달 닫기/초기화 경로에서도 픽드랍 모드를 해제한다.


---

## Spec Section

- Section title: `5. 상세 수정 및 픽드랍 사용량 복구`
- Capture ID: `pickdrop-payment`
- Row numbers: `P`, `1`, `2`, `3`

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 기존 예약 상세에서 픽드랍 정보를 표시하거나 수정 |
| 화면명 | 예약 상세 / 수정 흐름 |
| 경로 | 예약 상세 / 수정 흐름 |
| Case | 기존 예약의 픽드랍 이용권 사용량을 복구하고 재할당 |

## Spec Body Rows

### P

- Target: 기존 데이터 호환 정책
- Status: Confirmed
- Branch/condition: 기존 예약 상세에서 픽드랍 이용권 동기화
- Constraint: 회원이 보유한 픽드랍 이용권만 후보로 사용
- Persistence impact: repaired `ticketUsages`
- Lines:
  - 상세 수정 시 회원 보유 픽드랍 이용권만 후보로 필터링한다.
  - 기존 서비스 이용권 사용량은 유지하고 픽드랍 사용량만 재구성한다.

### 1

- Target: `[Repair] 기존 픽드랍 사용량 카운트`
- Status: Confirmed
- Branch/condition: 예약에 이미 픽드랍 usage가 있는 경우
- Constraint: 이용권 타입을 편도/왕복으로 해석해야 함
- Persistence impact: repaired allocation
- Lines:
  - 기존 예약 날짜의 `ticketUsages`에서 픽드랍 이용권 사용량을 집계한다.
  - 이용권 타입은 `resolvePickdropTicketCountType` 기준으로 해석한다.

### 2

- Target: `[Repair] 픽드랍 usage 재생성`
- Status: Confirmed
- Branch/condition: 상세 수정으로 픽업/하원 또는 날짜가 바뀜
- Constraint: 기존 서비스 usage는 삭제하지 않음
- Persistence impact: date entry `ticketUsages`
- Lines:
  - 선택된 픽드랍 날짜와 옵션 기준으로 새 픽드랍 사용 계획을 만든다.
  - 기존 서비스 usage는 유지하고 새 픽드랍 usage만 병합한다.

### 3

- Target: `[Validation] 이용권 후보 불일치`
- Status: Confirmed
- Branch/condition: 기존 usage의 ticket id가 회원 픽드랍 이용권 후보에 없음
- Constraint: 유효하지 않은 ticket id는 복구 후보에서 제외
- Persistence impact: repair skip or changed allocation
- Lines:
  - 회원 보유 픽드랍 이용권에 없는 ticket id는 복구 후보에서 제외한다.
  - 이 경우 재할당 결과가 기존 저장값과 달라질 수 있다.


---

## Spec Section

- Section title: `6. 호텔링 연계 픽드랍`
- Capture ID: `hoteling-pickdrop`
- Row numbers: `P`, `1`, `2`, `3`

## Spec Header

| Field | Value |
| --- | --- |
| 상황 | 호텔링 예약에 픽업/하원 옵션과 픽드랍 이용권을 함께 반영 |
| 화면명 | 호텔링 예약 모달 |
| 경로 | 호텔링 예약 모달 |
| Case | 체크인/체크아웃 기준 픽드랍 옵션 저장 |

## Spec Body Rows

### P

- Target: 호텔링 픽드랍 정책
- Status: Confirmed
- Branch/condition: 호텔링 예약 등록 또는 수정
- Constraint: 체크인/체크아웃 날짜에 따라 pickup/dropoff가 분리됨
- Persistence impact: hoteling reservation entries
- Lines:
  - 호텔링 예약 모달도 픽업/하원 옵션, 픽드랍 금액, 픽드랍 이용권 영역을 제공한다.
  - 체크인 entry에는 pickup, 체크아웃 entry에는 dropoff를 연결한다.

### 1

- Target: `[Option] 호텔링 픽업/하원`
- Status: Confirmed
- Branch/condition: 호텔링 모달에서 옵션 체크/해제
- Constraint: 선택 변경 시 금액/이용권 상태 즉시 갱신
- Persistence impact: `modalState.pickdrops`
- Lines:
  - 옵션 변경 시 `modalState.pickdrops`에 값을 추가하거나 제거한다.
  - 변경 후 픽드랍 금액과 이용권 차감 표시를 갱신한다.

### 2

- Target: `[Ticket] 호텔링 픽드랍 차감`
- Status: Confirmed
- Branch/condition: 저장 시 픽드랍 옵션이 선택됨
- Constraint: 호텔링 이용권과 픽드랍 이용권은 별도 선택/차감
- Persistence impact: entry별 `ticketUsages`
- Lines:
  - 호텔링 저장 시 픽드랍 날짜 수와 선택 이용권을 기준으로 사용 계획을 만든다.
  - 체크인/체크아웃 entry별로 픽드랍 usage를 결합한다.

### 3

- Target: `[Open Question] 호텔링 왕복 차감 기준`
- Status: Needs confirmation
- Branch/condition: 호텔링에서 픽업과 하원을 모두 선택
- Constraint: 숙박 1건 기준 왕복 1회인지, 체크인/체크아웃 각각 1회인지 확인 필요
- Persistence impact: ticket usage count
- Lines:
  - 현재 코드는 체크인/체크아웃 entry에 픽드랍 usage를 분리해서 연결한다.
  - 제품 정책상 왕복 1회로 볼지, 날짜별 편도 2회로 볼지 확정이 필요하다.


## Open Questions

- 호텔링에서 픽업+하원을 선택했을 때 왕복 이용권 1회 차감인지, 체크인/체크아웃 각각 편도 차감인지 정책 확정이 필요하다.
- 픽드랍 이용권 부족 또는 초과 예약 상태에서 저장을 차단할지, 경고 후 허용할지 확정이 필요하다.
