# Figma Container Output: <Feature Name>

Use this template when creating the final Figma feature-spec output.

## Final Output Rule

- Create only `Container` spec content inside each numbered frame.
- Use `MGMCrXQxxIvOkCAAw3bxCq / 77:501` as the canonical layout reference.
- Generate and validate `figma-card-data.json` before creating Figma nodes; do not paste Markdown tables directly into Figma.
- Keep every template field separated so the fixed JS template can inject values without parsing prose.

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
| Number | `<P / 1 / 2 / 3>` |
| Kind | `<policy / item>` |
| Title | `<[Input] / [Option] / [Button] / [State] UI item title>` |
| Bullets | `<array of behavior, exception, state, data impact>` |

## Card Data Shape

```json
{
  "version": 1,
  "template": {
    "source": "canonical-figma-node",
    "fileKey": "MGMCrXQxxIvOkCAAw3bxCq",
    "nodeId": "77:501",
    "width": 840,
    "titleHeight": 120
  },
  "feature": "<feature>",
  "project": "<project>",
  "generatedFrom": "<feature-spec.md>",
  "cards": [
    {
      "id": "S-01",
      "frameName": "1",
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
  ]
}
```

## Writing Rules

- One description block should explain one visible behavior.
- Fold policy notes into the relevant behavior only when they affect visible UI, state, exception, or data impact.
- Do not reproduce Markdown tables directly in Figma.
- Do not create a generic policy board.
- Do not collapse the body into a single `설명 제목` + `설명 본문` text pair.
- Validate `figma-card-data.json` against `harness/feature-spec/schemas/figma-card-data.schema.json` before running the Figma script.
