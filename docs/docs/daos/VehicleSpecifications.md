# VehicleSpecifications DAO

<!-- DOCGEN:START getVehicleSpecifications -->

### getVehicleSpecifications

**Description**: List vehicle specifications with optional Prisma args.

**Parameters**:

- args: {object} - Additional findMany args.

**Returns**: {Promise<object[]>} - Array of vehicle_specifications.

<!-- DOCGEN:END getVehicleSpecifications -->

<!-- DOCGEN:START getVehicleSpecificationById -->

### getVehicleSpecificationById

**Description**: Get a vehicle specification by ID.

**Parameters**:

- vehicle_specification_id: {string} - Specification ID.
- args: {object} - Optional Prisma args to merge.

**Returns**: {Promise<object|null>} - Record or null.

<!-- DOCGEN:END getVehicleSpecificationById -->

<!-- DOCGEN:START createNewVehicleSpecification -->

### createNewVehicleSpecification

**Description**: Create a new vehicle specification.

**Parameters**:

- specification: {object} - Fields for the specification.

**Returns**: {Promise<object>} - Created record.

<!-- DOCGEN:END createNewVehicleSpecification -->

<!-- DOCGEN:START updateVehicleSpecification -->

### updateVehicleSpecification

**Description**: Update a vehicle specification by ID.

**Parameters**:

- vehicle_specification_id: {string} - Specification ID.
- specificationData: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated record.

<!-- DOCGEN:END updateVehicleSpecification -->

<!-- DOCGEN:START deleteVehicleSpecification -->

### deleteVehicleSpecification

**Description**: Delete a vehicle specification by ID.

**Parameters**:

- vehicle_specification_id: {string} - Specification ID.

**Returns**: {Promise<object>} - Deleted record.

<!-- DOCGEN:END deleteVehicleSpecification -->
