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
- 200 - Successful operation. Returns order details in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOrder )

<!-- DOCGEN:END getOrder -->



<!-- DOCGEN:START getActiveTaxiOrders -->
### getActiveTaxiOrders

**Summary**: Get active taxi orders.

**Description**: This fetches all completed orders for a specific user.

**Responses:**
- 200 - Successful operation. Returns a list of completed orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedDeliveryOrders )

<!-- DOCGEN:END getActiveTaxiOrders -->



<!-- DOCGEN:START getMyActiveTaxiOrders -->
### getMyActiveTaxiOrders

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getMyActiveTaxiOrders -->



<!-- DOCGEN:START getActiveOrdersHelper -->
### getActiveOrdersHelper

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getActiveOrdersHelper -->



<!-- DOCGEN:START getActiveTaxiOrdersByDriverId -->
### getActiveTaxiOrdersByDriverId

**Summary**: Get active taxi orders for a driver.

**Description**: This fetches all active (not completed AND not pending) orders for a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200 - Successful operation. Returns a list of active orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTaxiOrdersByDriverId )

<!-- DOCGEN:END getActiveTaxiOrdersByDriverId -->



<!-- DOCGEN:START getTaxiOrdersByDriverId -->
### getTaxiOrdersByDriverId

**Summary**: Get completed taxi orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200 - Successful operation. Returns a list of completed orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedTaxiOrders )

<!-- DOCGEN:END getTaxiOrdersByDriverId -->



<!-- DOCGEN:START getCompletedTaxiOrders -->
### getCompletedTaxiOrders

**Summary**: Get completed taxi orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200 - Successful operation. Returns a list of completed orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedTaxiOrders )

<!-- DOCGEN:END getCompletedTaxiOrders -->



<!-- DOCGEN:START getCanceledTaxiOrders -->
### getCanceledTaxiOrders

**Summary**: Get canceled taxi orders.

**Description**: This fetches all canceled orders for a specific driver.

**Responses:**
- 200 - Successful operation. Returns a list of canceled orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCanceledTaxiOrders )

<!-- DOCGEN:END getCanceledTaxiOrders -->



<!-- DOCGEN:START getRejectedTaxiOrders -->
### getRejectedTaxiOrders

**Summary**: Get rejected taxi orders.

**Description**: This fetches all rejected orders for a specific driver.

**Responses:**
- 200 - Successful operation. Returns a list of rejected orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getRejectedTaxiOrders )

<!-- DOCGEN:END getRejectedTaxiOrders -->



<!-- DOCGEN:START getTaxiOrders -->
### getTaxiOrders

**Summary**: Get all taxi orders.

**Description**: This fetches all taxi orders.

**Responses:**
- 200 - Successful operation. Returns a list of all taxi orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTaxiOrders )

<!-- DOCGEN:END getTaxiOrders -->



<!-- DOCGEN:START getCompletedTaxiOrdersByUserId -->
### getCompletedTaxiOrdersByUserId

**Summary**: Get completed taxi orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200 - Successful operation. Returns a list of completed orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedTaxiOrdersByUserId )

<!-- DOCGEN:END getCompletedTaxiOrdersByUserId -->



<!-- DOCGEN:START getCompletedTaxiOrdersByBusinessId -->
### getCompletedTaxiOrdersByBusinessId

**Summary**: Get completed taxi orders.

**Description**: This fetches all completed orders for a business.

**Responses:**
- 200 - Successful operation. Returns a list of completed orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCompletedTaxiOrdersByBusinessId )

<!-- DOCGEN:END getCompletedTaxiOrdersByBusinessId -->



<!-- DOCGEN:START getCanceledTaxiOrdersByUserId -->
### getCanceledTaxiOrdersByUserId

**Summary**: Get canceled taxi orders.

**Description**: This fetches all canceled orders for a specific driver.

**Responses:**
- 200 - Successful operation. Returns a list of canceled orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCanceledTaxiOrders )

<!-- DOCGEN:END getCanceledTaxiOrdersByUserId -->



<!-- DOCGEN:START preprocessOrderData -->
### preprocessOrderData

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END preprocessOrderData -->



<!-- DOCGEN:START generateVehicleTransferOrder -->
### generateVehicleTransferOrder

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateVehicleTransferOrder -->



<!-- DOCGEN:START subdivideOrder -->
### subdivideOrder

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END subdivideOrder -->



<!-- DOCGEN:START makeOrder -->
### makeOrder

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END makeOrder -->



<!-- DOCGEN:START buildOrder -->
### buildOrder

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END buildOrder -->



<!-- DOCGEN:START requestTransferOrderPrice -->
### requestTransferOrderPrice

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END requestTransferOrderPrice -->



<!-- DOCGEN:START cleanedCreateOrderHelper -->
### cleanedCreateOrderHelper

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END cleanedCreateOrderHelper -->



<!-- DOCGEN:START handlePaymentForTransferOrder -->
### handlePaymentForTransferOrder

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END handlePaymentForTransferOrder -->



<!-- DOCGEN:START createOrder -->
### createOrder

**Summary**: Create a new taxi order.

**Description**: This creates a new taxi order with the provided details from the request body. Returns the created order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Successful operation. Returns the newly created order in the response body.
- 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createOrder )

<!-- DOCGEN:END createOrder -->



<!-- DOCGEN:START getDayIndex -->
### getDayIndex

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDayIndex -->



<!-- DOCGEN:START generateOrdersForRepeatOrder -->
### generateOrdersForRepeatOrder

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateOrdersForRepeatOrder -->



<!-- DOCGEN:START createDispatchOrder -->
### createDispatchOrder

**Summary**: Create a new delivery order as dispatch.

**Description**: This creates a new delivery order with the provided details from the request body. Returns the created order if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Successful operation. Returns the newly created order in the response body.
- 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the accepted order in the response body.
- 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the completed order in the response body.
- 500 - Server error. Console logs the error message and returns it in the response.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the updated order in the response body.
- 500 - Server error. Returns error message if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the updated order in the response body.
- 500 - Server error. Returns error message if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the cancelled order in the response body.
- 500 - Server error. Console logs the error message and returns it in the response.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the rejected order in the response body.
- 500 - Server error. Console logs the error message and returns it in the response.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the updated order with the new route in the response body.
- 500 - Server error. Returns error message if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the updated order with the new pickup location in the response body.
- 500 - Server error. Returns error message if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the updated order with the new delivery location in the response body.
- 500 - Server error. Returns error message if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the updated order with the new complete route in the response body.
- 500 - Server error. Returns error message if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the updated order with the new timeline in the response body.
- 500 - Server error. Returns error message if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the updated order with the new payment details.
- 500 - Server error. Returns error message if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

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
- 200 - Successful operation. Returns the updated order with the new driver details.
- 500 - Server error. Returns error message if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/appendTaxiDriver )

<!-- DOCGEN:END appendTaxiDriver -->



<!-- DOCGEN:START getScheduledOrders -->
### getScheduledOrders

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledOrders -->



<!-- DOCGEN:START getAcceptedScheduledOrders -->
### getAcceptedScheduledOrders

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAcceptedScheduledOrders -->



<!-- DOCGEN:START getScheduledOrdersByUserId -->
### getScheduledOrdersByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledOrdersByUserId -->



<!-- DOCGEN:START getDriversForOrder -->
### getDriversForOrder

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDriversForOrder -->



<!-- DOCGEN:START getTaxiOrdersWithPagination -->
### getTaxiOrdersWithPagination

**Summary**: Get taxi orders with pagination.

**Description**: This fetches orders with pagination.

**Responses:**
- 200 - Successful operation. Returns a list of orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTaxiOrdersWithPagination )

<!-- DOCGEN:END getTaxiOrdersWithPagination -->



<!-- DOCGEN:START getTaxiOrdersToday -->
### getTaxiOrdersToday

**Summary**: Get all taxi orders for today and earnings.

**Description**: This fetches all taxi orders for today and earnings.

**Responses:**
- 200 - Successful operation. Returns a list of all taxi orders today and earnings in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTaxiOrdersToday )

<!-- DOCGEN:END getTaxiOrdersToday -->



<!-- DOCGEN:START cancelGroupedOrderByParentId -->
### cancelGroupedOrderByParentId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END cancelGroupedOrderByParentId -->



<!-- DOCGEN:START rejectGroupedOrderByParentId -->
### rejectGroupedOrderByParentId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END rejectGroupedOrderByParentId -->



<!-- DOCGEN:START splitVanOrder -->
### splitVanOrder

**Summary**: Splits Van order into multiple smaller orders

**Description**: If we cant find a Van driver, we offer the user to split his order into multiple smaller orders.

**Responses:**
- 200 - Successful operation. Returns a list of all taxi orders created.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/splitVanOrder )

<!-- DOCGEN:END splitVanOrder -->



<!-- DOCGEN:START calculateTransferPrice -->
### calculateTransferPrice

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END calculateTransferPrice -->

