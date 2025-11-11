# Complete Socket.IO Documentation — Server & All Frontends

This comprehensive reference combines socket documentation for the server backend and all frontend applications (Klikni App, Partner App, and Merchant App) into a single guide.

**Goals:**
- Single source of truth for socket implementation across the entire platform
- Clear separation between server-side and client-side implementations
- Easy to navigate with consistent structure across all applications
- Practical examples and file references for quick debugging

**Quick Overview:**
- **Server (Backend)**: Handles authentication, room management, Redis persistence, cluster coordination
- **Klikni App (Customer Mobile)**: Order tracking, reservations, driver location, slot availability (React Native)
- **Klikni FE (Customer Webapp)**: Order tracking, reservations, driver location, slot availability (Next.js/TypeScript)
- **Partner App (Driver/Courier Frontend)**: Order acceptance, delivery management, SOS alerts
- **Merchant App (Business Frontend)**: Order inbox, reservation management, business-level subscriptions

---

## Table of Contents

### Server (Backend)
- [1. Server: Entry Points & Initialization](#1-server-entry-points--initialization)
- [2. Server: Authentication](#2-server-authentication)
- [3. Server: Client → Server Events](#3-server-client--server-events)
- [4. Server: APIs & Helper Facades](#4-server-apis--helper-facades)
- [5. Server: Room Naming Conventions](#5-server-room-naming-conventions)
- [6. Server: Known Rooms & Descriptions](#6-server-known-rooms--descriptions)
- [7. Server: Redis Key Conventions](#7-server-redis-key-conventions)
- [8. Server: Typical Flows](#8-server-typical-flows)

### Frontend: Klikni App (Customer Mobile)
- [9. Klikni App: Overview](#9-klikni-app-overview)
- [10. Klikni App: Authentication](#10-klikni-app-authentication)
- [11. Klikni App: Room Patterns](#11-klikni-app-room-patterns)
- [12. Klikni App: Events Handled](#12-klikni-app-events-handled)
- [13. Klikni App: File Locations](#13-klikni-app-file-locations)

### Frontend: Klikni FE (Webapp)
- [14. Klikni FE (Webapp): Overview](#14-klikni-fe-webapp-overview)
- [15. Klikni FE (Webapp): Room Patterns](#15-klikni-fe-webapp-room-patterns)
- [16. Klikni FE (Webapp): Events Handled](#16-klikni-fe-webapp-events-handled)
- [17. Klikni FE (Webapp): File Locations](#17-klikni-fe-webapp-file-locations)

### Frontend: Partner App (Driver/Courier)
- [18. Partner App: Overview](#18-partner-app-overview)
- [19. Partner App: Authentication](#19-partner-app-authentication)
- [20. Partner App: Room Patterns](#20-partner-app-room-patterns)
- [21. Partner App: Events Handled](#21-partner-app-events-handled)
- [22. Partner App: File Locations](#22-partner-app-file-locations)

### Frontend: Merchant App (Business)
- [23. Merchant App: Overview](#23-merchant-app-overview)
- [24. Merchant App: Authentication](#24-merchant-app-authentication)
- [25. Merchant App: Room Patterns](#25-merchant-app-room-patterns)
- [26. Merchant App: Events Handled](#26-merchant-app-events-handled)
- [27. Merchant App: File Locations](#27-merchant-app-file-locations)

### Reference
- [28. Implementation Caveats & Notes](#28-implementation-caveats--notes)
- [29. Troubleshooting Guide](#29-troubleshooting-guide)
- [30. Files to Inspect](#30-files-to-inspect)
- [31. Concrete Rooms Inventory](#31-concrete-rooms-inventory)

## Server (Backend)

### 1. Server: Entry Points & Initialization

**setupSocket(httpServer)**
- **File:** `socket.js`
- **Called from:** `server.ts`
- **Purpose:** Creates Socket.IO server, attaches Redis adapter, adds auth middleware, restores persisted per-user rooms

**initRedisAdapter()**
- **File:** `socket.js`
- **Purpose:** Connects pub/sub clients and attaches `@socket.io/redis-adapter`. Calls `restoreUserSockets()` after adapter initialization

**restoreUserSockets()**
- **File:** `socket.js`
- **Purpose:** On startup, scans Redis keys `user_sockets:*` and re-joins each socket ID into its per-user room

---

### 2. Server: Authentication

**Token Extraction:**
- Middleware extracts token from `socket.handshake.auth?.token` or `socket.handshake.headers?.authorization`

**Verification:**
- Token verified using JWT
- Server expects decoded `user.user_id`

**On Success:**
- Socket is indexed and per-user room is ensured via:
  - `UserSockets.set(userId, socket)` (local map + join)
  - `SocketStore.addSocket(userId, socket)` (Redis indexes)

**Implementation:** `socket.js`

---

### 3. Server: Client → Server Events

**joinRoom**
- **Client emits:** Request to join a "domain" room
- **Server handler:** `SocketStore.addUserToRoom(userId, roomName)`
- **Persistence:** Stores membership in Redis (`user_rooms:{userId}`, `room_users:{roomName}`)
- **Cluster-safe:** Uses `socketsJoin` for cluster-wide coordination

**leaveRoom**
- **Client emits:** Leave domain room
- **Server handler:** `SocketStore.removeUserFromRoom(userId, roomName)`

**disconnect (Socket.IO built-in)**
- **Server handler:** Removes socket indices via `SocketStore.removeSocket(userId, socket.id)`
- **Auto-cleanup:** Socket.IO automatically removes socket from rooms

**Note:** Handlers are registered in `setupSocket()` — see `socket.js`

---

### 4. Server: APIs & Helper Facades

All implemented in `socket.js` and exported via module default.

**UserSockets**
- `UserSockets.set(userId, sockOrId)` — Ensure socket/socket ID is joined to per-user room
- `UserSockets.get(userId)` — Returns broadcaster object scoped to `user:{userId}` with `.emit()` and `.disconnect()` helpers
- `UserSockets.emit(userId, event, payload)` — Convenience wrapper to emit to per-user room
- `UserSockets.count(userId)` — Returns number of sockets in `user:{userId}` (cluster-aware)

**SocketStore (Redis-backed index helpers)**
- `addSocket(userId, socket)` — Adds `socket.id` to `user_sockets:{userId}` and sets `socket_user:{socketId} = userId`
- `removeSocket(userId, socketId)` — Remove indexes on disconnect
- `addUserToRoom(userId, roomName)` — `socketsJoin(roomName)` + persist sets
- `removeUserFromRoom(userId, roomName)` — `socketsLeave(roomName)` + remove from sets
- `getUserSocketIds(userId)` — Returns members of `user_sockets:{userId}`
- `getUserIdBySocketId(socketId)` — Returns value of `socket_user:{socketId}`
- `getRoomsForUser(userId)` — Returns `user_rooms:{userId}` (used to auto-rejoin on connect)
- `getUsersInRoom(roomName)` — Returns `room_users:{roomName}`
- `closeRoom(roomName)` — Remove all users from a domain room and clear index

---

### 5. Server: Room Naming Conventions

**Per-user room:** `user:{userId}`
- Used for broadcasting to all sockets of a user

**Socket private room:** `<socket.id>`
- Each socket has a private room with its socket ID
- Used to target a single socket instance

**Domain rooms:** Arbitrary string names chosen by application
- Persisted in Redis sets (`user_rooms:{userId}` and `room_users:{roomName}`)
- Can be rejoined on reconnect

---

### 6. Server: Known Rooms & Descriptions

**Core Rooms:**
- `user:{userId}` — Per-user room for all sockets of a single user; used for targeted emits and cluster-safe disconnects
- `<socket.id>` — Implicit per-socket private room; used to target a specific socket across the cluster

**Business/Order Rooms:**
- `order_{orderId}` — Domain room for a specific order; includes customer, driver, and staff; receives order events and updates
- `orders_{businessId}` — Delivery merchant inbox room; business users receive new/updated order notifications for their business
- `reservations_{businessId}` — Table reservation inbox room for businesses

**Service-Specific Rooms:**
- Taxi/transfer order rooms: `order_{orderId}` pattern
- Delivery order rooms: `order_{orderId}` pattern
- Table reservation rooms: `reservation_{reservationId}` pattern
- Booking slots: `booking_slots_update__{reservationModuleId}` pattern (future)

**Global:**
- No room — `io.emit()` to broadcast to all connected clients

---

### 7. Server: Redis Key Conventions

Used by SocketStore for persistence and cluster coordination:

- `user_sockets:{userId}` — Set of socket IDs for that user
- `socket_user:{socketId}` — String mapping socket ID → userId
- `user_rooms:{userId}` — Set of domain room names this user should auto-rejoin on connect
- `room_users:{roomName}` — Set of userIds in the room

---

### 8. Server: Typical Flows

**Connect Flow:**
1. Client connects with JWT
2. Middleware validates token, sets `socket.user`
3. `UserSockets.set(...)` + `SocketStore.addSocket(...)` run
4. Server reads `user_rooms:{userId}` and rejoins domain rooms

**Join Domain Room:**
1. Client emits `joinRoom` with a room name
2. Server runs `SocketStore.addUserToRoom(userId, roomName)` which performs cluster-safe `socketsJoin` and persists indexes

**Broadcast to User:**
- Server code uses `UserSockets.get(userId).emit(event, payload)` or `UserSockets.emit(userId, event, payload)`

---

## Frontend: Klikni App (Customer Mobile)

### 9. Klikni App: Overview

**Purpose:** Customer-facing mobile application for ordering services (taxi, transfer, delivery) and table reservations

**SocketProvider:** `socket/SocketProvider.js`
- Creates socket client
- Attaches Bearer token via `extraHeaders` on connect
- Registers global `socket.on(...)` handlers
- Exposes `joinRoom(roomName)` and `leaveRoom(roomName)` via `useSocket()`

**Recommendation:** Always use the provider helpers rather than calling `socket.emit` directly

---

### 10. Klikni App: Authentication

**Method:** Bearer token attached on connect via `extraHeaders`

**Token Source:** JWT from user authentication

**Server validates token during handshake**

**Connect Flow:**
1. Provider connects using JWT in headers
2. After connect, frontend fetches active orders/table reservations and calls `joinRoom` for each

---

### 11. Klikni App: Room Patterns

**Order Rooms: `order_<order_id>`**
- **Purpose:** Real-time updates for a specific order (status, driver, ETA, timeline)
- **When to join:** On order creation, when loading active orders, for grouped/child orders
- **Example:** `joinRoom('order_123')`

**Reservation Rooms: `reservation_<reservation_id>`**
- **Purpose:** Table reservation lifecycle updates
- **When to join:** After creating a table reservation or when loading active table reservation
- **Example:** `joinRoom('reservation_456')`

**Booking Slots: `booking_slots_update__<reservation_module_id>`**
- **Purpose:** Push slot availability updates to booking UI
- **When to join:** When the booking flow is open and slot data should be live

**Dynamic Related Orders:**
- May join related order rooms for vehicle transfers, grouped orders
- Example: `joinRoom('order_' + order.vehicle_transfer_order.order_id)`
- For grouped orders, join each child room explicitly

**Recommendation:** Normalize room names to canonical patterns. Avoid joining raw numeric IDs without a prefix.

---

### 12. Klikni App: Events Handled

**Orders / Taxi / Transfer:**
- `order_accepted__taxi` — Taxi order accepted
- `order_completed__taxi` — Taxi order completed
- `order_cancelled__taxi` — Taxi order cancelled
- `order_status_change__taxi` — Taxi order status updated
- `child_order_created__taxi` — Child order created for grouped bookings

**Delivery:**
- `order_accepted__delivery` — Delivery order accepted / driver assigned
- `order_status_change__delivery` — Delivery order status updated
- `order_timeline_change_delivery` — Delivery timeline change
- `order_pickup_time` — Pickup time updates
- `order_delivery_time` — Delivery ETA/time updates
- `order_completed__delivery` — Delivery order completed

**Drivers / Fleet:**
- `driver_available` — A driver became available
- `driver_unavailable` — A driver became unavailable
- `driver_location` — GPS location updates for drivers (taxi/transfer)
- `driver_location_delivery` — GPS updates specific to delivery drivers

**Table Reservation / General:**
- `reservation_status_change` — Reservation status updated
- `wallet_balance_change` — User wallet balance changed
- `refetch_providers` — Trigger to refresh provider data
- `lobby_updated` — Order lobby updates (restaurant/lobby state)

**Debugging:**
- Provider registers `socket.onAny(...)` to log events for discovering additional event names

---

### 13. Klikni App: File Locations

**Provider & Core:**
- `socket/SocketProvider.js` — Provider, global handlers, exports `joinRoom`/`leaveRoom`

**Order Management:**
- `lib/orderHelpers.js` — Central logic: joins `order_<id>` for active and grouped orders; also joins reservations

**Screens & Components:**
- `components/WelcomeScreen/index.jsx` — Joins active table reservation and orders on app start
- `components/delivery/OrderDetailsBottom/index.jsx` — Joins `order_<id>` after successful create
- `screens/SearchingForDriver.js` — Join order rooms for active/selected orders
- `screens/TaxiRide.js` — Join order rooms for active/selected orders
- `screens/SetLocationViaMapTransfer.js` — Join order rooms for active/selected orders
- `screens/ReceiptDelivery.js` — Joins delivery order room to show live updates
- `screens/TableReservation.ts` — Joins `reservation_<id>` on create
- `screens/BookingTaxi.js` — Booking flows that join order/reservation rooms
- `screens/BookingTransfer.js` — Booking flows that join order/reservation rooms

**Typical Join Lifecycle:**
- Join at the moment an order/table reservation becomes relevant (create/load)
- Leave when the screen unmounts or the item completes/gets removed

**Troubleshooting Checklist:**
- No events? Confirm socket is connected and token valid
- Missed updates? Confirm correct room name and that join happened before server emits
- Reconnect issues? Confirm provider re-joins persisted rooms on reconnect

---

## Frontend: Klikni FE (Webapp)

### 14. Klikni FE (Webapp): Overview

**Purpose:** Customer-facing web application for ordering services (taxi, transfer, delivery) and table reservations

**SocketProvider:** `src/socket/SocketProvider.tsx`
- Implementation using TypeScript
- Emits `'joinRoom'` / `'leaveRoom'` to the server
- Registers global listeners for common events
- Exposes helpers via context: `joinRoom(roomName)` and `leaveRoom(roomName)`

**Recommendation:** Use these helpers rather than emitting join/leave directly to keep behaviour consistent

---

### 15. Klikni FE (Webapp): Room Patterns

**Order Rooms: `order_{order_id}`**
- **Meaning:** Order-scoped room — events about a single order (status changes, driver updates, completion, cancellation)
- **Example joins:** `joinRoom('order_' + order.order_id)`, `joinRoom(`order_${order.order_id}`)`
- **Where used:** `src/lib/orderUtils.js`, taxi/transfer client components, BookingTaxi components

**Reservation Rooms: `reservation_{reservation_id}`**
- **Meaning:** Reservation-scoped room (table reservations, status changes for a reservation)
- **Example join:** `joinRoom('reservation_' + reservation.reservation_id)`
- **Where used:** `src/lib/orderUtils.js` (active reservations handling)

**Booking Slots: `booking_slots_update__{reservation_module_id}`**
- **Meaning:** Booking slot availability updates for a reservation module (business/merchant reservation module)
- **Example join:** `joinRoom(`booking_slots_update__${reservationModule.reservation_module_id}`)`
- **Where used:** `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` (also listened via `socket.on(eventName, handler)`)

**Inconsistent Pattern (to normalize):**
- **Plain `{order_id}` (raw id):** In a few places the code calls `joinRoom` with a raw order id (no `order_` prefix)
- **Where used:** `src/app/(default)/(services)/dostava/checkout/page.tsx` uses `joinRoom(orderRes.order_id)`
- **Note:** Confirm server expects raw id or prefixed form; if server expects `order_{id}` then normalize the client

**Dynamic Related-Order Joins:**
- The code may join related order rooms when orders are linked (vehicle transfers, grouped orders)
- Example: `joinRoom('order_' + order.vehicle_transfer_order.order_id)` and `joinRoom('order_' + child.order_id)`

---

### 16. Klikni FE (Webapp): Events Handled

**Server events the client listens for (global provider handlers):**

**Orders / Taxi / Transfer:**
- `order_status_change__taxi` — Taxi order status updated
- `order_accepted__taxi` — Taxi order accepted
- `order_completed__taxi` — Taxi order completed
- `order_cancelled__taxi` — Taxi order cancelled

**Delivery:**
- `order_status_change__delivery` — Delivery order status updated
- `order_accepted__delivery` — Delivery order accepted / driver assigned
- `order_delivery_time` — Delivery ETA/time updates
- `order_completed__delivery` — Delivery order completed
- `order_timeline_change_delivery` — Delivery timeline change

**Drivers / Fleet:**
- `driver_available` — A driver became available
- `driver_unavailable` — A driver became unavailable
- `driver_location` — GPS location updates for drivers (taxi/transfer)
- `driver_location_delivery` — GPS updates specific to delivery drivers

**General:**
- `lobby_updated` — Order lobby updates (restaurant/lobby state)

**Debugging:**
- The provider registers `socket.onAny(...)` to log events — useful to discover additional event names emitted by the server

**Where implemented:** `src/socket/SocketProvider.tsx` (search for `newSocket.on(` and `socket.onAny`)

---

### 17. Klikni FE (Webapp): File Locations

**Provider & Core:**
- `src/socket/SocketProvider.tsx` — Provider / global listeners / join/leave implementation

**Order Management:**
- `src/lib/orderUtils.js` — Active orders handling / joins / multiple `order_` joins, reservation joins, child/vehicle-transfer joins

**Webapp-Specific Components:**
- `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` — Booking slot room + listener: `booking_slots_update__{reservation_module_id}` / `socket.on(eventName, handleSlotsUpdate)`
- `src/app/(default)/(services)/dostava/checkout/page.tsx` — Checkout join (raw order id - needs normalization)
- `src/app/(default)/(services)/transfer/TransferHomeClient/index.tsx` — Passes `joinRoom` into handlers
- `src/app/(default)/(services)/taxi/TaxiHomeClient/index.tsx` — Passes `joinRoom` into handlers
- `src/components/js/BookingTaxi.js` & `src/components/BookingTaxi/index.tsx` — Booking/taxi components that call `joinRoom`

**Reservation Related:**
- `src/apis/reservationApi.ts` — API calls
- `src/types/classes/reservations/*` — Type definitions (many files referencing `reservation_module_id`)
- `src/components/Calendar/drawerForm/index.tsx` — Calendar integration / reads `reservation_module_id` from store/user business
- `src/app/(default)/playground/page.tsx` — Sample `reservation_module_id` values
- `src/store/slices/deliverySlice.ts` — Redux state management / reacts to reservation status changes (`reservation_id` / `new_status` handling)

**Note:** Where possible, prefer a single canonical pattern to avoid server mismatch

---

## Frontend: Partner App (Driver/Courier)

### 18. Partner App: Overview

**Purpose:** Driver/courier-facing application for accepting and managing orders (taxi, delivery)

**SocketProvider:** `socket/SocketProvider.js`
- Creates Socket.IO client
- Attaches lifecycle handlers (`connect`, `disconnect`, `connect_error`)
- Joins service-specific rooms on connect
- Registers application event handlers
- Provides React Context (`SocketContext`) exposing `{ socket, joinRoom, leaveRoom }`

**URL Configuration:**
- Uses `EXPO_PUBLIC_SOCKET_URL` from environment variables
- Auto-reconnect enabled by default
- Connection state tracked and logged

---

### 19. Partner App: Authentication

**Method:** Bearer token in connection headers

**Token Source:** Redux store (`user.access_token`)

**Implementation:** `socket/SocketProvider.js`

**Connection States:**
- `connect` — Successfully authenticated and connected
- `connect_error` — Connection or authentication failure
- `disconnect` — Clean disconnection from server

**Error Handling:**
- Invalid/missing token prevents connection
- Connection errors logged with detailed information
- Automatic reconnection attempts on failure

---

### 20. Partner App: Room Patterns

**Order Rooms: `order_{orderId}`**
- **Purpose:** Individual order management
- **Example:** `order_123`
- **Where used:** `TaxiNavBottom.js`, `DeliveryNavBottom.js`
- **Join locations:**
  - `SocketProvider.js` — On connection for active orders
  - `TaxiNavBottom.js` — When accepting new orders
  - `DeliveryNavBottom.js` — For delivery acceptance

**Service Event Patterns:**
- Taxi: `new_order__taxi`, `order_status_change__taxi`, etc.
- Delivery: `new_order__delivery`, `order_status_change__delivery`, etc.

**Emergency Pattern: `sos_alert`**
- **Purpose:** Emergency notifications
- **Contains:** Location, user info, contact details
- **Where used:** `TaxiRouteNavigation.js`, global event handler

---

### 21. Partner App: Events Handled

All handlers registered in `socket/SocketProvider.js`:

**Connection Events:**
- `connect` — Socket connected successfully
- `disconnect` — Socket disconnected
- `connect_error` — Connection error occurred

**Taxi Service Events:**
- `new_order__taxi` — New order available (Redux: `addPendingOrder`)
- `order_status_change__taxi` — Status updates
- `order_revoked__taxi` — Order cancelled (removes from state)
- `load_active_orders__taxi` — Loads current orders

**Delivery Service Events:**
- `new_order__delivery` — New delivery (adds to pending deliveries)
- `order_status_change__delivery` — Status changes
- `order_revoked__delivery` — Cancelled delivery
- `order_pickup_time` — Pickup scheduling updates
- `order_delivery_time` — Delivery timing updates
- `daily_meals` — Daily meal routes and orders
- `load_active_orders__delivery` — Active deliveries

**Emergency Events:**
- `sos_alert` — SOS notifications with user/location data

**Event Handling Strategy:**
1. Events registered centrally in SocketProvider
2. Redux used for state management
3. Components react to state changes
4. Logging for debugging purposes

---

### 22. Partner App: File Locations

**Core Files:**
- `socket/SocketProvider.js` — Main socket initialization, event registration, room management, Redux integration

**Taxi Service Files:**
- `partner - taxi/components/TaxiNavBottom.js` — Order acceptance, room joining for new orders, status updates
- `partner - taxi/components/TaxiRouteNavigation.js` — Navigation handling, SOS features
- `partner - taxi/screens/PartnerTaxiHomeScreen.js` — Main taxi service interface

**Delivery Service Files:**
- `partner - delivery/components/DeliveryNavBottom.js` — Delivery management, order room handling
- `partner - delivery/screens/PartnerDeliveryHomeScreen.js` — Main delivery interface, status management

---


---

## Frontend: Merchant App (Business)

### 23. Merchant App: Overview

**Purpose:** Business-facing application for managing incoming orders and reservations (restaurant/merchant)

**SocketProvider:** `socket/SocketProvider.js`
- Creates Socket.IO client
- Attaches lifecycle handlers (`connect`, `disconnect`, `connect_error`)
- Joins business/order rooms on connect
- Registers application event handlers
- Provides React Context (`SocketContext`) exposing `{ socket, joinRoom, leaveRoom }`

---

### 24. Merchant App: Authentication

**Method:** Authorization header with Bearer token

**Implementation:** `socket/SocketProvider.js`

**Token Source:** `tokenRef.current` set as extra header

---

### 25. Merchant App: Room Patterns

**Business Order Inbox: `orders_{businessId}`**
- **Purpose:** Subscribe to new orders and order-list updates for a business
- **Where joined:**
  - `socket/SocketProvider.js` — Automatically on connect
  - `partner - delivery (restaurant)/screens/PartnerRestaurantHomeScreen.js` — Explicit join after fetching business data

**Business Reservation Inbox: `reservations_{businessId}`**
- **Purpose:** Subscribe to new table reservations and reservation-list updates for a business
- **Where joined:**
  - `socket/SocketProvider.js` — Automatically on connect
  - `partner - delivery (restaurant)/screens/PartnerRestaurantHomeScreen.js` — Explicit join after fetching business data

**Individual Order: `order_{orderId}`**
- **Purpose:** Subscribe to room for a single order to receive lifecycle events (status changes, pickup time, completion)
- **Where joined:**
  - `socket/SocketProvider.js` — Joins current restaurant orders on connect using stored orders in Redux
  - `partner - delivery (restaurant)/components/OrderCard.js` — Joins when accepting an order

**Note:** These patterns appear consistently. No other room prefixes (like `booking_slots_update__`) are used in this repository.

---

### 26. Merchant App: Events Handled

List compiled from `socket/SocketProvider.js`:

**Connection Events:**
- `connect` — Socket connected
- `disconnect` — Socket disconnected
- `connect_error` — Connection error

**Order Events:**
- `new_order` — New order received (adds pending restaurant order via Redux)
- `order_status_change__delivery` — Order status updated (may trigger `leaveRoom` when final)
- `order_pickup_time` — Pickup/ready time updated
- `order_completed__delivery` — Order completed (updates orders and leaves order room)

**Reservation Events:**
- `new_reservation` — New reservation received (adds pending reservation via Redux)

**Centralization:**
- All events registered centrally in `socket/SocketProvider.js`
- Affects all components using the provider

---

### 27. Merchant App: File Locations

**Core Provider:**
- `socket/SocketProvider.js`
  - Creates socket and sets `extraHeaders.Authorization`
  - Registers `connect`, `disconnect`, `connect_error` and all event listeners
  - Emits `joinRoom` for `orders_{businessId}`, `reservations_{businessId}` when business ID available
  - Emits `joinRoom` for `order_{orderId}` for each order in `restaurant_orders` on connect
  - Registers listeners for `new_order`, `new_reservation`, `order_status_change__delivery`, `order_pickup_time`, `order_completed__delivery`

**Screens:**
- `partner - delivery (restaurant)/screens/PartnerRestaurantHomeScreen.js`
  - After fetching business info, calls `joinRoom('orders_' + business.business_id)` and `joinRoom('reservations_' + business.business_id)`

**Components:**
- `partner - delivery (restaurant)/components/OrderCard.js`
  - Calls `joinRoom('order_' + order_id)` when accepting an order (gets order-scoped events during lifecycle)

**Context Usage:**
- Provider exposes `joinRoom` and `leaveRoom` via context
- Several components call `useSocket()` then `joinRoom(...)`

---


---

## Reference

### 28. Implementation Caveats & Notes

**Redis Dependency:**
- Adapter requires Redis to be available
- If Redis is down, adapter attach will throw until Redis is reachable

**User Sockets Restoration:**
- `restoreUserSockets()` uses `user_sockets:*` scanning
- Large keyspaces may need `SCAN` batching (see `REDIS.md`)

**Frontend Naming Inconsistencies:**
- Some FE code uses raw `{order_id}` vs `order_{id}` pattern
- Recommend normalizing to avoid server/client mismatch

**Module Export:**
- Server module exports a proxy for `io`
- Server code can call `io.to('room').emit(...)` via exported object

**Cluster Coordination:**
- All room operations use cluster-safe `socketsJoin`/`socketsLeave`
- Redis ensures consistency across multiple server instances

---

### 29. Troubleshooting Guide

**Problem: No Socket Events Received**
- ✓ Confirm socket is connected (`connect` event fired)
- ✓ Verify token is valid and not expired
- ✓ Check room name is correct and matches server pattern
- ✓ Ensure `joinRoom` was called before server emits
- ✓ Check server logs for emit calls

**Problem: Missed Updates After Reconnect**
- ✓ Confirm provider re-joins persisted rooms on reconnect
- ✓ Check `user_rooms:{userId}` in Redis contains expected rooms
- ✓ Verify `restoreUserSockets()` ran successfully on server restart

**Problem: Events Duplicated**
- ✓ Check if joining same room multiple times without leaving
- ✓ Verify cleanup in `useEffect` return functions
- ✓ Ensure components aren't registering multiple listeners for same event

**Problem: Connection Errors**
- ✓ Verify `EXPO_PUBLIC_SOCKET_URL` or socket URL is correct
- ✓ Check Authorization header format: `Bearer ${token}`
- ✓ Confirm server is running and accepting connections
- ✓ Check CORS configuration if browser-based
- ✓ Review server logs for authentication failures

**Problem: Room Not Persisting**
- ✓ Verify Redis is running and connected
- ✓ Check `SocketStore.addUserToRoom` is being called
- ✓ Inspect Redis keys: `user_rooms:{userId}`, `room_users:{roomName}`

**Debugging Tools:**
- Use `socket.onAny(...)` in development to log all events
- Check Redux DevTools for state updates
- Review server logs with socket event emissions
- Use Redis CLI to inspect keys: `redis-cli KEYS "user_*"`

---

### 30. Files to Inspect

**Server:**
- `socket.js` — Main socket implementation, UserSockets, SocketStore
- `server.ts` — Server bootstrap, calls setupSocket
- `REDIS.md` — Redis usage notes and key conventions

**Klikni App (Customer Mobile):**
- `socket/SocketProvider.js` — Provider, global handlers, exports joinRoom/leaveRoom
- `lib/orderHelpers.js` — Central logic: joins order rooms for active and grouped orders
- `components/WelcomeScreen/index.jsx` — Joins active table reservation and orders on app start
- `components/delivery/OrderDetailsBottom/index.jsx` — Joins order room after successful create
- `screens/SearchingForDriver.js` — Join order rooms for active/selected orders
- `screens/TaxiRide.js` — Join order rooms for active/selected orders
- `screens/SetLocationViaMapTransfer.js` — Join order rooms for active/selected orders
- `screens/ReceiptDelivery.js` — Joins delivery order room to show live updates
- `screens/TableReservation.ts` — Joins reservation room on create
- `screens/BookingTaxi.js` — Booking flows that join order/reservation rooms
- `screens/BookingTransfer.js` — Booking flows that join order/reservation rooms

**Klikni FE (Webapp):**
- `src/socket/SocketProvider.tsx` — Provider, global listeners, join/leave implementation (TypeScript)
- `src/lib/orderUtils.js` — Active orders handling, joins multiple order rooms
- `src/app/(default)/(services)/rezervacije/booking/form/index.tsx` — Booking slot room + listener
- `src/app/(default)/(services)/dostava/checkout/page.tsx` — Checkout join (needs normalization to use order_ prefix)
- `src/app/(default)/(services)/transfer/TransferHomeClient/index.tsx` — Passes joinRoom into handlers
- `src/app/(default)/(services)/taxi/TaxiHomeClient/index.tsx` — Passes joinRoom into handlers
- `src/components/js/BookingTaxi.js` — Booking/taxi components that call joinRoom
- `src/components/BookingTaxi/index.tsx` — TypeScript booking components

**Partner App (Driver/Courier):**
- `socket/SocketProvider.js` — Main socket initialization, event registration
- `partner - taxi/components/*` — Taxi service components
- `partner - delivery/components/*` — Delivery service components
- `partner - taxi/screens/PartnerTaxiHomeScreen.js` — Main taxi interface
- `partner - delivery/screens/PartnerDeliveryHomeScreen.js` — Main delivery interface

**Merchant App (Business):**
- `socket/SocketProvider.js` — Socket provider with business room joins
- `partner - delivery (restaurant)/screens/PartnerRestaurantHomeScreen.js` — Main merchant screen
- `partner - delivery (restaurant)/components/OrderCard.js` — Order card with room joins

---

### 31. Concrete Rooms Inventory

This inventory lists concrete room names found via server `io.to(...)` calls and typical events emitted to them. Use as a reference for clients to join the correct rooms.

- `order_{orderId}`
  - Purpose: Per-order realtime stream (customer, driver/courier, merchant)
  - Typical events:
    - Delivery: `order_accepted__delivery`, `order_status_change__delivery`, `order_completed__delivery`, `order_canceled`, `order_pickup_time`, `order_delivery_time`, `order_timeline_change_delivery`
    - Taxi/Transfer: `order_accepted__taxi`, `order_status_change__taxi`, `order_completed__taxi`, `order_cancelled__taxi`, `order_rejected__taxi`, `order_preferences_change__taxi`, `order_route_change`, `order_pickup_location_change`, `order_delivery_location_change`, `order_complete_route_change`, `order_timeline_change`, `order_payment_change__taxi`
    - Driver: `driver_location`, `driver_location_delivery`
  - Files (examples): `controllers/DeliveryOrderController.js`, `controllers/TaxiOrderController.js`, `controllers/StripeController.js`, `controllers/DriverController.js`, `controllers/DeliveryDriverController.js`, `lib/deliveryHelpers.js`

- `orders_{businessId}`
  - Purpose: Merchant business inbox for delivery orders
  - Typical events: `new_order`, `order_status_change__delivery`
  - Files (examples): `controllers/StripeController.js`, `lib/deliveryHelpers.js`

- `reservations_{businessId}`
  - Purpose: Business reservation inbox
  - Typical events: `new_reservation`
  - Files (examples): `controllers/ReservationController.js`

- `reservation_{reservationId}`
  - Purpose: Per-reservation lifecycle updates
  - Typical events: `added_table_number` (and related updates)
  - Files (examples): `controllers/ReservationController.js`

Notes:
- Domain room memberships are persisted per user in Redis and auto-rejoined on connect; see `socket.js` where saved rooms are rejoined via `socket.join(room)`.
- This inventory reflects direct `io.to(...)` usage. Additional rooms may be joined dynamically with `joinRoom` on the client side without server-side emits.

---

## Quick Reference Tables

### Server Room Patterns

| Pattern | Purpose | Persistence |
|---------|---------|-------------|
| `user:{userId}` | All sockets for one user | Automatic |
| `<socket.id>` | Single socket instance | Automatic |
| `order_{orderId}` | Order-specific events | Manual via joinRoom |
| `orders_{businessId}` | Business order inbox | Manual via joinRoom |
| `reservations_{businessId}` | Business reservation inbox | Manual via joinRoom |
| `reservation_{reservationId}` | Specific reservation | Manual via joinRoom |

### Frontend Room Usage

| App | Primary Patterns | Files |
|-----|------------------|-------|
| **Klikni App (Mobile)** | `order_<id>`, `reservation_<id>`, `booking_slots_update__<id>` | `socket/SocketProvider.js`, `lib/orderHelpers.js` |
| **Klikni FE (Webapp)** | `order_{id}`, `reservation_{id}`, `booking_slots_update__{id}` | `src/socket/SocketProvider.tsx`, `src/lib/orderUtils.js` |
| **Partner App** | `order_{id}`, `sos_alert` | `socket/SocketProvider.js`, `partner-*/components/*` |
| **Merchant App** | `orders_{businessId}`, `reservations_{businessId}`, `order_{id}` | `socket/SocketProvider.js`, `partner-delivery(restaurant)/*` |

### Common Events by Service

| Service | Events |
|---------|--------|
| **Taxi** | `new_order__taxi`, `order_status_change__taxi`, `order_accepted__taxi`, `order_completed__taxi`, `order_cancelled__taxi`, `order_revoked__taxi` |
| **Delivery** | `new_order__delivery`, `order_status_change__delivery`, `order_accepted__delivery`, `order_pickup_time`, `order_delivery_time`, `order_completed__delivery`, `order_revoked__delivery`, `daily_meals` |
| **Drivers** | `driver_available`, `driver_unavailable`, `driver_location`, `driver_location_delivery` |
| **Reservations** | `reservation_status_change`, `new_reservation` |
| **General** | `connect`, `disconnect`, `connect_error`, `lobby_updated`, `wallet_balance_change`, `refetch_providers`, `sos_alert` |
