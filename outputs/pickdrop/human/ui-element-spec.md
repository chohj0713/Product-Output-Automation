# UI Element Spec: pickdrop

| Element ID | Screen | No. | Type | Name | Default | Behavior | Error / Constraint | Data Impact |
| --- | --- | ---: | --- | --- | --- | --- | --- | --- |
| UI-01 | Reservation | 1 | Option | Reservation | Default | const setPickdropMode = (enabled, options = {}) => { |  | UI state may change |
| UI-02 | Pickdrop Usage Repair Service | 2 | Option | Pickdrop Usage Repair Service | Default | function countExistingPickdropUsage(entries = [], optionMap = new Map()) { |  | Ticket usage/allocation may change |
| UI-03 | Pickdrop Usage Repair Service | 3 | Option | Pickdrop Usage Repair Service | Default | function mergeUsagesKeepService(existingUsages = [], nextPickdropUsages = [], optionMap = new Map()) { |  | Ticket usage/allocation may change |
| UI-04 | Reservation | 4 | Option | Reservation | Default | setPickdropMode(true, options); |  | UI state may change |
| UI-05 | Reservation | 5 | Option | Reservation | Default | pickdropOptions.map((ticket) => [ticket.id, ticket]) |  | Ticket usage/allocation may change |
| UI-06 | Reservation | 6 | Option | Reservation | Default | pickdropOptions.map((ticket) => [ |  | Ticket usage/allocation may change |
| UI-07 | Reservation | 7 | Option | Reservation | Default | pickdropOptions.map((ticket) => [ticket.id, ticket]) |  | Ticket usage/allocation may change |
| UI-08 | Reservation | 8 | DatePicker | Reservation | Default | const hasAnyPickup = reservationDates.some((entry) => entry.pickup); |  | Save target may change |
| UI-09 | Reservation | 9 | DatePicker | Reservation | Default | const hasAnyDropoff = reservationDates.some((entry) => entry.dropoff); |  | Save target may change |
| UI-10 | Pickdrop Detail Sync | 10 | Option | Pickdrop Detail Sync | Default | const pickdropOptions = issuedOptions.filter((option) => option?.type === "pickdrop"); |  |  |
| UI-11 | Pickdrop Detail Sync | 11 | Option | Pickdrop Detail Sync | Default | pickdropOptions.forEach((option) => { |  |  |
| UI-12 | Pickdrop Usage Repair Service | 12 | Dropdown | Pickdrop Usage Repair Service | Default | function buildPickdropPools(selectionOrder = [], optionMap = new Map()) { |  |  |
| UI-13 | Pickdrop Usage Repair Service | 13 | Option | Pickdrop Usage Repair Service | Default | const countType = resolvePickdropTicketCountType(option); |  | Ticket usage/allocation may change |
| UI-14 | Pickdrop Usage Repair Service | 14 | DatePicker | Pickdrop Usage Repair Service | Default | const existingPickdropUsage = countExistingPickdropUsage(reservation.dates, optionMap); |  | Ticket usage/allocation may change |
| UI-15 | Pickdrop Usage Repair Service | 15 | DatePicker | Pickdrop Usage Repair Service | Default | const pickdropUsageByDate = buildDateTicketUsagesMap(dateKeys, planByDate, optionMap); |  | Ticket usage/allocation may change |
| UI-16 | Pickdrop Usage Repair Service | 16 | DatePicker | Pickdrop Usage Repair Service | Default | const nextPickdropUsages = pickdropUsageByDate.get(String(entry?.date \|\| "")) \|\| []; |  | Ticket usage/allocation may change |
| UI-17 | Pickdrop Usage Repair Service | 17 | Option | Pickdrop Usage Repair Service | Default | ticketUsages: mergeUsagesKeepService(existingUsages, nextPickdropUsages, optionMap), |  | Ticket usage/allocation may change |
| UI-18 | Reservation | 18 | DatePicker | Reservation | Default | if (Number.isFinite(pickdropLimit) && pickdropLimit > 0 && initialDates.length > pickdropLimit) { | if (Number.isFinite(pickdropLimit) && pickdropLimit > 0 && initialDates.length > pickdropLimit) { |  |
| UI-19 | Reservation | 19 | Section | Reservation | Default | if (elements.feePickdropCard) { |  | Amount/total may change |
| UI-20 | Reservation | 20 | DatePicker | Reservation | Default | // Logic Update: If Ticket is used for payment, Balance should say "이용권 사용" |  | Ticket usage/allocation may change |
| UI-21 | Reservation | 21 | Checkbox | Reservation | Default | if (exceedsLimit && !overrideCheckbox.checked && !allowPickdropOverLimit) { | if (exceedsLimit && !overrideCheckbox.checked && !allowPickdropOverLimit) { |  |
| UI-22 | Pickdrop Detail Sync | 22 | Option | Pickdrop Detail Sync | Default | if (pickdropOptions.length === 0) { |  |  |
| UI-23 | Hotels | 23 | DatePicker | Hotels | Default | const getPickdropDateCount = () => { |  | Ticket usage/allocation may change |
| UI-24 | Hotels | 24 | Dropdown | Hotels | Default | if (hasTicketSelection \|\| hasPickdropSelection) { |  | Ticket usage/allocation may change |
