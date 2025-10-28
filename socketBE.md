# Socket.IO — Events, APIs and Conventions

This document summarizes how sockets are used in this codebase (see implementation in [socket.js](socket.js) and server startup in [server.ts](server.ts)).

## Entry points / initialization
- setupSocket(httpServer)
  - File: [socket.js](socket.js)
  - Called from: [server.ts](server.ts)
  - Purpose: create Socket.IO server, attach Redis adapter, add auth middleware, restore persisted per-user rooms.

- initRedisAdapter()
  - File: [socket.js](socket.js)
  - Purpose: connect pub/sub clients and attach the @socket.io/redis-adapter. Calls restoreUserSockets() after adapter init.

- restoreUserSockets()
  - File: [socket.js](socket.js)
  - Purpose: on startup, scans Redis keys `user_sockets:*` and re-joins each socket id into its per-user room.

## Authentication (handshake)
- Behavior:
  - The socket middleware extracts the token from `socket.handshake.auth?.token` or `socket.handshake.headers?.authorization`.
  - Token is verified with JWT; the decoded `user.user_id` is required.
  - On success the socket is indexed and the per-user room is ensured via:
    - `UserSockets.set(userId, socket)` (local map + join)
    - `SocketStore.addSocket(userId, socket)` (Redis indexes)
  - File: [socket.js](socket.js)

## Client → Server events (explicitly handled)
- joinRoom
  - Emitted by client to request joining a "domain" room.
  - Server handler calls: `SocketStore.addUserToRoom(userId, roomName)`
  - Persists membership in Redis (`user_rooms:{userId}`, `room_users:{roomName}`) and uses `socketsJoin` to join cluster-wide.

- leaveRoom
  - Emitted by client to leave a domain room.
  - Server handler calls: `SocketStore.removeUserFromRoom(userId, roomName)`

- disconnect
  - Built-in Socket.IO event.
  - Server handler removes socket indices via `SocketStore.removeSocket(userId, socket.id)`.
  - Socket.IO automatically removes the socket from rooms on disconnect.

Notes: handlers are installed inside connection handler in `setupSocket()` — see [socket.js](socket.js).

## Server APIs / Helper facades (exported)
All implemented in [socket.js](socket.js) and exported via the module default.

- UserSockets
  - Methods:
    - `UserSockets.set(userId, sockOrId)` — ensure socket or socket id is joined to per-user room.
    - `UserSockets.get(userId)` — returns a broadcaster object scoped to `user:{userId}` with `.emit()` and `.disconnect()` helpers.
    - `UserSockets.emit(userId, event, payload)` — convenience wrapper to emit to the per-user room.
    - `UserSockets.count(userId)` — returns number of sockets in `user:{userId}` (cluster-aware).
  - Usage example:
    - `UserSockets.get(userId).emit('newMessage', payload)`

- SocketStore (Redis-backed index helpers)
  - Methods (file: [socket.js](socket.js)):
    - `addSocket(userId, socket)` — adds `socket.id` to `user_sockets:{userId}` and sets `socket_user:{socketId} = userId`.
    - `removeSocket(userId, socketId)` — remove indexes on disconnect.
    - `addUserToRoom(userId, roomName)` — `socketsJoin(roomName)` + persist sets.
    - `removeUserFromRoom(userId, roomName)` — `socketsLeave(roomName)` + remove from sets.
    - `getUserSocketIds(userId)` — returns members of `user_sockets:{userId}`.
    - `getUserIdBySocketId(socketId)` — returns value of `socket_user:{socketId}`.
    - `getRoomsForUser(userId)` — returns `user_rooms:{userId}` (used to auto-rejoin on connect).
    - `getUsersInRoom(roomName)` — returns `room_users:{roomName}`.
    - `closeRoom(roomName)` — remove all users from a domain room and clear the index.

## Room naming conventions
- Per-user room: `user:{userId}` — used for broadcasting to all sockets of a user.
- Domain rooms: arbitrary string names chosen by application (persisted in `user_rooms:{userId}` and `room_users:{roomName}`).

## Known rooms and descriptions

Below are room name patterns and common literal rooms used by the socket subsystem. Many rooms are created dynamically; patterns show how names are constructed.

- `user:{userId}`
  - Description: Per-user private room that contains every socket connection belonging to the given user. Used for notifications, account updates and anything targeted at the user's devices. Managed by UserSockets.set and restoreUserSockets.

- `<socketId>` (each socket's private room)
  - Description: Socket.IO assigns each socket a private room with the id equal to the socket id. Used to target a single socket instance and for cluster-wide socket operations.

- `business:{businessId}`
  - Description: Business-scoped channel for broadcasts related to a specific business (menu/availability updates, business settings, offers).

- `store:{storeId}` / `branch:{branchId}` / `restaurant:{restaurantId}`
  - Description: Store/branch/restaurant scoped room for inventory changes, opening/closing notifications, or branch-specific events.

- `order:{orderId}`
  - Description: Order-specific room for live order status updates (accepted, preparing, out-for-delivery, delivered), assignment changes and ETA updates.

- `chat:{conversationId}` / `conversation:{conversationId}`
  - Description: Real-time messaging channels for user-to-user or group chats (messages, read receipts, typing indicators).

- `delivery:{deliveryId}` / `courier:{courierId}` / `driver:{driverId}`
  - Description: Delivery lifecycle and courier-specific updates (live location, assignment, status changes).

- `promo:{promoId}` / `promo-section:{sectionId}`
  - Description: Promo and promotional section updates (new promo published, changes to promo sections). Often used to notify frontends to refresh promotional content.

- `lobby` / `global` / `notifications`
  - Description: Generic global channels used for system-wide announcements, discovery lobbies, or application-wide notifications.

- `admin:{area}` / `support:{teamId}`
  - Description: Admin and support operator channels for moderation, operator dashboards and support rooms.

- `table:{tableId}` / `queue:{queueId}` / `kitchen:{kitchenId}`
  - Description: Hospitality/restaurant-specific rooms (table status, queue updates, kitchen tickets).

- `zone:{zoneId}` / `broadcast:system`
  - Description: Geographic or system broadcast channels for region-limited announcements or system-wide messages.

- Domain-room patterns stored in Redis (persistence sets; not Socket.IO room names themselves)
  - `user_rooms:{userId}` — Set of domain room names the user should auto-rejoin on reconnect.
  - `room_users:{roomName}` — Set of userIds in the room.

Notes:
- The concrete set of room names depends on runtime IDs (orders, businesses, chats). The patterns above capture the shapes used across the codebase.
- If you find additional literal room names in the repository, add them here with the source file reference and a short description.

## Redis key conventions (used by SocketStore)
- `user_sockets:{userId}` — Set of socket ids for that user.
- `socket_user:{socketId}` — String mapping socket id → userId.
- `user_rooms:{userId}` — Set of domain room names this user should auto-rejoin on connect.
- `room_users:{roomName}` — Set of userIds in the room.

## Typical flows
- Connect:
  1. Client connects with JWT.
  2. Middleware validates token, sets `socket.user`.
  3. `UserSockets.set(...)` + `SocketStore.addSocket(...)`.
  4. Server reads `user_rooms:{userId}` and rejoins domain rooms.

- Join a domain room:
  1. Client emits `joinRoom` with a room name.
  2. Server runs `SocketStore.addUserToRoom(userId, roomName)` which performs a cluster-safe `socketsJoin` and persists indexes.

- Broadcast to a user:
  - Server code uses `UserSockets.get(userId).emit(event, payload)` or `UserSockets.emit(userId, event, payload)`.

## Files to inspect
- Main socket implementation: [socket.js](socket.js)
- Server bootstrap: [server.ts](server.ts)
- Redis usage notes and key conventions: [REDIS.md](REDIS.md)

## Notes / Implementation caveats
- The adapter requires Redis to be available; if Redis is down the adapter attach will throw until Redis is reachable.
- restoreUserSockets uses `user_sockets:*` scanning — large keyspaces may need `SCAN` batching (see [REDIS.md](REDIS.md)).
- The module exports a proxy for `io` so consumers can call `io.to('room').emit(...)` via the exported object.
