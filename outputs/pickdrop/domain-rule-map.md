# Domain Rule Map: pickdrop

| Rule ID | Domain Rule | Related Screens | Policy Impact | State Impact | Edge Cases |
| --- | --- | --- | --- | --- | --- |
| DR-01 | const syncPickdropTickets = () => { | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-02 | export function buildPickdropUsagePlan({ | Biz Web / Ticket Reservation Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-03 | buildPickdropUsagePlan, | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-04 | syncPickdropTickets(); | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-05 | syncPickdropTickets(); | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-06 | syncPickdropTickets(); | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-07 | syncPickdropTickets(); | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-08 | syncPickdropTickets(); | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-09 | const built = buildPickdropUsagePlan({ | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-10 | submitReservation({ includePickdrop: true }); | Biz Web / Reservation | Persistence | Review derived state | Review during PM spec writing |
| DR-11 | submitReservation({ includePickdrop: false }); | Biz Web / Reservation | Persistence | Review derived state | Review during PM spec writing |
| DR-12 | buildPickdropUsagePlan, | Biz Web / Hotels | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-13 | const builtPlan = buildPickdropUsagePlan({ | Biz Web / Hotels | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-14 | .filter((ticket) => ticket?.type === "pickdrop") | Biz Web / Pickdrop Detail Sync | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-15 | export const PICKDROP_COUNT_TYPES = Object.freeze(["oneway", "roundtrip"]); | Biz Web / Pickdrop Policy | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-16 | export function getPickdropCountType(source = {}) { | Biz Web / Pickdrop Policy | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-17 | export function getPickdropCountByEntries(entries = []) { | Biz Web / Pickdrop Policy | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-18 | export function resolvePickdropTicketCountType(source = {}) { | Biz Web / Pickdrop Policy | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-19 | function countExistingPickdropUsage(entries = [], optionMap = new Map()) { | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-20 | function mergeUsagesKeepService(existingUsages = [], nextPickdropUsages = [], optionMap = new Map()) { | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-21 | nextPickdropUsages.forEach((usage) => append(usage)); | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-22 | export function repairReservationPickdropUsages({ | Biz Web / Pickdrop Usage Repair Service | recovery policy | Review derived state | Insufficient or multiple ticket options |
| DR-23 | existingPickdropUsage.forEach((count, ticketId) => { | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-24 | if (!ticketId \|\| !memberPickdropTicketIds.has(ticketId)) { | Biz Web / Pickdrop Detail Sync | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-25 | (ticket) => ticket.type === "pickdrop" | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-26 | pickdropOptions.map((ticket) => [ticket.id, ticket]) | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-27 | pickdropOptions.map((ticket) => [ | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-28 | (ticket) => ticket.type === "pickdrop" | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-29 | pickdropOptions.map((ticket) => [ticket.id, ticket]) | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-30 | pickdropUsedMap.forEach((used, ticketId) => { | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-31 | const hasAnyPickup = reservationDates.some((entry) => entry.pickup); | Biz Web / Reservation | Persistence | Review derived state | Review during PM spec writing |
| DR-32 | const hasAnyDropoff = reservationDates.some((entry) => entry.dropoff); | Biz Web / Reservation | Persistence | Review derived state | Review during PM spec writing |
