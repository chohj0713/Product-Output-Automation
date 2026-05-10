# Readability Validation: 픽드랍 예약 v3

## Target

| Field | Value |
| --- | --- |
| Figma file | `[26-XX] 픽드랍 예약` |
| Figma page | `픽드랍 기능명세 v3` |
| Figma URL | https://www.figma.com/design/WCxDoUASusnVpKd3GWc93R/-26-XX--%ED%94%BD%EB%93%9C%EB%9E%8D-%EC%98%88%EC%95%BD?node-id=14-2 |
| Validation date | 2026-05-09 |

## Structural Checks

| Check | Result | Notes |
| --- | --- | --- |
| Page exists | Pass | Page id `14:2` |
| Top-level section count | Pass | 4 section frames |
| Top-level stray nodes | Fixed | 12 stray callout text nodes removed |
| Section naming | Pass | `1. 픽드랍 예약 진입` through `4. 호텔링 연계 픽드랍` |
| Capture/spec split | Pass | Each section has left capture or capture slot and right `Frame 1` spec panel |
| Callout mapping | Pass | Body row badges match visible callout badges by section |
| Capture coverage | Partial | Sections 1-3 image previews placed; section 4 capture pending |

## Visual Readability Checks

| Check | Result | Notes |
| --- | --- | --- |
| Reference layout width | Pass | Section width follows 2160px reference format |
| Left capture panel | Partial | Sections 1-3 use image previews; section 4 uses a capture slot |
| Right spec panel | Pass | 840px table-style panel used consistently |
| Header/body separation | Pass | Header area and body rows are visually separated |
| Korean text density | Pass | Rows are split into short lines instead of dense paragraphs |
| Manual screenshot review | Pending | Requires final Figma visual screenshot after remaining captures are placed |

## Remaining Improvements

- Capture and place `04-hoteling-pickdrop.png` for section 4.
- After all captures are placed, run one more screenshot-based visual validation pass.
