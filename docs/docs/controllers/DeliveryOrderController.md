# DeliveryOrderController Controller

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDeliveryOrders )

<!-- DOCGEN:END getDeliveryOrders -->

<!-- DOCGEN:START getActiveDeliveryOrders -->
### getActiveDeliveryOrders

**Summary**: Get all active delivery orders.

**Description**: This fetches all active delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveDeliveryOrders )

<!-- DOCGEN:END getActiveDeliveryOrders -->

<!-- DOCGEN:START getOrder -->
### getOrder

**Summary**: Get order details.

**Description**: This fetches the order details using the given order id.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | orderId |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOrder )

<!-- DOCGEN:END getOrder -->

<!-- DOCGEN:START getUserByDeliveryOrderId -->
### getUserByDeliveryOrderId

**Summary**: Get order details.

**Description**: This fetches the order details using the given order id.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | order_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getUserByDeliveryOrderId )

<!-- DOCGEN:END getUserByDeliveryOrderId -->

<!-- DOCGEN:START createOrder -->
### createOrder

**Summary**: Create a new delivery order.

**Description**: This creates a new delivery order with the provided details from the request body. Returns the created order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START startDailyMeals -->
### startDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/startDailyMeals )

<!-- DOCGEN:END startDailyMeals -->

<!-- DOCGEN:START acceptOrderDeliveryOld -->
### acceptOrderDeliveryOld

**Summary**: Accept a delivery order.

**Description**: Accepts delivery order with the provided details from the request body. Returns the accepted order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDeliveryOld -->

<!-- DOCGEN:START cancelOrderDelivery -->
### cancelOrderDelivery

**Summary**: Driver cancels their delivery of a delivery order which they have accepted but not picked up yet.

**Description**: Allows a driver to cancel their delivery of an accepted delivery order if the order is in MERCHANT_PREPARING or MERCHANT_READY_FOR_PICKUP state.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/cancelDelivery )

<!-- DOCGEN:END cancelOrderDelivery -->

<!-- DOCGEN:START completeOrder -->
### completeOrder

**Summary**: Complete a delivery order.

**Description**: Completes a delivery order with the provided order ID from the request body. Returns the completed order if successful and emits a 'driver_available' event.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/completeOrder )

<!-- DOCGEN:END completeOrder -->

<!-- DOCGEN:START getDeliveryOrdersByDriverId -->
### getDeliveryOrdersByDriverId

**Summary**: Get completed delivery orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByDriverId )

<!-- DOCGEN:END getDeliveryOrdersByDriverId -->

<!-- DOCGEN:START getCompletedDeliveryOrdersByDriverId -->
### getCompletedDeliveryOrdersByDriverId

**Summary**: Get completed delivery orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByDriverId )

<!-- DOCGEN:END getCompletedDeliveryOrdersByDriverId -->

<!-- DOCGEN:START getActiveDeliveryOrdersByDriverId -->
### getActiveDeliveryOrdersByDriverId

**Summary**: Get active delivery orders.

**Description**: This fetches all active orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveDeliveryOrdersByDriverId )

<!-- DOCGEN:END getActiveDeliveryOrdersByDriverId -->

<!-- DOCGEN:START getCompletedDeliveryOrdersByUserId -->
### getCompletedDeliveryOrdersByUserId

**Summary**: Get completed delivery orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByDriverId )

<!-- DOCGEN:END getCompletedDeliveryOrdersByUserId -->

<!-- DOCGEN:START getActiveDeliveryOrdersByUserId -->
### getActiveDeliveryOrdersByUserId

**Summary**: Get active delivery orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByDriverId )

<!-- DOCGEN:END getActiveDeliveryOrdersByUserId -->

<!-- DOCGEN:START getActiveDeliveryOrdersByBusinessId -->
### getActiveDeliveryOrdersByBusinessId

**Summary**: Get active delivery orders.

**Description**: This fetches all completed orders for a specific business.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByBusinessId )

<!-- DOCGEN:END getActiveDeliveryOrdersByBusinessId -->

<!-- DOCGEN:START getDeliveryOrdersByBusinessId -->
### getDeliveryOrdersByBusinessId

**Summary**: Get delivery orders.

**Description**: This fetches all restaurant orders.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryOrdersByBusinessId )

<!-- DOCGEN:END getDeliveryOrdersByBusinessId -->

<!-- DOCGEN:START getCompletedDeliveryOrdersByBusinessId -->
### getCompletedDeliveryOrdersByBusinessId

**Summary**: Get completed delivery orders by business id.

**Description**: This fetches all completed restaurant orders.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByBusinessId )

<!-- DOCGEN:END getCompletedDeliveryOrdersByBusinessId -->

<!-- DOCGEN:START updateOrderStatus -->
### updateOrderStatus

**Summary**: Update a delivery order's status.

**Description**: Updates the status of a specific delivery order based on the provided details from the request body. Returns the updated order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START rejectOrder -->
### rejectOrder

**Summary**: Reject a delivery order.

**Description**: Rejects a delivery order by updating its status to MERCHANT_REJECTED and FAIL, and emits the order status change event.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/rejectOrder )

<!-- DOCGEN:END rejectOrder -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Merchant accepts a delivery order and processes payment.

**Description**:  Processes a delivery order from PENDING status. Captures payment (if neccessary), updates order status, and emits relevant events. Handles payment via CARD, WALLET, PLATFORM, or CASH, and moves the order through the correct state transitions. In the case of a CARD or PLATFORM payment, the payment and state transitions are left up to the stripe webhook handler. If preparation_time is provided, updates the order's pickup time.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

<!-- DOCGEN:START merchantConfirmOrderReady -->
### merchantConfirmOrderReady

**Summary**: Merchant confirms order is ready for pickup.

**Description**:  If needed recalculates pricing and processes payment then updates the order as ready for pickup and if needed, and emits relevant events. Handles payment via CARD, WALLET, PLATFORM, or CASH, and moves the order through the correct state transitions. In the case of a CARD or PLATFORM payment, the payment and state transitions are left up to the stripe webhook handler.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantConfirmOrderReady )

<!-- DOCGEN:END merchantConfirmOrderReady -->

<!-- DOCGEN:START localConfirmMultipleOrdersReady -->
### localConfirmMultipleOrdersReady

**Summary**: LOCAL business confirms multiple orders are ready for pickup.

**Description**:  Sets all preparing orders for a specific business_local_location as ready for pickup. Only works for LOCAL business type. Recalculates pricing and processes payments for all orders, then updates them as ready for pickup and emits relevant events. Handles payment via CARD, WALLET, PLATFORM, or CASH for each order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/localConfirmMultipleOrdersReady )

<!-- DOCGEN:END localConfirmMultipleOrdersReady -->

<!-- DOCGEN:START updateOrderPickupTime -->
### updateOrderPickupTime

**Summary**: Update a delivery order's pickup time.

**Description**: Updates pickup time of the delivery order

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderPickupTime )

<!-- DOCGEN:END updateOrderPickupTime -->

<!-- DOCGEN:START updateOrderDeliveryTime -->
### updateOrderDeliveryTime

**Summary**: Update a delivery order's delivery time.

**Description**: Updates delivery time of the delivery order

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderDeliveryTime )

<!-- DOCGEN:END updateOrderDeliveryTime -->

<!-- DOCGEN:START updateDeliveryOrderTimeline -->
### updateDeliveryOrderTimeline

**Summary**: Update a delivery order's timeline.

**Description**: Updates the timeline of a taxi order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrderTimeline -->

<!-- DOCGEN:START addToDeliveryOrderTimeline -->
### addToDeliveryOrderTimeline

**Summary**: Update a delivery order's timeline by appending an entry.

**Description**: Appends a new timeline entry with the given status and optional extra data in entry_data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrderItems -->
### updateDeliveryOrderItems

**Summary**: Update delivery order items.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderItems )

<!-- DOCGEN:END updateDeliveryOrderItems -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryOrdersToday )

<!-- DOCGEN:END getDeliveryOrdersToday -->

<!-- DOCGEN:START dispatcherCancel -->
### dispatcherCancel

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherRevoke )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START setDeliveryImage -->
### setDeliveryImage

**Summary**: Set or replace delivery proof image for an order

**Description**: Upserts a files row linked to delivery_orders via file_id/delivery_order_id.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryImage )

<!-- DOCGEN:END setDeliveryImage -->

<!-- DOCGEN:START acceptOrderDelivery -->
### acceptOrderDelivery

**Summary**: Accept a delivery order.

**Description**: Accepts delivery order with the provided details from the request body. Returns the accepted order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

<!-- DOCGEN:START startOrder -->
### startOrder

**Summary**: Start an order and log promo analytics if applicable.

**Description**: This endpoint is used to start an order. It logs promotional analytics based on query parameters.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/startOrder )

<!-- DOCGEN:END startOrder -->
