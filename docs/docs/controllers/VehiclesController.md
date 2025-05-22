# VehiclesController Controller


<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: Listall vehicles

**Description**: Retrievesa list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Getvehicles by business ID

**Description**: Retrievesvehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Geta vehicle by ID

**Description**: Retrievesa single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Getvehicles by driver ID

**Description**: Retrievesa list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Getvehicles by class

**Description**: Retrievesa list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Getvehicles by category

**Description**: Retrievesa list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Getvehicles by class and category

**Description**: Retrievesa list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Getvehicles of a certain driver by class

**Description**: Retrievesa list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Getvehicles of a certain driver by category

**Description**: Retrievesa list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Getvehicles of a certain driver by class and category

**Description**: Retrievesa list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Createa new vehicle

**Description**: Addsa new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Updatea vehicle

**Description**: Updatesan existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle)

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assignvehicles to a driver

**Description**: Assignsexisting vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Removea vehicle from a driver

**Description**: Disassociatesa vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Deletea vehicle

**Description**: Deletesa vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle)

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List all vehicles

**Description**: Retrieves a list of all vehicles in the database.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get vehicles by business ID

**Description**: Retrieves vehicles associated with a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END listVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->
### getVehicleById

**Summary**: Get a vehicle by ID

**Description**: Retrieves a single vehicle by its ID from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START getVehiclesByDriverId -->
### getVehiclesByDriverId

**Summary**: Get vehicles by driver ID

**Description**: Retrieves a list of vehicles assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START getVehiclesByClass -->
### getVehiclesByClass

**Summary**: Get vehicles by class

**Description**: Retrieves a list of vehicles of a specific class.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->
### getVehiclesByCategory

**Summary**: Get vehicles by category

**Description**: Retrieves a list of vehicles of a specific category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->
### getVehiclesByClassAndCategory

**Summary**: Get vehicles by class and category

**Description**: Retrieves a list of vehicles of a specific class and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->
### getVehiclesOfDriverByClass

**Summary**: Get vehicles of a certain driver by class

**Description**: Retrieves a list of vehicles of a specific class assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->
### getVehiclesOfDriverByCategory

**Summary**: Get vehicles of a certain driver by category

**Description**: Retrieves a list of vehicles of a specific category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->
### getVehiclesOfDriverByClassAndCategory

**Summary**: Get vehicles of a certain driver by class and category

**Description**: Retrieves a list of vehicles of a specific class and category assigned to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | vehicleClass |  |
| undefined | path | vehicleCategory |  |

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->

<!-- DOCGEN:START createVehicle -->
### createVehicle

**Summary**: Create a new vehicle

**Description**: Adds a new vehicle to the database, including its specifications.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle )

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update a vehicle

**Description**: Updates an existing vehicle's details and specifications.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateVehicle )

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START assignVehiclesToDriver -->
### assignVehiclesToDriver

**Summary**: Assign vehicles to a driver

**Description**: Assigns existing vehicles to a driver by creating a vehicle_drivers entry.

**Request Body:** (optional)
Type: `vehicles`
Content-Type: `- The vehicles to assign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END assignVehiclesToDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->
### removeVehicleFromDriver

**Summary**: Remove a vehicle from a driver

**Description**: Disassociates a vehicle from its assigned driver by setting the vehicle's driver_id to null.

**Request Body:** (optional)
Type: `vehicle_id`
Content-Type: `- The ID of the vehicle to unassign`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START deleteVehicle -->
### deleteVehicle

**Summary**: Delete a vehicle

**Description**: Deletes a vehicle from the database.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteVehicle )

<!-- DOCGEN:END deleteVehicle -->
