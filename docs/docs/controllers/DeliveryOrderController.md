# DeliveryOrderController Controller


<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Getall delivery orders.

**Description**: Thisfetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDeliveryOrders)

<!-- DOCGEN:END getDeliveryOrders -->

<!-- DOCGEN:START getActiveDeliveryOrders -->
### getActiveDeliveryOrders

**Summary**: Getall active delivery orders.

**Description**: Thisfetches all active delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveDeliveryOrders)

<!-- DOCGEN:END getActiveDeliveryOrders -->

<!-- DOCGEN:START getOrder -->
### getOrder

**Summary**: Getorder details.

**Description**: Thisfetches the order details using the given order id.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | orderId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOrder)

<!-- DOCGEN:END getOrder -->

<!-- DOCGEN:START getUserByDeliveryOrderId -->
### getUserByDeliveryOrderId

**Summary**: Getorder details.

**Description**: Thisfetches the order details using the given order id.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | order_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getUserByDeliveryOrderId)

<!-- DOCGEN:END getUserByDeliveryOrderId -->

<!-- DOCGEN:START createOrder -->
### createOrder

**Summary**: Createa new delivery order.

**Description**: Thiscreates a new delivery order with the provided details from the request body. Returns the created order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder)

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Createdaily meals.

**Description**: Thiscreates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals)

<!-- DOCGEN:END createDailyMeals -->

<!-- DOCGEN:START acceptOrderDelivery -->
### acceptOrderDelivery

**Summary**: Accepta delivery order.

**Description**: Acceptsdelivery order with the provided details from the request body. Returns the accepted order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder)

<!-- DOCGEN:END acceptOrderDelivery -->

<!-- DOCGEN:START cancelOrderDelivery -->
### cancelOrderDelivery

**Summary**: Drivercancels their delivery of a delivery order which they have accepted but not picked up yet.

**Description**: Allowsa driver to cancel their delivery of an accepted delivery order if the order is in MERCHANT_PREPARING or MERCHANT_READY_FOR_PICKUP state.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/cancelDelivery)

<!-- DOCGEN:END cancelOrderDelivery -->

<!-- DOCGEN:START completeOrder -->
### completeOrder

**Summary**: Completea delivery order.

**Description**: Completesa delivery order with the provided order ID from the request body. Returns the completed order if successful and emits a 'driver_available' event.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/completeOrder)

<!-- DOCGEN:END completeOrder -->

<!-- DOCGEN:START getDeliveryOrdersByDriverId -->
### getDeliveryOrdersByDriverId

**Summary**: Getcompleted delivery orders.

**Description**: Thisfetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByDriverId)

<!-- DOCGEN:END getDeliveryOrdersByDriverId -->

<!-- DOCGEN:START getCompletedDeliveryOrdersByDriverId -->
### getCompletedDeliveryOrdersByDriverId

**Summary**: Getcompleted delivery orders.

**Description**: Thisfetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByDriverId)

<!-- DOCGEN:END getCompletedDeliveryOrdersByDriverId -->

<!-- DOCGEN:START getActiveDeliveryOrdersByDriverId -->
### getActiveDeliveryOrdersByDriverId

**Summary**: Getactive delivery orders.

**Description**: Thisfetches all active orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveDeliveryOrdersByDriverId)

<!-- DOCGEN:END getActiveDeliveryOrdersByDriverId -->

<!-- DOCGEN:START getCompletedDeliveryOrdersByUserId -->
### getCompletedDeliveryOrdersByUserId

**Summary**: Getcompleted delivery orders.

**Description**: Thisfetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByDriverId)

<!-- DOCGEN:END getCompletedDeliveryOrdersByUserId -->

<!-- DOCGEN:START getActiveDeliveryOrdersByUserId -->
### getActiveDeliveryOrdersByUserId

**Summary**: Getactive delivery orders.

**Description**: Thisfetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByDriverId)

<!-- DOCGEN:END getActiveDeliveryOrdersByUserId -->

<!-- DOCGEN:START getActiveDeliveryOrdersByBusinessId -->
### getActiveDeliveryOrdersByBusinessId

**Summary**: Getactive delivery orders.

**Description**: Thisfetches all completed orders for a specific business.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByBusinessId)

<!-- DOCGEN:END getActiveDeliveryOrdersByBusinessId -->

<!-- DOCGEN:START getDeliveryOrdersByBusinessId -->
### getDeliveryOrdersByBusinessId

**Summary**: Getdelivery orders.

**Description**: Thisfetches all restaurant orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryOrdersByBusinessId)

<!-- DOCGEN:END getDeliveryOrdersByBusinessId -->

<!-- DOCGEN:START getCompletedDeliveryOrdersByBusinessId -->
### getCompletedDeliveryOrdersByBusinessId

**Summary**: Getcompleted delivery orders by business id.

**Description**: Thisfetches all completed restaurant orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrdersByBusinessId)

<!-- DOCGEN:END getCompletedDeliveryOrdersByBusinessId -->

<!-- DOCGEN:START updateOrderStatus -->
### updateOrderStatus

**Summary**: Updatea delivery order's status.

**Description**: Updatesthe status of a specific delivery order based on the provided details from the request body. Returns the updated order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus)

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Processa delivery order from PENDING status.

**Description**: Processesthe order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder)

<!-- DOCGEN:END merchantAcceptOrder -->

<!-- DOCGEN:START updateOrderPickupTime -->
### updateOrderPickupTime

**Summary**: Updatea delivery order's pickup time.

**Description**: Updatespickup time of the delivery order

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderPickupTime)

<!-- DOCGEN:END updateOrderPickupTime -->

<!-- DOCGEN:START updateOrderDeliveryTime -->
### updateOrderDeliveryTime

**Summary**: Updatea delivery order's delivery time.

**Description**: Updatesdelivery time of the delivery order

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderDeliveryTime)

<!-- DOCGEN:END updateOrderDeliveryTime -->

<!-- DOCGEN:START updateDeliveryOrderTimeline -->
### updateDeliveryOrderTimeline

**Summary**: Updatea delivery order's timeline.

**Description**: Updatesthe timeline of a taxi order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline)

<!-- DOCGEN:END updateDeliveryOrderTimeline -->

<!-- DOCGEN:START addToDeliveryOrderTimeline -->
### addToDeliveryOrderTimeline

**Summary**: Updatea delivery order's timeline by appending an entry.

**Description**: Appendsa new timeline entry with the given status and optional extra data in entry_data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline)

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Updatea delivery order.

**Description**: Updatesa delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline)

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Getall delivery orders for today and earnings.

**Description**: Thisfetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryOrdersToday)

<!-- DOCGEN:END getDeliveryOrdersToday -->

<!-- DOCGEN:START dispatcherCancel -->
### dispatcherCancel

**Summary**: Cancelsan order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Canceland if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel)

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancelsan order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Canceland if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel)

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDeliveryOrders -->
### getDeliveryOrders

**Summary**: Get all delivery orders.

**Description**: This fetches all delivery orders.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->

<!-- DOCGEN:START createDailyMeals -->
### createDailyMeals

**Summary**: Create daily meals.

**Description**: This creates the daily meals for the subscribed users. Returns list of orders if successful.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMeals )

<!-- DOCGEN:END createDailyMeals -->

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/acceptOrder )

<!-- DOCGEN:END acceptOrderDelivery -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateOrderStatus )

<!-- DOCGEN:END updateOrderStatus -->

<!-- DOCGEN:START merchantAcceptOrder -->
### merchantAcceptOrder

**Summary**: Process a delivery order from PENDING status.

**Description**: Processes the order payment capture and moves the order to the next state accordingly.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/merchantAcceptOrder )

<!-- DOCGEN:END merchantAcceptOrder -->

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END addToDeliveryOrderTimeline -->

<!-- DOCGEN:START updateDeliveryOrder -->
### updateDeliveryOrder

**Summary**: Update a delivery order.

**Description**: Updates a delivery order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryOrderTimeline )

<!-- DOCGEN:END updateDeliveryOrder -->

<!-- DOCGEN:START getDeliveryOrdersToday -->
### getDeliveryOrdersToday

**Summary**: Get all delivery orders for today and earnings.

**Description**: This fetches all delivery orders for today and earnings.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherCancel -->

<!-- DOCGEN:START dispatcherRevoke -->
### dispatcherRevoke

**Summary**: Cancels an order with the given order_id. Releases or refunds any used WF and cancels payment intent

**Description**: Cancel and if necessary refund an order

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dispatcherCancel )

<!-- DOCGEN:END dispatcherRevoke -->

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START createDailyMealsSubscription -->
### createDailyMealsSubscription

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createDailyMealsSubscription -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByUserId -->
### getDailyMealsSubscriptionsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByUserId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->
