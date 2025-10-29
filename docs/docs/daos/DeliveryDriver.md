# DeliveryDriver DAO

<!-- DOCGEN:START getDeliveryDrivers -->
### getDeliveryDrivers

**Description**: List delivery drivers with optional filters and included relations.

**Parameters**:
- args: {object} - Additional Prisma findMany args (where, orderBy, etc.).

**Returns**: {Promise<object[]>} - Array of delivery drivers with user and vehicles.

<!-- DOCGEN:END getDeliveryDrivers -->

<!-- DOCGEN:START getOnlineDeliveryDrivers -->
### getOnlineDeliveryDrivers

**Description**: List online delivery drivers with optional extra filters.

**Parameters**:
- args: {object} - Additional where filters to merge.

**Returns**: {Promise<object[]>} - Array of online delivery drivers.

<!-- DOCGEN:END getOnlineDeliveryDrivers -->

<!-- DOCGEN:START updateDeliveryDriver -->
### updateDeliveryDriver

**Description**: Update a delivery driver (excluding location field which is handled separately).

**Parameters**:
- delivery_driver_id: {string} - Driver ID.
- updateData: {object} - Partial fields to update.

**Returns**: {Promise<object>} - The updated driver with relations.

<!-- DOCGEN:END updateDeliveryDriver -->

<!-- DOCGEN:START getDeliveryDriverById -->
### getDeliveryDriverById

**Description**: Get a delivery driver by ID with customizable include.

**Parameters**:
- delivery_driver_id: {string} - Driver ID.
- includeParams: {object} - Optional Prisma include object.

**Returns**: {Promise<object|null>} - The driver record or null.

<!-- DOCGEN:END getDeliveryDriverById -->

<!-- DOCGEN:START getDeliveryDriverByUserId -->
### getDeliveryDriverByUserId

**Description**: Get a delivery driver by its user ID.

**Parameters**:
- user_id: {string} - User ID.

**Returns**: {Promise<object|null>} - The driver record or null.

<!-- DOCGEN:END getDeliveryDriverByUserId -->

<!-- DOCGEN:START getDeliveryDriversByDailyMealBusinessId -->
### getDeliveryDriversByDailyMealBusinessId

**Description**: List delivery drivers associated with a daily meal business.

**Parameters**:
- businessId: {string} - Business ID.

**Returns**: {Promise<object[]>} - Array of delivery drivers.

<!-- DOCGEN:END getDeliveryDriversByDailyMealBusinessId -->

<!-- DOCGEN:START getDeliveryDriverLocation -->
### getDeliveryDriverLocation

**Description**: Get the current location object for a delivery driver.

**Parameters**:
- delivery_driver_id: {string} - Driver ID.

**Returns**: {Promise<object|null>} - Location object or null.

<!-- DOCGEN:END getDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverOnlineStatus -->
### updateDeliveryDriverOnlineStatus

**Description**: Update the online status of a delivery driver.

**Parameters**:
- delivery_driver_id: {string} - Driver ID.
- isOnline: {boolean} - Online flag.

**Returns**: {Promise<object>} - The updated driver record.

<!-- DOCGEN:END updateDeliveryDriverOnlineStatus -->

<!-- DOCGEN:START updateDeliveryDriverLocation -->
### updateDeliveryDriverLocation

**Description**: Update the stored location for a delivery driver.

**Parameters**:
- delivery_driver_id: {string} - Driver ID.
- location: {object} - Location payload (name, address, coordinates{latitude, longitude}).

**Returns**: {Promise<object>} - The updated driver record.

<!-- DOCGEN:END updateDeliveryDriverLocation -->

<!-- DOCGEN:START updateDeliveryDriverLocationHistory -->
### updateDeliveryDriverLocationHistory

**Description**: Append a location entry to a driver's location history (optionally linked to an order and status).

**Parameters**:
- delivery_driver_id: {string} - Driver ID.
- location: {object} - Location payload.
- status: {string|number|null} - Optional status value.
- order_id: {string|null} - Optional order ID to link.

**Returns**: {Promise<object>} - The created history location record.

<!-- DOCGEN:END updateDeliveryDriverLocationHistory -->

<!-- DOCGEN:START createDeliveryDriver -->
### createDeliveryDriver

**Description**: Create a delivery driver, optionally creating the user first if not provided.

**Parameters**:
- driverData: {object} - Driver-specific fields.
- userData: {object} - User fields or an existing user with user_id.

**Returns**: {Promise<object>} - The created driver with nested user data.

<!-- DOCGEN:END createDeliveryDriver -->

<!-- DOCGEN:START getAvailableDeliveryDrivers -->
### getAvailableDeliveryDrivers

**Description**: List delivery drivers who are online and not currently on an order.

**Returns**: {Promise<object[]>} - Array of available drivers.

<!-- DOCGEN:END getAvailableDeliveryDrivers -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Description**: Update a driver's location (alias to updateDeliveryDriverLocation).

**Parameters**:
- delivery_driver_id: {string} - Driver ID.
- location: {object} - Location payload.

**Returns**: {Promise<object>} - The updated driver record.

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START getBusinessByDeliveryDriverId -->
### getBusinessByDeliveryDriverId

**Description**: Get the business associated with a delivery driver.

**Parameters**:
- delivery_driver_id: {string} - Driver ID.

**Returns**: {Promise<object>} - The related business.

<!-- DOCGEN:END getBusinessByDeliveryDriverId -->

