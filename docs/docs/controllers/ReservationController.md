# ReservationController Controller



<!-- DOCGEN:START getReservations -->
### getReservations

**Summary**: Get a list of reservations

**Description**: Returns a list of reservations along with their business and user information.

**Responses:**
- 200 - Successful operation, returns a list of reservations
- 400 - Error occurred while obtaining the reservation list

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
- 200 - Successful operation, returns detailed reservation information
- 404 - Reservation not found
- 400 - Error retrieving reservation information

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
- 200 - Successful operation, returns a list of reservations
- 404 - Business not found
- 400 - Error retrieving reservations

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getReservationsByBusinessId )

<!-- DOCGEN:END getReservationsByBusinessId -->



<!-- DOCGEN:START getActiveTableReservation -->
### getActiveTableReservation

**Summary**: Get active reservations orders.

**Description**: This fetches all completed orders for a specific driver.

**Responses:**
- 200 - Successful operation. Returns a list of completed orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

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
- 201 - Reservation created successfully
- 400 - Error creating reservation

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
- 200 - Reservation table updated successfully
- 400 - Error updating reservation status

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
- 200 - Reservation status updated successfully
- 400 - Error updating reservation status

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
- 200 - Reservation deleted successfully
- 400 - Error deleting reservation

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteReservation )

<!-- DOCGEN:END deleteReservation -->

