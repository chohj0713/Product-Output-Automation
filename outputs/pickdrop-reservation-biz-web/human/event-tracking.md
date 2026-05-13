# Event Tracking: pickdrop-reservation-biz-web

| Event | Trigger | Parameters | User Property | Screen | Notes |
| --- | --- | --- | --- | --- | --- |
| reservation_submit | submit | feature, screen, state, target_id | Biz Web | Reservation | const submitReservation = (options = {}) => { |
| reservation_submit | submit | feature, screen, state, target_id | Biz Web | Reservation | submitReservation({ includePickdrop: true }); |
| reservation_submit | submit | feature, screen, state, target_id | Biz Web | Reservation | submitReservation({ includePickdrop: false }); |
