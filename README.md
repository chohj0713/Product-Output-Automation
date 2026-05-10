# Product Output Automation

Codex workspace for PM output automation.

Use this folder to store project profiles, workflows, reusable prompts, templates, harness scripts, and intermediate outputs for work such as:

- reading code-based prototypes and creating selected feature specs in Figma,
- building logic coverage before writing detailed specs,
- converting feature specs into Notion QA test case tables,
- keeping project-specific context separate from prototype source code.

Default Codex skill:

```text
C:\Users\chohj\.codex\skills\product-output-automation
```

## Spec Depth Standards

### Fast Spec: Screen-Centered

Use only when the user wants a quick visual spec.

- Screen/case sections.
- Capture and callouts.
- Basic UI behavior.
- Minimal code evidence.

### Default Spec: Logic Coverage

Use this by default for detailed feature specs.

- Candidate code collection.
- `logic-inventory.md`.
- `coverage-matrix.md`.
- `open-questions.md`.
- Figma/Markdown feature spec.
- Capture index and readability validation.

### Extended Spec: QA-Ready

Use when the output will feed QA or Notion test cases.

- Everything in Logic Coverage.
- Scenario/state combination table.
- Acceptance criteria.
- QA test case table.

## Figma Feature Spec Standard

Figma feature specs in this workspace follow the reference structure:

- one Figma section per screen/case,
- section frame: `2160px` wide,
- left side: `1280px` screen or modal capture,
- left side: `P`, `1`, `2`, `3` callouts over relevant UI areas,
- right side: `840px` spec panel,
- header rows: `상황`, `화면명 + 경로`, `Case`,
- body rows: stacked `설명` rows with a `Number` badge and freeform description block,
- each section includes `Logic Coverage`,
- captures are tracked in `outputs/<feature>/capture-index.md`,
- feature-specific screenshots are stored in `outputs/<feature>/captures/`.

Use `templates/feature-spec.md` as the source template.
Use `templates/logic-inventory.md` and `templates/coverage-matrix.md` before writing a detailed spec.
Use `templates/capture-index.md` to track captures.

## Harness

Analysis harness scripts live under:

```text
harness\feature-spec\scripts
```

Generate candidate files, logic inventory, coverage matrix, and open questions:

```powershell
node .\harness\feature-spec\scripts\analyze-feature.mjs `
  --feature "pickdrop" `
  --prototype "F:\OneDrive\문서\Schedule_Daycare_20260320" `
  --output ".\outputs\pickdrop" `
  --keywords "pickdrop,픽드랍,pickup,dropoff"
```

Validate Markdown outputs:

```powershell
node .\harness\feature-spec\scripts\validate-markdown.mjs `
  --output ".\outputs\pickdrop" `
  --spec ".\outputs\pickdrop\pickdrop-reservation-feature-spec-v3.md"
```

The harness is not an automatic spec writer. It is a guardrail for discovering logic and preventing missing branches in the final spec.

## How To Ask Codex

```text
Product Output Automation 기준으로 작업해줘.

대상 프로젝트는 Schedule Daycare고, 기능은 "<기능명>"이야.

코드 기반 프로토타입을 읽고 이 기능의 상세 기능명세를 Figma에 생성해줘.
먼저 logic-inventory.md와 coverage-matrix.md를 만들고, 누락 로직은 Not Covered 또는 Open Question으로 남겨줘.
명세는 화면/케이스별 섹션, 왼쪽 화면 캡처와 번호 콜아웃, 오른쪽 명세표 구조로 작성해줘.
```

```text
Product Output Automation 기준으로 작업해줘.

방금 만든 "<기능명>" 기능명세를 기준으로 Notion QA 테스트 케이스 표를 만들어줘.
우선순위, 사전조건, 테스트 절차, 예상 결과를 포함해줘.
```

## Encoding

- All Markdown files should be UTF-8.
- PowerShell can display Korean paths incorrectly depending on terminal encoding; inspect with `-Encoding UTF8` before assuming file corruption.
- Generated Korean text must not contain mojibake patterns such as `�`, `?쎈`, `?곹`, `?붾`, or `?댁`.
