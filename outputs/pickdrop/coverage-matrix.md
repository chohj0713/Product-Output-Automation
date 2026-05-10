# Coverage Matrix: pickdrop

## Metadata

| Field | Value |
| --- | --- |
| Compared spec | `F:\OneDrive\문서\Product Output Automation\outputs\pickdrop\pickdrop-reservation-feature-spec.md` |
| Coverage statuses | `Covered`, `Partial`, `Not Covered`, `Open Question` |

## Matrix

| Logic ID | Logic Type | Category | Source | Summary | Status | Spec Area | Spec Row | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LI-001 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:28` | export function getPickdropCountType(source = {}) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-002 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:707` | syncPickdropTickets = () => { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-003 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:45` | type = getPickdropCountType(entry); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-004 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:532` | setPickdropMode = (enabled, options = {}) => { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-005 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-reservation-service.js:92` | export function buildPickdropUsagePlan({ | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-006 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:37` | buildPickdropUsagePlan, | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-007 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:690` | syncPickdropTickets(); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-008 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1113` | syncPickdropTickets(); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-009 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1306` | syncPickdropTickets(); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-010 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1347` | syncPickdropTickets(); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-011 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1489` | syncPickdropTickets(); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-012 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1823` | built = buildPickdropUsagePlan({ | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-013 | Business | Persistence | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2098` | submitReservation({ includePickdrop: true }); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-014 | Business | Persistence | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2330` | submitReservation({ includePickdrop: false }); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-015 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:48` | buildPickdropUsagePlan, | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-016 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3181` | builtPlan = buildPickdropUsagePlan({ | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-017 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:66` | .filter((ticket) => ticket?.type === "pickdrop") | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-018 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:3` | export const PICKDROP_COUNT_TYPES = Object.freeze(["oneway", "roundtrip"]); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-019 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:39` | export function getPickdropCountByEntries(entries = []) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-020 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:66` | export function resolvePickdropTicketCountType(source = {}) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-021 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:42` | countExistingPickdropUsage(entries = [], optionMap = new Map()) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-022 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:101` | mergeUsagesKeepService(existingUsages = [], nextPickdropUsages = [], optionMap = new Map()) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-023 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:123` | nextPickdropUsages.forEach((usage) => append(usage)); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-024 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:132` | export function repairReservationPickdropUsages({ | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-025 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:148` | existingPickdropUsage.forEach((count, ticketId) => { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-026 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1473` | setPickdropMode(false); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-027 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1561` | setPickdropMode(true); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-028 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1578` | setPickdropMode(false); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-029 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2085` | setPickdropMode(false); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-030 | UI | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2095` | pickdropToggle?.addEventListener("click", () => { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-031 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2106` | setPickdropMode(true); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-032 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2249` | setPickdropMode(false); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-033 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2327` | setPickdropMode(false); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-034 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2344` | setPickdropMode(true, options); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-035 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2362` | setPickdropMode(false); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-036 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:75` | if (!ticketId \|\| !memberPickdropTicketIds.has(ticketId)) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-037 | UI | UI | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3100` | pickdropStart.addEventListener("click", (event) => { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-038 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:2` | getPickdropCountType, | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-039 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:116` | pickdropType = getPickdropCountType(entry); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-040 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:123` | hotelingPickdropType = getPickdropCountType({ | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-041 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:4` | import { getPickdropCountType, resolvePickdropTicketCountType } from "./pickdrop-policy.js"; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-042 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:204` | pickdropType = getPickdropCountType(dateEntry); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-043 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:212` | hotelingPickdropType = getPickdropCountType({ | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-044 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:728` | (ticket) => ticket.type === "pickdrop" | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-045 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:731` | pickdropOptions.map((ticket) => [ticket.id, ticket]) | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-046 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:741` | pickdropOptions.map((ticket) => [ | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-047 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1095` | (ticket) => ticket.type === "pickdrop" | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-048 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1128` | pickdropOptions.map((ticket) => [ticket.id, ticket]) | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-049 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1831` | pickdropUsedMap.forEach((used, ticketId) => { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-050 | Business | Persistence | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1931` | hasAnyPickup = reservationDates.some((entry) => entry.pickup); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-051 | Business | Persistence | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1932` | hasAnyDropoff = reservationDates.some((entry) => entry.dropoff); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-052 | Business | Repair/Migration | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:16` | export function buildPickdropRepairContext({ | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-053 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:55` | pickdropOptions = issuedOptions.filter((option) => option?.type === "pickdrop"); | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-054 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:81` | pickdropOptions.forEach((option) => { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-055 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:5` | export function normalizePickdropFlags(source = {}) { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-056 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:19` | export function applyPickdropFlags(target = {}, flags = {}) { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-057 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:62` | export function getPickdropReservableTotal(map) { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-058 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:17` | buildPickdropPools(selectionOrder = [], optionMap = new Map()) { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-059 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:64` | memberPickdropTicketIds = new Set( | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-060 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:1` | import { normalizePickdropType } from "./ticket-service.js"; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-061 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:2` | import { resolvePickdropTicketCountType } from "./pickdrop-policy.js"; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-062 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:31` | countType = resolvePickdropTicketCountType(option); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-063 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:129` | * rebuild pickdrop `ticketUsages` on a reservation from pickup/dropoff flags. | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-064 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:147` | existingPickdropUsage = countExistingPickdropUsage(reservation.dates, optionMap); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-065 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:159` | pickdropUsageByDate = buildDateTicketUsagesMap(dateKeys, planByDate, optionMap); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-066 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:165` | nextPickdropUsages = pickdropUsageByDate.get(String(entry?.date \|\| "")) \|\| []; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-067 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:168` | ticketUsages: mergeUsagesKeepService(existingUsages, nextPickdropUsages, optionMap), | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-068 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:709` | if (elements.pickdropTicketField) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-069 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:713` | if (elements.pickdropTicketField) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-070 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:868` | if (elements.pickdropTicketTotal) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-071 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2063` | if (pickdropCount > 0 && pickdropFlags.hasPickup && pickdropFlags.hasDropoff && pickdropMemberCount.oneway === 0 && pickdropMemberCount.roun | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-072 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2065` | } else if (pickdropCount > 0 && (pickdropFlags.hasPickup \|\| pickdropFlags.hasDropoff) && pickdropMemberCount.oneway === 0 && pickdropMemberC | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-073 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2068` | if (pickdropMemberCount.oneway > 0) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-074 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2075` | if (pickdropMemberCount.roundtrip > 0) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-075 | UI | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2214` | elements.pickdropTicketField?.addEventListener("click", handleTicketRowClick); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-076 | UI | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2217` | elements.pickdropTicketField?.addEventListener("change", handleTicketSelectionChange); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-077 | Integration | Edge Case | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:56` | if (pickdropOptions.length === 0) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-078 | Integration | Edge Case | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:30` | if (pickup && dropoff) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-079 | Integration | Edge Case | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:33` | if (pickup \|\| dropoff) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-080 | Integration | Edge Case | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:76` | if (!hasPickup && !hasDropoff) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-081 | Integration | Edge Case | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:81` | if (hasPickup && hasDropoff) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-082 | Business | Persistence | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2198` | getHotelingPickdropFlags = (reservation) => { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-083 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2431` | getPickdropDateCount = () => { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-084 | Business | Validation | `..\Schedule_Daycare_20260320\src\pages\reservation.js:644` | if (Number.isFinite(pickdropLimit) && pickdropLimit > 0 && initialDates.length > pickdropLimit) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-085 | Business | Validation | `..\Schedule_Daycare_20260320\src\pages\reservation.js:716` | if (elements.pickdropTicketEmpty) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-086 | Business | Pricing | `..\Schedule_Daycare_20260320\src\pages\reservation.js:756` | if (elements.feePickdropCard) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-087 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2544` | if (pickdropTicketTotal) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-088 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2553` | if (hasTicketSelection \|\| hasPickdropSelection) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-089 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3050` | if (pickdropTicketField?.contains(input)) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-090 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3209` | if (pickupUsages.length > 0) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-091 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3214` | if (dropoffUsages.length > 0) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-092 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:350` | elements.pickdropInputs.forEach((input) => { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-093 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:527` | syncFeeDisclosure = (isPickdropMode) => { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-094 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:656` | pickdropInputs.forEach((input) => { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-095 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:675` | pickdropInputs.forEach((input) => { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-096 | Business | Repair/Migration | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1026` | syncScopeUI = (scope = getModalScope({ ignorePickdrop: true })) => { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-097 | UI | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1138` | formState.ticketSelections = pickdropOptions.map((ticket) => ticket.id); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-098 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1621` | pickdropInputs.forEach((input) => { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-099 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1819` | pickdropOptions = options.filter((option) => option.type === "pickdrop"); | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-100 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1821` | pickdropOptions.map((option) => [option.id, option]) | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-101 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1888` | getPickdropForDate = (dateKey) => ({ | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-102 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1910` | pickdropDates.forEach((dateKey) => { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-103 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2219` | pickdropInputs.forEach((input) => { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-104 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2333` | openPickdropModal = (memberId, options = {}) => { | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-105 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-usage-service.js:28` | export function mergeTicketUsagesForDate(serviceUsage, pickdropUsages = []) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-106 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-usage-service.js:50` | pickdropUsages.forEach((usage) => appendUsage(usage)); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-107 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:52` | resolvePickdropTicketCountType, | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-108 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:490` | return resolveActiveServiceTicketTargets(elements, getModalScope({ ignorePickdrop: true })); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-109 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:623` | toggleSegment(pickdropTicketSegment, true); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-110 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:632` | toggleSegment(pickdropTicketSegment, false); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-111 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:714` | elements.pickdropTicketField.textContent = ""; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-112 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:746` | renderPickdropTickets( | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-113 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:747` | elements.pickdropTicketField, | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-114 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:883` | elements.pickdropTicketTotal, | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-115 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:885` | totalReservable - pickdropUsageCount | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-116 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:889` | elements.pickdropTicketTotal.innerHTML = ` | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-117 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:990` | pickdropDateCount: pickdropDates.size, | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-118 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1766` | pickdropCount = hasAnyPickdrop ? pickdropDates.length : 0; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-119 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1772` | let pickdropUsagePlan = []; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-120 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1773` | let pickdropMemberCount = { oneway: 0, roundtrip: 0 }; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-121 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1829` | pickdropUsagePlan = built.planByDate; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-122 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1830` | pickdropUsedMap = built.usedByTicket; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-123 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1832` | option = pickdropMap.get(ticketId); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-124 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1833` | countType = resolvePickdropTicketCountType(option); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-125 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1834` | pickdropMemberCount[countType] += Number(used) \|\| 0; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-126 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1836` | applyUsage(pickdropUsedMap); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-127 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1881` | pickdropTicketUsagesMap = buildDateTicketUsagesMap( | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-128 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1883` | pickdropUsagePlan, | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-129 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1896` | pickdropUsages = assignNextUsageSequences(pickdropTicketUsagesMap.get(dateKey) \|\| []); | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-130 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1904` | ticketUsages: mergeTicketUsagesForDate(serviceUsages, pickdropUsages), | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-131 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1924` | assignNextUsageSequences(pickdropTicketUsagesMap.get(dateKey) \|\| []) | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-132 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2064` | pickdropMemberCount.roundtrip = pickdropCount; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-133 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2066` | pickdropMemberCount.oneway = pickdropCount; | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-134 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2071` | pickdropMemberCount.oneway, | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-135 | Business | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2078` | pickdropMemberCount.roundtrip, | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
| LI-136 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:24` | pickdropOptions: [], | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-137 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:33` | pickdropOptions: [], | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-138 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:45` | pickdropOptions: [], | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-139 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:58` | pickdropOptions: [], | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-140 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:60` | skipReason: "no-pickdrop-options", | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-141 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:86` | pickdropOptions, | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-142 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:6` | pickup = Boolean( | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-143 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:7` | source?.pickup | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-144 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:8` | ?? source?.pickdrop?.pickup | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-145 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:11` | dropoff = Boolean( | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-146 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:12` | source?.dropoff | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-147 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:13` | ?? source?.pickdrop?.dropoff | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-148 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:16` | return { pickup, dropoff }; | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-149 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:20` | { pickup, dropoff } = normalizePickdropFlags(flags); | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-150 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:23` | pickup, | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-151 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:24` | dropoff, | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-152 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:29` | { pickup, dropoff } = normalizePickdropFlags(source); | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-153 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:67` | type = normalizePickdropType( | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-154 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:68` | source?.pickdropType | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-155 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:74` | hasPickup = Boolean(entry?.pickup); | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-156 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:75` | hasDropoff = Boolean(entry?.dropoff); | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-157 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:134` | pickdropOptions, | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-158 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:141` | optionMap = normalizeOptions(pickdropOptions); | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-159 | Unknown | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:146` | pools = buildPickdropPools(selectionOrder, optionMap); | Open Question |  |  | 자동 분류가 어려운 항목. 정책/UX 확인 필요. |
| LI-160 | Business | Pricing | `..\Schedule_Daycare_20260320\src\services\reservation-date-fee.js:75` | resolvePickdropPrice(pricingItems, pickup, dropoff) { | Not Covered |  |  | 명세에서 직접 매칭되는 항목을 찾지 못함. |
