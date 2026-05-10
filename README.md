# Product Output Automation

Codex workspace for PM output automation.

Use this folder to store project profiles, workflows, reusable prompts, templates, harness scripts, and intermediate outputs for work such as:

- reading code-based prototypes and creating selected feature specs,
- building logic coverage before writing detailed specs,
- separating business logic from UI logic,
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
- Minimal internal coverage tracking.

### Default Spec: Business/UI Logic Split

Use this by default for detailed feature specs.

- Candidate code collection.
- `logic-inventory.md`.
- `coverage-matrix.md`.
- `open-questions.md`.
- Markdown feature spec text.
- Capture index and readability validation when captures are used.

### Extended Spec: QA-Ready

Use when the output will feed QA or Notion test cases.

- Everything in the default spec.
- Scenario/state combination table.
- Acceptance criteria.
- QA test case table.

## Feature Spec Standard

Feature specs in this workspace are text-first by default:

- one section per screen, case, workflow, or policy group,
- each section separates `Business Logic` and `UI Logic`,
- `Integration Notes` explain how UI actions trigger policy, calculation, validation, or persistence behavior,
- final feature spec text does not include code evidence, file paths, line numbers, source symbols, or logic coverage IDs,
- captures are optional and tracked in `outputs/<feature>/capture-index.md` only when used.

Use `templates/feature-spec.md` as the source template.
Use `templates/logic-inventory.md` and `templates/coverage-matrix.md` before writing a detailed spec.
Use `templates/open-questions.md` to separate product policy, UX copy, and operations questions.
Use `templates/capture-index.md` to track captures.

## Folder Structure

```text
harness/
  feature-spec/
    checklists/
    schemas/
    scripts/
outputs/
  <feature>/
    candidate-files.md
    logic-inventory.md
    coverage-matrix.md
    open-questions.md
    <feature>-feature-spec.md
    capture-index.md
    readability-validation.md
    captures/
projects/
prompts/
templates/
workflows/
```

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
  --spec ".\outputs\pickdrop\pickdrop-reservation-feature-spec.md"
```

The harness is not an automatic spec writer. It is a guardrail for discovering logic and preventing missing branches in the final spec.

## How To Ask Codex

```text
Product Output Automation 기준으로 작업해줘.

대상 프로젝트는 Schedule Daycare이고, 기능은 "<기능명>"이야.

코드 기반 프로토타입을 읽고 이 기능의 상세 기능명세를 만들어줘.
먼저 Business Logic, UI Logic, Integration Mapping을 분리해서 계획하고,
logic-inventory.md와 coverage-matrix.md를 만든 다음,
최종 기능명세는 코드 근거 없이 텍스트 중심으로 작성해줘.
```

```text
Product Output Automation 기준으로 작업해줘.

방금 만든 "<기능명>" 기능명세를 기준으로 Notion QA 테스트 케이스 표를 만들어줘.
우선순위, 사전조건, 테스트 절차, 예상 결과를 포함해줘.
```

## Encoding

- All Markdown files should be UTF-8.
- PowerShell can display Korean paths incorrectly depending on terminal encoding; inspect files as UTF-8 before assuming file corruption.
- Generated Korean text must not contain mojibake patterns such as `占`, `�`, `?怨`, `?遺`, or repeated broken question-mark sequences.
