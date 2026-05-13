# Domain Rule Map: pickdrop-reservation

| Rule ID | Domain Rule | Related Screens | Policy Impact | State Impact | Edge Cases |
| --- | --- | --- | --- | --- | --- |
| DR-01 | const syncPickdropTickets = () => { | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-02 | const submitReservation = (options = {}) => { | Biz Web / Reservation | configuration policy | Review derived state | Review during PM spec writing |
| DR-03 | export function buildPickdropUsagePlan({ | Biz Web / Ticket Reservation Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-04 | buildPickdropUsagePlan, | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-05 | syncPickdropTickets(); | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-06 | syncPickdropTickets(); | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-07 | syncPickdropTickets(); | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-08 | syncPickdropTickets(); | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-09 | syncPickdropTickets(); | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-10 | const built = buildPickdropUsagePlan({ | Biz Web / Reservation | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-11 | submitReservation({ includePickdrop: true }); | Biz Web / Reservation | Persistence | Review derived state | Review during PM spec writing |
| DR-12 | submitReservation({ includePickdrop: false }); | Biz Web / Reservation | Persistence | Review derived state | Review during PM spec writing |
| DR-13 | buildPickdropUsagePlan, | Biz Web / Hotels | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-14 | const builtPlan = buildPickdropUsagePlan({ | Biz Web / Hotels | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-15 | function normalizeMemberTickets(member) { | Biz Web / Pickdrop Detail Sync | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-16 | .filter((ticket) => ticket?.type === "pickdrop") | Biz Web / Pickdrop Detail Sync | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-17 | .map((ticket) => String(ticket?.id ?? "")) | Biz Web / Pickdrop Detail Sync | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-18 | reservation.dates.forEach((entry) => { | Biz Web / Pickdrop Detail Sync | Persistence | Review derived state | Review during PM spec writing |
| DR-19 | getEntryTicketUsages(entry).forEach((usage) => { | Biz Web / Pickdrop Detail Sync | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-20 | export const PICKDROP_COUNT_TYPES = Object.freeze(["oneway", "roundtrip"]); | Biz Web / Pickdrop Policy | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-21 | export function getPickdropCountType(source = {}) { | Biz Web / Pickdrop Policy | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-22 | export function getPickdropCountByEntries(entries = []) { | Biz Web / Pickdrop Policy | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-23 | export function resolvePickdropTicketCountType(source = {}) { | Biz Web / Pickdrop Policy | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-24 | order.forEach((ticketId) => { | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-25 | function countExistingPickdropUsage(entries = [], optionMap = new Map()) { | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-26 | getEntryTicketUsages(entry).forEach((usage) => { | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-27 | const ticketId = pool.find((id) => (remainingById.get(id) \|\| 0) > 0); | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-28 | function mergeUsagesKeepService(existingUsages = [], nextPickdropUsages = [], optionMap = new Map()) { | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-29 | nextPickdropUsages.forEach((usage) => append(usage)); | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-30 | export function repairReservationPickdropUsages({ | Biz Web / Pickdrop Usage Repair Service | recovery policy | Review derived state | Insufficient or multiple ticket options |
| DR-31 | existingPickdropUsage.forEach((count, ticketId) => { | Biz Web / Pickdrop Usage Repair Service | usage policy | Review derived state | Insufficient or multiple ticket options |
| DR-32 | dates: reservation.dates.map((entry) => { | Biz Web / Pickdrop Usage Repair Service | Persistence | Review derived state | Review during PM spec writing |
