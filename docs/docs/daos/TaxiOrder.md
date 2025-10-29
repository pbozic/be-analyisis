# TaxiOrder DAO

<!-- DOCGEN:START getOrders -->
### getOrders

**Description**: List taxi orders with provided Prisma args and standard includes.

**Parameters**:
- args: {object} - Prisma findMany args (where/orderBy/etc.).

**Returns**: {Promise<object[]>} - Array of orders.

<!-- DOCGEN:END getOrders -->

<!-- DOCGEN:START getOrder -->
### getOrder

**Description**: Get a taxi order by ID with nested user, driver, and grouped_orders.

**Parameters**:
- order_id: {string} - Order ID.

**Returns**: {Promise<object|null>} - The order or null.

<!-- DOCGEN:END getOrder -->

<!-- DOCGEN:START getTaxiOrdersIfNotCompleted -->
### getTaxiOrdersIfNotCompleted

**Description**: Get non-completed taxi orders for a user (optionally business-user aware) and optional type.

**Parameters**:
- user_id: {string} - User ID.
- type: {string|undefined} - Optional order type filter.
- isBusinessUser?: {boolean} - If true, include orders created by the user for a business.

**Returns**: {Promise<object[]>} - Matching orders.

<!-- DOCGEN:END getTaxiOrdersIfNotCompleted -->

<!-- DOCGEN:START getActiveOrdersByDriverId -->
### getActiveOrdersByDriverId

**Description**: Get currently active (non-pending/completed/canceled) orders for a driver; includes scheduled cutoff logic.

**Parameters**:
- driver_id: {string} - Driver ID.

**Returns**: {Promise<object[]>} - Active orders for the driver.

<!-- DOCGEN:END getActiveOrdersByDriverId -->

<!-- DOCGEN:START getDeliveryOrdersByDriverId -->
### getDeliveryOrdersByDriverId

**Description**: Get delivery orders (non-taxi) for a driver with optional filters.

**Parameters**:
- driver_id: {string} - Driver ID.
- args: {object} - Additional where filters.

**Returns**: {Promise<object[]>} - Delivery orders.

<!-- DOCGEN:END getDeliveryOrdersByDriverId -->

<!-- DOCGEN:START getOrdersByDriverId -->
### getOrdersByDriverId

**Description**: Get taxi orders for a driver with optional filters.

**Parameters**:
- driver_id: {string} - Driver ID.
- args: {object} - Additional where filters.

**Returns**: {Promise<object[]>} - Taxi orders.

<!-- DOCGEN:END getOrdersByDriverId -->

<!-- DOCGEN:START createOrder -->
### createOrder

**Description**: Create a taxi order with an auto-incrementing mod-10000 order_number.

**Parameters**:
- order: {object} - Order payload to insert.

**Returns**: {Promise<object>} - Created order.

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createOrderSent -->
### createOrderSent

**Description**: Create a taxi_order_sent record for an order and driver.

**Parameters**:
- order_id: {string} - Order ID.
- driver: {object} - Driver object containing driver_id and location.

**Returns**: {Promise<object>} - Created taxi_order_sent record.

<!-- DOCGEN:END createOrderSent -->

<!-- DOCGEN:START isOrderSent -->
### isOrderSent

**Description**: Check whether a given order has already been sent to a driver.

**Parameters**:
- order_id: {string} - Order ID.
- driver: {object} - Driver object containing driver_id.

**Returns**: {Promise<object|null>} - Sent record or null.

<!-- DOCGEN:END isOrderSent -->

<!-- DOCGEN:START getAlreadySentOrdersByDriverId -->
### getAlreadySentOrdersByDriverId

**Description**: Get pending (not accepted/rejected) sent orders for a driver where order is still pending.

**Parameters**:
- driver_id: {string} - Driver ID.

**Returns**: {Promise<object[]>} - Array of taxi_order_sent with order included.

<!-- DOCGEN:END getAlreadySentOrdersByDriverId -->

<!-- DOCGEN:START acceptTaxiOrderWithRawLock -->
### acceptTaxiOrderWithRawLock

<!-- DOCGEN:END acceptTaxiOrderWithRawLock -->

<!-- DOCGEN:START acceptOrder -->
### acceptOrder

**Description**: Accept a taxi order (without raw locking); marks sent as accepted, sets driver and vehicle.

**Parameters**:
- order: {object} - Order object containing order_id and is_scheduled.
- driver: {object} - Driver with driver_id and current_vehicle.

**Returns**: {Promise<object>} - Updated taxi order.

<!-- DOCGEN:END acceptOrder -->

<!-- DOCGEN:START updateOrderStatus -->
### updateOrderStatus

**Description**: Update the status of a taxi order by ID, returning nested relations.

**Parameters**:
- order_id: {string} - Order ID.
- status: {string} - New status.

**Returns**: {Promise<object>} - Updated taxi order.

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START completeOrder -->
### completeOrder

**Description**: Mark an order as completed and set driver.on_order to false.

**Parameters**:
- order_id: {string} - Order ID.

**Returns**: {Promise<object>} - Updated taxi order.

<!-- DOCGEN:END completeOrder -->

<!-- DOCGEN:START cancelOrder -->
### cancelOrder

**Description**: Cancel an order with a specific status and reason; sets driver.on_order to false if assigned.

**Parameters**:
- order_id: {string} - Order ID.
- status: {string} - Cancellation status.
- cancellation_reason: {string} - Reason text.

**Returns**: {Promise<object>} - Updated taxi order.

<!-- DOCGEN:END cancelOrder -->

<!-- DOCGEN:START cancelVehicleTransferOrder -->
### cancelVehicleTransferOrder

**Description**: Cancel an active vehicle transfer combo order for a user, if present.

**Parameters**:
- user_id: {string} - User ID.
- status: {string} - Cancellation status.
- cancellation_reason: {string} - Reason text.

**Returns**: {Promise<object|null>} - Updated order or null if not found.

<!-- DOCGEN:END cancelVehicleTransferOrder -->

<!-- DOCGEN:START acceptOrderSent -->
### acceptOrderSent

**Description**: Mark a taxi_order_sent as accepted for a specific order and driver.

**Parameters**:
- order_id: {string} - Order ID.
- driver_id: {string} - Driver ID.

**Returns**: {Promise<object>} - Updated taxi_order_sent record.

<!-- DOCGEN:END acceptOrderSent -->

<!-- DOCGEN:START getSentDrivers -->
### getSentDrivers

**Description**: Get drivers to whom an order has been sent.

**Parameters**:
- order_id: {string} - Order ID.

**Returns**: {Promise<object[]>} - Sent entries with nested driver and user docs.

<!-- DOCGEN:END getSentDrivers -->

<!-- DOCGEN:START updateOrderLastSentAt -->
### updateOrderLastSentAt

**Description**: Update order's last_sent_at timestamp to now.

**Parameters**:
- order_id: {string} - Order ID.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END updateOrderLastSentAt -->

<!-- DOCGEN:START updateTaxiOderRoute -->
### updateTaxiOderRoute

**Description**: Update a taxi order's route array.

**Parameters**:
- order_id: {string} - Order ID.
- route: {object[]} - Array of route waypoints.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END updateTaxiOderRoute -->

<!-- DOCGEN:START updateTaxiOrderPickupLocation -->
### updateTaxiOrderPickupLocation

**Description**: Update pickup_location for a taxi order.

**Parameters**:
- order_id: {string} - Order ID.
- pickupLocation: {object} - Location object.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END updateTaxiOrderPickupLocation -->

<!-- DOCGEN:START updateTaxiOrderDeliveryLocation -->
### updateTaxiOrderDeliveryLocation

**Description**: Update delivery_location for a taxi order.

**Parameters**:
- order_id: {string} - Order ID.
- deliveryLocation: {object} - Location object.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END updateTaxiOrderDeliveryLocation -->

<!-- DOCGEN:START updateCompleteTaxiRoute -->
### updateCompleteTaxiRoute

**Description**: Update full route array and compute pickup/delivery from endpoints.

**Parameters**:
- order_id: {string} - Order ID.
- route: {object[]} - Route waypoints.

**Returns**: {Promise<object>} - Updated order with relations included.

<!-- DOCGEN:END updateCompleteTaxiRoute -->

<!-- DOCGEN:START updateTaxiOrderTimeline -->
### updateTaxiOrderTimeline

**Description**: Append entries to the order timeline array.

**Parameters**:
- order_id: {string} - Order ID.
- newTimelineEntries: {object[]} - Timeline entries to append.

**Returns**: {Promise<object>} - Updated order with relations.

<!-- DOCGEN:END updateTaxiOrderTimeline -->

<!-- DOCGEN:START updateTaxiOrderPayment -->
### updateTaxiOrderPayment

**Description**: Update the payment object for a taxi order and include business_users.

**Parameters**:
- order_id: {string} - Order ID.
- payment: {object} - Payment payload.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END updateTaxiOrderPayment -->

<!-- DOCGEN:START updateOrder -->
### updateOrder

**Description**: Update arbitrary fields on a taxi order and return nested relations.

**Parameters**:
- order_id: {string} - Order ID.
- order: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END updateOrder -->

<!-- DOCGEN:START getAcceptedOrders -->
### getAcceptedOrders

**Description**: Get orders in accepted/active states (non-pending/canceled/completed/awaiting payment).

**Returns**: {Promise<object[]>} - Active accepted orders.

<!-- DOCGEN:END getAcceptedOrders -->

<!-- DOCGEN:START userActiveOrders -->
### userActiveOrders

**Description**: Get active orders for a user.

**Parameters**:
- user_id: {string} - User ID.

**Returns**: {Promise<object[]>} - Active orders for the user.

<!-- DOCGEN:END userActiveOrders -->

<!-- DOCGEN:START getActiveOrderIdsForUser -->
### getActiveOrderIdsForUser

<!-- DOCGEN:END getActiveOrderIdsForUser -->

<!-- DOCGEN:START deleteOrderSent -->
### deleteOrderSent

**Description**: Delete a taxi_order_sent entry by its ID.

**Parameters**:
- order_id: {string} - Order ID (unused, kept for signature consistency).
- taxi_order_sent_id: {string} - Sent record ID to delete.

**Returns**: {Promise<object>} - Deleted record.

<!-- DOCGEN:END deleteOrderSent -->

