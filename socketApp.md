# Klikni App — Socket Reference (Frontend)

This document is an organized inventory of socket "rooms" and socket event channels used by the client, where they are joined or listened to in the codebase, and what they do.

Quick recap
- Inputs: client emits `joinRoom(roomName)` and `leaveRoom(roomName)` to manage room membership.
- Outputs: server emits events to rooms or per-user channels; frontend listens with `socket.on(event, handler)`.

Contents
1. Frontend entry & SocketProvider
2. Authentication & connect options
3. Client → Server API (join/leave)
4. Room naming conventions (canonical)
5. Frontend room patterns (where used + description)
6. Important events the frontend handles
7. Files & call-sites (inventory)
8. Typical flows, best-practices and troubleshooting

1) Frontend entry & SocketProvider
- File: `socket/SocketProvider.js`
- Responsibility: create socket client, attach auth headers, register global `socket.on(...)` handlers and expose `joinRoom(roomName)` / `leaveRoom(roomName)` via `useSocket()`.
- Note: always use the provider helpers from components rather than calling `socket.emit` directly.

2) Authentication & connect options
- The client attaches the Bearer token on connect (extraHeaders) so the server can authenticate during the handshake.
Example (provider):

3) Client → Server API (join / leave)
- joinRoom(roomName) — emit to request membership in a domain room
- leaveRoom(roomName) — emit to leave


4) Room naming conventions
- Order rooms: `order_<order_id>` — used for order lifecycle updates (taxi / transfer / delivery).
- Reservation rooms: `reservation_<reservation_id>` — table reservations.
- Per-user rooms (server-side): `user:{userId}` — used by server to target a user's sockets.
- Booking slots: `booking_slots_update__<reservation_module_id>` — booking availability updates.

Recommendation: normalize room names to the canonical patterns above. Avoid joining raw numeric IDs without a prefix.

5) Frontend room patterns — purpose & when to join
- `order_<order_id>`
  - Purpose: real-time updates for a specific order (status, driver, ETA, timeline).
  - When: on order creation, when loading active orders, and for grouped/child orders.

- `reservation_<reservation_id>`
  - Purpose: table reservation lifecycle updates.
  - When: after creating a table reservation or when loading active table reservation.

- `booking_slots_update__<reservation_module_id>` (will be used in future)
  - Purpose: push slot availability updates to booking UI.
  - When: when the booking flow is open and slot data should be live.

6) Important server → client events handled by frontend
- Orders / taxi / transfer
  - `order_accepted__taxi`, `order_accepted__delivery`
  - `order_status_change__delivery`, `order_timeline_change_delivery`
  - `order_pickup_time`, `order_delivery_time`, `order_completed__delivery`
  - `child_order_created__taxi`

- Drivers / fleet
  - `driver_available`, `driver_unavailable`
  - `driver_location`, `driver_location_delivery`

- Table reservation / general
  - `reservation_status_change`
  - `wallet_balance_change`, `refetch_providers`

Debugging tip: `SocketProvider` often registers `socket.onAny(...)` in development to log unknown events.

7) Files & call-sites (inventory)
These locations join rooms and register listeners — useful for audits and normalization:
- `socket/SocketProvider.js` — provider, global handlers, exports `joinRoom`/`leaveRoom`.
- `lib/orderHelpers.js` — central logic: joins `order_<id>` for active and grouped orders; also joins reservations.
- `components/WelcomeScreen/index.jsx` — joins active table reservation and orders on app start.
- `components/delivery/OrderDetailsBottom/index.jsx` — joins `order_<id>` after successful create.
- `screens/SearchingForDriver.js`, `screens/TaxiRide.js`, `screens/SetLocationViaMapTransfer.js` — join order rooms for active/selected orders.
- `screens/ReceiptDelivery.js` — joins delivery order room to show live updates.
- `screens/TableReservation.ts` — joins `reservation_<id>` on create.
- `screens/BookingTaxi.js`, `screens/BookingTransfer.js` — booking flows that join order/reservation rooms.

8) Typical flows, best-practices and troubleshooting
- Connect flow
  1. Provider connects using JWT in headers.
  2. After connect, frontend fetches active orders/table reservations and calls `joinRoom` for each.

- Join lifecycle
  - Join at the moment an order/table reservation becomes relevant (create/load).
  - Leave when the screen/unmounts or the item completes/gets removed.

- Best practices
  - Always use `useSocket()` helpers.
  - Keep room name composition in one place (helpers) to simplify normalization.
  - For grouped orders, join each child room explicitly.

- Troubleshooting checklist
  - No events: confirm socket is connected and token valid.
  - Missed updates: confirm correct room name and that join happened before server emits.
  - Reconnect: confirm provider re-joins persisted rooms on reconnect.
