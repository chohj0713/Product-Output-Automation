# Readability Validation: 픽드랍 예약

## Target

| Field | Value |
| --- | --- |
| Feature spec | `outputs/pickdrop/pickdrop-reservation-feature-spec.md` |
| Figma URL | https://www.figma.com/design/WCxDoUASusnVpKd3GWc93R/-26-XX--%ED%94%BD%EB%93%9C%EB%9E%8D-%EC%98%88%EC%95%BD?node-id=0-1 |
| Validation date | 2026-05-10 |

## Markdown Checks

| Check | Result | Notes |
| --- | --- | --- |
| Feature spec exists | Pass | `pickdrop-reservation-feature-spec.md` |
| Business/UI split exists | Pass | Each major section separates `Business Logic` and `UI Logic` |
| Integration notes exist | Pass | UI actions and business rules are connected in `Integration Notes` |
| Source-detail blocks hidden | Pass | No row-level source-detail blocks |
| Implementation source details hidden | Pass | No implementation source-detail section |
| Logic coverage hidden | Pass | Internal coverage remains in `coverage-matrix.md` only |
| Internal logic IDs hidden | Pass | Final spec does not expose internal logic IDs |
| Korean text sanity | Pass | No mojibake pattern found |

## Harness Checks

| Check | Result | Notes |
| --- | --- | --- |
| Logic inventory structure | Pass | `Business Logic Items`, `UI Logic Items`, `Integration Mapping Items`, `Unknown Items` |
| Coverage matrix structure | Pass | Includes `Logic Type`, `Category`, `Status`, `Spec Area`, `Spec Row` |
| Open questions structure | Pass | Questions include `Logic Type` and owner |
| Markdown validation | Pass | `validate-markdown.mjs` returned `passed: true` |

## Remaining Open Items

- 픽드랍 이용권 부족 상태에서 저장을 차단할지, 초과 예약으로 허용할지 결정이 필요하다.
- 호텔링에서 체크인 픽업과 체크아웃 하원을 모두 선택한 경우 왕복 1회 차감인지 편도 2회 차감인지 결정이 필요하다.
- 픽업만 선택한 편도와 하원만 선택한 편도를 화면에서 같은 편도로 표시할지, 별도 라벨로 표시할지 결정이 필요하다.
