# Socket Reference — Partner App (Frontend)

This document inventories socket room usage and event listeners in the Klikni Partner App.

Goals

- Single, developer-friendly reference covering how the frontend connects, what room name patterns are used, where rooms are joined/left, and which server events the client listens for.

Quick recap

- Inputs: room name strings emitted by the client via `joinRoom(roomName)` / `socket.emit('joinRoom', room)`.
- Outputs: server events emitted to rooms or globally that the frontend listens for via `socket.on(...)`.
- Success: this file lists canonical room patterns, where they are joined, which events are handled client-side, and file references for auditing or normalizing naming.

## Contents

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

---

## 1) Entry points & initialization (frontend)

- SocketProvider: `socket/SocketProvider.js` — the single frontend entry that creates a Socket.IO client, attaches lifecycle handlers (`connect`, `disconnect`, `connect_error`), joins service-specific rooms on connect, and registers application event handlers.
- The provider supplies a React Context (`SocketContext`) exposing `{ socket, joinRoom, leaveRoom }` for other components to use.
- Initialization happens automatically when the app starts with valid authentication token.

URL configuration:

- Uses `EXPO_PUBLIC_SOCKET_URL` from environment variables
- Auto-reconnect enabled by default
- Connection state tracked and logged

---

## 2) Authentication (handshake from FE)

- Authentication method: Bearer token in connection headers
- Token source: Redux store (user.access_token)
- Implementation location: socket/SocketProvider.js

Connection headers:

- Authorization: Bearer token
- Headers attached during socket initialization
- Token validated on server before allowing connection

Connection states tracked:

- connect: Successfully authenticated and connected
- connect_error: Connection or authentication failure
- disconnect: Clean disconnection from server

Error handling:

- Invalid/missing token prevents connection
- Connection errors logged with detailed information
- Automatic reconnection attempts on failure

---

## 3) Client → Server events (explicitly emitted by FE)

Room management events (via SocketProvider):

- joinRoom: Request to join a specific room (order, service, or emergency)
- leaveRoom: Request to leave a specific room
- Both emitted through SocketProvider's helpers for consistency

Room join patterns found in codebase:

1. Order rooms:
   - Pattern: order\_{orderId}
   - Example: order_123
   - Where used: TaxiNavBottom.js, DeliveryNavBottom.js
2. Service rooms:
   - Pattern: Various service-specific events
   - Examples: new_order**taxi, order_status_change**delivery
   - Where used: SocketProvider.js event handlers
3. Emergency rooms:
   - Pattern: sos_alert
   - Purpose: Emergency notifications
   - Where used: TaxiRouteNavigation.js, global event handler

Implementation locations:

- socket/SocketProvider.js: Main event emission
- partner - taxi/components/: Taxi service room joins
- partner - delivery/components/: Delivery service room joins

---

## 4) Frontend helpers / provider APIs

The SocketProvider (socket/SocketProvider.js) exposes:

1. Room Management:

   - joinRoom(roomName): Join a specific room
   - leaveRoom(roomName): Leave a specific room
   - Used throughout the app for order/service room management

2. Socket Instance:

   - Direct socket access via useSocket() hook
   - Most components should use provider helpers instead
   - Used for custom event handling when needed

3. Connection State:
   - Socket connection status
   - Error handling
   - Auto-reconnect management

Usage pattern:

- Import useSocket from SocketProvider
- Destructure needed functions: { joinRoom, leaveRoom }
- Handle cleanup in useEffect when component unmounts

---

## 5) Room naming conventions found in this repo

Canonical patterns discovered in codebase:

1. Order-specific rooms:

   - Pattern: order\_{orderId}
   - Purpose: Individual order updates
   - Example: order_123
   - Files: TaxiNavBottom.js, DeliveryNavBottom.js

2. Taxi service events:

   - new_order\_\_taxi: New order notifications
   - order_status_change\_\_taxi: Status updates
   - order_revoked\_\_taxi: Cancellation events
   - load_active_orders\_\_taxi: Active order updates

3. Delivery service events:

   - new_order\_\_delivery: New delivery notifications
   - order_status_change\_\_delivery: Status changes
   - order_revoked\_\_delivery: Cancellation events
   - order_pickup_time: Pickup scheduling
   - order_delivery_time: Delivery timing
   - daily_meals: Daily meal routes
   - load_active_orders\_\_delivery: Active deliveries

4. Emergency communication:
   - sos_alert: Emergency notifications
   - Contains: Location, user info, contact details

---

## 6) Known frontend room patterns & where they are used

1. Order Room Pattern:

   - Format: order\_{orderId}
   - Purpose: Individual order management
   - Join locations:
     - SocketProvider.js: On connection for active orders
     - TaxiNavBottom.js: When accepting new orders
     - DeliveryNavBottom.js: For delivery acceptance

2. Taxi Service Patterns:

   - Location: socket/SocketProvider.js
   - Handlers:
     - new_order\_\_taxi: Redux dispatch addPendingOrder
     - order_status_change\_\_taxi: Updates order status
     - order_revoked\_\_taxi: Removes order from state
     - load_active_orders\_\_taxi: Loads current orders

3. Delivery Service Patterns:

   - Location: socket/SocketProvider.js
   - Handlers:
     - new_order\_\_delivery: Adds to pending deliveries
     - order_status_change\_\_delivery: Updates delivery status
     - daily_meals: Updates meal routes and orders
     - order_pickup_time: Updates delivery timeline

4. Emergency Patterns:
   - sos_alert:
     - Global handler in SocketProvider
     - Displays notifications with contact info
     - Used in TaxiRouteNavigation for SOS features

---

## 7) Server events the client listens for

All handlers registered in socket/SocketProvider.js:

Connection Events:

- connect: Socket connected successfully
- disconnect: Socket disconnected
- connect_error: Connection error occurred

Taxi Service Events:

- new_order\_\_taxi: New order available
- order_status_change\_\_taxi: Status updates
- order_revoked\_\_taxi: Order cancelled
- load_active_orders\_\_taxi: Current orders

Delivery Service Events:

- new_order\_\_delivery: New delivery
- order_status_change\_\_delivery: Status changes
- order_revoked\_\_delivery: Cancelled delivery
- order_pickup_time: Pickup updates
- order_delivery_time: Delivery timing
- daily_meals: Route updates
- load_active_orders\_\_delivery: Active deliveries

Emergency Events:

- sos_alert: SOS notifications with user/location data

Event handling strategy:

1. Events registered centrally in SocketProvider
2. Redux used for state management
3. Components react to state changes
4. Logging for debugging purposes

---

## 8) Concrete file locations (join sites and listeners)

Core Files:

- socket/SocketProvider.js:
  - Main socket initialization
  - Event registration
  - Room management
  - Redux integration

Taxi Service Files:

- partner - taxi/components/TaxiNavBottom.js:
  - Order acceptance
  - Room joining for new orders
  - Status updates
- partner - taxi/components/TaxiRouteNavigation.js:
  - Navigation handling
  - SOS features
- partner - taxi/screens/PartnerTaxiHomeScreen.js:
  - Main taxi service interface

Delivery Service Files:

- partner - delivery/components/DeliveryNavBottom.js:
  - Delivery management
  - Order room handling
- partner - delivery/screens/PartnerDeliveryHomeScreen.js:
  - Main delivery interface
  - Status management

## 9) How to find literal room names in repo

Key locations:

- socket/SocketProvider.js
- partner - taxi/components/\*
- partner - delivery/components/\*

## 10) Typical flows, notes, and next steps

Connect Flow:

1. SocketProvider initializes with auth token
2. On connect:
   - Joins active order rooms
   - Loads pending orders
   - Sets up event listeners

Order Management Flow:

1. Receive new_order event
2. Join order room on acceptance
3. Listen for status updates
4. Leave room on completion

Best Practices:

1. Clean up subscriptions in useEffect
2. Use consistent room naming
3. Handle connection errors
4. Log important events
5. Maintain Redux state sync
