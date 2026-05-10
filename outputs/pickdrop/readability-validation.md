# Readability Validation: 픽드랍 예약

## Target

| Field | Value |
| --- | --- |
| Figma file | `[26-XX] 픽드랍 예약` |
| Figma page | `픽드랍 기능명세` |
| Figma URL | https://www.figma.com/design/WCxDoUASusnVpKd3GWc93R/-26-XX--%ED%94%BD%EB%93%9C%EB%9E%8D-%EC%98%88%EC%95%BD?node-id=0-1 |
| Validation date | 2026-05-10 |

## Markdown Checks

| Check | Result | Notes |
| --- | --- | --- |
| Feature spec exists | Pass | `pickdrop-reservation-feature-spec.md` |
| Body rows exist | Pass | `기능 요구사항` sections used |
| Source-detail blocks hidden | Pass | No row-level source-detail blocks |
| Implementation source details hidden | Pass | No implementation source-detail section |
| Logic coverage hidden | Pass | Internal coverage remains in `coverage-matrix.md` only |
| Korean text sanity | Pass | No mojibake pattern found |

## Figma Checks

| Check | Result | Notes |
| --- | --- | --- |
| Page exists | Pass | Page id `0:1` |
| Page title | Pass | `픽드랍 기능명세` |
| Top-level frames | Pass | 11 frames: overview + 10 spec sections |
| Text-first structure | Pass | Sections contain title, context, and behavior rows |
| Source-detail text hidden | Pass | No code source details, file paths, line numbers, or coverage IDs exposed |

## Remaining Open Items

- Decide whether insufficient 픽드랍 이용권 blocks save or allows over-limit save.
- Decide hoteling 왕복 차감 기준.
- Decide whether pickup-only and dropoff-only should both display as `편도` or be labeled separately.
