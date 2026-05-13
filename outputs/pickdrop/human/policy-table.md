# Policy Table: pickdrop

| Policy ID | Policy Name | Option / Condition | Default | Behavior | Applies To | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| P-01 | usage policy / Reservation | usage policy | Project default | const syncPickdropTickets = () => { | Biz Web / Reservation | usage policy |
| P-02 | configuration policy / Reservation | configuration policy | Project default | const setPickdropMode = (enabled, options = {}) => { | Biz Web / Reservation | configuration policy |
| P-03 | usage policy / Ticket Reservation Service | usage policy | Project default | export function buildPickdropUsagePlan({ | Biz Web / Ticket Reservation Service | usage policy |
| P-04 | usage policy / Reservation | usage policy | Project default | buildPickdropUsagePlan, | Biz Web / Reservation | usage policy |
| P-05 | usage policy / Reservation | usage policy | Project default | syncPickdropTickets(); | Biz Web / Reservation | usage policy |
| P-06 | usage policy / Reservation | usage policy | Project default | syncPickdropTickets(); | Biz Web / Reservation | usage policy |
| P-07 | usage policy / Reservation | usage policy | Project default | syncPickdropTickets(); | Biz Web / Reservation | usage policy |
| P-08 | usage policy / Reservation | usage policy | Project default | syncPickdropTickets(); | Biz Web / Reservation | usage policy |
| P-09 | usage policy / Reservation | usage policy | Project default | syncPickdropTickets(); | Biz Web / Reservation | usage policy |
| P-10 | usage policy / Reservation | usage policy | Project default | const built = buildPickdropUsagePlan({ | Biz Web / Reservation | usage policy |
| P-11 | Persistence / Reservation | Persistence | Project default | submitReservation({ includePickdrop: true }); | Biz Web / Reservation | policy candidate |
| P-12 | Persistence / Reservation | Persistence | Project default | submitReservation({ includePickdrop: false }); | Biz Web / Reservation | policy candidate |
| P-13 | usage policy / Hotels | usage policy | Project default | buildPickdropUsagePlan, | Biz Web / Hotels | usage policy |
| P-14 | usage policy / Hotels | usage policy | Project default | const builtPlan = buildPickdropUsagePlan({ | Biz Web / Hotels | usage policy |
| P-15 | usage policy / Pickdrop Detail Sync | usage policy | Project default | .filter((ticket) => ticket?.type === "pickdrop") | Biz Web / Pickdrop Detail Sync | usage policy |
| P-16 | usage policy / Pickdrop Policy | usage policy | Project default | export const PICKDROP_COUNT_TYPES = Object.freeze(["oneway", "roundtrip"]); | Biz Web / Pickdrop Policy | usage policy |
| P-17 | usage policy / Pickdrop Policy | usage policy | Project default | export function getPickdropCountType(source = {}) { | Biz Web / Pickdrop Policy | usage policy |
| P-18 | usage policy / Pickdrop Policy | usage policy | Project default | export function getPickdropCountByEntries(entries = []) { | Biz Web / Pickdrop Policy | usage policy |
| P-19 | usage policy / Pickdrop Policy | usage policy | Project default | export function resolvePickdropTicketCountType(source = {}) { | Biz Web / Pickdrop Policy | usage policy |
| P-20 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | function countExistingPickdropUsage(entries = [], optionMap = new Map()) { | Biz Web / Pickdrop Usage Repair Service | usage policy |
| P-21 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | function mergeUsagesKeepService(existingUsages = [], nextPickdropUsages = [], optionMap = new Map()) { | Biz Web / Pickdrop Usage Repair Service | usage policy |
| P-22 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | nextPickdropUsages.forEach((usage) => append(usage)); | Biz Web / Pickdrop Usage Repair Service | usage policy |
| P-23 | recovery policy / Pickdrop Usage Repair Service | recovery policy | Project default | export function repairReservationPickdropUsages({ | Biz Web / Pickdrop Usage Repair Service | recovery policy |
| P-24 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | existingPickdropUsage.forEach((count, ticketId) => { | Biz Web / Pickdrop Usage Repair Service | usage policy |
| P-25 | configuration policy / Reservation | configuration policy | Project default | setPickdropMode(true, options); | Biz Web / Reservation | configuration policy |
| P-26 | usage policy / Pickdrop Detail Sync | usage policy | Project default | if (!ticketId \|\| !memberPickdropTicketIds.has(ticketId)) { | Biz Web / Pickdrop Detail Sync | usage policy |
| P-27 | usage policy / Reservation | usage policy | Project default | (ticket) => ticket.type === "pickdrop" | Biz Web / Reservation | usage policy |
| P-28 | usage policy / Reservation | usage policy | Project default | pickdropOptions.map((ticket) => [ticket.id, ticket]) | Biz Web / Reservation | usage policy |
| P-29 | usage policy / Reservation | usage policy | Project default | pickdropOptions.map((ticket) => [ | Biz Web / Reservation | usage policy |
| P-30 | usage policy / Reservation | usage policy | Project default | (ticket) => ticket.type === "pickdrop" | Biz Web / Reservation | usage policy |
| P-31 | usage policy / Reservation | usage policy | Project default | pickdropOptions.map((ticket) => [ticket.id, ticket]) | Biz Web / Reservation | usage policy |
| P-32 | usage policy / Reservation | usage policy | Project default | pickdropUsedMap.forEach((used, ticketId) => { | Biz Web / Reservation | usage policy |

## Policy Types

- configuration policy
- usage policy
- validation policy
- display policy
- recovery policy
- operational policy
- server-authoritative policy
