# TableReservation DAO

<!-- DOCGEN:START getReservations -->
### getReservations

**Description**: Get reservations with optional args and includes for business and user.

**Parameters**:
- args: {object} - Prisma findMany args (where, orderBy, etc.).

**Returns**: {Promise<object[]>} - Reservations.

<!-- DOCGEN:END getReservations -->

<!-- DOCGEN:START getReservationIfNotCompleted -->
### getReservationIfNotCompleted

**Description**: Get the next upcoming or in-progress reservation for a user (not completed/rejected), excluding older than 2 hours.

**Parameters**:
- user_id: {string} - User ID.

**Returns**: {Promise<object|null>} - Reservation with business logo/banner flattened, or null.

<!-- DOCGEN:END getReservationIfNotCompleted -->

<!-- DOCGEN:START getReservationById -->
### getReservationById

**Description**: Get a reservation by id including business and user.

**Parameters**:
- reservation_id: {string} - Reservation ID.

**Returns**: {Promise<object|null>} - Reservation or null.

<!-- DOCGEN:END getReservationById -->

<!-- DOCGEN:START createReservation -->
### createReservation

**Description**: Create a reservation and include business documents; flattens logo/banner URLs.

**Parameters**:
- reservationData: {object} - Reservation payload.

**Returns**: {Promise<object|null>} - Created reservation with flattened business images, or null.

<!-- DOCGEN:END createReservation -->

<!-- DOCGEN:START updateReservationStatus -->
### updateReservationStatus

**Description**: Update a reservation's status.

**Parameters**:
- reservation_id: {string} - Reservation ID.
- status: {string} - New status.

**Returns**: {Promise<object>} - Updated reservation.

<!-- DOCGEN:END updateReservationStatus -->

<!-- DOCGEN:START addTableNumber -->
### addTableNumber

**Description**: Set the table number on a reservation.

**Parameters**:
- reservation_id: {string} - Reservation ID.
- table: {string|number} - Table identifier.

**Returns**: {Promise<object>} - Updated reservation.

<!-- DOCGEN:END addTableNumber -->

<!-- DOCGEN:START deleteReservation -->
### deleteReservation

**Description**: Delete a reservation by id.

**Parameters**:
- reservation_id: {string} - Reservation ID.

**Returns**: {Promise<object>} - Deleted reservation.

<!-- DOCGEN:END deleteReservation -->

