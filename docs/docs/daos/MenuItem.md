# MenuItem DAO

<!-- DOCGEN:START createMenuItemVersion -->

### createMenuItemVersion

**Description**: Create a new version for a menu item and set it as the current version.

**Parameters**:

- menu_item_id: {string} - Menu item ID.
- version: {number} - Version number.
- snapshot: {object} - Snapshot payload for the version.

**Returns**: {Promise<object>} - The created version record.

<!-- DOCGEN:END createMenuItemVersion -->

<!-- DOCGEN:START createMenuItem -->

### createMenuItem

**Description**: Create a new menu item under a category with an optional tax rate.

**Parameters**:

- categoryId: {string} - Menu category ID to attach to.
- taxRateId: {string|null} - Optional tax rate ID to connect.
- menuItemData: {object} - Menu item fields to create.
- is_copy: {boolean} - Whether this item is a copied item.

**Returns**: {Promise<object>} - The created menu item.

<!-- DOCGEN:END createMenuItem -->

<!-- DOCGEN:START addMenuItemIdToOrder -->

### addMenuItemIdToOrder

**Description**: Append a menu_item_id to a category's ordered list if not present.

**Parameters**:

- menu_category_id: {string} - Menu category ID.
- menuItemIdToAdd: {string} - Menu item ID to add.

**Returns**: {Promise<object|undefined>} - The updated category or undefined if already present.

<!-- DOCGEN:END addMenuItemIdToOrder -->

<!-- DOCGEN:START removeMenuItemIdFromOrder -->

### removeMenuItemIdFromOrder

**Description**: Remove a menu_item_id from a category's ordered list.

**Parameters**:

- menu_category_id: {string} - Menu category ID.
- menuItemIdToRemove: {string} - Menu item ID to remove.

**Returns**: {Promise<object>} - The updated category.

<!-- DOCGEN:END removeMenuItemIdFromOrder -->

<!-- DOCGEN:START getMenuItemsByIds -->

### getMenuItemsByIds

**Description**: Get menu items by a list of IDs including their categories and categories' categories.

**Parameters**:

- menu_item_ids: {string[]} - List of menu item IDs.

**Returns**: {Promise<object[]>} - Array of menu items with category context.

<!-- DOCGEN:END getMenuItemsByIds -->

<!-- DOCGEN:START getMenuItemsByBusinessId -->

### getMenuItemsByBusinessId

**Description**: Get menu items for a business with optional filters.

**Parameters**:

- business_id: {string} - Business ID.
- args: {object} - Additional where filters or options.

**Returns**: {Promise<object[]>} - Array of menu items with documents and files.

<!-- DOCGEN:END getMenuItemsByBusinessId -->

<!-- DOCGEN:START getMenuItemsByCategoryId -->

### getMenuItemsByCategoryId

**Description**: Get menu items by their menu category.

**Parameters**:

- categoryId: {string} - Menu category ID.

**Returns**: {Promise<object[]>} - Array of menu items.

<!-- DOCGEN:END getMenuItemsByCategoryId -->

<!-- DOCGEN:START deleteMenuItem -->

### deleteMenuItem

**Description**: Delete a menu item by ID.

**Parameters**:

- menuItemId: {string} - Menu item ID.

**Returns**: {Promise<object>} - The deleted menu item.

<!-- DOCGEN:END deleteMenuItem -->

<!-- DOCGEN:START updateMenuItem -->

### updateMenuItem

**Description**: Update a menu item; logs stock changes separately when stock is provided.

**Parameters**:

- menuItemId: {string} - Menu item ID.
- data: {object} - Partial fields to update (stock handled specially).

**Returns**: {Promise<object>} - The updated menu item.

<!-- DOCGEN:END updateMenuItem -->

<!-- DOCGEN:START updateMenuItemPrice -->

### updateMenuItemPrice

**Description**: Update the price for a menu item.

**Parameters**:

- menuItemId: {string} - Menu item ID.
- price: {number} - New price value.

**Returns**: {Promise<object>} - The updated menu item.

<!-- DOCGEN:END updateMenuItemPrice -->

<!-- DOCGEN:START addMenuItemToCategory -->

### addMenuItemToCategory

**Description**: Connect a menu item to a menu category.

**Parameters**:

- menu_item_id: {string} - Menu item ID.
- menu_category_id: {string} - Menu category ID.

**Returns**: {Promise<object>} - The updated menu item.

<!-- DOCGEN:END addMenuItemToCategory -->

<!-- DOCGEN:START removeMenuItemFromCategory -->

### removeMenuItemFromCategory

**Description**: Disconnect a menu item from its category.

**Parameters**:

- menu_item_id: {string} - Menu item ID.

**Returns**: {Promise<object>} - The updated menu item.

<!-- DOCGEN:END removeMenuItemFromCategory -->
