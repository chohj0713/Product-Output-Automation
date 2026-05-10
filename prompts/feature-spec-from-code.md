# Prompt: Feature Spec From Code

Product Output Automation 기준으로 작업한다.

대상 프로젝트는 `<Project Name>`이고, 기능은 `<Feature Name>`이다.

코드 기반 프로토타입을 읽고 해당 기능의 상세 기능명세를 만든다. 최종 산출물은 Figma 기능명세지만, 먼저 코드 로직 커버리지를 만든다.

## Required Process

1. 관련 코드를 검색해 후보 파일과 근거 라인을 수집한다.
2. `templates/logic-inventory.md` 형식으로 `outputs/<feature>/logic-inventory.md`를 작성한다.
3. `templates/coverage-matrix.md` 형식으로 `outputs/<feature>/coverage-matrix.md`를 작성한다.
4. `templates/open-questions.md` 형식으로 코드만으로 확정할 수 없는 정책/UX/운영 질문을 분리한다.
5. `templates/feature-spec.md` 형식으로 Markdown 기능명세를 작성한다.
6. 같은 내용을 Figma 기준 레이아웃으로 만든다.
7. Markdown/Figma 가독성과 커버리지 검증을 수행한다.

## Spec Rules

- 화면/케이스별로 하나의 Figma 섹션을 만든다.
- 왼쪽에는 관련 화면 또는 모달 캡처를 배치한다.
- 화면 위에는 `P`, `1`, `2`, `3`처럼 명세 행과 대응되는 콜아웃을 표시한다.
- 오른쪽에는 `상황`, `화면명`, `경로`, `Case`, `설명` 구조의 명세표를 배치한다.
- 각 명세 행에는 조건, 제약, 예외, 저장 영향, 코드 근거를 포함한다.
- 각 섹션에는 `Logic Coverage` 표를 포함한다.
- 명세에 반영하지 않은 로직은 반드시 `coverage-matrix.md`에 `Not Covered`로 남긴다.
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
