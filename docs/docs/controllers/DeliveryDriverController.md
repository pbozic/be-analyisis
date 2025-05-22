# DeliveryDriverController Controller


<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver)

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById)

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId)

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation)

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver)

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation)

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus)

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create

**Description**: Adds

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver)

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings)

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings)

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->
