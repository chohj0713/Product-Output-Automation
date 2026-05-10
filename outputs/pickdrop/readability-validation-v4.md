# Readability Validation: 픽드랍 예약 v4

## Target

| Field | Value |
| --- | --- |
| Figma file | `[26-XX] 픽드랍 예약` |
| Figma page | `픽드랍 상세 기능명세 v4` |
| Figma URL | https://www.figma.com/design/WCxDoUASusnVpKd3GWc93R/-26-XX--%ED%94%BD%EB%93%9C%EB%9E%8D-%EC%98%88%EC%95%BD?node-id=0-1 |
| Validation date | 2026-05-09 |

## Structural Checks

| Check | Result | Notes |
| --- | --- | --- |
| Page exists | Pass | Page id `0:1` |
| Top-level section count | Pass | 6 section frames |
| Top-level stray nodes | Pass | 0 stray nodes |
| Section naming | Pass | `1. 픽드랍 목록 및 예약 진입` through `6. 호텔링 연계 픽드랍` |
| Capture/spec split | Pass | Each section has one capture panel and one spec panel |
| Callout mapping | Pass | Every callout has a matching spec row |
| Logic Coverage block | Pass | Every section includes `Logic Coverage` |

## Coverage-Oriented Checks

| Check | Result | Notes |
| --- | --- | --- |
| UI entry logic | Pass | 목록/필터/예약 진입 section added |
| Mode/state logic | Pass | `setPickdropMode`, date initialization, option state covered |
| Pricing/ticket logic | Pass | 편도/왕복, 금액, 이용권 차감 priority covered |
| Persistence logic | Pass | `includePickdrop`, date merge, ticket usage merge covered |
| Repair/sync logic | Pass | `pickdrop-detail-sync` and `pickdrop-usage-repair-service` covered |
| Hoteling logic | Partial | Main flow covered; hoteling capture and 왕복 차감 정책 remain open |

## Remaining Improvements

- Replace the section 6 capture slot with `captures/04-hoteling-pickdrop.png` when available.
- Confirm hoteling 왕복 차감 policy.
- Confirm whether over-limit pickdrop ticket usage blocks save or allows warning-only save.
