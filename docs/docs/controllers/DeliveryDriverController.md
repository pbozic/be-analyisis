# DeliveryDriverController Controller


<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Sendalready sent pending or accepted orders to a delivery driver

**Description**: Retrievesa list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver)

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edita delivery driver

**Description**: Editsthe data of specific delivery driver.

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

**Summary**: Geta list of delivery drivers

**Description**: Returnsa list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers)

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Getall online delivery drivers

**Description**: Returnsa list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers)

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Getall available delivery drivers

**Description**: Returnsa list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers)

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: Listall delivery drivers offering daily meals

**Description**: Retrievesa list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals)

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Geta delivery driver by ID

**Description**: Retrievesdetailed information about a specific delivery driver by their ID.

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

**Summary**: Geta delivery driver by user ID

**Description**: Retrievesdetailed information about a specific delivery driver by their user ID.

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

**Summary**: Getdelivery driver location

**Description**: Retrievesthe current location of a specific delivery driver.

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

**Summary**: Updatea delivery driver

**Description**: Updatesinformation about a specific delivery driver, excluding location.

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

**Summary**: Updatedelivery driver location

**Description**: Updatesthe location of a specific delivery driver.

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

**Summary**: Setdelivery driver online status

**Description**: Setsthe online status of a specific delivery driver and emits appropriate socket events.

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

**Summary**: Createa new delivery driver

**Description**: Addsa new delivery driver to the database.

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

**Summary**: Getearnings for a specific delivery driver

**Description**: Retrievesthe earnings of a specific delivery driver within a specified date range.

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

**Summary**: Getearnings for all delivery drivers

**Description**: Retrievesthe earnings of all delivery drivers within a specified date range.

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

**Summary**: Gettotal earnings for all delivery drivers

**Description**: Retrievesthe total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Gettotal earnings for a specific delivery driver

**Description**: Retrievesthe total earnings of a specific delivery driver based on completed orders.

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

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->

<!-- DOCGEN:START resendDelegatedOrdersToDeliveryDriver -->
### resendDelegatedOrdersToDeliveryDriver

**Summary**: Send already sent pending or accepted orders to a delivery driver

**Description**: Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.

**Responses:**
- 200
- 404
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/sendAcceptedOrdersToDeliveryDriver )

<!-- DOCGEN:END resendDelegatedOrdersToDeliveryDriver -->

<!-- DOCGEN:START editDeliveryDriver -->
### editDeliveryDriver

**Summary**: Edit a delivery driver

**Description**: Edits the data of specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editDeliveryDriver )

<!-- DOCGEN:END editDeliveryDriver -->

<!-- DOCGEN:START listDeliveryDrivers -->
### listDeliveryDrivers

**Summary**: Get a list of delivery drivers

**Description**: Returns a list of delivery drivers along with their user and vehicle information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDrivers )

<!-- DOCGEN:END listDeliveryDrivers -->

<!-- DOCGEN:START listOnlineDeliveryDrivers -->
### listOnlineDeliveryDrivers

**Summary**: Get all online delivery drivers

**Description**: Returns a list of all delivery drivers who are currently online.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOnlineDeliveryDrivers )

<!-- DOCGEN:END listOnlineDeliveryDrivers -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Summary**: Get all available delivery drivers

**Description**: Returns a list of all delivery drivers who are currently available.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAvailableDeliveryDrivers )

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START listDeliveryDriversWithDailyMeals -->
### listDeliveryDriversWithDailyMeals

**Summary**: List all delivery drivers offering daily meals

**Description**: Retrieves a list of all delivery drivers that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listDeliveryDriversWithDailyMeals )

<!-- DOCGEN:END listDeliveryDriversWithDailyMeals -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Summary**: Get a delivery driver by ID

**Description**: Retrieves detailed information about a specific delivery driver by their ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverById )

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Summary**: Get a delivery driver by user ID

**Description**: Retrieves detailed information about a specific delivery driver by their user ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByUserId )

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriversByBusinessId -->
### getDeliveryDriversByBusinessId

**Summary**: Get delivery drivers by business ID

**Description**: Retrieves detailed information about delivery drivers by business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverByBusinessId )

<!-- DOCGEN:END getDeliveryDriversByBusinessId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Summary**: Get delivery driver location

**Description**: Retrieves the current location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDeliveryDriverLocation )

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverDailyMealBusiness -->
### updateDeliveryDriverDailyMealBusiness

**Summary**: Update a delivery driver daily_meal_business

**Description**: Updates information about a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverDailyMealBusiness )

<!-- DOCGEN:END updateDeliveryDriverDailyMealBusiness -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Summary**: Update a delivery driver

**Description**: Updates information about a specific delivery driver, excluding location.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriver )

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Summary**: Update delivery driver location

**Description**: Updates the location of a specific delivery driver.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDeliveryDriverLocation )

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Summary**: Set delivery driver online status

**Description**: Sets the online status of a specific delivery driver and emits appropriate socket events.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setDeliveryDriverOnlineStatus )

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Summary**: Create a new delivery driver

**Description**: Adds a new delivery driver to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewDeliveryDriver )

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getDriverEarnings -->
### getDriverEarnings

**Summary**: Get earnings for a specific delivery driver

**Description**: Retrieves the earnings of a specific delivery driver within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverEarnings )

<!-- DOCGEN:END getDriverEarnings -->

<!-- DOCGEN:START getAllDriversEarnings -->
### getAllDriversEarnings

**Summary**: Get earnings for all delivery drivers

**Description**: Retrieves the earnings of all delivery drivers within a specified date range.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllDriversEarnings )

<!-- DOCGEN:END getAllDriversEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for all delivery drivers

**Description**: Retrieves the total earnings of all drivers based on completed orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getDriverTotalEarnings -->
### getDriverTotalEarnings

**Summary**: Get total earnings for a specific delivery driver

**Description**: Retrieves the total earnings of a specific delivery driver based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverTotalEarnings )

<!-- DOCGEN:END getDriverTotalEarnings -->

<!-- DOCGEN:START assignBusinessForDailyMealsToDriver -->
### assignBusinessForDailyMealsToDriver

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignBusinessForDailyMealsToDriver -->
