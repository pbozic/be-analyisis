# Socket Reference — Combined (Server + Frontend)

This file combines and organizes the socket documentation from the server-side `socketBE.md` and the frontend `socketFE.md`, `socketApp.md`, `socketPartner.md` and  `socketMerchant.md` into a single, developer-friendly reference.


## Quick recap
- Inputs: room name strings passed by clients to the server via `joinRoom(roomName)` (client -> server emit).
- Outputs: server events emitted to rooms or to per-user rooms (clients listen via `socket.on(...)`).
- Success: this file documents where rooms are joined, canonical name patterns, server helper APIs, Redis keys, and example file locations.

---

## Contents
1. Entry points & initialization (server-side)
2. Authentication (handshake)
3. Client → Server events (join/leave)
4. Server APIs / helpers
5. Room naming conventions & Redis key conventions
6. Known server-side room patterns and descriptions
7. Frontend (Webapp) room patterns & where they are used
 - 7a. Frontend: Partner App
 - 7b. Frontend: Klikni App 
 - 7c. Frontend: Merchant App
8. Server events the client listens for (SocketProvider global handlers)
9. Concrete file locations (join sites and listeners)
10. Typical flows, files to inspect, notes, next steps

---

## 1) Entry points & initialization (server-side)
- setupSocket(httpServer)
  - File: `socket.js`
  - Called from: `server.ts`
  - Purpose: create Socket.IO server, attach Redis adapter, add auth middleware, restore persisted per-user rooms.

- initRedisAdapter()
  - File: `socket.js`
  - Purpose: connect pub/sub clients and attach the `@socket.io/redis-adapter`. Calls `restoreUserSockets()` after adapter init.

- restoreUserSockets()
  - File: `socket.js`
  - Purpose: on startup, scans Redis keys `user_sockets:*` and re-joins each socket id into its per-user room.

---

## 2) Authentication (handshake)
- Token extraction: `socket.handshake.auth?.token` or `socket.handshake.headers?.authorization`.
- Token verified using JWT; server expects decoded `user.user_id`.
- On success the socket is indexed and the per-user room is ensured via:
  - `UserSockets.set(userId, socket)` (local map + join)
  - `SocketStore.addSocket(userId, socket)` (Redis indexes)
- See: `socket.js`

---

## 3) Client → Server events (explicitly handled)
- joinRoom
  - Client emits: request to join a "domain" room.
  - Server: `SocketStore.addUserToRoom(userId, roomName)` — persists membership and uses `socketsJoin` cluster-wide.
  - Persists in Redis: `user_rooms:{userId}` and `room_users:{roomName}`.

- leaveRoom
  - Client emits: leave domain room.
  - Server: `SocketStore.removeUserFromRoom(userId, roomName)`.

- disconnect (Socket.IO built-in)
  - Server removes socket indices via `SocketStore.removeSocket(userId, socket.id)`.
  - Socket.IO removes socket from rooms automatically.

- Implementation note: join/leave handlers are registered in `setupSocket()`.

---

## 4) Server APIs / Helper facades (exported)
All implemented in `socket.js` and exported via the module.

- UserSockets
  - `UserSockets.set(userId, sockOrId)` — ensure socket or socket id is joined to `user:{userId}`.
  - `UserSockets.get(userId)` — returns a scoped broadcaster for `user:{userId}` with `.emit()` and `.disconnect()` helpers.
  - `UserSockets.emit(userId, event, payload)` — convenience wrapper.
  - `UserSockets.count(userId)` — cluster-aware socket count for a user.

- SocketStore (Redis-backed index helpers)
  - `addSocket(userId, socket)` — add socket.id to `user_sockets:{userId}` and set `socket_user:{socketId}=userId`.
  - `removeSocket(userId, socketId)` — remove indexes on disconnect.
  - `addUserToRoom(userId, roomName)` — `socketsJoin(roomName)` + persist sets.
  - `removeUserFromRoom(userId, roomName)` — `socketsLeave(roomName)` + remove from sets.
  - `getUserSocketIds(userId)`, `getUserIdBySocketId(socketId)`.
  - `getRoomsForUser(userId)`, `getUsersInRoom(roomName)`.
  - `closeRoom(roomName)` — remove users and clear index.

---

## 5) Room naming conventions & Redis keys
- Per-user room: `user:{userId}` — broadcast to all sockets of a user.
- Socket private room: each socket has a private room with its `socket.id`.
- Domain rooms: arbitrary string names chosen by app logic; persisted in Redis sets so they can be rejoined on reconnect.

Redis persistence sets (SocketStore):
- `user_sockets:{userId}` — set of socket ids for that user.
- `socket_user:{socketId}` — mapping socket id -> userId.
- `user_rooms:{userId}` — set of domain room names the user should auto-rejoin.
- `room_users:{roomName}` — set of userIds in a room.

---

## 6) Known server-side room patterns and descriptions
(These come from `SOCKETS.md` and code conventions.)

- `user:{userId}` — per-user private room for notifications and account updates.
- `<socketId>` — socket private room used to target a single socket.
- `business:{businessId}` — business-scoped broadcasts (menu/availability/offers).
- `store:{storeId}` / `branch:{branchId}` / `restaurant:{restaurantId}` — branch-specific events.
- `order:{orderId}` — live order status updates (assignment, ETA, status changes).
- `chat:{conversationId}` / `conversation:{conversationId}` — messaging channels (messages, read receipts, typing).
- `delivery:{deliveryId}` / `courier:{courierId}` / `driver:{driverId}` — delivery lifecycle and courier updates.
- `promo:{promoId}` / `promo-section:{sectionId}` — promo updates; prompt FE to refresh.
- `lobby`, `global`, `notifications` — generic system-wide channels.
- `admin:{area}` / `support:{teamId}` — admin/support operator channels.
- `table:{tableId}` / `queue:{queueId}` / `kitchen:{kitchenId}` — hospitality/restaurant rooms.
- `zone:{zoneId}` / `broadcast:system` — geographic or system-wide broadcast channels.

Notes: Many concrete names are dynamic (IDs appended to patterns). Use server helpers to join in a cluster-safe manner.

---

## 7) Frontend (Webapp) room patterns & where they are used
(Consolidated from `socketFE.md` frontend inventory.)

These patterns are what the FE code uses when calling `joinRoom(...)`. Prefer consistent naming across FE and server.

- `order_{order_id}`
  - Meaning: order-scoped room; events about a single order (status changes, driver updates, completion/cancellation).
  - Example joins: `joinRoom('order_' + order.order_id)` or ``joinRoom(`order_${order.order_id}`)``
  - Where used: `src/lib/orderUtils.js`, taxi/transfer client components, BookingTaxi components.

- `reservation_{reservation_id}`
  - Meaning: reservation-scoped room for reservation status changes.
  - Where used: `src/lib/orderUtils.js` (active reservations handling).

- `booking_slots_update__{reservation_module_id}`
  - Meaning: booking slot availability updates for a reservation module.
  - Where used: `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` (listening via `socket.on(eventName, handler)`).

- plain `{order_id}` (raw id) — inconsistent pattern
  - Some places call `joinRoom(orderRes.order_id)` without the `order_` prefix. Example: `src/app/(default)/(services)/dostava/checkout/page.tsx`.
  - Recommendation: normalize to a canonical pattern (e.g., `order_{id}`) or ensure server accepts both.

- Dynamic related-order joins
  - Code may join related order rooms (vehicle transfers, grouped orders): `joinRoom('order_' + order.vehicle_transfer_order.order_id)`.

Where the FE exposes helpers:
- `src/socket/SocketProvider.tsx` — the provider exposes `joinRoom(roomName)` and `leaveRoom(roomName)`, registers global socket listeners and logs events via `socket.onAny(...)` for discovery/debugging.
- Recommendation: always use the provider's `joinRoom`/`leaveRoom` APIs to keep behavior consistent.

---

## 7a) Frontend: Partner App
This section contains Partner App specific patterns, events and files (extracted from `socketPartner.md`).

- Entry point: `socket/SocketProvider.js` — creates the client, attaches lifecycle handlers and exposes `joinRoom`/`leaveRoom` and a `useSocket()` hook.
- Auth: Bearer token from Redux attached as `Authorization` header on connect.

Frontend room patterns & examples (Partner):
- `order_{orderId}` — order-scoped rooms. Used in: `TaxiNavBottom.js`, `DeliveryNavBottom.js`.
- Service event patterns: `new_order__taxi`, `order_status_change__delivery`, etc.
- Emergency: `sos_alert` — used by `TaxiRouteNavigation.js` and global handlers for SOS features.

Where joins/listeners live (Partner):
- `socket/SocketProvider.js` — central registration and joins for active orders/services.
- Taxi components: `partner - taxi/components/*` (e.g. `TaxiNavBottom.js`, `TaxiRouteNavigation.js`).
- Delivery components: `partner - delivery/components/*` and screens.

Event list (Partner):
- Connection events: `connect`, `disconnect`, `connect_error`.
- Taxi: `new_order__taxi`, `order_status_change__taxi`, `order_revoked__taxi`, `load_active_orders__taxi`.
- Delivery: `new_order__delivery`, `order_status_change__delivery`, `order_delivery_time`, `order_pickup_time`, `daily_meals`, `load_active_orders__delivery`.
- Emergency: `sos_alert`.

Best practices (Partner): use provider helpers, cleanup on unmount, and ensure consistent room naming.

---

## 7b) Frontend: Klikni App
This section brings in the FE-specific inventory from `socketApp.md` (Klikni App) and highlights canonical patterns and files.

Canonical room patterns (Klikni App):
- `order_<order_id>` — primary order lifecycle rooms; joined when orders are active.
- `reservation_<reservation_id>` — reservation lifecycle updates.
- `booking_slots_update__<reservation_module_id>` — booking slot availability updates. (will be used in the booking flow)

Frontend event handlers (Klikni App):
- Orders/taxi/transfer: `order_accepted__taxi`, `order_completed__taxi`, `child_order_created__taxi`.
- Delivery: `order_status_change__delivery`, `order_timeline_change_delivery`, `order_pickup_time`, `order_delivery_time`, `order_completed__delivery`.
- Drivers: `driver_available`, `driver_unavailable`, `driver_location`, `driver_location_delivery`.
- General: `reservation_status_change`, `wallet_balance_change`, `refetch_providers`.

Where to look (Klikni App):
- Provider: `src/socket/SocketProvider.tsx` (global listeners + `onAny` debug logging).
- Order helpers: `src/lib/orderUtils.js` (joins `order_` rooms and reservation rooms).
- Table reservation: `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` (table reservation listener).
- Checkout: `src/app/(default)/(services)/dostava/checkout/page.tsx` (raw id joins — consider normalizing).

Notes (Klikni App): normalize `order_` vs raw id joins; use provider's `joinRoom` helpers to ensure consistent behavior across reconnections.

---

## 7c) Frontend: Merchant App
This section incorporates the merchant-focused frontend patterns from `socketMerchant.md`.

Merchant canonical patterns:
- `orders_{businessId}` — business-level subscription for new orders & list changes.
- `reservations_{businessId}` — business-level table reservations subscription.
- `order_{orderId}` — order-scoped room for specific order lifecycle events.

Merchant events (registered in provider):
- Connection: `connect`, `disconnect`, `connect_error`.
- Order/table reservation events: `new_order`, `new_reservation`, `order_status_change__delivery`, `order_pickup_time`, `order_completed__delivery`.

Where to look (Merchant):
- `socket/SocketProvider.js` — emits `joinRoom('orders_' + businessId)` and `joinRoom('reservations_' + businessId)` on connect when business id is available; joins `order_{orderId}` for active restaurant orders.
- Screens/components: `partner - delivery (restaurant)/screens/PartnerRestaurantHomeScreen.js`, `partner - delivery (restaurant)/components/OrderCard.js`.

Notes (Merchant): maintain the `orders_` / `reservations_` conventions and ensure server emits match that prefixing.

---

## 8) Server events the client listens for (SocketProvider global handlers)
List compiled from FE provider and app components. Many are service-specific (taxi/delivery/reservation):

- Taxi / Order related
  - `order_status_change__taxi`
  - `order_accepted__taxi`
  - `order_completed__taxi`
  - `order_cancelled__taxi`

- Delivery related
  - `order_status_change__delivery`
  - `order_accepted__delivery`
  - `order_delivery_time` (ETA/time updates)
  - `order_completed__delivery`
  - `order_timeline_change_delivery`

- Driver / Fleet
  - `driver_available`
  - `driver_unavailable`
  - `driver_location`
  - `driver_location_delivery` (delivery-specific GPS)

- Lobby / misc
  - `lobby_updated`

Debugging: the provider registers `socket.onAny(...)` to log any events — useful to discover additional event names.

Where implemented: `src/socket/SocketProvider.tsx` (look for `newSocket.on(` and `socket.onAny`).

---

## 9) Concrete file locations (join sites and listeners)

- joinRoom call sites (examples):
  - `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` — `booking_slots_update__{reservation_module_id}`
  - `src/app/(default)/(services)/dostava/checkout/page.tsx` — `joinRoom(orderRes.order_id)` (raw order id)
  - `src/lib/orderUtils.js` — multiple `order_` joins, reservation joins, child/vehicle-transfer joins
  - `src/app/(default)/(services)/transfer/TransferHomeClient/index.tsx` — passes `joinRoom` into handlers
  - `src/app/(default)/(services)/taxi/TaxiHomeClient/index.tsx` — passes `joinRoom` into handlers
  - `src/components/js/BookingTaxi.js` & `src/components/BookingTaxi/index.tsx` — booking/taxi components that call `joinRoom`
  - `src/socket/SocketProvider.tsx` — exposes `joinRoom` / `leaveRoom`

- `socket.on` occurrences (examples):
  - `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` — `socket.on(eventName, handleSlotsUpdate)`
  - `src/socket/SocketProvider.tsx` — global `newSocket.on(...)` registrations for many events

- Reservation related files:
  - `src/apis/reservationApi.ts`
  - `src/types/classes/reservations/*`
  - `src/components/Calendar/drawerForm/index.tsx`

References / starting points:
- `src/socket/SocketProvider.tsx`
- `src/lib/orderUtils.js`
- `src/app/(default)/(services)/rezervacije/booking/form/index.tsx`
- `src/app/(default)/(services)/dostava/checkout/page.tsx`

---

## 10) Typical flows (concise)
- Connect
  1. Client connects with JWT.
  2. Server middleware validates token, sets `socket.user`.
  3. `UserSockets.set(...)` + `SocketStore.addSocket(...)` run.
  4. Server reads `user_rooms:{userId}` and rejoins domain rooms.

- Join a domain room
  1. Client emits `joinRoom` with a room name.
  2. Server runs `SocketStore.addUserToRoom(userId, roomName)` which `socketsJoin` and persists indexes.

- Broadcast to a user
  - Server code: `UserSockets.get(userId).emit(event, payload)` or `UserSockets.emit(userId, event, payload)`.

---

## Files to inspect (server + FE)
- Server socket impl: `socket.js`
- Server bootstrap: `server.ts`
- Redis/key notes: `REDIS.md`
- FE provider: `src/socket/SocketProvider.tsx`
- FE orders/reservations: `src/lib/orderUtils.js`, `src/app/(default)/(services)/rezervacije/booking/form/index.tsx`, `src/app/(default)/(services)/dostava/checkout/page.tsx`

---

## Notes / Implementation caveats
- Redis required for adapter; if Redis is down adapter attach may fail until reachable.
- `restoreUserSockets()` uses `user_sockets:*` scanning — for large keyspaces prefer `SCAN` with batching.
- FE has some inconsistent naming (raw `{order_id}` vs `order_{id}`) — normalize to avoid mismatch.
- The module exports a proxy for `io` so server code can call `io.to('room').emit(...)`.

