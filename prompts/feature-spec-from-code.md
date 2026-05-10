# Prompt: Feature Spec From Code

Product Output Automation 기준으로 작업한다.

대상 프로젝트는 `<Project Name>`이고, 기능은 `<Feature Name>`이다.

코드 기반 프로토타입을 읽고 해당 기능의 상세 기능명세 텍스트를 만든다. 내부 검증용으로 코드 로직 커버리지를 만들 수 있지만, 최종 기능명세 본문에는 코드 근거를 쓰지 않는다.

## Required Process

1. 관련 코드를 검색해 후보 파일과 로직 항목을 수집한다.
2. 각 항목을 `Business`, `UI`, `Integration`, `Unknown` 중 하나의 `Logic Type`으로 분류한다.
3. `templates/logic-inventory.md` 형식으로 `outputs/<feature>/logic-inventory.md`를 작성한다.
4. `templates/coverage-matrix.md` 형식으로 `outputs/<feature>/coverage-matrix.md`를 작성한다.
5. `templates/open-questions.md` 형식으로 코드만으로 확정할 수 없는 정책/UX/운영 질문을 분리한다.
6. `templates/feature-spec.md` 형식으로 Markdown 기능명세 텍스트를 작성한다.
7. Markdown 가독성과 커버리지 검증을 수행한다.

## Spec Rules

- 명세 작성 전에 `Business Logic`, `UI Logic`, `Integration Mapping` 작성 계획을 먼저 세운다.
- `Business Logic`에는 정책, 계산, 차감, 저장, 수정, 삭제, 예외 조건을 쓴다.
- `UI Logic`에는 화면 진입, 표시/숨김, 선택 상태, 활성/비활성, 안내 문구, 오류 상태를 쓴다.
- `Integration Notes`에는 UI 조작이 어떤 정책 계산이나 저장 결과로 이어지는지 쓴다.
- 최종 기능명세 본문에는 코드 파일명, 라인번호, 함수명, `LI-*` ID, Evidence, Logic Coverage 표를 쓰지 않는다.
- 명세에 반영하지 않은 로직은 반드시 `coverage-matrix.md`에 `Not Covered` 또는 `Open Question`으로 남긴다.
- 코드만으로 확정할 수 없는 동작은 `Open Questions`로 분리한다.

## Coverage Categories

- UI
- State
- Validation
- Pricing
- Ticket Usage
- Persistence
- Repair/Migration
- Edge Case
- Unknown

## Encoding

- 모든 Markdown은 UTF-8로 저장한다.
- 한글 텍스트가 깨졌는지 확인하고, 깨진 문구는 최종 전달 전에 수정한다.
