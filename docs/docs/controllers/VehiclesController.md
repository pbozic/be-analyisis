# VehiclesController Controller


<!-- DOCGEN:START listVehicles -->
### listVehicles

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: List

**Description**: Retrieves

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

<!-- DOCGEN:END listVehicles -->

<!-- DOCGEN:START listVehiclesByBusiness -->
### listVehiclesByBusiness

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewVehicle)

<!-- DOCGEN:END createVehicle -->

<!-- DOCGEN:START updateVehicle -->
### updateVehicle

**Summary**: Update

**Description**: Updates

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

**Summary**: Assign

**Description**: Assigns

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

**Summary**: Remove

**Description**: Disassociates

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

**Summary**: Delete

**Description**: Deletes

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
