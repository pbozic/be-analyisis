# Socket rooms & events — inventory and notes

This document is an organized inventory of socket "rooms" and socket event channels used by the client, where they are joined or listened to in the codebase, and what they do.

Goals:
- Provide a single reference for developers to understand which rooms/events exist and why.
- Point to exact files where joins/listeners are used so you can audit, normalize, or document payloads.

If you need a machine-readable export (CSV/JSON) of all discovered rooms and file locations, I can generate one next.

---

## Quick recap
- Inputs: room name strings passed to `joinRoom(roomName)` (client -> server `joinRoom` emit).
- Outputs: socket events the client listens for (registered via `socket.on(...)` or globally in the provider).
- Success criteria: file documents all explicit join sites, common room name patterns, and the server events handled by the provider.

---

## How join/leave works (where to look)
- The socket context exposes two helpers: `joinRoom(roomName)` and `leaveRoom(roomName)`.
- Implementation: `src/socket/SocketProvider.tsx` — it emits `'joinRoom'` / `'leaveRoom'` to the server and registers global listeners for common events.
- Recommendation: use these helpers rather than emitting join/leave directly to keep behaviour consistent.

---

## Canonical room patterns (observed)
These are the naming patterns used across the codebase. Where possible, prefer a single canonical pattern to avoid server mismatch.

- `order_{order_id}`
  - Meaning: order-scoped room — events about a single order (status changes, driver updates, completion, cancellation).
  - Example joins: `joinRoom('order_' + order.order_id)`, `joinRoom(`order_${order.order_id}`)`
  - Where used: `src/lib/orderUtils.js`, taxi/transfer client components, BookingTaxi components.

- `reservation_{reservation_id}`
  - Meaning: reservation-scoped room (table reservations, status changes for a reservation).
  - Example join: `joinRoom('reservation_' + reservation.reservation_id)`
  - Where used: `src/lib/orderUtils.js` (active reservations handling).

- `booking_slots_update__{reservation_module_id}`
  - Meaning: booking slot availability updates for a reservation module (business/merchant reservation module).
  - Example join: `joinRoom(`booking_slots_update__${reservationModule.reservation_module_id}`)`
  - Where used: `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` (also listened via `socket.on(eventName, handler)`).

- plain `{order_id}` (raw id)
  - Meaning: in a few places the code calls `joinRoom` with a raw order id (no `order_` prefix). This is inconsistent with the `order_{id}` pattern.
  - Where used: `src/app/(default)/(services)/dostava/checkout/page.tsx` uses `joinRoom(orderRes.order_id)`.
  - Note: confirm server expects raw id or prefixed form; if server expects `order_{id}` then normalize the client.

- Dynamic related-order joins
  - The code may join related order rooms when orders are linked (vehicle transfers, grouped orders). Example: `joinRoom('order_' + order.vehicle_transfer_order.order_id)` and `joinRoom('order_' + child.order_id)`.

---

## Server events the client listens for (global provider handlers)
These are the event channels the SocketProvider registers handlers for — they represent server-to-client event names used across services.

- order_status_change__taxi — taxi order status updated
- order_accepted__taxi — taxi order accepted
- order_completed__taxi — taxi order completed
- order_cancelled__taxi — taxi order cancelled
- order_status_change__delivery — delivery order status updated
- order_accepted__delivery — delivery order accepted / driver assigned
- order_delivery_time — delivery ETA/time updates
- order_completed__delivery — delivery order completed
- order_timeline_change_delivery — delivery timeline change
- lobby_updated — order lobby updates (restaurant/lobby state)
- driver_available — a driver became available
- driver_unavailable — a driver became unavailable
- driver_location — GPS location updates for drivers (taxi/transfer)
- driver_location_delivery — GPS updates specific to delivery drivers

Debug: the provider registers `socket.onAny(...)` to log events — useful to discover additional event names emitted by the server.

Where implemented: `src/socket/SocketProvider.tsx` (search for `newSocket.on(` and `socket.onAny`).

---

## Concrete file locations (where `joinRoom` / `socket.on` were found)

- joinRoom call sites
  - `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` — `booking_slots_update__{reservation_module_id}`
  - `src/app/(default)/(services)/dostava/checkout/page.tsx` — `joinRoom(orderRes.order_id)` (raw order id)
  - `src/lib/orderUtils.js` — multiple `order_` joins, reservation joins, child/vehicle-transfer joins
  - `src/app/(default)/(services)/transfer/TransferHomeClient/index.tsx` — passes `joinRoom` into handlers
  - `src/app/(default)/(services)/taxi/TaxiHomeClient/index.tsx` — passes `joinRoom` into handlers
  - `src/components/js/BookingTaxi.js` & `src/components/BookingTaxi/index.tsx` — booking/taxi components that call `joinRoom`
  - `src/socket/SocketProvider.tsx` — exposes `joinRoom` / `leaveRoom`

- socket.on occurrences
  - `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` — `socket.on(eventName, handleSlotsUpdate)`
  - `src/socket/SocketProvider.tsx` — global `newSocket.on(...)` registrations for many events

- Reservation-related type/files (referenced in booking/reservation flows)
  - `src/apis/reservationApi.ts`
  - `src/types/classes/reservations/*` (many files referencing `reservation_module_id`)
  - `src/components/Calendar/drawerForm/index.tsx` — reads `reservation_module_id` from store/user business
  - `src/app/(default)/playground/page.tsx` — sample `reservation_module_id` values
  - `src/store/slices/deliverySlice.ts` — reacts to reservation status changes (`reservation_id` / `new_status` handling)


References (quick links)
- `src/socket/SocketProvider.tsx` — provider / global listeners / join/leave implementation
- `src/lib/orderUtils.js` — active orders handling / joins
- `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` — booking slot room + listener
- `src/app/(default)/(services)/dostava/checkout/page.tsx` — checkout join (raw id)
