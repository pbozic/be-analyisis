# TaxiOrderController Controller

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

<!-- DOCGEN:START getActiveTaxiOrders -->
### getActiveTaxiOrders

**Summary**: Get active taxi orders.

**Description**: This fetches all completed orders for a specific user.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrders )

<!-- DOCGEN:END getActiveTaxiOrders -->

<!-- DOCGEN:START getMyActiveTaxiOrders -->
### getMyActiveTaxiOrders

**Summary**: Get active taxi orders.

**Description**: This fetches all completed orders for a specific user.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrders )

<!-- DOCGEN:END getMyActiveTaxiOrders -->

<!-- DOCGEN:START getActiveTaxiOrdersByDriverId -->
### getActiveTaxiOrdersByDriverId

**Summary**: Get active taxi orders for a driver.

**Description**: This fetches all active (not completed AND not pending) orders for a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTaxiOrdersByDriverId )

<!-- DOCGEN:END getActiveTaxiOrdersByDriverId -->

<!-- DOCGEN:START getTaxiOrdersByDriverId -->
### getTaxiOrdersByDriverId

**Summary**: Get completed taxi orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedTaxiOrders )

<!-- DOCGEN:END getTaxiOrdersByDriverId -->

<!-- DOCGEN:START getCompletedTaxiOrders -->
### getCompletedTaxiOrders

**Summary**: Get completed taxi orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedTaxiOrders )

<!-- DOCGEN:END getCompletedTaxiOrders -->

<!-- DOCGEN:START getCanceledTaxiOrders -->
### getCanceledTaxiOrders

**Summary**: Get canceled taxi orders.

**Description**: This fetches all canceled orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCanceledTaxiOrders )

<!-- DOCGEN:END getCanceledTaxiOrders -->

<!-- DOCGEN:START getRejectedTaxiOrders -->
### getRejectedTaxiOrders

**Summary**: Get rejected taxi orders.

**Description**: This fetches all rejected orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getRejectedTaxiOrders )

<!-- DOCGEN:END getRejectedTaxiOrders -->

<!-- DOCGEN:START getTaxiOrders -->
### getTaxiOrders

**Summary**: Get all taxi orders.

**Description**: This fetches all taxi orders.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTaxiOrders )

<!-- DOCGEN:END getTaxiOrders -->

<!-- DOCGEN:START getCompletedTaxiOrdersByUserId -->
### getCompletedTaxiOrdersByUserId

**Summary**: Get completed taxi orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedTaxiOrdersByUserId )

<!-- DOCGEN:END getCompletedTaxiOrdersByUserId -->

<!-- DOCGEN:START getCompletedTaxiOrdersByBusinessId -->
### getCompletedTaxiOrdersByBusinessId

**Summary**: Get completed taxi orders.

**Description**: This fetches all completed orders for a business.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedTaxiOrdersByBusinessId )

<!-- DOCGEN:END getCompletedTaxiOrdersByBusinessId -->

<!-- DOCGEN:START getCanceledTaxiOrdersByUserId -->
### getCanceledTaxiOrdersByUserId

**Summary**: Get canceled taxi orders.

**Description**: This fetches all canceled orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCanceledTaxiOrders )

<!-- DOCGEN:END getCanceledTaxiOrdersByUserId -->

<!-- DOCGEN:START createOrder -->
### createOrder

**Summary**: Create a new taxi order.

**Description**: This creates a new taxi order with the provided details from the request body. Returns the created order if successful.

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

<!-- DOCGEN:START createDispatchOrder -->
### createDispatchOrder

**Summary**: Create a new delivery order as dispatch.

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

<!-- DOCGEN:END createDispatchOrder -->

<!-- DOCGEN:START acceptOrder -->
### acceptOrder

**Summary**: Accept a taxi order.

**Description**: Accepts taxi order with the provided details from the request body. Returns the accepted order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrder -->

<!-- DOCGEN:START completeOrder -->
### completeOrder

**Summary**: Complete a taxi order.

**Description**: Completes a taxi order with the provided order ID from the request body. Returns the completed order if successful and emits a 'driver_available' event.

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

<!-- DOCGEN:START updateOrderStatus -->
### updateOrderStatus

**Summary**: Update a taxi order's status.

**Description**: Updates the status of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.

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

<!-- DOCGEN:START updateTaxiOrderPreferences -->
### updateTaxiOrderPreferences

**Summary**: Update a taxi order's vehicle preferences.

**Description**: Updates the vehicle preferences of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateTaxiOrderPreferences )

<!-- DOCGEN:END updateTaxiOrderPreferences -->

<!-- DOCGEN:START cancelOrder -->
### cancelOrder

**Summary**: Cancel a taxi order.

**Description**: Cancels a taxi order with the provided order ID, status, and cancellation reason from the request body. Returns the cancelled order if successful and emits a 'order_cancelled' event.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/cancelOrder )

<!-- DOCGEN:END cancelOrder -->

<!-- DOCGEN:START rejectOrder -->
### rejectOrder

**Summary**: Reject a taxi order.

**Description**: Rejects a taxi order with the provided order ID, status, and rejection reason from the request body. Returns the rejected order if successful and emits a 'order_rejected' event.

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

<!-- DOCGEN:START updateTaxiOrderRoute -->
### updateTaxiOrderRoute

**Summary**: Update a taxi order's route.

**Description**: Updates the route of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateTaxiOrderRoute )

<!-- DOCGEN:END updateTaxiOrderRoute -->

<!-- DOCGEN:START updateTaxiOrderPickupLocation -->
### updateTaxiOrderPickupLocation

**Summary**: Update a taxi order's pickup location.

**Description**: Updates the pickup location of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateTaxiOrderPickupLocation )

<!-- DOCGEN:END updateTaxiOrderPickupLocation -->

<!-- DOCGEN:START updateTaxiOrderDeliveryLocation -->
### updateTaxiOrderDeliveryLocation

**Summary**: Update a taxi order's delivery location.

**Description**: Updates the delivery location of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateTaxiOrderDeliveryLocation )

<!-- DOCGEN:END updateTaxiOrderDeliveryLocation -->

<!-- DOCGEN:START updateCompleteTaxiRoute -->
### updateCompleteTaxiRoute

**Summary**: Update a taxi order's complete route.

**Description**: Updates the complete route of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateCompleteTaxiRoute )

<!-- DOCGEN:END updateCompleteTaxiRoute -->

<!-- DOCGEN:START updateTaxiOrderTimeline -->
### updateTaxiOrderTimeline

**Summary**: Update a taxi order's timeline.

**Description**: Updates the timeline of a taxi order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateTaxiOrderTimeline )

<!-- DOCGEN:END updateTaxiOrderTimeline -->

<!-- DOCGEN:START updateTaxiOrderPayment -->
### updateTaxiOrderPayment

**Summary**: Update a taxi order's payment details.

**Description**: Updates the payment details of the order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateTaxiOrderPayment )

<!-- DOCGEN:END updateTaxiOrderPayment -->

<!-- DOCGEN:START appendTaxiDriver -->
### appendTaxiDriver

**Summary**: Append driver to taxi order.

**Description**: Append driver to taxi order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/appendTaxiDriver )

<!-- DOCGEN:END appendTaxiDriver -->

<!-- DOCGEN:START getTaxiOrdersWithPagination -->
### getTaxiOrdersWithPagination

**Summary**: Get taxi orders with pagination.

**Description**: This fetches orders with pagination.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTaxiOrdersWithPagination )

<!-- DOCGEN:END getTaxiOrdersWithPagination -->

<!-- DOCGEN:START getTaxiOrdersToday -->
### getTaxiOrdersToday

**Summary**: Get all taxi orders for today and earnings.

**Description**: This fetches all taxi orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTaxiOrdersToday )

<!-- DOCGEN:END getTaxiOrdersToday -->

<!-- DOCGEN:START splitVanOrder -->
### splitVanOrder

**Summary**: Splits Van order into multiple smaller orders

**Description**: If we cant find a Van driver, we offer the user to split his order into multiple smaller orders.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/splitVanOrder )

<!-- DOCGEN:END splitVanOrder -->

<!-- DOCGEN:START confirmWalletPayment -->
### confirmWalletPayment

**Summary**: Confirm wallet payment for an awaiting-payment taxi order

**Description**: Reserves wallet funds (personal, family or business wallet) and marks the order as PAID, then moves it to PENDING.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/confirmWalletPayment )

<!-- DOCGEN:END confirmWalletPayment -->

<!-- DOCGEN:START uploadTaxiOrderSignature -->
### uploadTaxiOrderSignature

**Summary**: Upload a signature for a taxi order

**Description**: Stores a signature image/PDF for the order and appends a timeline entry.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | order_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/uploadTaxiOrderSignature )

<!-- DOCGEN:END uploadTaxiOrderSignature -->

<!-- DOCGEN:START uploadTaxiOrderPhoto -->
### uploadTaxiOrderPhoto

**Summary**: Upload a photo for a taxi order

**Description**: Stores a photo for the order (e.g., proof) and appends a timeline entry.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | order_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/uploadTaxiOrderPhoto )

<!-- DOCGEN:END uploadTaxiOrderPhoto -->

<!-- DOCGEN:START getScheduledOrders -->
### getScheduledOrders

**Summary**: Get all scheduled taxi orders.

**Description**: This fetches all scheduled taxi orders.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getScheduledOrders )

<!-- DOCGEN:END getScheduledOrders -->

<!-- DOCGEN:START getAcceptedScheduledOrders -->
### getAcceptedScheduledOrders

**Summary**: Get accepted scheduled taxi orders by driver ID.

**Description**: This fetches accepted scheduled taxi orders for a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAcceptedScheduledOrders )

<!-- DOCGEN:END getAcceptedScheduledOrders -->

<!-- DOCGEN:START getScheduledOrdersByUserId -->
### getScheduledOrdersByUserId

**Summary**: Get scheduled taxi orders by user ID.

**Description**: This fetches scheduled taxi orders for a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getScheduledOrdersByUserId )

<!-- DOCGEN:END getScheduledOrdersByUserId -->

<!-- DOCGEN:START getDriversForOrder -->
### getDriversForOrder

**Summary**: Get available drivers for a taxi order.

**Description**: This fetches available drivers for a specific taxi order.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | order_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriversForOrder )

<!-- DOCGEN:END getDriversForOrder -->

<!-- DOCGEN:START cancelGroupedOrderByParentId -->
### cancelGroupedOrderByParentId

**Summary**: Cancel grouped taxi order by parent order ID.

**Description**: Cancels all orders in a grouped taxi order based on the provided parent order ID.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/cancelGroupedOrderByParentId )

<!-- DOCGEN:END cancelGroupedOrderByParentId -->

<!-- DOCGEN:START rejectGroupedOrderByParentId -->
### rejectGroupedOrderByParentId

**Summary**: Reject grouped taxi order by parent order ID.

**Description**: Rejects all orders in a grouped taxi order based on the provided parent order ID.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/rejectGroupedOrderByParentId )

<!-- DOCGEN:END rejectGroupedOrderByParentId -->

<!-- DOCGEN:START calculateTransferPrice -->
### calculateTransferPrice

**Summary**: Calculate transfer ride price.

**Description**: Calculates the price for a transfer ride based on pickup and delivery locations and departure time.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/calculateTransferPrice )

<!-- DOCGEN:END calculateTransferPrice -->
