# Driver DAO

<!-- DOCGEN:START getDrivers -->
### getDrivers

**Description**: List drivers with optional filters and included relations.

**Parameters**:
- args: {object} - Additional Prisma findMany args.

**Returns**: {Promise<object[]>} - Array of drivers with user and vehicles.

<!-- DOCGEN:END getDrivers -->

<!-- DOCGEN:START getDriversFull -->
### getDriversFull

**Description**: List drivers with full nested user documents and vehicle specifications.

**Parameters**:
- args: {object} - Additional Prisma findMany args.

**Returns**: {Promise<object[]>} - Array of drivers with rich relations.

<!-- DOCGEN:END getDriversFull -->

<!-- DOCGEN:START getOnlineDrivers -->
### getOnlineDrivers

**Description**: List online drivers with optional extra filters.

**Parameters**:
- args: {object} - Additional where filters.

**Returns**: {Promise<object[]>} - Array of online drivers.

<!-- DOCGEN:END getOnlineDrivers -->

<!-- DOCGEN:START getDriversByDailyMealBusinessId -->
### getDriversByDailyMealBusinessId

**Description**: List drivers associated with a daily meal business.

**Parameters**:
- businessId: {string} - Business ID.

**Returns**: {Promise<object[]>} - Array of drivers.

<!-- DOCGEN:END getDriversByDailyMealBusinessId -->

<!-- DOCGEN:START getDriverById -->
### getDriverById

**Description**: Get a driver by ID with nested user, vehicle, documents, and activity logs.

**Parameters**:
- driver_id: {string} - Driver ID.

**Returns**: {Promise<object|null>} - The driver record or null.

<!-- DOCGEN:END getDriverById -->

<!-- DOCGEN:START getDriverByUserId -->
### getDriverByUserId

**Description**: Get a driver by user ID with related vehicles.

**Parameters**:
- user_id: {string} - User ID.

**Returns**: {Promise<object|null>} - The driver record or null.

<!-- DOCGEN:END getDriverByUserId -->

<!-- DOCGEN:START getDriverLocation -->
### getDriverLocation

**Description**: Get the current stored location for a driver.

**Parameters**:
- driver_id: {string} - Driver ID.

**Returns**: {Promise<object|null>} - Location object or null.

<!-- DOCGEN:END getDriverLocation -->

<!-- DOCGEN:START updateDriverOnlineStatus -->
### updateDriverOnlineStatus

**Description**: Update a driver's online status, disconnecting current vehicle if going offline.

**Parameters**:
- driver_id: {string} - Driver ID.
- isOnline: {boolean} - New online flag.

**Returns**: {Promise<object>} - The updated driver with relations.

<!-- DOCGEN:END updateDriverOnlineStatus -->

<!-- DOCGEN:START updateDriverRideRequirements -->
### updateDriverRideRequirements

**Description**: Update driver ride requirements JSON.

**Parameters**:
- driver_id: {string} - Driver ID.
- ride_requirements: {object} - Requirements payload.

**Returns**: {Promise<object>} - The updated driver record.

<!-- DOCGEN:END updateDriverRideRequirements -->

<!-- DOCGEN:START updateDriverLocation -->
### updateDriverLocation

**Description**: Update a driver's stored location.

**Parameters**:
- driver_id: {string} - Driver ID.
- location: {object} - Location payload.

**Returns**: {Promise<object>} - The updated driver record with relations.

<!-- DOCGEN:END updateDriverLocation -->

<!-- DOCGEN:START updateDriverLocationHistory -->
### updateDriverLocationHistory

**Description**: Append a location entry to a driver's history; links to either taxi/transfer order or delivery order.

**Parameters**:
- driver_id: {string} - Driver ID.
- location: {object} - Location payload.
- status: {string|number|null} - Optional status value.
- order_id: {string|null} - Optional order ID.
- type: {string|undefined} - If truthy, links to taxi/transfer order; otherwise to delivery order when order_id provided.

**Returns**: {Promise<object>} - Created history location record.

<!-- DOCGEN:END updateDriverLocationHistory -->

<!-- DOCGEN:START updateDriver -->
### updateDriver

**Description**: Update a driver (excluding location which is handled separately).

**Parameters**:
- driver_id: {string} - Driver ID.
- updateData: {object} - Partial fields to update.

**Returns**: {Promise<object>} - The updated driver.

<!-- DOCGEN:END updateDriver -->

<!-- DOCGEN:START createNewDriver -->
### createNewDriver

**Description**: Create a new driver; creates the user if not provided.

**Parameters**:
- driverData: {object} - Driver fields.
- userData: {object} - User fields or existing user with user_id.

**Returns**: {Promise<object>} - The created driver with nested user.

<!-- DOCGEN:END createNewDriver -->

<!-- DOCGEN:START getAvailableDrivers -->
### getAvailableDrivers

**Description**: List available drivers (online and not on order), optionally filtered by order type.

**Parameters**:
- type?: {string} - Optional type: 'TAXI' or 'TRANSFER'.

**Returns**: {Promise<object[]>} - Array of available drivers.

<!-- DOCGEN:END getAvailableDrivers -->

<!-- DOCGEN:START getUnavailableDrivers -->
### getUnavailableDrivers

**Description**: List drivers who are online and currently on an order.

**Returns**: {Promise<object[]>} - Array of unavailable drivers.

<!-- DOCGEN:END getUnavailableDrivers -->

<!-- DOCGEN:START getBusinessByDriverId -->
### getBusinessByDriverId

**Description**: Get the business associated with a driver.

**Parameters**:
- driver_id: {string} - Driver ID.

**Returns**: {Promise<object>} - The related business.

<!-- DOCGEN:END getBusinessByDriverId -->

<!-- DOCGEN:START getDriverLocations -->
### getDriverLocations

**Description**: Get a driver's location history between two timestamps as simplified coordinates.

**Parameters**:
- driverId: {string} - Driver ID.
- startTime: {string|Date} - Start time inclusive.
- endTime: {string|Date} - End time inclusive.

**Returns**: {Promise<object[]>} - Array of simplified location entries.

<!-- DOCGEN:END getDriverLocations -->

<!-- DOCGEN:START getDriverLocationsWithPerformance -->
### getDriverLocationsWithPerformance

**Description**: Get a driver's location history with time-weighted performance scoring based on speed.

**Parameters**:
- driverId: {string} - Driver ID.
- startTime: {string|Date} - Start time inclusive.
- endTime: {string|Date} - End time inclusive.

**Returns**: {Promise<{locations: object[], averageScore: number|null}>} - Locations with average performance.

<!-- DOCGEN:END getDriverLocationsWithPerformance -->

<!-- DOCGEN:START toRad -->
### toRad

<!-- DOCGEN:END toRad -->

<!-- DOCGEN:START haversineKm -->
### haversineKm

<!-- DOCGEN:END haversineKm -->

<!-- DOCGEN:START extractLatLon -->
### extractLatLon

<!-- DOCGEN:END extractLatLon -->

<!-- DOCGEN:START setDriverHandle -->
### setDriverHandle

**Description**: Enable or disable which order types a driver handles.

**Parameters**:
- driver_id: {string} - Driver ID.
- action: {string} - 'enable' to set true, anything else sets false.
- type: {string} - One of 'taxi', 'transfer', 'delivery'.

**Returns**: {Promise<object>} - The updated driver.

<!-- DOCGEN:END setDriverHandle -->

<!-- DOCGEN:START toggleDriverOrders -->
### toggleDriverOrders

**Description**: Toggle which order streams are active for the driver.

**Parameters**:
- driver_id: {string} - Driver ID.
- types: {object} - Flags: { taxi?: boolean, transfer?: boolean, delivery?: boolean }.

**Returns**: {Promise<object>} - The updated driver.

<!-- DOCGEN:END toggleDriverOrders -->

<!-- DOCGEN:START setDriverCurrentVehicle -->
### setDriverCurrentVehicle

**Description**: Set the driver's current vehicle, recording last used vehicle and connecting the relation.

**Parameters**:
- driver_id: {string} - Driver ID.
- vehicle_id: {string} - Vehicle ID to set as current.

**Returns**: {Promise<object>} - The updated driver.

<!-- DOCGEN:END setDriverCurrentVehicle -->

<!-- DOCGEN:START clearDriverCurrentVehicle -->
### clearDriverCurrentVehicle

**Description**: Clear the driver's current vehicle relation.

**Parameters**:
- driver_id: {string} - Driver ID.

**Returns**: {Promise<object>} - The updated driver.

<!-- DOCGEN:END clearDriverCurrentVehicle -->

<!-- DOCGEN:START addDriverMunicipalities -->
### addDriverMunicipalities

**Description**: Replace the set of municipalities a driver covers with a new list.

**Parameters**:
- driver_id: {string} - Driver ID.
- newMunicipalityIds: {string[]} - New municipality IDs to set.

**Returns**: {Promise<void>} - Resolves when update is complete.

<!-- DOCGEN:END addDriverMunicipalities -->

<!-- DOCGEN:START removeDriver -->
### removeDriver

**Description**: Soft-remove a driver from transport module by nulling transport_module_id.

**Parameters**:
- driver_id: {string} - Driver ID.

**Returns**: {Promise<object>} - The updated driver.

<!-- DOCGEN:END removeDriver -->

