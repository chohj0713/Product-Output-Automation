# Capture Index: 픽드랍 예약

## Capture Folder

```text
F:\OneDrive\문서\Product Output Automation\outputs\pickdrop\captures
```

## Capture List

| Capture ID | File | Figma Section | Source Route / State | Required | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| pickdrop-entry | `captures/screen_modal_pickdrop_list.png` | 1. 픽드랍 예약 진입 | 예약 등록 모달 기본 상태, `픽드랍까지 예약` CTA 진입 | Yes | Placed | Figma v3 섹션 1에 축소 JPG 프리뷰를 배치함. 원본 PNG는 captures 폴더에 보관. |
| pickdrop-option-date | `captures/screen_modal_booking_step_2_pickdrop.png` | 2. 픽드랍 옵션 및 날짜 선택 | 예약 등록 모달 `is-pickdrop` 상태, 픽업/하원/날짜 선택 | Yes | Placed | Figma v3 섹션 2에 축소 JPG 프리뷰를 배치함. 원본 PNG는 captures 폴더에 보관. |
| pickdrop-payment | `captures/screen_booking_detail.png` | 3. 결제 및 이용권 차감 | 예약 상세/결제 영역, 픽드랍 금액 및 이용권 반영 상태 | Yes | Placed | Figma v3 섹션 3에 축소 JPG 프리뷰를 배치함. 원본 PNG는 captures 폴더에 보관. |
| hoteling-pickdrop | `captures/04-hoteling-pickdrop.png` | 4. 호텔링 연계 픽드랍 | 호텔링 예약 모달 픽드랍 옵션/결제 영역 | Optional | Pending | 호텔링 연계 캡처가 아직 없어 Figma v3에는 슬롯으로 표시함. |

## Naming Rules

- Use lowercase kebab-case for new screenshot files.
- Prefer section order prefixes only for newly captured files, for example `04-hoteling-pickdrop.png`.
- Store only 픽드랍 feature screenshots in this folder.
- If a capture is cropped or edited, note the crop/edit in `Notes`.

## Status Values

- `Pending`: capture needed.
- `Provided`: user supplied the image.
- `Captured`: Codex captured the image from the local prototype.
- `Placed`: image has been placed in Figma.
- `Replaced`: image replaced an earlier mock/wire capture.
- `Needs recapture`: state/data/viewport is wrong or outdated.
