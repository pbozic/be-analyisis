# ReservationController Controller


<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Geta list of reservations

**Description**: Returnsa list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations)

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Geta reservation by ID

**Description**: Retrievesdetailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById)

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Getall reservations for a business by its business ID

**Description**: Retrievesall reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId)

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Getactive reservations orders.

**Description**: Thisfetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation)

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Createa new reservation

**Description**: Addsa new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation)

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Updatetable number

**Description**: Updatesthe table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber)

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Updatereservation status

**Description**: Updatesthe status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus)

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Deletea reservation

**Description**: Deletesa specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation)

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservations )

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Summary**: Get a reservation by ID

**Description**: Retrieves detailed information about a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservation_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationById )

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START getReservationsByBusinessId -->
### getReservationsByBusinessId

**Summary**: Get all reservations for a business by its business ID

**Description**: Retrieves all reservations for a specific business by its business ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->

<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTableReservation )

<!-- DOCGEN:END getActiveTableReservation -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Summary**: Create a new reservation

**Description**: Adds a new reservation to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createReservation )

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Summary**: Update table number

**Description**: Updates the table number of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addTableNumber )

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Summary**: Update reservation status

**Description**: Updates the status of a specific reservation.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateReservationStatus )

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Summary**: Delete a reservation

**Description**: Deletes a specific reservation by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | reservationId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->
