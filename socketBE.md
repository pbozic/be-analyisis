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

- `user:{userId}` — Per-user room for all sockets of a single user, used for targeted emits and cluster-safe disconnects.
- `<socket.id> — Implicit per-socket private room, used to target a specific socket across the cluster.
- `order_{orderId}` — Domain room for a specific order; includes customer, driver, and staff; receives order events and updates.
- `orders_{businessId}` — Delivery merchant inbox room; business users receive new/updated order notifications for their business.
- Global (no room) — io.emit to broadcast to all connected clients.

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
