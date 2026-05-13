# Policy Table: pickdrop-reservation

| Policy ID | Policy Name | Option / Condition | Default | Visible Behavior Impact | Applies To Screen / Area | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| P-01 | usage policy / Reservation | usage policy | Project default | const syncPickdropTickets = () => { | Biz Web / Reservation | usage policy; use only as Policy Notes in the final screen spec |
| P-02 | configuration policy / Reservation | configuration policy | Project default | const submitReservation = (options = {}) => { | Biz Web / Reservation | configuration policy; use only as Policy Notes in the final screen spec |
| P-03 | configuration policy / Reservation | configuration policy | Project default | const setPickdropMode = (enabled, options = {}) => { | Biz Web / Reservation | configuration policy; use only as Policy Notes in the final screen spec |
| P-04 | usage policy / Ticket Reservation Service | usage policy | Project default | export function buildPickdropUsagePlan({ | Biz Web / Ticket Reservation Service | usage policy; use only as Policy Notes in the final screen spec |
| P-05 | usage policy / Reservation | usage policy | Project default | buildPickdropUsagePlan, | Biz Web / Reservation | usage policy; use only as Policy Notes in the final screen spec |
| P-06 | usage policy / Reservation | usage policy | Project default | syncPickdropTickets(); | Biz Web / Reservation | usage policy; use only as Policy Notes in the final screen spec |
| P-07 | usage policy / Reservation | usage policy | Project default | syncPickdropTickets(); | Biz Web / Reservation | usage policy; use only as Policy Notes in the final screen spec |
| P-08 | usage policy / Reservation | usage policy | Project default | syncPickdropTickets(); | Biz Web / Reservation | usage policy; use only as Policy Notes in the final screen spec |
| P-09 | usage policy / Reservation | usage policy | Project default | syncPickdropTickets(); | Biz Web / Reservation | usage policy; use only as Policy Notes in the final screen spec |
| P-10 | usage policy / Reservation | usage policy | Project default | syncPickdropTickets(); | Biz Web / Reservation | usage policy; use only as Policy Notes in the final screen spec |
| P-11 | usage policy / Reservation | usage policy | Project default | const built = buildPickdropUsagePlan({ | Biz Web / Reservation | usage policy; use only as Policy Notes in the final screen spec |
| P-12 | Persistence / Reservation | Persistence | Project default | submitReservation({ includePickdrop: true }); | Biz Web / Reservation | policy candidate; use only as Policy Notes in the final screen spec |
| P-13 | Persistence / Reservation | Persistence | Project default | submitReservation({ includePickdrop: false }); | Biz Web / Reservation | policy candidate; use only as Policy Notes in the final screen spec |
| P-14 | usage policy / Hotels | usage policy | Project default | buildPickdropUsagePlan, | Biz Web / Hotels | usage policy; use only as Policy Notes in the final screen spec |
| P-15 | usage policy / Hotels | usage policy | Project default | const builtPlan = buildPickdropUsagePlan({ | Biz Web / Hotels | usage policy; use only as Policy Notes in the final screen spec |
| P-16 | usage policy / Pickdrop Detail Sync | usage policy | Project default | function normalizeMemberTickets(member) { | Biz Web / Pickdrop Detail Sync | usage policy; use only as Policy Notes in the final screen spec |
| P-17 | usage policy / Pickdrop Detail Sync | usage policy | Project default | .filter((ticket) => ticket?.type === "pickdrop") | Biz Web / Pickdrop Detail Sync | usage policy; use only as Policy Notes in the final screen spec |
| P-18 | usage policy / Pickdrop Detail Sync | usage policy | Project default | .map((ticket) => String(ticket?.id ?? "")) | Biz Web / Pickdrop Detail Sync | usage policy; use only as Policy Notes in the final screen spec |
| P-19 | Persistence / Pickdrop Detail Sync | Persistence | Project default | reservation.dates.forEach((entry) => { | Biz Web / Pickdrop Detail Sync | policy candidate; use only as Policy Notes in the final screen spec |
| P-20 | usage policy / Pickdrop Detail Sync | usage policy | Project default | getEntryTicketUsages(entry).forEach((usage) => { | Biz Web / Pickdrop Detail Sync | usage policy; use only as Policy Notes in the final screen spec |
| P-21 | usage policy / Pickdrop Policy | usage policy | Project default | export const PICKDROP_COUNT_TYPES = Object.freeze(["oneway", "roundtrip"]); | Biz Web / Pickdrop Policy | usage policy; use only as Policy Notes in the final screen spec |
| P-22 | usage policy / Pickdrop Policy | usage policy | Project default | export function getPickdropCountType(source = {}) { | Biz Web / Pickdrop Policy | usage policy; use only as Policy Notes in the final screen spec |
| P-23 | usage policy / Pickdrop Policy | usage policy | Project default | export function getPickdropCountByEntries(entries = []) { | Biz Web / Pickdrop Policy | usage policy; use only as Policy Notes in the final screen spec |
| P-24 | usage policy / Pickdrop Policy | usage policy | Project default | export function resolvePickdropTicketCountType(source = {}) { | Biz Web / Pickdrop Policy | usage policy; use only as Policy Notes in the final screen spec |
| P-25 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | order.forEach((ticketId) => { | Biz Web / Pickdrop Usage Repair Service | usage policy; use only as Policy Notes in the final screen spec |
| P-26 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | function countExistingPickdropUsage(entries = [], optionMap = new Map()) { | Biz Web / Pickdrop Usage Repair Service | usage policy; use only as Policy Notes in the final screen spec |
| P-27 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | getEntryTicketUsages(entry).forEach((usage) => { | Biz Web / Pickdrop Usage Repair Service | usage policy; use only as Policy Notes in the final screen spec |
| P-28 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | const ticketId = pool.find((id) => (remainingById.get(id) \|\| 0) > 0); | Biz Web / Pickdrop Usage Repair Service | usage policy; use only as Policy Notes in the final screen spec |
| P-29 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | function mergeUsagesKeepService(existingUsages = [], nextPickdropUsages = [], optionMap = new Map()) { | Biz Web / Pickdrop Usage Repair Service | usage policy; use only as Policy Notes in the final screen spec |
| P-30 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | nextPickdropUsages.forEach((usage) => append(usage)); | Biz Web / Pickdrop Usage Repair Service | usage policy; use only as Policy Notes in the final screen spec |
| P-31 | recovery policy / Pickdrop Usage Repair Service | recovery policy | Project default | export function repairReservationPickdropUsages({ | Biz Web / Pickdrop Usage Repair Service | recovery policy; use only as Policy Notes in the final screen spec |
| P-32 | usage policy / Pickdrop Usage Repair Service | usage policy | Project default | existingPickdropUsage.forEach((count, ticketId) => { | Biz Web / Pickdrop Usage Repair Service | usage policy; use only as Policy Notes in the final screen spec |

## Usage Rule

Use these rows only to write `Policy Notes` or to clarify visible UI item behavior. Do not turn this table into the final spec structure.
