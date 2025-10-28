# Socket Reference — Merchant App (Frontend)

This document inventories socket room usage and event listeners found in this merchant-focused repository.

Goals
- Single, developer-friendly reference covering how the frontend connects, what room name patterns are used, where rooms are joined/left, and which server events the client listens for.

Quick recap
- Inputs: room name strings emitted by the client via `joinRoom(roomName)` / `socket.emit('joinRoom', room)`.
- Outputs: server events emitted to rooms or globally that the frontend listens for via `socket.on(...)`.
- Success: this file lists canonical room patterns, where they are joined, which events are handled client-side, and file references so you can audit or normalize naming.

Contents (short)
1. Entry points & init (frontend)
2. Authentication (handshake from FE)
3. Client → Server events (join/leave)
4. Frontend helpers / provider APIs
5. Room naming conventions found in this repo
6. Known frontend room patterns with descriptions and where joined
7. Server events the client listens for
8. Concrete file locations (join sites and listeners)
9. How to find literal room names in repo
10. Typical flows, notes, and next steps


## 1) Entry points & initialization (frontend)
- SocketProvider: `socket/SocketProvider.js` — the single frontend entry that creates a Socket.IO client, attaches lifecycle handlers (`connect`, `disconnect`, `connect_error`), joins business/order rooms on connect, and registers application event handlers.
- The provider supplies a React Context (`SocketContext`) exposing `{ socket, joinRoom, leaveRoom }` for other components to use.


## 2) Authentication (handshake from FE)
- The client attaches an Authorization header to the socket connection using `extraHeaders: { Authorization: `Bearer ${token}` }` in `io(...)` options. See `socket/SocketProvider.js` where `tokenRef.current` is set as an extra header.


## 3) Client → Server events (explicitly emitted by FE)
- `joinRoom` — frontend emits `socket.emit('joinRoom', roomName)` to request the server add the user's socket into a domain room.
- `leaveRoom` — frontend emits `socket.emit('leaveRoom', roomName)` to request removal from a domain room.
- Implementation note: both are proxied through the `SocketProvider`'s `joinRoom` / `leaveRoom` helpers. Other components call `joinRoom(...)` from the provider.


## 4) Frontend helper API (SocketProvider)
- `joinRoom(roomName)` — emits `joinRoom` to server and logs the join.
- `leaveRoom(roomName)` — emits `leaveRoom` to server and logs the leave.
- `socket` instance is exposed for any direct `on`/`emit` usage, though the codebase registers most listeners inside the provider itself.


## 5) Room naming conventions found in this repo
These are the concrete patterns the frontend uses. They are dynamic strings (IDs appended):

- `orders_{businessId}` — business-level room for new orders / list changes.
- `reservations_{businessId}` — business-level room for new table reservations / rtable eservation list changes.
- `order_{orderId}` — order-scoped room for updates related to a single order (status updates, pickup time, completion).

## 6) Known frontend room patterns & where they are used

- `orders_{businessId}`
  - Meaning: subscribe to new orders and order-list updates for a business (merchant/restaurant).
  - Where joined: `socket/SocketProvider.js` (automatically on connect), `partner - delivery (restaurant)/screens/PartnerRestaurantHomeScreen.js` (explicit join after fetching business data).

- `reservations_{businessId}`
  - Meaning: subscribe to new table reservations and table reservation-list updates for a business.
  - Where joined: `socket/SocketProvider.js` (automatically on connect), `partner - delivery (restaurant)/screens/PartnerRestaurantHomeScreen.js` (explicit join after fetching business data).

- `order_{orderId}`
  - Meaning: subscribe to room for a single order to receive order lifecycle events (status changes, pickup time, completion); useful when accepting/processing a specific order.
  - Where joined: `socket/SocketProvider.js` (joins current restaurant orders on connect using stored restaurant orders in Redux), `partner - delivery (restaurant)/components/OrderCard.js` (joins when accepting an order).


## 7) Server events the client listens for (registered in SocketProvider)
List compiled from `socket/SocketProvider.js`:

- `connect` — socket connected.
- `disconnect` — socket disconnected.
- `connect_error` — connection error.
- `new_order` — payload: order object (used to add a pending restaurant order via Redux).
- `new_reservation` — payload: reservation object (used to add a pending reservation via Redux).
- `order_status_change__delivery` — payload: order object; used to update orders and possibly call `leaveRoom('order_' + order.order_id)` when final.
- `order_pickup_time` — payload: order object; used to update pickup/ready time for an order.
- `order_completed__delivery` — payload: order object; used to update orders and leave the order room.

These events are registered centrally in `socket/SocketProvider.js` so they affect all components using the provider.


## 8) Concrete file locations (join sites and listeners)
Search hits and concrete usage discovered in the repository:

- `socket/SocketProvider.js`
  - Creates the socket, sets `extraHeaders.Authorization`, registers `connect`, `disconnect`, `connect_error`, and many event listeners.
  - Emits `joinRoom` for `orders_{businessId}`, `reservations_{businessId}` when business id is available.
  - Emits `joinRoom` for `order_{orderId}` for each order present in `restaurant_orders` on connect.
  - Registers listeners for `new_order`, `new_reservation`, `order_status_change__delivery`, `order_pickup_time`, `order_completed__delivery`.

- `partner - delivery (restaurant)/screens/PartnerRestaurantHomeScreen.js`
  - After fetching business info calls `joinRoom('orders_' + business.business_id)` and `joinRoom('reservations_' + business.business_id)`.

- `partner - delivery (restaurant)/components/OrderCard.js`
  - Calls `joinRoom('order_' + order_id)` when accepting an order (so that the component gets order-scoped events during its lifecycle).

Notes: the provider also exposes `joinRoom` and `leaveRoom` via context and several components call `useSocket()` then `joinRoom(...)`. 

## 9) How to find literal room names in repo

Example results used to build this file (non-exhaustive list of hits):

- `/socket/SocketProvider.js` — join emits and event handlers (see above).
- `/partner - delivery (restaurant)/screens/PartnerRestaurantHomeScreen.js` — join orders_/reservations_.
- `/partner - delivery (restaurant)/components/OrderCard.js` — join order_{id}.


## 10) Typical flows, notes, and next steps

- Typical connect flow (frontend):
  1. `SocketProvider` creates socket with Authorization header.
  2. On `connect`, provider calls `joinBusinessRoomsWithSocket` and `joinOrderRoomsWithSocket` which emit `joinRoom` for `orders_{businessId}`, `reservations_{businessId}`, and `order_{orderId}` for active orders.
  3. Provider listens for `new_order` / `new_reservation` and other order events and dispatches Redux updates.

- Notes & recommendations:
  - The repo currently uses three canonical patterns: `orders_{businessId}`, `reservations_{businessId}`, and `order_{orderId}`. Keep these consistent between FE and server.
  - `order_{orderId}` rooms are joined dynamically when processing or accepting an order — ensure any server-side emit targets that exact pattern.
  - Only the provider registers the majority of `socket.on` listeners; this centralization simplifies management but means components must use provider actions (Redux or joinRoom) to receive updates.
