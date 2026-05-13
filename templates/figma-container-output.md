# Figma Container Output: <Feature Name>

Use this template when creating the final Figma feature-spec output.

## Final Output Rule

- Create only `Container` spec content inside each numbered frame.
- Use `MGMCrXQxxIvOkCAAw3bxCq / 77:501` as the canonical layout reference.
- Generate `figma-card-data.json` before creating Figma nodes; do not paste Markdown tables directly into Figma.

## Figma Hierarchy

```text
<Platform Header Frame>
<Section: Screen or Case Name>
  <Numbered Frame: 1>
    Container
      Title
        상황
        화면명 / 화면 경로
        Case
      설명
        Number
        설명(1)
  <Numbered Frame: 2>
    Container
      ...
```

## Canonical Dimensions

| Item | Value |
| --- | --- |
| Container width | `840px` |
| Title height | `120px` |
| Description block | Repeated `설명` frame |
| Number block | `36px` square |
| Primary accent | `#9fc14f` |
| Policy accent | `#1e78f0` |

## Container Title Fields

| Field | Value |
| --- | --- |
| 상황 | `<domain or feature area>` |
| 화면명 | `<actual screen or modal name>` |
| 화면 경로 | `<entry path>` |
| Case | `<user-facing case>` |

## Description Block

| Field | Value |
| --- | --- |
| Number | `<1 / 2 / 3>` |
| Screen Area | `<visible area>` |
| UI Item | `<specific item>` |
| Behavior | `<user-facing behavior>` |
| Exception / State | `<error, disabled, empty, selected, loading>` |
| Data Impact | `<read/write/update/delete/no impact>` |

## Card Data Shape

```json
{
  "situation": "<feature area>",
  "screenName": "<actual screen or modal>",
  "screenPath": "<entry path>",
  "caseName": "<user-facing case>",
  "blocks": [
    {
      "number": "P",
      "kind": "policy",
      "title": "<policy/context title>",
      "bullets": ["<product-facing note>"]
    },
    {
      "number": "1",
      "kind": "item",
      "title": "[Input] <UI item>",
      "bullets": ["<behavior>", "<exception/state/data impact>"]
    }
  ]
}
```

## Writing Rules

- One description block should explain one visible behavior.
- Fold policy notes into the relevant behavior only when they affect visible UI, state, exception, or data impact.
- Do not reproduce Markdown tables directly in Figma.
- Do not create a generic policy board.
- Do not collapse the body into a single `설명 제목` + `설명 본문` text pair.
