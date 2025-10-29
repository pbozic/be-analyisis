# LostItems DAO

<!-- DOCGEN:START reportFoundItem -->
### reportFoundItem

**Description**: Report a found item; creates lost_items row and connects reporting user.

**Parameters**:
- foundItemData: {object} - Payload for the lost item (title, description, etc.).
- user: {object} - User object containing user_id.

**Returns**: {Promise<object>} - Created lost item.

<!-- DOCGEN:END reportFoundItem -->

<!-- DOCGEN:START deleteFoundItem -->
### deleteFoundItem

**Description**: Delete a lost item by ID.

**Parameters**:
- lost_item_id: {string} - Lost item ID.

**Returns**: {Promise<object>} - Deleted lost item.

<!-- DOCGEN:END deleteFoundItem -->

<!-- DOCGEN:START getLostItems -->
### getLostItems

**Description**: Get all lost items including documents and files, and the reporting user.

**Returns**: {Promise<object[]>} - Lost items with related data.

<!-- DOCGEN:END getLostItems -->

<!-- DOCGEN:START updateLostItem -->
### updateLostItem

**Description**: Update a lost item by ID.

**Parameters**:
- lost_item_id: {string} - Lost item ID.
- updateData: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated lost item.

<!-- DOCGEN:END updateLostItem -->

