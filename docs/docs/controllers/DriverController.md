# DriverController Controller


<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers)

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get

**Description**: Returns

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers)

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById)

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation)

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send

**Description**: Retrieves

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver)

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit

**Description**: Edits

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver)

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update

**Description**: Updates

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation)

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates

**Description**: This

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements)

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set

**Description**: Sets

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus)

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver)

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START handleSosAlert -->
### handleSosAlert

<!-- DOCGEN:END handleSosAlert -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get

**Description**: Get

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController)

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get

**Description**: Retrieves

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
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
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings)

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable

**Description**: Enables

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |
| undefined | path | action |  |
| undefined | path | type |  |

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle)

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders)

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START sendComeToWorkNotification -->
### sendComeToWorkNotification

<!-- DOCGEN:END sendComeToWorkNotification -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set

**Description**: This

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle)

<!-- DOCGEN:END setCurrentVehicle -->
