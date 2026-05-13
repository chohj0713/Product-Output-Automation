# State Matrix: pickdrop-reservation-biz-web

| State ID | Entity | State | Trigger | Display | Constraint | Action | Recoverability |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ST-01 | Reservation | state candidate | Initial or user action | Option updates on State |  | Render or recalculate | Review by PM/QA |
| ST-02 | Reservation | state candidate | Initial or user action | State |  | Render or recalculate | Review by PM/QA |
| ST-03 | Reservation | state candidate | Initial or user action | State |  | Render or recalculate | Review by PM/QA |
| ST-04 | Reservation | state candidate | Initial or user action | State |  | Render or recalculate | Review by PM/QA |
| ST-05 | Reservation | state candidate | Initial or user action | State |  | Render or recalculate | Review by PM/QA |
| ST-06 | Reservation | state candidate | Initial or user action | State |  | Render or recalculate | Review by PM/QA |
| ST-07 | Reservation | state candidate | Initial or user action | State |  | Render or recalculate | Review by PM/QA |
| ST-08 | Reservation | state candidate | Initial or user action | State |  | Render or recalculate | Review by PM/QA |
| ST-09 | Reservation | state candidate | Initial or user action | Option updates on State |  | Render or recalculate | Review by PM/QA |
| ST-10 | Reservation | state candidate | Initial or user action | State |  | Render or recalculate | Review by PM/QA |
| ST-11 | Pickdrop Detail Sync | validation error | Initial or user action | Validation | skipReason: "invalid-reservation", | Render or recalculate | Review by PM/QA |
| ST-12 | Pickdrop Usage Repair Service | active | Initial or user action | DatePicker updates on active |  | Save/update data | Review by PM/QA |
