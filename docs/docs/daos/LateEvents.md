# LateEvents DAO

<!-- DOCGEN:START createLateEvent -->

### createLateEvent

**Description**: Create a late event for delivery or taxi order and link to business and user.

**Parameters**:

- business_id: {string} - Business ID.
- user_id: {string} - User ID.
- delivery_order_id: {string|null} - Delivery order ID if applicable.
- taxi_order_id: {string|null} - Taxi order ID if applicable.
- seconds: {number} - Delay in seconds.

**Returns**: {Promise<object>} - Created late event.

<!-- DOCGEN:END createLateEvent -->

<!-- DOCGEN:START getLateEventById -->

### getLateEventById

**Description**: Get a late event by id with related entities.

**Parameters**:

- late_events_id: {string} - Late event ID.

**Returns**: {Promise<object|null>} - Late event or null.

<!-- DOCGEN:END getLateEventById -->

<!-- DOCGEN:START getLateEventsByUserId -->

### getLateEventsByUserId

**Description**: Get late events for a user with related entities.

**Parameters**:

- user_id: {string} - User ID.

**Returns**: {Promise<object[]>} - Late events.

<!-- DOCGEN:END getLateEventsByUserId -->

<!-- DOCGEN:START getLateEventsByBusinessId -->

### getLateEventsByBusinessId

**Description**: Get late events for a business with related entities.

**Parameters**:

- business_id: {string} - Business ID.

**Returns**: {Promise<object[]>} - Late events.

<!-- DOCGEN:END getLateEventsByBusinessId -->

<!-- DOCGEN:START updateLateEvent -->

### updateLateEvent

**Description**: Update a late event and return with related entities.

**Parameters**:

- late_events_id: {string} - Late event ID.
- data: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated late event.

<!-- DOCGEN:END updateLateEvent -->

<!-- DOCGEN:START deleteLateEvent -->

### deleteLateEvent

**Description**: Delete a late event by id.

**Parameters**:

- late_events_id: {string} - Late event ID.

**Returns**: {Promise<void>} - Resolves when deleted.

<!-- DOCGEN:END deleteLateEvent -->
