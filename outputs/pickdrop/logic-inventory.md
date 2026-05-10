# Logic Inventory: pickdrop

## Metadata

| Field | Value |
| --- | --- |
| Prototype path | `F:\OneDrive\문서\Schedule_Daycare_20260320` |
| Keywords | `pickdrop`, `픽드랍`, `pickup`, `dropoff` |
| Candidate files | 39 |
| Inventory items | 160 |

## Candidate File Roles

| File | Role Guess | Evidence Count |
| --- | --- | ---: |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\pages\reservation.js` | UI entrypoint or screen markup | 242 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\pages\hotels.js` | UI entrypoint or screen markup | 143 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\components\list.js` | UI entrypoint or screen markup | 72 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\pages\hotel-detail.js` | UI entrypoint or screen markup | 71 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\components\reservation-list-detail-modal.js` | UI entrypoint or screen markup | 58 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\components\reservation-fee.js` | Pricing/calculation policy | 54 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\components\reservation-modal.js` | UI entrypoint or screen markup | 42 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\components\ticket-form.js` | UI entrypoint or screen markup | 41 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\reservation-modal-helpers.js` | Ticket usage/allocation policy | 34 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\reservation-billing.js` | Ticket usage/allocation policy | 33 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\public\index.html` | UI entrypoint or screen markup | 32 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\pickdrop-policy.js` | Ticket usage/allocation policy | 24 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\reservation-entries.js` | Save/update flow | 23 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\pricing-service.js` | UI entrypoint or screen markup | 22 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js` | Ticket usage/allocation policy | 20 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\styles\components.css` | UI entrypoint or screen markup | 18 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\member-reservable-count.js` | Ticket usage/allocation policy | 17 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\reservation-date-fee.js` | Pricing/calculation policy | 15 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\ticket-count-service.js` | Ticket usage/allocation policy | 15 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\pages\hotels.html` | UI entrypoint or screen markup | 14 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\ticket-reservation-service.js` | Ticket usage/allocation policy | 14 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\pages\pricing.js` | UI entrypoint or screen markup | 13 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js` | Ticket usage/allocation policy | 13 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\storage\reservation-storage.js` | Related implementation detail | 13 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\pages\hotel-detail.html` | UI entrypoint or screen markup | 12 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\pages\tickets.html` | UI entrypoint or screen markup | 12 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\components\reservation-modal-dom.js` | UI entrypoint or screen markup | 11 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\styles\layout.css` | UI entrypoint or screen markup | 11 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\hoteling-reservation-service.js` | Related implementation detail | 10 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\ticket-service.js` | Ticket usage/allocation policy | 6 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\components\member-ticket-issue-modal.js` | Ticket usage/allocation policy | 5 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\components\pricing-view.js` | Related implementation detail | 5 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\ticket-issue-entry-service.js` | Ticket usage/allocation policy | 4 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\components\ticket-issue.js` | Related implementation detail | 3 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\ticket-usage-service.js` | Ticket usage/allocation policy | 3 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\components\hoteling-reservation-modal.js` | Related implementation detail | 2 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\pages\pricing.html` | UI entrypoint or screen markup | 2 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\storage\ticket-issue-members.js` | Related implementation detail | 2 |
| `F:\OneDrive\문서\Schedule_Daycare_20260320\src\services\room-pricing-sync.js` | Related implementation detail | 1 |

## Logic Items

| ID | Category | Source | Summary | Evidence |
| --- | --- | --- | --- | --- |
| LI-001 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:28` | export function getPickdropCountType(source = {}) { | `export function getPickdropCountType(source = {}) {` |
| LI-002 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:707` | syncPickdropTickets = () => { | `const syncPickdropTickets = () => {` |
| LI-003 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:45` | type = getPickdropCountType(entry); | `const type = getPickdropCountType(entry);` |
| LI-004 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:532` | setPickdropMode = (enabled, options = {}) => { | `const setPickdropMode = (enabled, options = {}) => {` |
| LI-005 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-reservation-service.js:92` | export function buildPickdropUsagePlan({ | `export function buildPickdropUsagePlan({` |
| LI-006 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:37` | buildPickdropUsagePlan, | `buildPickdropUsagePlan,` |
| LI-007 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:690` | syncPickdropTickets(); | `syncPickdropTickets();` |
| LI-008 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1113` | syncPickdropTickets(); | `syncPickdropTickets();` |
| LI-009 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1306` | syncPickdropTickets(); | `syncPickdropTickets();` |
| LI-010 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1347` | syncPickdropTickets(); | `syncPickdropTickets();` |
| LI-011 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1489` | syncPickdropTickets(); | `syncPickdropTickets();` |
| LI-012 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1823` | built = buildPickdropUsagePlan({ | `const built = buildPickdropUsagePlan({` |
| LI-013 | Persistence | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2098` | submitReservation({ includePickdrop: true }); | `submitReservation({ includePickdrop: true });` |
| LI-014 | Persistence | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2330` | submitReservation({ includePickdrop: false }); | `submitReservation({ includePickdrop: false });` |
| LI-015 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:48` | buildPickdropUsagePlan, | `buildPickdropUsagePlan,` |
| LI-016 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3181` | builtPlan = buildPickdropUsagePlan({ | `const builtPlan = buildPickdropUsagePlan({` |
| LI-017 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:66` | .filter((ticket) => ticket?.type === "pickdrop") | `.filter((ticket) => ticket?.type === "pickdrop")` |
| LI-018 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:3` | export const PICKDROP_COUNT_TYPES = Object.freeze(["oneway", "roundtrip"]); | `export const PICKDROP_COUNT_TYPES = Object.freeze(["oneway", "roundtrip"]);` |
| LI-019 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:39` | export function getPickdropCountByEntries(entries = []) { | `export function getPickdropCountByEntries(entries = []) {` |
| LI-020 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:66` | export function resolvePickdropTicketCountType(source = {}) { | `export function resolvePickdropTicketCountType(source = {}) {` |
| LI-021 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:42` | countExistingPickdropUsage(entries = [], optionMap = new Map()) { | `function countExistingPickdropUsage(entries = [], optionMap = new Map()) {` |
| LI-022 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:101` | mergeUsagesKeepService(existingUsages = [], nextPickdropUsages = [], optionMap = new Map()) { | `function mergeUsagesKeepService(existingUsages = [], nextPickdropUsages = [], optionMap = new Map()) {` |
| LI-023 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:123` | nextPickdropUsages.forEach((usage) => append(usage)); | `nextPickdropUsages.forEach((usage) => append(usage));` |
| LI-024 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:132` | export function repairReservationPickdropUsages({ | `export function repairReservationPickdropUsages({` |
| LI-025 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:148` | existingPickdropUsage.forEach((count, ticketId) => { | `existingPickdropUsage.forEach((count, ticketId) => {` |
| LI-026 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1473` | setPickdropMode(false); | `setPickdropMode(false);` |
| LI-027 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1561` | setPickdropMode(true); | `setPickdropMode(true);` |
| LI-028 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1578` | setPickdropMode(false); | `setPickdropMode(false);` |
| LI-029 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2085` | setPickdropMode(false); | `setPickdropMode(false);` |
| LI-030 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2095` | pickdropToggle?.addEventListener("click", () => { | `pickdropToggle?.addEventListener("click", () => {` |
| LI-031 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2106` | setPickdropMode(true); | `setPickdropMode(true);` |
| LI-032 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2249` | setPickdropMode(false); | `setPickdropMode(false);` |
| LI-033 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2327` | setPickdropMode(false); | `setPickdropMode(false);` |
| LI-034 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2344` | setPickdropMode(true, options); | `setPickdropMode(true, options);` |
| LI-035 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2362` | setPickdropMode(false); | `setPickdropMode(false);` |
| LI-036 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:75` | if (!ticketId \|\| !memberPickdropTicketIds.has(ticketId)) { | `if (!ticketId \|\| !memberPickdropTicketIds.has(ticketId)) {` |
| LI-037 | UI | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3100` | pickdropStart.addEventListener("click", (event) => { | `pickdropStart.addEventListener("click", (event) => {` |
| LI-038 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:2` | getPickdropCountType, | `getPickdropCountType,` |
| LI-039 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:116` | pickdropType = getPickdropCountType(entry); | `const pickdropType = getPickdropCountType(entry);` |
| LI-040 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\member-reservable-count.js:123` | hotelingPickdropType = getPickdropCountType({ | `const hotelingPickdropType = getPickdropCountType({` |
| LI-041 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:4` | import { getPickdropCountType, resolvePickdropTicketCountType } from "./pickdrop-policy.js"; | `import { getPickdropCountType, resolvePickdropTicketCountType } from "./pickdrop-policy.js";` |
| LI-042 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:204` | pickdropType = getPickdropCountType(dateEntry); | `const pickdropType = getPickdropCountType(dateEntry);` |
| LI-043 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-count-service.js:212` | hotelingPickdropType = getPickdropCountType({ | `const hotelingPickdropType = getPickdropCountType({` |
| LI-044 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:728` | (ticket) => ticket.type === "pickdrop" | `(ticket) => ticket.type === "pickdrop"` |
| LI-045 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:731` | pickdropOptions.map((ticket) => [ticket.id, ticket]) | `pickdropOptions.map((ticket) => [ticket.id, ticket])` |
| LI-046 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:741` | pickdropOptions.map((ticket) => [ | `pickdropOptions.map((ticket) => [` |
| LI-047 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1095` | (ticket) => ticket.type === "pickdrop" | `(ticket) => ticket.type === "pickdrop"` |
| LI-048 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1128` | pickdropOptions.map((ticket) => [ticket.id, ticket]) | `pickdropOptions.map((ticket) => [ticket.id, ticket])` |
| LI-049 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1831` | pickdropUsedMap.forEach((used, ticketId) => { | `pickdropUsedMap.forEach((used, ticketId) => {` |
| LI-050 | Persistence | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1931` | hasAnyPickup = reservationDates.some((entry) => entry.pickup); | `const hasAnyPickup = reservationDates.some((entry) => entry.pickup);` |
| LI-051 | Persistence | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1932` | hasAnyDropoff = reservationDates.some((entry) => entry.dropoff); | `const hasAnyDropoff = reservationDates.some((entry) => entry.dropoff);` |
| LI-052 | Repair/Migration | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:16` | export function buildPickdropRepairContext({ | `export function buildPickdropRepairContext({` |
| LI-053 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:55` | pickdropOptions = issuedOptions.filter((option) => option?.type === "pickdrop"); | `const pickdropOptions = issuedOptions.filter((option) => option?.type === "pickdrop");` |
| LI-054 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:81` | pickdropOptions.forEach((option) => { | `pickdropOptions.forEach((option) => {` |
| LI-055 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:5` | export function normalizePickdropFlags(source = {}) { | `export function normalizePickdropFlags(source = {}) {` |
| LI-056 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:19` | export function applyPickdropFlags(target = {}, flags = {}) { | `export function applyPickdropFlags(target = {}, flags = {}) {` |
| LI-057 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:62` | export function getPickdropReservableTotal(map) { | `export function getPickdropReservableTotal(map) {` |
| LI-058 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:17` | buildPickdropPools(selectionOrder = [], optionMap = new Map()) { | `function buildPickdropPools(selectionOrder = [], optionMap = new Map()) {` |
| LI-059 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:64` | memberPickdropTicketIds = new Set( | `const memberPickdropTicketIds = new Set(` |
| LI-060 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:1` | import { normalizePickdropType } from "./ticket-service.js"; | `import { normalizePickdropType } from "./ticket-service.js";` |
| LI-061 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:2` | import { resolvePickdropTicketCountType } from "./pickdrop-policy.js"; | `import { resolvePickdropTicketCountType } from "./pickdrop-policy.js";` |
| LI-062 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:31` | countType = resolvePickdropTicketCountType(option); | `const countType = resolvePickdropTicketCountType(option);` |
| LI-063 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:129` | * rebuild pickdrop `ticketUsages` on a reservation from pickup/dropoff flags. | `* rebuild pickdrop `ticketUsages` on a reservation from pickup/dropoff flags.` |
| LI-064 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:147` | existingPickdropUsage = countExistingPickdropUsage(reservation.dates, optionMap); | `const existingPickdropUsage = countExistingPickdropUsage(reservation.dates, optionMap);` |
| LI-065 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:159` | pickdropUsageByDate = buildDateTicketUsagesMap(dateKeys, planByDate, optionMap); | `const pickdropUsageByDate = buildDateTicketUsagesMap(dateKeys, planByDate, optionMap);` |
| LI-066 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:165` | nextPickdropUsages = pickdropUsageByDate.get(String(entry?.date \|\| "")) \|\| []; | `const nextPickdropUsages = pickdropUsageByDate.get(String(entry?.date \|\| "")) \|\| [];` |
| LI-067 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:168` | ticketUsages: mergeUsagesKeepService(existingUsages, nextPickdropUsages, optionMap), | `ticketUsages: mergeUsagesKeepService(existingUsages, nextPickdropUsages, optionMap),` |
| LI-068 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:709` | if (elements.pickdropTicketField) { | `if (elements.pickdropTicketField) {` |
| LI-069 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:713` | if (elements.pickdropTicketField) { | `if (elements.pickdropTicketField) {` |
| LI-070 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:868` | if (elements.pickdropTicketTotal) { | `if (elements.pickdropTicketTotal) {` |
| LI-071 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2063` | if (pickdropCount > 0 && pickdropFlags.hasPickup && pickdropFlags.hasDropoff && pickdropMemberCount.oneway === 0 && pickdropMemberCount.roun | `if (pickdropCount > 0 && pickdropFlags.hasPickup && pickdropFlags.hasDropoff && pickdropMemberCount.oneway === 0 && pickdropMemberCount.roundtrip === 0) {` |
| LI-072 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2065` | } else if (pickdropCount > 0 && (pickdropFlags.hasPickup \|\| pickdropFlags.hasDropoff) && pickdropMemberCount.oneway === 0 && pickdropMemberC | `} else if (pickdropCount > 0 && (pickdropFlags.hasPickup \|\| pickdropFlags.hasDropoff) && pickdropMemberCount.oneway === 0 && pickdropMemberCount.roundtrip === 0) {` |
| LI-073 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2068` | if (pickdropMemberCount.oneway > 0) { | `if (pickdropMemberCount.oneway > 0) {` |
| LI-074 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2075` | if (pickdropMemberCount.roundtrip > 0) { | `if (pickdropMemberCount.roundtrip > 0) {` |
| LI-075 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2214` | elements.pickdropTicketField?.addEventListener("click", handleTicketRowClick); | `elements.pickdropTicketField?.addEventListener("click", handleTicketRowClick);` |
| LI-076 | UI | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2217` | elements.pickdropTicketField?.addEventListener("change", handleTicketSelectionChange); | `elements.pickdropTicketField?.addEventListener("change", handleTicketSelectionChange);` |
| LI-077 | Edge Case | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:56` | if (pickdropOptions.length === 0) { | `if (pickdropOptions.length === 0) {` |
| LI-078 | Edge Case | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:30` | if (pickup && dropoff) { | `if (pickup && dropoff) {` |
| LI-079 | Edge Case | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:33` | if (pickup \|\| dropoff) { | `if (pickup \|\| dropoff) {` |
| LI-080 | Edge Case | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:76` | if (!hasPickup && !hasDropoff) { | `if (!hasPickup && !hasDropoff) {` |
| LI-081 | Edge Case | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:81` | if (hasPickup && hasDropoff) { | `if (hasPickup && hasDropoff) {` |
| LI-082 | Persistence | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2198` | getHotelingPickdropFlags = (reservation) => { | `const getHotelingPickdropFlags = (reservation) => {` |
| LI-083 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2431` | getPickdropDateCount = () => { | `const getPickdropDateCount = () => {` |
| LI-084 | Validation | `..\Schedule_Daycare_20260320\src\pages\reservation.js:644` | if (Number.isFinite(pickdropLimit) && pickdropLimit > 0 && initialDates.length > pickdropLimit) { | `if (Number.isFinite(pickdropLimit) && pickdropLimit > 0 && initialDates.length > pickdropLimit) {` |
| LI-085 | Validation | `..\Schedule_Daycare_20260320\src\pages\reservation.js:716` | if (elements.pickdropTicketEmpty) { | `if (elements.pickdropTicketEmpty) {` |
| LI-086 | Pricing | `..\Schedule_Daycare_20260320\src\pages\reservation.js:756` | if (elements.feePickdropCard) { | `if (elements.feePickdropCard) {` |
| LI-087 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2544` | if (pickdropTicketTotal) { | `if (pickdropTicketTotal) {` |
| LI-088 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:2553` | if (hasTicketSelection \|\| hasPickdropSelection) { | `if (hasTicketSelection \|\| hasPickdropSelection) {` |
| LI-089 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3050` | if (pickdropTicketField?.contains(input)) { | `if (pickdropTicketField?.contains(input)) {` |
| LI-090 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3209` | if (pickupUsages.length > 0) { | `if (pickupUsages.length > 0) {` |
| LI-091 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\hotels.js:3214` | if (dropoffUsages.length > 0) { | `if (dropoffUsages.length > 0) {` |
| LI-092 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:350` | elements.pickdropInputs.forEach((input) => { | `elements.pickdropInputs.forEach((input) => {` |
| LI-093 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:527` | syncFeeDisclosure = (isPickdropMode) => { | `const syncFeeDisclosure = (isPickdropMode) => {` |
| LI-094 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:656` | pickdropInputs.forEach((input) => { | `pickdropInputs.forEach((input) => {` |
| LI-095 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:675` | pickdropInputs.forEach((input) => { | `pickdropInputs.forEach((input) => {` |
| LI-096 | Repair/Migration | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1026` | syncScopeUI = (scope = getModalScope({ ignorePickdrop: true })) => { | `const syncScopeUI = (scope = getModalScope({ ignorePickdrop: true })) => {` |
| LI-097 | State | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1138` | formState.ticketSelections = pickdropOptions.map((ticket) => ticket.id); | `formState.ticketSelections = pickdropOptions.map((ticket) => ticket.id);` |
| LI-098 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1621` | pickdropInputs.forEach((input) => { | `pickdropInputs.forEach((input) => {` |
| LI-099 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1819` | pickdropOptions = options.filter((option) => option.type === "pickdrop"); | `const pickdropOptions = options.filter((option) => option.type === "pickdrop");` |
| LI-100 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1821` | pickdropOptions.map((option) => [option.id, option]) | `pickdropOptions.map((option) => [option.id, option])` |
| LI-101 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1888` | getPickdropForDate = (dateKey) => ({ | `const getPickdropForDate = (dateKey) => ({` |
| LI-102 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1910` | pickdropDates.forEach((dateKey) => { | `pickdropDates.forEach((dateKey) => {` |
| LI-103 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2219` | pickdropInputs.forEach((input) => { | `pickdropInputs.forEach((input) => {` |
| LI-104 | Unknown | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2333` | openPickdropModal = (memberId, options = {}) => { | `const openPickdropModal = (memberId, options = {}) => {` |
| LI-105 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-usage-service.js:28` | export function mergeTicketUsagesForDate(serviceUsage, pickdropUsages = []) { | `export function mergeTicketUsagesForDate(serviceUsage, pickdropUsages = []) {` |
| LI-106 | Ticket Usage | `..\Schedule_Daycare_20260320\src\services\ticket-usage-service.js:50` | pickdropUsages.forEach((usage) => appendUsage(usage)); | `pickdropUsages.forEach((usage) => appendUsage(usage));` |
| LI-107 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:52` | resolvePickdropTicketCountType, | `resolvePickdropTicketCountType,` |
| LI-108 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:490` | return resolveActiveServiceTicketTargets(elements, getModalScope({ ignorePickdrop: true })); | `return resolveActiveServiceTicketTargets(elements, getModalScope({ ignorePickdrop: true }));` |
| LI-109 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:623` | toggleSegment(pickdropTicketSegment, true); | `toggleSegment(pickdropTicketSegment, true);` |
| LI-110 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:632` | toggleSegment(pickdropTicketSegment, false); | `toggleSegment(pickdropTicketSegment, false);` |
| LI-111 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:714` | elements.pickdropTicketField.textContent = ""; | `elements.pickdropTicketField.textContent = "";` |
| LI-112 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:746` | renderPickdropTickets( | `renderPickdropTickets(` |
| LI-113 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:747` | elements.pickdropTicketField, | `elements.pickdropTicketField,` |
| LI-114 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:883` | elements.pickdropTicketTotal, | `elements.pickdropTicketTotal,` |
| LI-115 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:885` | totalReservable - pickdropUsageCount | `totalReservable - pickdropUsageCount` |
| LI-116 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:889` | elements.pickdropTicketTotal.innerHTML = ` | `elements.pickdropTicketTotal.innerHTML = `` |
| LI-117 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:990` | pickdropDateCount: pickdropDates.size, | `pickdropDateCount: pickdropDates.size,` |
| LI-118 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1766` | pickdropCount = hasAnyPickdrop ? pickdropDates.length : 0; | `const pickdropCount = hasAnyPickdrop ? pickdropDates.length : 0;` |
| LI-119 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1772` | let pickdropUsagePlan = []; | `let pickdropUsagePlan = [];` |
| LI-120 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1773` | let pickdropMemberCount = { oneway: 0, roundtrip: 0 }; | `let pickdropMemberCount = { oneway: 0, roundtrip: 0 };` |
| LI-121 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1829` | pickdropUsagePlan = built.planByDate; | `pickdropUsagePlan = built.planByDate;` |
| LI-122 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1830` | pickdropUsedMap = built.usedByTicket; | `pickdropUsedMap = built.usedByTicket;` |
| LI-123 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1832` | option = pickdropMap.get(ticketId); | `const option = pickdropMap.get(ticketId);` |
| LI-124 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1833` | countType = resolvePickdropTicketCountType(option); | `const countType = resolvePickdropTicketCountType(option);` |
| LI-125 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1834` | pickdropMemberCount[countType] += Number(used) \|\| 0; | `pickdropMemberCount[countType] += Number(used) \|\| 0;` |
| LI-126 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1836` | applyUsage(pickdropUsedMap); | `applyUsage(pickdropUsedMap);` |
| LI-127 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1881` | pickdropTicketUsagesMap = buildDateTicketUsagesMap( | `const pickdropTicketUsagesMap = buildDateTicketUsagesMap(` |
| LI-128 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1883` | pickdropUsagePlan, | `pickdropUsagePlan,` |
| LI-129 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1896` | pickdropUsages = assignNextUsageSequences(pickdropTicketUsagesMap.get(dateKey) \|\| []); | `const pickdropUsages = assignNextUsageSequences(pickdropTicketUsagesMap.get(dateKey) \|\| []);` |
| LI-130 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1904` | ticketUsages: mergeTicketUsagesForDate(serviceUsages, pickdropUsages), | `ticketUsages: mergeTicketUsagesForDate(serviceUsages, pickdropUsages),` |
| LI-131 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:1924` | assignNextUsageSequences(pickdropTicketUsagesMap.get(dateKey) \|\| []) | `assignNextUsageSequences(pickdropTicketUsagesMap.get(dateKey) \|\| [])` |
| LI-132 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2064` | pickdropMemberCount.roundtrip = pickdropCount; | `pickdropMemberCount.roundtrip = pickdropCount;` |
| LI-133 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2066` | pickdropMemberCount.oneway = pickdropCount; | `pickdropMemberCount.oneway = pickdropCount;` |
| LI-134 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2071` | pickdropMemberCount.oneway, | `pickdropMemberCount.oneway,` |
| LI-135 | Ticket Usage | `..\Schedule_Daycare_20260320\src\pages\reservation.js:2078` | pickdropMemberCount.roundtrip, | `pickdropMemberCount.roundtrip,` |
| LI-136 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:24` | pickdropOptions: [], | `pickdropOptions: [],` |
| LI-137 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:33` | pickdropOptions: [], | `pickdropOptions: [],` |
| LI-138 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:45` | pickdropOptions: [], | `pickdropOptions: [],` |
| LI-139 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:58` | pickdropOptions: [], | `pickdropOptions: [],` |
| LI-140 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:60` | skipReason: "no-pickdrop-options", | `skipReason: "no-pickdrop-options",` |
| LI-141 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-detail-sync.js:86` | pickdropOptions, | `pickdropOptions,` |
| LI-142 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:6` | pickup = Boolean( | `const pickup = Boolean(` |
| LI-143 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:7` | source?.pickup | `source?.pickup` |
| LI-144 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:8` | ?? source?.pickdrop?.pickup | `?? source?.pickdrop?.pickup` |
| LI-145 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:11` | dropoff = Boolean( | `const dropoff = Boolean(` |
| LI-146 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:12` | source?.dropoff | `source?.dropoff` |
| LI-147 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:13` | ?? source?.pickdrop?.dropoff | `?? source?.pickdrop?.dropoff` |
| LI-148 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:16` | return { pickup, dropoff }; | `return { pickup, dropoff };` |
| LI-149 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:20` | { pickup, dropoff } = normalizePickdropFlags(flags); | `const { pickup, dropoff } = normalizePickdropFlags(flags);` |
| LI-150 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:23` | pickup, | `pickup,` |
| LI-151 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:24` | dropoff, | `dropoff,` |
| LI-152 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:29` | { pickup, dropoff } = normalizePickdropFlags(source); | `const { pickup, dropoff } = normalizePickdropFlags(source);` |
| LI-153 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:67` | type = normalizePickdropType( | `const type = normalizePickdropType(` |
| LI-154 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-policy.js:68` | source?.pickdropType | `source?.pickdropType` |
| LI-155 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:74` | hasPickup = Boolean(entry?.pickup); | `const hasPickup = Boolean(entry?.pickup);` |
| LI-156 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:75` | hasDropoff = Boolean(entry?.dropoff); | `const hasDropoff = Boolean(entry?.dropoff);` |
| LI-157 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:134` | pickdropOptions, | `pickdropOptions,` |
| LI-158 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:141` | optionMap = normalizeOptions(pickdropOptions); | `const optionMap = normalizeOptions(pickdropOptions);` |
| LI-159 | Unknown | `..\Schedule_Daycare_20260320\src\services\pickdrop-usage-repair-service.js:146` | pools = buildPickdropPools(selectionOrder, optionMap); | `const pools = buildPickdropPools(selectionOrder, optionMap);` |
| LI-160 | Pricing | `..\Schedule_Daycare_20260320\src\services\reservation-date-fee.js:75` | resolvePickdropPrice(pricingItems, pickup, dropoff) { | `function resolvePickdropPrice(pricingItems, pickup, dropoff) {` |
