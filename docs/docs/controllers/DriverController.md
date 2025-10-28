# DriverController Controller

<!-- DOCGEN:START listDrivers -->
### listDrivers

**Summary**: Get a list of drivers

**Description**: Returns a list of drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers )

<!-- DOCGEN:END listDrivers -->

<!-- DOCGEN:START getDriversByBusinessId -->
### getDriversByBusinessId

**Summary**: Get a list of drivers for business

**Description**: Returns a list of drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers )

<!-- DOCGEN:END getDriversByBusinessId -->

<!-- DOCGEN:START listDriversFull -->
### listDriversFull

**Summary**: Get a list of drivers

**Description**: Returns a list of drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDrivers )

<!-- DOCGEN:END listDriversFull -->

<!-- DOCGEN:START listOnlineDrivers -->
### listOnlineDrivers

**Summary**: Get all online drivers

**Description**: Returns a list of all drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDrivers )

<!-- DOCGEN:END listOnlineDrivers -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

**Summary**: Get available drivers

**Description**: Returns a list of available drivers based on the specified type.

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDrivers )

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Summary**: Get a driver by ID

**Description**: Retrieves detailed information about a specific driver by their ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverById )

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Summary**: Get driver location

**Description**: Retrieves the current location of a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocation )

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START resendDelegatedOrdersToDriver -->
### resendDelegatedOrdersToDriver

**Summary**: Send already sent pending or accepted orders to a driver

**Description**: Retrieves a list of orders for a specific driver by their user ID and sends them to the driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDriver -->

<!-- DOCGEN:START getDriverByUserId -->
### getDriverByUserId

**Summary**: Get a driver by user ID

**Description**: Retrieves detailed information about a specific driver by their user ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverByUserId )

<!-- DOCGEN:END getDriverByUserId -->

<!-- DOCGEN:START listDriversWithDailyMeals -->
### listDriversWithDailyMeals

**Summary**: List all drivers offering daily meals

**Description**: Retrieves a list of all drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDriversWithDailyMeals )

<!-- DOCGEN:END listDriversWithDailyMeals -->

<!-- DOCGEN:START getDriversByDailyMealBusinessId -->
### getDriversByDailyMealBusinessId

**Summary**: Get drivers by daily meal business ID

**Description**: Retrieves drivers linked to a specific daily meal business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriversByDailyMealBusinessId )

<!-- DOCGEN:END getDriversByDailyMealBusinessId -->

<!-- DOCGEN:START updateDriverDailyMealBusiness -->
### updateDriverDailyMealBusiness

**Summary**: Update a driver's daily meal business

**Description**: Connects or disconnects a driver's daily meal business and toggles delivers_daily_meals.

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

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverDailyMealBusiness )

<!-- DOCGEN:END updateDriverDailyMealBusiness -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**: Assign a business for daily meals to a driver

**Description**: Assigns a business for daily meals to the specified driver.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/assignBusinessForDailyMealsToDriver )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Summary**: Update a driver

**Description**: Updates information about a specific driver, excluding location.

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

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriver )

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START editDriver -->
### editDriver

**Summary**: Edit a driver

**Description**: Edits the data of specific driver.

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

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDriver )

<!-- DOCGEN:END editDriver -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Summary**: Update driver location

**Description**: Updates the location of a specific driver.

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

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverLocation )

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Summary**: Updates the driver's ride requirements

**Description**: This endpoint is used to update the current user's ride requirements.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverRideRequirements )

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Summary**: Set driver online status

**Description**: Sets the online status of a specific driver and emits appropriate socket events.

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

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverOnlineStatus )

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START createDriver -->
### createDriver

**Summary**: Create a new driver

**Description**: Adds a new driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDriver )

<!-- DOCGEN:END createDriver -->

<!-- DOCGEN:START getDriverHistoryLocations -->
### getDriverHistoryLocations

**Summary**: Get history of locations for a driver.

**Description**: Get history of locations for a driver with a given driver id and between specified time interval

**Responses:**
- 201
- 400

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverLocationsController )

<!-- DOCGEN:END getDriverHistoryLocations -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific driver

**Description**: Retrieves the earnings of a specific driver within a specified date range.

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

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all drivers

**Description**: Retrieves the earnings of all drivers within a specified date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | start_date |  |
| undefined | path | end_date |  |

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific driver

**Description**: Retrieves the total earnings of a specific driver based on completed orders.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Summary**: Enable or disable a driver

**Description**: Enables or disables a specific driver based on the provided action and type.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverHandle )

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Summary**: Toggle driver's orders he should receive

**Description**: This endpoint allows toggling the types of orders a specific driver can receive. The request body should contain an object specifying which order types (taxi, transfer, delivery) to toggle on or off.

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

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/toggleDriverOrders )

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START setCurrentVehicle -->
### setCurrentVehicle

**Summary**: Set driver's current vehicle

**Description**: This endpoint sets the current vehicle for a specific driver. It first checks that the vehicle belongs to the driver. If a vehicle was previously assigned, it will be disconnected. The request body should contain the new vehicle ID to assign.

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

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDriverCurrentVehicle )

<!-- DOCGEN:END setCurrentVehicle -->
