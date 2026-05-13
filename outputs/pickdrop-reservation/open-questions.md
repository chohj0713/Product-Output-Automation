# Open Questions: pickdrop-reservation

## Product Policy

| Area | Question | Recommended Handling | Status |
| --- | --- | --- | --- |
| 픽드랍 초과 예약 | 픽드랍 단계에서는 이용권 가능 횟수를 초과해도 별도 초과 체크 없이 등록을 허용하는 현재 동작을 유지할지 확인이 필요하다. | 현재 프로토타입 동작을 기본값으로 반영하고 QA에서 정책 확인 | Follow-up |
| 픽드랍 전용 예약 | 서비스 날짜 없이 픽드랍 날짜만 선택한 예약을 정식 예약 유형으로 인정할지 확인이 필요하다. | 현재 프로토타입처럼 서비스명 없이 픽드랍 date entry로 저장 | Follow-up |
| 왕복/편도 차감 우선순위 | 왕복 이용권이 부족할 때 편도 2회를 대체 차감하는 정책을 운영 정책으로 확정할지 확인이 필요하다. | 현재 프로토타입 우선순위를 명세에 반영 | Follow-up |

## UX Copy

| Area | Question | Recommended Handling | Status |
| --- | --- | --- | --- |
| 빈 상태 문구 | 픽드랍 목록/픽드랍 이용권 없음/요금 없음 문구의 최종 카피 확정이 필요하다. | 현재 프로토타입 문구를 기준으로 QA에서 카피 점검 | Follow-up |
| 버튼 문구 | 날짜 선택 여부에 따라 `픽드랍까지 예약`과 `픽드랍만 예약`으로 바뀌는 버튼 문구를 유지할지 확인이 필요하다. | 현재 프로토타입 문구 유지 | Follow-up |

## Operations

| Area | Question | Recommended Handling | Status |
| --- | --- | --- | --- |
| 기존 예약 복구 | 이전 데이터의 단일 ticketUsage와 신규 ticketUsages 병합/복구 정책을 운영 데이터 마이그레이션 범위에 포함할지 확인이 필요하다. | 최종 명세에는 화면 동작만 반영하고 운영 과제로 분리 | Follow-up |
