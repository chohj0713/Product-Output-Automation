# Prompt: Feature Spec From Code

Product Output Automation 기준으로 작업한다.

대상 프로젝트: `<Project Name>`
대상 기능: `<Feature Name>`

프로토타입 코드를 읽고, 정책 중심 보드가 아니라 실제 화면 중심 기능명세를 만든다.

## 기본 구조

Platform -> Screen -> Screen Area -> UI Item -> Behavior / Exception / State / Data Impact

## 필수 절차

1. 프로젝트 노트와 프로토타입 코드를 읽고 화면, 영역, UI 항목, 상태, 데이터 영향을 수집한다.
2. `case-plan.md`에는 최종 화면 목록과 화면별 영역 계획을 먼저 정리한다.
3. `open-questions.md`에는 정책/UX/운영 질문을 분리한다.
4. 최종 명세 작성 전에 open questions 처리 방식을 사용자에게 묻는다.
5. 최종 명세는 실제 화면 단위로 작성한다.
6. 각 화면은 화면 안의 영역 기준으로 나눈다.
7. 각 영역 안에서 UI 항목별 동작, 예외, 상태, 데이터 영향을 설명한다.
8. 정책은 화면 설명을 보조하는 용도로만 사용한다.
9. generic policy board 중심으로 쓰지 않는다.
10. 최종 명세에는 screen planning과 open questions를 포함하지 않는다.
11. 최종 명세에는 코드 근거, 파일 경로, 함수명, `LI-*` ID를 적지 않는다.

## 최종 기능명세 구조

1. `Screen Header`
2. `Context`
3. `Screen Areas`
4. `UI Item Spec`
5. `Screen-level States`
6. `Policy Notes`

## 금지

- `Core Policies` 중심 구성
- generic callout board만 만드는 방식
- 실제 화면 구조 없이 추상 정책만 나열하는 방식

## Figma 최종 결과물 규칙

- 최종 Figma output은 Container만 생성한다.
- 구조는 `<Platform Header> -> <SECTION> -> <Numbered Frame> -> Container -> Title / 설명` 순서로 만든다.
- `Container` 안의 설명은 화면 영역과 UI 항목의 동작을 번호별 텍스트 블록으로 정리한다.

## 검증

```powershell
node .\harness\feature-spec\scripts\validate-markdown.mjs --output ".\outputs\<feature>" --spec ".\outputs\<feature>\<feature>-feature-spec.md"
```
