# Open Questions: pickdrop

## Questions To Resolve

| Logic ID | Source | Question | Owner | Status |
| --- | --- | --- | --- | --- |
| LI-038 | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:2` | 이 로직을 기능명세에 반영해야 하는가: getPickdropCountType, | PM/Product | Open |
| LI-039 | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:116` | 이 로직을 기능명세에 반영해야 하는가: pickdropType = getPickdropCountType(entry); | PM/Product | Open |
| LI-040 | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:123` | 이 로직을 기능명세에 반영해야 하는가: hotelingPickdropType = getPickdropCountType({ | PM/Product | Open |
| LI-041 | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:4` | 이 로직을 기능명세에 반영해야 하는가: import { getPickdropCountType, resolvePickdropTicketCountType } from "./pickdrop-policy.js"; | PM/Product | Open |
| LI-042 | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:204` | 이 로직을 기능명세에 반영해야 하는가: pickdropType = getPickdropCountType(dateEntry); | PM/Product | Open |
| LI-043 | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:212` | 이 로직을 기능명세에 반영해야 하는가: hotelingPickdropType = getPickdropCountType({ | PM/Product | Open |
| LI-053 | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:55` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropOptions = issuedOptions.filter((option) => option?.type === "pickdrop"); | PM/Product | Open |
| LI-054 | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:81` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropOptions.forEach((option) => { | PM/Product | Open |
| LI-055 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:5` | 코드 근거만으로 정책을 확정할 수 있는가: export function normalizePickdropFlags(source = {}) { | PM/Product | Open |
| LI-056 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:19` | 코드 근거만으로 정책을 확정할 수 있는가: export function applyPickdropFlags(target = {}, flags = {}) { | PM/Product | Open |
| LI-057 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:62` | 코드 근거만으로 정책을 확정할 수 있는가: export function getPickdropReservableTotal(map) { | PM/Product | Open |
| LI-058 | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:17` | 코드 근거만으로 정책을 확정할 수 있는가: buildPickdropPools(selectionOrder = [], optionMap = new Map()) { | PM/Product | Open |
| LI-092 | `..\Schedule_Daycare_20260320\src\pages\reservation.js:350` | 코드 근거만으로 정책을 확정할 수 있는가: elements.pickdropInputs.forEach((input) => { | PM/Product | Open |
| LI-094 | `..\Schedule_Daycare_20260320\src\pages\reservation.js:656` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropInputs.forEach((input) => { | PM/Product | Open |
| LI-095 | `..\Schedule_Daycare_20260320\src\pages\reservation.js:675` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropInputs.forEach((input) => { | PM/Product | Open |
| LI-098 | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1621` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropInputs.forEach((input) => { | PM/Product | Open |
| LI-099 | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1819` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropOptions = options.filter((option) => option.type === "pickdrop"); | PM/Product | Open |
| LI-100 | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1821` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropOptions.map((option) => [option.id, option]) | PM/Product | Open |
| LI-101 | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1888` | 코드 근거만으로 정책을 확정할 수 있는가: getPickdropForDate = (dateKey) => ({ | PM/Product | Open |
| LI-102 | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1910` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropDates.forEach((dateKey) => { | PM/Product | Open |
| LI-104 | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2333` | 코드 근거만으로 정책을 확정할 수 있는가: openPickdropModal = (memberId, options = {}) => { | PM/Product | Open |
| LI-106 | `..\Schedule_Daycare_20260320\src\services\ticket-usage-service.js:50` | 이 로직을 기능명세에 반영해야 하는가: pickdropUsages.forEach((usage) => appendUsage(usage)); | PM/Product | Open |
| LI-136 | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:24` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropOptions: [], | PM/Product | Open |
| LI-137 | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:33` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropOptions: [], | PM/Product | Open |
| LI-138 | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:45` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropOptions: [], | PM/Product | Open |
| LI-139 | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:58` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropOptions: [], | PM/Product | Open |
| LI-140 | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:60` | 코드 근거만으로 정책을 확정할 수 있는가: skipReason: "no-pickdrop-options", | PM/Product | Open |
| LI-141 | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:86` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropOptions, | PM/Product | Open |
| LI-143 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:7` | 코드 근거만으로 정책을 확정할 수 있는가: source?.pickup | PM/Product | Open |
| LI-144 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:8` | 코드 근거만으로 정책을 확정할 수 있는가: ?? source?.pickdrop?.pickup | PM/Product | Open |
| LI-146 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:12` | 코드 근거만으로 정책을 확정할 수 있는가: source?.dropoff | PM/Product | Open |
| LI-147 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:13` | 코드 근거만으로 정책을 확정할 수 있는가: ?? source?.pickdrop?.dropoff | PM/Product | Open |
| LI-148 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:16` | 코드 근거만으로 정책을 확정할 수 있는가: return { pickup, dropoff }; | PM/Product | Open |
| LI-149 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:20` | 코드 근거만으로 정책을 확정할 수 있는가: { pickup, dropoff } = normalizePickdropFlags(flags); | PM/Product | Open |
| LI-150 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:23` | 코드 근거만으로 정책을 확정할 수 있는가: pickup, | PM/Product | Open |
| LI-151 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:24` | 코드 근거만으로 정책을 확정할 수 있는가: dropoff, | PM/Product | Open |
| LI-152 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:29` | 코드 근거만으로 정책을 확정할 수 있는가: { pickup, dropoff } = normalizePickdropFlags(source); | PM/Product | Open |
| LI-154 | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:68` | 코드 근거만으로 정책을 확정할 수 있는가: source?.pickdropType | PM/Product | Open |
| LI-155 | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:74` | 코드 근거만으로 정책을 확정할 수 있는가: hasPickup = Boolean(entry?.pickup); | PM/Product | Open |
| LI-156 | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:75` | 코드 근거만으로 정책을 확정할 수 있는가: hasDropoff = Boolean(entry?.dropoff); | PM/Product | Open |
| LI-157 | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:134` | 코드 근거만으로 정책을 확정할 수 있는가: pickdropOptions, | PM/Product | Open |
| LI-158 | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:141` | 코드 근거만으로 정책을 확정할 수 있는가: optionMap = normalizeOptions(pickdropOptions); | PM/Product | Open |
| LI-159 | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:146` | 코드 근거만으로 정책을 확정할 수 있는가: pools = buildPickdropPools(selectionOrder, optionMap); | PM/Product | Open |
