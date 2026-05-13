# Screen Plan: pickdrop-reservation

## Screen Selection Rules

- Use only visible Biz Web screens and modals from the reservation flow.
- Keep policy and ticket allocation rules attached to the screen area where the operator sees the result.
- Treat empty, disabled, over-limit, and no-ticket states as states inside their parent screen area.
- Do not expose implementation evidence in the final spec.

## Final Screen List

| Screen ID | Platform | Screen | Primary User Goal | Entry Path | Main Screen Areas | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| S-01 | Biz Web | 예약 목록 - 픽드랍 목록 모달 | 선택 날짜의 픽업/드랍 대상자를 빠르게 확인한다. | 유치원 예약 목록 > 픽드랍 목록 | 날짜 컨트롤, 픽드랍 필터, 대상자 목록, 닫기 액션 | High |
| S-02 | Biz Web | 예약 등록 모달 - 유치원/데이케어 단계 | 회원, 서비스, 예약일, 픽드랍 포함 여부, 요금/이용권을 선택한다. | 유치원 예약 목록 > 예약 등록 | 회원 검색, 진행 단계, 서비스 선택, 픽드랍 체크, 날짜/횟수, 요금/결제, 하단 액션 | High |
| S-03 | Biz Web | 예약 등록 모달 - 픽드랍 단계 | 선택 회원의 픽드랍 날짜, 픽업/드랍 종류, 픽드랍 이용권을 지정해 예약한다. | 예약 등록 모달 > 픽드랍까지 예약 또는 URL pickdrop=1 | 잠긴 회원 영역, 진행 단계, 픽드랍 종류/날짜, 픽드랍 이용권, 픽드랍 요금, 하단 액션 | High |

## Screen Area Plan

| Screen ID | Screen Area | UI Items | Behaviors / States To Cover | Policy Notes Needed |
| --- | --- | --- | --- | --- |
| S-01 | 날짜 컨트롤 | 이전/다음 날짜, 날짜 입력 | 기준 날짜 이동, 목록 재계산, 잘못된 날짜 입력 시 유지 | 목록은 예약 date entry의 pickup/dropoff 플래그 기준 |
| S-01 | 픽드랍 필터 | 픽업, 드랍 체크박스 | 필터 조합에 따라 대상자 표시, 둘 다 꺼지면 전체 재선택 | 최소 하나 이상의 필터가 유지되어야 함 |
| S-01 | 대상자 목록 | 대상자 카드, 빈 상태 | 보호자/반려견/주소 표시, 조건 결과 없음 표시 | 예약 회원 정보 우선, 없으면 예약 저장 정보 사용 |
| S-02 | 회원/서비스/날짜 | 회원 검색, 클래스/데이케어, 미니 캘린더, 예약 횟수 | 회원 선택 후 이용권/가능 횟수 계산, 충돌 날짜 비활성, 초과 등록 체크 | 서비스 예약 가능 횟수는 서비스 타입 기준 |
| S-02 | 픽드랍 선택 | 픽업/드랍 체크박스, 픽드랍까지 예약 버튼 | 서비스 예약에 픽드랍 포함, 날짜가 없으면 픽드랍만 예약으로 진입 | 픽업+드랍은 왕복, 하나만 선택하면 편도 |
| S-02 | 요금/결제 | 총 예상 금액, 서비스/픽드랍 요금, 이용권/현장 결제, 잔액 | 선택값 변경마다 예상 금액/이용권 차감/잔액 재계산 | 픽드랍 요금은 편도/왕복 요금표 기준 |
| S-03 | 픽드랍 단계 | 이전, 등록, 진행 단계 | 유치원 단계 완료 표시, 픽드랍 단계 활성, 이전 시 서비스 단계 복귀 | 회원은 픽드랍 단계에서 변경 불가 |
| S-03 | 픽드랍 날짜/종류 | 픽업, 드랍, 미니 캘린더 | 서비스 예약일을 초기값으로 복사, 가능 횟수만큼 제한, 종류 변경 시 요금/이용권 재계산 | 픽드랍 전용 예약은 서비스명 없이 date entry 저장 |
| S-03 | 픽드랍 이용권 | 픽드랍 이용권 카드, 빈 상태, 잔여/차감 표시 | 사용 가능 이용권 자동 선택, 직접 선택 변경, 초과 표시 | 왕복 우선, 부족하면 편도 2회 대체 |

## Grouped Edge States

| Edge State | Parent Screen Area | Reason |
| --- | --- | --- |
| 조건 결과 없음 | S-01 / 대상자 목록 | 필터와 날짜에 맞는 픽드랍 대상자가 없을 때 표시 |
| 필터 전체 해제 | S-01 / 픽드랍 필터 | 목록이 무의미하게 비는 것을 막기 위해 전체 재선택 |
| 회원 미선택 | S-02 / 회원/서비스/날짜 | 서비스, 이용권, 등록 액션의 전제 조건 |
| 날짜 충돌 | S-02 / 회원/서비스/날짜 | 동일 회원/서비스 예약 중복을 막기 위한 비활성 상태 |
| 서비스 가능 횟수 초과 | S-02 / 회원/서비스/날짜 | 초과 등록 체크 여부에 따라 등록 가능 여부가 달라짐 |
| 픽드랍 이용권 없음 | S-03 / 픽드랍 이용권 | 픽드랍 단계에서는 빈 상태를 보여주되 등록은 요금/현장 결제와 함께 판단 |
| 픽드랍 가능 횟수 초과 | S-03 / 픽드랍 날짜/종류 | 픽드랍은 별도 초과 체크 없이 등록 가능하되 차감/요금 표시가 초과를 드러냄 |
