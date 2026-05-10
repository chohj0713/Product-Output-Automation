# Capture Index: <Feature Name>

Use this file to track screen captures that should be placed into the left side of each Figma feature spec section.

## Capture Folder

```text
outputs/<feature>/captures
```

## Capture List

| Capture ID | File | Figma Section | Source Route / State | Required | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `<capture-id>` | `captures/<file>.png` | `<Section title>` | `<Route, modal state, localStorage seed, viewport>` | Yes | Pending | `<Notes>` |

## Naming Rules

- Use lowercase kebab-case file names.
- Prefix with the section order when useful: `01-entry.png`, `02-option-date.png`, `03-payment.png`.
- Store only feature-specific screenshots in this folder.
- Keep raw screenshots unless there is a clear need to crop; if cropped, note the crop in `Notes`.

## Status Values

- `Pending`: capture needed.
- `Provided`: user supplied the image.
- `Captured`: Codex captured the image from the local prototype.
- `Placed`: image has been placed in Figma.
- `Replaced`: image replaced an earlier mock/wire capture.
- `Needs recapture`: state/data/viewport is wrong or outdated.
