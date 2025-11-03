# Group DAO

<!-- DOCGEN:START getGroupUsersByParentId -->

### getGroupUsersByParentId

**Description**: Get group_users row by parent user id.

**Parameters**:

- parent_id: {string} - Parent user ID.

**Returns**: {Promise<object|null>} - group_users row or null.

<!-- DOCGEN:END getGroupUsersByParentId -->

<!-- DOCGEN:START getGroupUserByChildId -->

### getGroupUserByChildId

**Description**: Get group_user by child user id with parent_user and allowance included.

**Parameters**:

- child_id: {string} - Child user ID.

**Returns**: {Promise<object|null>} - group_user row or null.

<!-- DOCGEN:END getGroupUserByChildId -->

<!-- DOCGEN:START createGroupUser -->

### createGroupUser

**Description**: Create a group_user link between parent and child users and bootstrap allowance.

**Parameters**:

- group_user_data: {object} - Contains parent_user_id and child_user_id.

**Returns**: {Promise<object>} - Created group_user.

<!-- DOCGEN:END createGroupUser -->

<!-- DOCGEN:START deleteGroupUser -->

### deleteGroupUser

**Description**: Delete a group_user by id.

**Parameters**:

- group_user_id: {string} - Group user ID.

**Returns**: {Promise<object>} - Deleted group_user.

<!-- DOCGEN:END deleteGroupUser -->

<!-- DOCGEN:START updateGroupUserEnabled -->

### updateGroupUserEnabled

**Description**: Toggle a group_user enabled flag.

**Parameters**:

- group_user_id: {string} - Group user ID.
- value: {boolean} - Enabled value.

**Returns**: {Promise<object>} - Updated group_user.

<!-- DOCGEN:END updateGroupUserEnabled -->

<!-- DOCGEN:START updateGroupUserAllowance -->

### updateGroupUserAllowance

**Description**: Update allowance amounts for a group_user by service type; creates allowance if missing.

**Parameters**:

- group_user_id: {string} - Group user ID.
- value: {number} - New allowance value.
- type: {string} - Service type (SERVICE_TYPE enum).

**Returns**: {Promise<object>} - group_user with allowance included.

<!-- DOCGEN:END updateGroupUserAllowance -->
