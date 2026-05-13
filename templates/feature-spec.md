# Feature Spec: <Feature Name>

## Output Metadata

| Field | Value |
| --- | --- |
| Project | `<Project>` |
| Feature output folder | `outputs/<feature>` |
| Last updated | `<YYYY-MM-DD>` |
| Markdown validation | `<Pending / Passed>` |

## Screen Header

| Field | Value |
| --- | --- |
| Platform | `<Web / Mobile / Admin / User App>` |
| Screen | `<screen name>` |
| Entry Path | `<how the user reaches this screen>` |
| Primary User Goal | `<goal visible from the screen>` |
| Related Screens | `<previous / next / modal / drawer>` |

## Context

- Describe the real user situation for this screen.
- Explain the screen's job in the feature flow.
- Keep policy background short and only where it helps explain what the user sees.

## Screen Areas

| Screen Area | Purpose | Main UI Items | Visibility / Entry Condition |
| --- | --- | --- | --- |
| `<area name>` | `<what this area lets the user do>` | `<items in the area>` | `<when shown or hidden>` |

## UI Item Spec

| Platform | Screen | Screen Area | UI Item | Behavior | Exception | State | Data Impact |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `<platform>` | `<screen>` | `<area>` | `<button/input/card/etc.>` | `<user-facing behavior>` | `<validation/error/constraint>` | `<default/loading/empty/selected/disabled/etc.>` | `<read/write/update/delete/no impact>` |

## Screen-level States

| State | Trigger | Screen Response | Recovery / Next Step |
| --- | --- | --- | --- |
| Default | `<trigger>` | `<visible result>` | `<next action>` |
| Loading | `<trigger>` | `<visible result>` | `<next action>` |
| Empty | `<trigger>` | `<visible result>` | `<next action>` |
| Error | `<trigger>` | `<visible result>` | `<next action>` |
| Permission / Disabled | `<trigger>` | `<visible result>` | `<next action>` |

## Policy Notes

- Policy notes support the screen description; they are not the main structure.
- Include only rules that change visible behavior, available actions, state, or data impact.
- Do not create a standalone generic policy board.

## Rules

- Write by actual screen.
- Split each screen by visible screen areas.
- Describe behavior item by item inside each area.
- Use this hierarchy: Platform -> Screen -> Screen Area -> UI Item -> Behavior / Exception / State / Data Impact.
- Keep policies as supporting notes only.
- Do not structure the final spec around Core Policies.
- Do not create generic callout boards without a real screen structure.
- Do not list abstract policies without tying them to visible UI.
- Do not include code evidence, file paths, function names, or implementation IDs.
