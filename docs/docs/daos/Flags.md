# Flags DAO

<!-- DOCGEN:START getFlags -->

### getFlags

**Description**: Get flags with optional prisma args.

**Parameters**:

- args: {object} - Prisma findMany args.

**Returns**: {Promise<object[]>} - Flags.

<!-- DOCGEN:END getFlags -->

<!-- DOCGEN:START getFlagById -->

### getFlagById

**Description**: Get a single flag by id.

**Parameters**:

- flag_id: {string} - Flag ID.

**Returns**: {Promise<object|null>} - Flag or null.

<!-- DOCGEN:END getFlagById -->

<!-- DOCGEN:START createFlag -->

### createFlag

**Description**: Create a flag and write history with the creating user and status.

**Parameters**:

- flag: {object} - Flag payload (status, reason, etc.).
- user: {object} - User object with user_id.

**Returns**: {Promise<object>} - Created flag.

<!-- DOCGEN:END createFlag -->

<!-- DOCGEN:START updateFlag -->

### updateFlag

**Description**: Update a flag by id and log the change to flag_history with user and status.

**Parameters**:

- flag_id: {string} - Flag ID.
- flag: {object} - Fields to update (including status).
- user: {object} - User object with user_id.

**Returns**: {Promise<object>} - Updated flag.

<!-- DOCGEN:END updateFlag -->

<!-- DOCGEN:START deleteFlag -->

### deleteFlag

**Description**: Delete a flag by id.

**Parameters**:

- flag_id: {string} - Flag ID.

**Returns**: {Promise<object>} - Deleted flag.

<!-- DOCGEN:END deleteFlag -->
