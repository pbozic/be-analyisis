# Address DAO

<!-- DOCGEN:START addAddress -->

### addAddress

**Description**: Upsert an address by unique coordinates and address string.

**Parameters**:

- address: {object} - Address payload (address, latitude, longitude, etc.).

**Returns**: {Promise<object>} - The created or updated address record.

<!-- DOCGEN:END addAddress -->

<!-- DOCGEN:START deleteUserAddress -->

### deleteUserAddress

**Description**: Delete a user_address link by composite key.

**Parameters**:

- user_id: {string} - User ID.
- address_id: {string} - Address ID.

**Returns**: {Promise<object>} - The deleted user_address record.

<!-- DOCGEN:END deleteUserAddress -->

<!-- DOCGEN:START addUserAddress -->

### addUserAddress

**Description**: Add a user_address link; marks as primary if it's the user's first address.

**Parameters**:

- user_id: {string} - User ID.
- address_id: {string} - Address ID.

**Returns**: {Promise<object>} - The upserted user_address record.

<!-- DOCGEN:END addUserAddress -->

<!-- DOCGEN:START editUserAddress -->

### editUserAddress

**Description**: Update fields on a user_address link.

**Parameters**:

- user_id: {string} - User ID.
- address_id: {string} - Address ID.
- data: {object} - Fields to update on the user_address.

**Returns**: {Promise<object>} - The updated user_address record.

<!-- DOCGEN:END editUserAddress -->

<!-- DOCGEN:START setPrimaryUserAddress -->

### setPrimaryUserAddress

**Description**: Set an address as the primary for a user (unsets all others first).

**Parameters**:

- user_id: {string} - User ID.
- address_id: {string} - Address ID to set as primary.

**Returns**: {Promise<object>} - The updated user_address record.

<!-- DOCGEN:END setPrimaryUserAddress -->

<!-- DOCGEN:START updateAddressByAddressId -->

### updateAddressByAddressId

**Description**: Update an address by its address_id.

**Parameters**:

- addressId: {string} - Address ID to update.
- updateData: {object} - Fields to update on the address.

**Returns**: {Promise<object>} - The updated address.

<!-- DOCGEN:END updateAddressByAddressId -->

<!-- DOCGEN:START findAddress -->

### findAddress

**Description**: Find an address by exact latitude and longitude.

**Parameters**:

- latitude: {number} - Latitude value.
- longitude: {number} - Longitude value.

**Returns**: {Promise<object|null>} - The matching address or null.

<!-- DOCGEN:END findAddress -->
