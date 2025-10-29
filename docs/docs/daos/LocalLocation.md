# LocalLocation DAO

<!-- DOCGEN:START getAllLocalLocations -->
### getAllLocalLocations

**Description**: Fetch all local locations.

**Returns**: {Promise<Array>} - - The list of all local locations.

<!-- DOCGEN:END getAllLocalLocations -->

<!-- DOCGEN:START createLocation -->
### createLocation

**Description**: Create a new local location with the given address.

**Parameters**:
- address: {addresses}

**Returns**: {Promise<Object>} - - The created local location.

<!-- DOCGEN:END createLocation -->

<!-- DOCGEN:START createBusinessLocalLocation -->
### createBusinessLocalLocation

**Description**: Create a business local location association.

**Parameters**:
- businessId: {string}
- localLocationId: {string}
- time: {string}

**Returns**: {Promise<Object>} - - The created business local location association.

<!-- DOCGEN:END createBusinessLocalLocation -->

<!-- DOCGEN:START updateBusinessLocalLocation -->
### updateBusinessLocalLocation

**Description**: Update business local location time and associated orders.

**Parameters**:
- locationId: {string}
- time: {Date}

**Returns**: {Promise<Object>}

<!-- DOCGEN:END updateBusinessLocalLocation -->

