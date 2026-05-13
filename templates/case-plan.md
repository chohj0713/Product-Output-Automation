# Screen Plan: <Feature Name>

## Screen Selection Rules

- Start from actual screens, modals, drawers, and panels the user can see.
- Split screens when platform, entry path, primary user goal, or visible layout changes.
- Do not create separate screens for minor edge states; list them under the relevant screen area.
- Keep policy grouping secondary to the real screen structure.

## Final Screen List

| Screen ID | Platform | Screen | Primary User Goal | Entry Path | Main Screen Areas | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| S-01 | `<platform>` | `<screen>` | `<goal>` | `<path>` | `<areas>` | High |

## Screen Area Plan

| Screen ID | Screen Area | UI Items | Behaviors / States To Cover | Policy Notes Needed |
| --- | --- | --- | --- | --- |
| S-01 | `<area>` | `<items>` | `<behaviors and states>` | `<only policies that affect visible behavior>` |

## Grouped Edge States

| Edge State | Parent Screen Area | Reason |
| --- | --- | --- |
| `<edge>` | `S-01 / <area>` | `<reason>` |
