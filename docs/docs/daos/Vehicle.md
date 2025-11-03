# Vehicle DAO

<!-- DOCGEN:START getVehicles -->

### getVehicles

**Description**: Get all vehicles with optional Prisma args and includes.

**Parameters**:

- args: {object} - Additional Prisma findMany args.

**Returns**: {Promise<object[]>} - Array of vehicles.

<!-- DOCGEN:END getVehicles -->

<!-- DOCGEN:START getVehiclesByBusiness -->

### getVehiclesByBusiness

**Description**: Get all vehicles belonging to a business with driver names and documents.

**Parameters**:

- businessId: {string} - Business ID.

**Returns**: {Promise<object[]>} - Array of vehicles.

<!-- DOCGEN:END getVehiclesByBusiness -->

<!-- DOCGEN:START getVehicleById -->

### getVehicleById

**Description**: Get a vehicle by ID with drivers, current_driver, and documents; allows extra args to override includes.

**Parameters**:

- vehicle_id: {string} - Vehicle ID.
- args: {object} - Optional Prisma args to merge.

**Returns**: {Promise<object|null>} - Vehicle or null.

<!-- DOCGEN:END getVehicleById -->

<!-- DOCGEN:START createNewVehicle -->

### createNewVehicle

**Description**: Create a new vehicle.

**Parameters**:

- vehicle: {object} - Vehicle payload to create.

**Returns**: {Promise<object>} - Created vehicle.

<!-- DOCGEN:END createNewVehicle -->

<!-- DOCGEN:START updateVehicle -->

### updateVehicle

**Description**: Update a vehicle by ID.

**Parameters**:

- vehicle_id: {string} - Vehicle ID.
- vehicleData: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated vehicle.

<!-- DOCGEN:END updateVehicle -->

<!-- DOCGEN:START getVehicleDriversByVehicleId -->

### getVehicleDriversByVehicleId

**Description**: Get the driver IDs linked to a vehicle.

**Parameters**:

- vehicle_id: {string} - Vehicle ID.

**Returns**: {Promise<{driver_id:string}[]>} - Array of driver_id objects.

<!-- DOCGEN:END getVehicleDriversByVehicleId -->

<!-- DOCGEN:START unAssignVehicleFromDrivers -->

### unAssignVehicleFromDrivers

**Description**: Remove driver links for a vehicle that are not present in the newDriverIds list.

**Parameters**:

- vehicle_id: {string} - Vehicle ID.
- newDriverIds: {string[]} - Driver IDs to keep.

**Returns**: {Promise<void>} - Resolves when done.

<!-- DOCGEN:END unAssignVehicleFromDrivers -->

<!-- DOCGEN:START assignVehicleToDriver -->

### assignVehicleToDriver

**Description**: Upsert the relation linking a vehicle and a driver with can_drive=true.

**Parameters**:

- vehicleId: {string} - Vehicle ID.
- driverId: {string} - Driver ID.

**Returns**: {Promise<object>} - Upserted vehicle_drivers record.

<!-- DOCGEN:END assignVehicleToDriver -->

<!-- DOCGEN:START assignVehicleToDeliveryDriver -->

### assignVehicleToDeliveryDriver

**Description**: Connect a vehicle to a delivery driver (delivery_driver_id).

**Parameters**:

- vehicleId: {string} - Vehicle ID.
- driverId: {string} - Delivery driver ID.

**Returns**: {Promise<object>} - Updated vehicle.

<!-- DOCGEN:END assignVehicleToDeliveryDriver -->

<!-- DOCGEN:START removeVehicleFromDriver -->

### removeVehicleFromDriver

**Description**: Mark a vehicle-driver relation as cannot drive (can_drive=false).

**Parameters**:

- vehicleId: {string} - Vehicle ID.
- driverId: {string} - Driver ID.

**Returns**: {Promise<object>} - Updated vehicle_drivers record.

<!-- DOCGEN:END removeVehicleFromDriver -->

<!-- DOCGEN:START getVehiclesByDriverId -->

### getVehiclesByDriverId

**Description**: Get vehicles by driver ID.

**Parameters**:

- driver_id: {string} - Driver ID.

**Returns**: {Promise<object[]>} - Array of vehicles.

<!-- DOCGEN:END getVehiclesByDriverId -->

<!-- DOCGEN:START deleteVehicle -->

### deleteVehicle

**Description**: Delete a vehicle by ID.

**Parameters**:

- vehicle_id: {string} - Vehicle ID.

**Returns**: {Promise<object>} - Deleted vehicle.

<!-- DOCGEN:END deleteVehicle -->

<!-- DOCGEN:START getVehiclesByClass -->

### getVehiclesByClass

**Description**: Get all vehicles of a certain class.

**Parameters**:

- vehicleClass: {string} - Vehicle class.

**Returns**: {Promise<object[]>} - Array of vehicles.

<!-- DOCGEN:END getVehiclesByClass -->

<!-- DOCGEN:START getVehiclesByCategory -->

### getVehiclesByCategory

**Description**: Get all vehicles of a certain category.

**Parameters**:

- vehicleCategory: {string} - Vehicle category.

**Returns**: {Promise<object[]>} - Array of vehicles.

<!-- DOCGEN:END getVehiclesByCategory -->

<!-- DOCGEN:START getVehiclesByClassAndCategory -->

### getVehiclesByClassAndCategory

**Description**: Get all vehicles of a certain class and category.

**Parameters**:

- vehicleClass: {string} - Vehicle class.
- vehicleCategory: {string} - Vehicle category.

**Returns**: {Promise<object[]>} - Array of vehicles.

<!-- DOCGEN:END getVehiclesByClassAndCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClass -->

### getVehiclesOfDriverByClass

**Description**: Get all vehicles for a driver of a certain class.

**Parameters**:

- driverId: {string} - Driver ID.
- vehicleClass: {string} - Vehicle class.

**Returns**: {Promise<object[]>} - Array of vehicles.

<!-- DOCGEN:END getVehiclesOfDriverByClass -->

<!-- DOCGEN:START getVehiclesOfDriverByCategory -->

### getVehiclesOfDriverByCategory

**Description**: Get all vehicles for a driver of a certain category.

**Parameters**:

- driverId: {string} - Driver ID.
- vehicleCategory: {string} - Vehicle category.

**Returns**: {Promise<object[]>} - Array of vehicles.

<!-- DOCGEN:END getVehiclesOfDriverByCategory -->

<!-- DOCGEN:START getVehiclesOfDriverByClassAndCategory -->

### getVehiclesOfDriverByClassAndCategory

**Description**: Get all vehicles for a driver of a specific class and category.

**Parameters**:

- driverId: {string} - Driver ID.
- vehicleClass: {string} - Vehicle class.
- vehicleCategory: {string} - Vehicle category.

**Returns**: {Promise<object[]>} - Array of vehicles.

<!-- DOCGEN:END getVehiclesOfDriverByClassAndCategory -->
