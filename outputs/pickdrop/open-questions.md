# Open Questions: pickdrop

## Product Policy Questions

| Logic ID | Logic Type | Source | Question | Owner | Status |
| --- | --- | --- | --- | --- | --- |
| LI-001 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:28` | 이 로직을 기능명세에 반영해야 하는가: export function getPickdropCountType(source = {}) { | PM/Product | Open |
| LI-002 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:707` | 이 로직을 기능명세에 반영해야 하는가: syncPickdropTickets = () => { | PM/Product | Open |
| LI-003 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:45` | 이 로직을 기능명세에 반영해야 하는가: type = getPickdropCountType(entry); | PM/Product | Open |
| LI-005 | Business | `..\Schedule_Daycare_20260320\src\services\ticket-reservation-service.js:92` | 이 로직을 기능명세에 반영해야 하는가: export function buildPickdropUsagePlan({ | PM/Product | Open |
| LI-006 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:37` | 이 로직을 기능명세에 반영해야 하는가: buildPickdropUsagePlan, | PM/Product | Open |
| LI-007 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:690` | 이 로직을 기능명세에 반영해야 하는가: syncPickdropTickets(); | PM/Product | Open |
| LI-008 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1113` | 이 로직을 기능명세에 반영해야 하는가: syncPickdropTickets(); | PM/Product | Open |
| LI-009 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1306` | 이 로직을 기능명세에 반영해야 하는가: syncPickdropTickets(); | PM/Product | Open |
| LI-010 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1347` | 이 로직을 기능명세에 반영해야 하는가: syncPickdropTickets(); | PM/Product | Open |
| LI-011 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1489` | 이 로직을 기능명세에 반영해야 하는가: syncPickdropTickets(); | PM/Product | Open |
| LI-012 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1823` | 이 로직을 기능명세에 반영해야 하는가: built = buildPickdropUsagePlan({ | PM/Product | Open |
| LI-013 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2098` | 이 로직을 기능명세에 반영해야 하는가: submitReservation({ includePickdrop: true }); | PM/Product | Open |
| LI-014 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2330` | 이 로직을 기능명세에 반영해야 하는가: submitReservation({ includePickdrop: false }); | PM/Product | Open |
| LI-015 | Business | `..\Schedule_Daycare_20260320\src\pages\hotels.js:48` | 이 로직을 기능명세에 반영해야 하는가: buildPickdropUsagePlan, | PM/Product | Open |
| LI-016 | Business | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3181` | 이 로직을 기능명세에 반영해야 하는가: builtPlan = buildPickdropUsagePlan({ | PM/Product | Open |
| LI-017 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:66` | 이 로직을 기능명세에 반영해야 하는가: .filter((ticket) => ticket?.type === "pickdrop") | PM/Product | Open |
| LI-018 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:3` | 이 로직을 기능명세에 반영해야 하는가: export const PICKDROP_COUNT_TYPES = Object.freeze(["oneway", "roundtrip"]); | PM/Product | Open |
| LI-019 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:39` | 이 로직을 기능명세에 반영해야 하는가: export function getPickdropCountByEntries(entries = []) { | PM/Product | Open |
| LI-020 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:66` | 이 로직을 기능명세에 반영해야 하는가: export function resolvePickdropTicketCountType(source = {}) { | PM/Product | Open |
| LI-021 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:42` | 이 로직을 기능명세에 반영해야 하는가: countExistingPickdropUsage(entries = [], optionMap = new Map()) { | PM/Product | Open |
| LI-022 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:101` | 이 로직을 기능명세에 반영해야 하는가: mergeUsagesKeepService(existingUsages = [], nextPickdropUsages = [], optionMap = new Map()) { | PM/Product | Open |
| LI-023 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:123` | 이 로직을 기능명세에 반영해야 하는가: nextPickdropUsages.forEach((usage) => append(usage)); | PM/Product | Open |
| LI-024 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:132` | 이 로직을 기능명세에 반영해야 하는가: export function repairReservationPickdropUsages({ | PM/Product | Open |
| LI-025 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:148` | 이 로직을 기능명세에 반영해야 하는가: existingPickdropUsage.forEach((count, ticketId) => { | PM/Product | Open |
| LI-036 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:75` | 이 로직을 기능명세에 반영해야 하는가: if (!ticketId \|\| !memberPickdropTicketIds.has(ticketId)) { | PM/Product | Open |
| LI-038 | Business | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:2` | 이 로직을 기능명세에 반영해야 하는가: getPickdropCountType, | PM/Product | Open |
| LI-039 | Business | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:116` | 이 로직을 기능명세에 반영해야 하는가: pickdropType = getPickdropCountType(entry); | PM/Product | Open |
| LI-040 | Business | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:123` | 이 로직을 기능명세에 반영해야 하는가: hotelingPickdropType = getPickdropCountType({ | PM/Product | Open |
| LI-041 | Business | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:4` | 이 로직을 기능명세에 반영해야 하는가: import { getPickdropCountType, resolvePickdropTicketCountType } from "./pickdrop-policy.js"; | PM/Product | Open |
| LI-042 | Business | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:204` | 이 로직을 기능명세에 반영해야 하는가: pickdropType = getPickdropCountType(dateEntry); | PM/Product | Open |
| LI-043 | Business | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:212` | 이 로직을 기능명세에 반영해야 하는가: hotelingPickdropType = getPickdropCountType({ | PM/Product | Open |
| LI-044 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:728` | 이 로직을 기능명세에 반영해야 하는가: (ticket) => ticket.type === "pickdrop" | PM/Product | Open |
| LI-045 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:731` | 이 로직을 기능명세에 반영해야 하는가: pickdropOptions.map((ticket) => [ticket.id, ticket]) | PM/Product | Open |
| LI-046 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:741` | 이 로직을 기능명세에 반영해야 하는가: pickdropOptions.map((ticket) => [ | PM/Product | Open |
| LI-047 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1095` | 이 로직을 기능명세에 반영해야 하는가: (ticket) => ticket.type === "pickdrop" | PM/Product | Open |
| LI-048 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1128` | 이 로직을 기능명세에 반영해야 하는가: pickdropOptions.map((ticket) => [ticket.id, ticket]) | PM/Product | Open |
| LI-049 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1831` | 이 로직을 기능명세에 반영해야 하는가: pickdropUsedMap.forEach((used, ticketId) => { | PM/Product | Open |
| LI-050 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1931` | 이 로직을 기능명세에 반영해야 하는가: hasAnyPickup = reservationDates.some((entry) => entry.pickup); | PM/Product | Open |
| LI-051 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1932` | 이 로직을 기능명세에 반영해야 하는가: hasAnyDropoff = reservationDates.some((entry) => entry.dropoff); | PM/Product | Open |
| LI-052 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:16` | 이 로직을 기능명세에 반영해야 하는가: export function buildPickdropRepairContext({ | PM/Product | Open |
| LI-059 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:64` | 이 로직을 기능명세에 반영해야 하는가: memberPickdropTicketIds = new Set( | PM/Product | Open |
| LI-060 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:1` | 이 로직을 기능명세에 반영해야 하는가: import { normalizePickdropType } from "./ticket-service.js"; | PM/Product | Open |
| LI-061 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:2` | 이 로직을 기능명세에 반영해야 하는가: import { resolvePickdropTicketCountType } from "./pickdrop-policy.js"; | PM/Product | Open |
| LI-062 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:31` | 이 로직을 기능명세에 반영해야 하는가: countType = resolvePickdropTicketCountType(option); | PM/Product | Open |
| LI-063 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:129` | 이 로직을 기능명세에 반영해야 하는가: * rebuild pickdrop `ticketUsages` on a reservation from pickup/dropoff flags. | PM/Product | Open |
| LI-064 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:147` | 이 로직을 기능명세에 반영해야 하는가: existingPickdropUsage = countExistingPickdropUsage(reservation.dates, optionMap); | PM/Product | Open |
| LI-065 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:159` | 이 로직을 기능명세에 반영해야 하는가: pickdropUsageByDate = buildDateTicketUsagesMap(dateKeys, planByDate, optionMap); | PM/Product | Open |
| LI-066 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:165` | 이 로직을 기능명세에 반영해야 하는가: nextPickdropUsages = pickdropUsageByDate.get(String(entry?.date \|\| "")) \|\| []; | PM/Product | Open |
| LI-067 | Business | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:168` | 이 로직을 기능명세에 반영해야 하는가: ticketUsages: mergeUsagesKeepService(existingUsages, nextPickdropUsages, optionMap), | PM/Product | Open |
| LI-068 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:709` | 이 로직을 기능명세에 반영해야 하는가: if (elements.pickdropTicketField) { | PM/Product | Open |
| LI-069 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:713` | 이 로직을 기능명세에 반영해야 하는가: if (elements.pickdropTicketField) { | PM/Product | Open |
| LI-070 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:868` | 이 로직을 기능명세에 반영해야 하는가: if (elements.pickdropTicketTotal) { | PM/Product | Open |
| LI-071 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2063` | 이 로직을 기능명세에 반영해야 하는가: if (pickdropCount > 0 && pickdropFlags.hasPickup && pickdropFlags.hasDropoff && pickdropMemberCount.oneway === 0 && pickdropMemberCount.roun | PM/Product | Open |
| LI-072 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2065` | 이 로직을 기능명세에 반영해야 하는가: } else if (pickdropCount > 0 && (pickdropFlags.hasPickup \|\| pickdropFlags.hasDropoff) && pickdropMemberCount.oneway === 0 && pickdropMemberC | PM/Product | Open |
| LI-073 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2068` | 이 로직을 기능명세에 반영해야 하는가: if (pickdropMemberCount.oneway > 0) { | PM/Product | Open |
| LI-074 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2075` | 이 로직을 기능명세에 반영해야 하는가: if (pickdropMemberCount.roundtrip > 0) { | PM/Product | Open |
| LI-077 | Integration | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:56` | 이 로직을 기능명세에 반영해야 하는가: if (pickdropOptions.length === 0) { | PM/Product | Open |
| LI-078 | Integration | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:30` | 이 로직을 기능명세에 반영해야 하는가: if (pickup && dropoff) { | PM/Product | Open |
| LI-079 | Integration | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:33` | 이 로직을 기능명세에 반영해야 하는가: if (pickup \|\| dropoff) { | PM/Product | Open |
| LI-080 | Integration | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:76` | 이 로직을 기능명세에 반영해야 하는가: if (!hasPickup && !hasDropoff) { | PM/Product | Open |
| LI-081 | Integration | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:81` | 이 로직을 기능명세에 반영해야 하는가: if (hasPickup && hasDropoff) { | PM/Product | Open |
| LI-082 | Business | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2198` | 이 로직을 기능명세에 반영해야 하는가: getHotelingPickdropFlags = (reservation) => { | PM/Product | Open |
| LI-083 | Business | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2431` | 이 로직을 기능명세에 반영해야 하는가: getPickdropDateCount = () => { | PM/Product | Open |
| LI-084 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:644` | 이 로직을 기능명세에 반영해야 하는가: if (Number.isFinite(pickdropLimit) && pickdropLimit > 0 && initialDates.length > pickdropLimit) { | PM/Product | Open |
| LI-085 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:716` | 이 로직을 기능명세에 반영해야 하는가: if (elements.pickdropTicketEmpty) { | PM/Product | Open |
| LI-086 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:756` | 이 로직을 기능명세에 반영해야 하는가: if (elements.feePickdropCard) { | PM/Product | Open |
| LI-087 | Business | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2544` | 이 로직을 기능명세에 반영해야 하는가: if (pickdropTicketTotal) { | PM/Product | Open |
| LI-088 | Business | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2553` | 이 로직을 기능명세에 반영해야 하는가: if (hasTicketSelection \|\| hasPickdropSelection) { | PM/Product | Open |
| LI-089 | Business | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3050` | 이 로직을 기능명세에 반영해야 하는가: if (pickdropTicketField?.contains(input)) { | PM/Product | Open |
| LI-090 | Business | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3209` | 이 로직을 기능명세에 반영해야 하는가: if (pickupUsages.length > 0) { | PM/Product | Open |
| LI-091 | Business | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3214` | 이 로직을 기능명세에 반영해야 하는가: if (dropoffUsages.length > 0) { | PM/Product | Open |
| LI-096 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1026` | 이 로직을 기능명세에 반영해야 하는가: syncScopeUI = (scope = getModalScope({ ignorePickdrop: true })) => { | PM/Product | Open |
| LI-105 | Business | `..\Schedule_Daycare_20260320\src\services\ticket-usage-service.js:28` | 이 로직을 기능명세에 반영해야 하는가: export function mergeTicketUsagesForDate(serviceUsage, pickdropUsages = []) { | PM/Product | Open |
| LI-106 | Business | `..\Schedule_Daycare_20260320\src\services\ticket-usage-service.js:50` | 이 로직을 기능명세에 반영해야 하는가: pickdropUsages.forEach((usage) => appendUsage(usage)); | PM/Product | Open |
| LI-107 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:52` | 이 로직을 기능명세에 반영해야 하는가: resolvePickdropTicketCountType, | PM/Product | Open |
| LI-108 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:490` | 이 로직을 기능명세에 반영해야 하는가: return resolveActiveServiceTicketTargets(elements, getModalScope({ ignorePickdrop: true })); | PM/Product | Open |
| LI-109 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:623` | 이 로직을 기능명세에 반영해야 하는가: toggleSegment(pickdropTicketSegment, true); | PM/Product | Open |
| LI-110 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:632` | 이 로직을 기능명세에 반영해야 하는가: toggleSegment(pickdropTicketSegment, false); | PM/Product | Open |
| LI-111 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:714` | 이 로직을 기능명세에 반영해야 하는가: elements.pickdropTicketField.textContent = ""; | PM/Product | Open |
| LI-112 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:746` | 이 로직을 기능명세에 반영해야 하는가: renderPickdropTickets( | PM/Product | Open |
| LI-113 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:747` | 이 로직을 기능명세에 반영해야 하는가: elements.pickdropTicketField, | PM/Product | Open |
| LI-114 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:883` | 이 로직을 기능명세에 반영해야 하는가: elements.pickdropTicketTotal, | PM/Product | Open |
| LI-115 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:885` | 이 로직을 기능명세에 반영해야 하는가: totalReservable - pickdropUsageCount | PM/Product | Open |
| LI-116 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:889` | 이 로직을 기능명세에 반영해야 하는가: elements.pickdropTicketTotal.innerHTML = ` | PM/Product | Open |
| LI-117 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:990` | 이 로직을 기능명세에 반영해야 하는가: pickdropDateCount: pickdropDates.size, | PM/Product | Open |
| LI-118 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1766` | 이 로직을 기능명세에 반영해야 하는가: pickdropCount = hasAnyPickdrop ? pickdropDates.length : 0; | PM/Product | Open |
| LI-119 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1772` | 이 로직을 기능명세에 반영해야 하는가: let pickdropUsagePlan = []; | PM/Product | Open |
| LI-120 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1773` | 이 로직을 기능명세에 반영해야 하는가: let pickdropMemberCount = { oneway: 0, roundtrip: 0 }; | PM/Product | Open |
| LI-121 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1829` | 이 로직을 기능명세에 반영해야 하는가: pickdropUsagePlan = built.planByDate; | PM/Product | Open |
| LI-122 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1830` | 이 로직을 기능명세에 반영해야 하는가: pickdropUsedMap = built.usedByTicket; | PM/Product | Open |
| LI-123 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1832` | 이 로직을 기능명세에 반영해야 하는가: option = pickdropMap.get(ticketId); | PM/Product | Open |
| LI-124 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1833` | 이 로직을 기능명세에 반영해야 하는가: countType = resolvePickdropTicketCountType(option); | PM/Product | Open |
| LI-125 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1834` | 이 로직을 기능명세에 반영해야 하는가: pickdropMemberCount[countType] += Number(used) \|\| 0; | PM/Product | Open |
| LI-126 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1836` | 이 로직을 기능명세에 반영해야 하는가: applyUsage(pickdropUsedMap); | PM/Product | Open |
| LI-127 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1881` | 이 로직을 기능명세에 반영해야 하는가: pickdropTicketUsagesMap = buildDateTicketUsagesMap( | PM/Product | Open |
| LI-128 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1883` | 이 로직을 기능명세에 반영해야 하는가: pickdropUsagePlan, | PM/Product | Open |
| LI-129 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1896` | 이 로직을 기능명세에 반영해야 하는가: pickdropUsages = assignNextUsageSequences(pickdropTicketUsagesMap.get(dateKey) \|\| []); | PM/Product | Open |
| LI-130 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1904` | 이 로직을 기능명세에 반영해야 하는가: ticketUsages: mergeTicketUsagesForDate(serviceUsages, pickdropUsages), | PM/Product | Open |
| LI-131 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1924` | 이 로직을 기능명세에 반영해야 하는가: assignNextUsageSequences(pickdropTicketUsagesMap.get(dateKey) \|\| []) | PM/Product | Open |
| LI-132 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2064` | 이 로직을 기능명세에 반영해야 하는가: pickdropMemberCount.roundtrip = pickdropCount; | PM/Product | Open |
| LI-133 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2066` | 이 로직을 기능명세에 반영해야 하는가: pickdropMemberCount.oneway = pickdropCount; | PM/Product | Open |
| LI-134 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2071` | 이 로직을 기능명세에 반영해야 하는가: pickdropMemberCount.oneway, | PM/Product | Open |
| LI-135 | Business | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2078` | 이 로직을 기능명세에 반영해야 하는가: pickdropMemberCount.roundtrip, | PM/Product | Open |
| LI-160 | Business | `..\Schedule_Daycare_20260320\src\services\reservation-date-fee.js:75` | 이 로직을 기능명세에 반영해야 하는가: resolvePickdropPrice(pricingItems, pickup, dropoff) { | PM/Product | Open |

## UX Copy Questions

| Logic ID | Logic Type | Source | Question | Owner | Status |
| --- | --- | --- | --- | --- | --- |
| LI-004 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:532` | 이 로직을 기능명세에 반영해야 하는가: setPickdropMode = (enabled, options = {}) => { | Design/PM | Open |
| LI-026 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1473` | 이 로직을 기능명세에 반영해야 하는가: setPickdropMode(false); | Design/PM | Open |
| LI-027 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1561` | 이 로직을 기능명세에 반영해야 하는가: setPickdropMode(true); | Design/PM | Open |
| LI-028 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1578` | 이 로직을 기능명세에 반영해야 하는가: setPickdropMode(false); | Design/PM | Open |
| LI-029 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2085` | 이 로직을 기능명세에 반영해야 하는가: setPickdropMode(false); | Design/PM | Open |
| LI-030 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2095` | 이 로직을 기능명세에 반영해야 하는가: pickdropToggle?.addEventListener("click", () => { | Design/PM | Open |
| LI-031 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2106` | 이 로직을 기능명세에 반영해야 하는가: setPickdropMode(true); | Design/PM | Open |
| LI-032 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2249` | 이 로직을 기능명세에 반영해야 하는가: setPickdropMode(false); | Design/PM | Open |
| LI-033 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2327` | 이 로직을 기능명세에 반영해야 하는가: setPickdropMode(false); | Design/PM | Open |
| LI-034 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2344` | 이 로직을 기능명세에 반영해야 하는가: setPickdropMode(true, options); | Design/PM | Open |
| LI-035 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2362` | 이 로직을 기능명세에 반영해야 하는가: setPickdropMode(false); | Design/PM | Open |
| LI-037 | UI | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3100` | 이 로직을 기능명세에 반영해야 하는가: pickdropStart.addEventListener("click", (event) => { | Design/PM | Open |
| LI-075 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2214` | 이 로직을 기능명세에 반영해야 하는가: elements.pickdropTicketField?.addEventListener("click", handleTicketRowClick); | Design/PM | Open |
| LI-076 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2217` | 이 로직을 기능명세에 반영해야 하는가: elements.pickdropTicketField?.addEventListener("change", handleTicketSelectionChange); | Design/PM | Open |
| LI-093 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:527` | 이 로직을 기능명세에 반영해야 하는가: syncFeeDisclosure = (isPickdropMode) => { | Design/PM | Open |
| LI-097 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1138` | 이 로직을 기능명세에 반영해야 하는가: formState.ticketSelections = pickdropOptions.map((ticket) => ticket.id); | Design/PM | Open |

## Operational Questions

| Logic ID | Logic Type | Source | Question | Owner | Status |
| --- | --- | --- | --- | --- | --- |
| LI-053 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:55` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropOptions = issuedOptions.filter((option) => option?.type === "pickdrop"); | PM/Product | Open |
| LI-054 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:81` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropOptions.forEach((option) => { | PM/Product | Open |
| LI-055 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:5` | 코드만으로 정책 또는 UX를 확정할 수 있는가: export function normalizePickdropFlags(source = {}) { | PM/Product | Open |
| LI-056 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:19` | 코드만으로 정책 또는 UX를 확정할 수 있는가: export function applyPickdropFlags(target = {}, flags = {}) { | PM/Product | Open |
| LI-057 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:62` | 코드만으로 정책 또는 UX를 확정할 수 있는가: export function getPickdropReservableTotal(map) { | PM/Product | Open |
| LI-058 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:17` | 코드만으로 정책 또는 UX를 확정할 수 있는가: buildPickdropPools(selectionOrder = [], optionMap = new Map()) { | PM/Product | Open |
| LI-092 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:350` | 코드만으로 정책 또는 UX를 확정할 수 있는가: elements.pickdropInputs.forEach((input) => { | PM/Product | Open |
| LI-094 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:656` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropInputs.forEach((input) => { | PM/Product | Open |
| LI-095 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:675` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropInputs.forEach((input) => { | PM/Product | Open |
| LI-098 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1621` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropInputs.forEach((input) => { | PM/Product | Open |
| LI-099 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1819` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropOptions = options.filter((option) => option.type === "pickdrop"); | PM/Product | Open |
| LI-100 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1821` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropOptions.map((option) => [option.id, option]) | PM/Product | Open |
| LI-101 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1888` | 코드만으로 정책 또는 UX를 확정할 수 있는가: getPickdropForDate = (dateKey) => ({ | PM/Product | Open |
| LI-102 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1910` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropDates.forEach((dateKey) => { | PM/Product | Open |
| LI-103 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2219` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropInputs.forEach((input) => { | PM/Product | Open |
| LI-104 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2333` | 코드만으로 정책 또는 UX를 확정할 수 있는가: openPickdropModal = (memberId, options = {}) => { | PM/Product | Open |
| LI-136 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:24` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropOptions: [], | PM/Product | Open |
| LI-137 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:33` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropOptions: [], | PM/Product | Open |
| LI-138 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:45` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropOptions: [], | PM/Product | Open |
| LI-139 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:58` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropOptions: [], | PM/Product | Open |
| LI-140 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:60` | 코드만으로 정책 또는 UX를 확정할 수 있는가: skipReason: "no-pickdrop-options", | PM/Product | Open |
| LI-141 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:86` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropOptions, | PM/Product | Open |
| LI-142 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:6` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickup = Boolean( | PM/Product | Open |
| LI-143 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:7` | 코드만으로 정책 또는 UX를 확정할 수 있는가: source?.pickup | PM/Product | Open |
| LI-144 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:8` | 코드만으로 정책 또는 UX를 확정할 수 있는가: ?? source?.pickdrop?.pickup | PM/Product | Open |
| LI-145 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:11` | 코드만으로 정책 또는 UX를 확정할 수 있는가: dropoff = Boolean( | PM/Product | Open |
| LI-146 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:12` | 코드만으로 정책 또는 UX를 확정할 수 있는가: source?.dropoff | PM/Product | Open |
| LI-147 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:13` | 코드만으로 정책 또는 UX를 확정할 수 있는가: ?? source?.pickdrop?.dropoff | PM/Product | Open |
| LI-148 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:16` | 코드만으로 정책 또는 UX를 확정할 수 있는가: return { pickup, dropoff }; | PM/Product | Open |
| LI-149 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:20` | 코드만으로 정책 또는 UX를 확정할 수 있는가: { pickup, dropoff } = normalizePickdropFlags(flags); | PM/Product | Open |
| LI-150 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:23` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickup, | PM/Product | Open |
| LI-151 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:24` | 코드만으로 정책 또는 UX를 확정할 수 있는가: dropoff, | PM/Product | Open |
| LI-152 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:29` | 코드만으로 정책 또는 UX를 확정할 수 있는가: { pickup, dropoff } = normalizePickdropFlags(source); | PM/Product | Open |
| LI-153 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:67` | 코드만으로 정책 또는 UX를 확정할 수 있는가: type = normalizePickdropType( | PM/Product | Open |
| LI-154 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:68` | 코드만으로 정책 또는 UX를 확정할 수 있는가: source?.pickdropType | PM/Product | Open |
| LI-155 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:74` | 코드만으로 정책 또는 UX를 확정할 수 있는가: hasPickup = Boolean(entry?.pickup); | PM/Product | Open |
| LI-156 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:75` | 코드만으로 정책 또는 UX를 확정할 수 있는가: hasDropoff = Boolean(entry?.dropoff); | PM/Product | Open |
| LI-157 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:134` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pickdropOptions, | PM/Product | Open |
| LI-158 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:141` | 코드만으로 정책 또는 UX를 확정할 수 있는가: optionMap = normalizeOptions(pickdropOptions); | PM/Product | Open |
| LI-159 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:146` | 코드만으로 정책 또는 UX를 확정할 수 있는가: pools = buildPickdropPools(selectionOrder, optionMap); | PM/Product | Open |
