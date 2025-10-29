# DeliveryOrder DAO

<!-- DOCGEN:START addEntryToDeliveryOrderTimeline -->
### addEntryToDeliveryOrderTimeline

**Parameters**:
- timeline: {Object} - the order timeline object with entries which must have status and timestamp and can have additional fields
- status: {String} - the order status string to add to the timeline.
- entry_data: {Object} - an object with additional fields to be put into the timeline entry. If these include status and timestamp, they will be overwritten.

<!-- DOCGEN:END addEntryToDeliveryOrderTimeline -->

<!-- DOCGEN:START getOrders -->
### getOrders

**Description**: Get delivery orders with optional query args and rich includes.

**Parameters**:
- args: {object} - Additional Prisma args (where/orderBy/include/skip/take).

**Returns**: {Promise<object[]>} - Array of delivery orders.

<!-- DOCGEN:END getOrders -->

<!-- DOCGEN:START getActiveDeliveryOrders -->
### getActiveDeliveryOrders

**Description**: Get all non-terminal delivery orders.

**Returns**: {Promise<object[]>} - Active delivery orders.

<!-- DOCGEN:END getActiveDeliveryOrders -->

<!-- DOCGEN:START getOrder -->
### getOrder

**Description**: Get a single delivery order by ID.

**Parameters**:
- order_id: {string} - Order ID.
- args: {object} - Additional Prisma findFirst args.

**Returns**: {Promise<object|null>} - Delivery order or null.

<!-- DOCGEN:END getOrder -->

<!-- DOCGEN:START getActiveDeliveryOrdersForBusiness -->
### getActiveDeliveryOrdersForBusiness

**Description**: Get non-terminal delivery orders for a business (excluding daily meals).

**Parameters**:
- business_id: {string} - Business ID.

**Returns**: {Promise<object[]>} - Active delivery orders for business.

<!-- DOCGEN:END getActiveDeliveryOrdersForBusiness -->

<!-- DOCGEN:START getDeliveryOrdersIfNotCompleted -->
### getDeliveryOrdersIfNotCompleted

**Description**: Get user's delivery orders that are not in an end state; decorates business with logo/banner URLs.

**Parameters**:
- user_id: {string} - User ID.

**Returns**: {Promise<object[]>} - Non-completed orders with enriched business.

<!-- DOCGEN:END getDeliveryOrdersIfNotCompleted -->

<!-- DOCGEN:START getUserByDeliveryOrderId -->
### getUserByDeliveryOrderId

**Description**: Get the user associated with a delivery order.

**Parameters**:
- order_id: {string} - Order ID.

**Returns**: {Promise<object|null>} - User or null.

<!-- DOCGEN:END getUserByDeliveryOrderId -->

<!-- DOCGEN:START getActiveOrdersByDeliveryDriverId -->
### getActiveOrdersByDeliveryDriverId

**Description**: Get active orders for a deliverer (delivery driver or taxi driver).

**Parameters**:
- deliverer_id: {string} - Delivery driver_id or driver_id.

**Returns**: {Promise<object[]>} - Active orders.

<!-- DOCGEN:END getActiveOrdersByDeliveryDriverId -->

<!-- DOCGEN:START getOrdersByDeliveryDriverId -->
### getOrdersByDeliveryDriverId

**Description**: Get all orders taken by a specific delivery driver.

**Parameters**:
- delivery_driver_id: {string} - Delivery driver ID.

**Returns**: {Promise<object[]>} - Orders.

<!-- DOCGEN:END getOrdersByDeliveryDriverId -->

<!-- DOCGEN:START createOrder -->
### createOrder

**Description**: Create a new delivery order and connect to user and business; order_number increments per business.

**Parameters**:
- order: {object} - Order payload; expects details.business_id.
- user_id: {string} - User ID placing the order.

**Returns**: {Promise<object>} - Created order.

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createOrderSent -->
### createOrderSent

**Description**: Create a delivery_order_sent entry for a driver or delivery driver.

**Parameters**:
- order_id: {string} - Order ID.
- driver: {object} - Driver descriptor containing either delivery_driver_id or driver_id and location.

**Returns**: {Promise<object>} - Created delivery_order_sent.

<!-- DOCGEN:END createOrderSent -->

<!-- DOCGEN:START isOrderSent -->
### isOrderSent

**Description**: Check if order was already sent to given driver/delivery driver.

**Parameters**:
- order_id: {string} - Order ID.
- driver: {object} - Object with delivery_driver_id or driver_id.

**Returns**: {Promise<object|null>} - Matching delivery_order_sent or null.

<!-- DOCGEN:END isOrderSent -->

<!-- DOCGEN:START acceptOrderDelivery -->
### acceptOrderDelivery

**Description**: Accept a delivery order by a deliverer and optionally connect a vehicle; sets on_order and timeline.

**Parameters**:
- order: {object} - Order object including order_id and timeline.
- deliverer_id: {string} - Delivery driver_id or driver_id.
- vehicle_id?: {string} - Vehicle ID to connect.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END acceptOrderDelivery -->

<!-- DOCGEN:START acceptOrderDeliveryWithRawLock -->
### acceptOrderDeliveryWithRawLock

<!-- DOCGEN:END acceptOrderDeliveryWithRawLock -->

<!-- DOCGEN:START connectOrderWithDriver -->
### connectOrderWithDriver

**Description**: Connect an order with a delivery driver by IDs.

**Parameters**:
- order_id: {string} - Order ID.
- delivery_driver_id: {string} - Delivery driver ID.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END connectOrderWithDriver -->

<!-- DOCGEN:START updateOrderStatus -->
### updateOrderStatus

**Description**: Update the order status and append to timeline atomically.

**Parameters**:
- order_id: {string} - Order ID.
- status: {string} - New status (DELIVERY_ORDER_STATUS).

**Returns**: {Promise<object>} - Updated order with includes.

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START updateOrderPickupTime -->
### updateOrderPickupTime

**Description**: Update the ready_for_pickup_at and derived customer_expected_delivery_at in details.

**Parameters**:
- order_id: {string} - Order ID.
- pickup_time: {string|Date} - Pickup time ISO/date.

**Returns**: {Promise<object>} - Updated order (includes user).

<!-- DOCGEN:END updateOrderPickupTime -->

<!-- DOCGEN:START updateOrderDeliveryTime -->
### updateOrderDeliveryTime

**Description**: Update the customer_expected_delivery_at in details.

**Parameters**:
- order_id: {string} - Order ID.
- delivery_time: {string|Date} - Delivery time ISO/date.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END updateOrderDeliveryTime -->

<!-- DOCGEN:START completeOrder -->
### completeOrder

**Description**: Mark order timeline as completed and success; toggle driver's on_order accordingly.

**Parameters**:
- order_id: {string} - Order ID.

**Returns**: {Promise<object>} - Completed order with business docs and user.

<!-- DOCGEN:END completeOrder -->

<!-- DOCGEN:START acceptOrderSent -->
### acceptOrderSent

**Description**: Mark a delivery_order_sent as accepted for the given driver or delivery driver.

**Parameters**:
- order_id: {string} - Order ID.
- driver_id: {string} - Driver or delivery driver ID.

**Returns**: {Promise<object>} - Updated delivery_order_sent.

<!-- DOCGEN:END acceptOrderSent -->

<!-- DOCGEN:START getSentDeliveryDrivers -->
### getSentDeliveryDrivers

**Description**: Get all drivers/delivery drivers to whom the order was sent.

**Parameters**:
- order_id: {string} - Order ID.

**Returns**: {Promise<object[]>} - Array of delivery_order_sent rows with users.

<!-- DOCGEN:END getSentDeliveryDrivers -->

<!-- DOCGEN:START updateOrderLastSentAt -->
### updateOrderLastSentAt

**Description**: Update the last_sent_at timestamp on the order.

**Parameters**:
- order_id: {string} - Order ID.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END updateOrderLastSentAt -->

<!-- DOCGEN:START updateDeliveryOrderTimeline -->
### updateDeliveryOrderTimeline

**Description**: Batch append multiple timeline entries to a delivery order.

**Parameters**:
- order_id: {string} - Order ID.
- newTimelineEntries: {object[]} - Entries with at least a status field.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END updateDeliveryOrderTimeline -->

<!-- DOCGEN:START addTimelineEntry -->
### addTimelineEntry

**Description**: Append a single timeline entry to a delivery order.

**Parameters**:
- order_id: {string} - Order ID.
- status: {string} - Status to add.
- entry_data?: {object} - Additional entry fields.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END addTimelineEntry -->

<!-- DOCGEN:START updateOrderItems -->
### updateOrderItems

**Description**: Replace order items collection.

**Parameters**:
- order_id: {string} - Order ID.
- items: {object[]} - Array of items to set.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END updateOrderItems -->

<!-- DOCGEN:START updateOrder -->
### updateOrder

**Description**: Update an order payload (sanitizes immutable fields and timestamps updated_at).

**Parameters**:
- order_id: {string} - Order ID.
- order: {object} - Order fields to update.

**Returns**: {Promise<object>} - Updated order with driver/delivery_driver/user includes.

<!-- DOCGEN:END updateOrder -->

<!-- DOCGEN:START getAlreadySentOrdersByDeliveryDriverId -->
### getAlreadySentOrdersByDeliveryDriverId

**Description**: Get pending (not yet accepted) delivery_order_sent for a deliverer.

**Parameters**:
- deliverer_id: {string} - Driver or delivery driver ID.

**Returns**: {Promise<object[]>} - Pending sent orders.

<!-- DOCGEN:END getAlreadySentOrdersByDeliveryDriverId -->

<!-- DOCGEN:START getInProgressDeliveryOrdersCountForBusinessId -->
### getInProgressDeliveryOrdersCountForBusinessId

**Description**: Count in-progress (preparing/ready_for_pickup) orders for a business.

**Parameters**:
- business_id: {string} - Business ID.

**Returns**: {Promise<number>} - Count of in-progress orders.

<!-- DOCGEN:END getInProgressDeliveryOrdersCountForBusinessId -->

<!-- DOCGEN:START getActiveOrderIdsForUser -->
### getActiveOrderIdsForUser

<!-- DOCGEN:END getActiveOrderIdsForUser -->

<!-- DOCGEN:START removeDriverFromOrder -->
### removeDriverFromOrder

**Description**: Unassign any driver/delivery driver from an order.

**Parameters**:
- order_id: {string} - Order ID.

**Returns**: {Promise<object>} - Updated order.

<!-- DOCGEN:END removeDriverFromOrder -->

<!-- DOCGEN:START getOrdersByBusinessLocalLocation -->
### getOrdersByBusinessLocalLocation

**Description**: Get orders by business_local_location_id and status.

**Parameters**:
- business_local_location_id: {string} - Business local location ID.
- status: {string} - Order status filter.

**Returns**: {Promise<object[]>} - Orders.

<!-- DOCGEN:END getOrdersByBusinessLocalLocation -->

<!-- DOCGEN:START setDeliveryImage -->
### setDeliveryImage

**Description**: Upsert a single image file for a delivery order (unique by delivery_order_id).

**Parameters**:
- order_id: {string} - Order ID.
- url: {string} - Public or private file URL.
- mime_type: {string} - MIME type.
- isPublic?: {boolean} - Whether file is public.

**Returns**: {Promise<object>} - Created or updated file row.

<!-- DOCGEN:END setDeliveryImage -->

