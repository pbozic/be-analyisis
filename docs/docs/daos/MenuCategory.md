# MenuCategory DAO

<!-- DOCGEN:START createMenuCategory -->

### createMenuCategory

**Description**: Create a menu category for a given menu and optionally connect categories.

**Parameters**:

- menuId: {string} - Menu ID to attach to.
- categoryData: {object} - Menu category data; may include category_ids to connect.

**Returns**: {Promise<object>} - The created menu category with related data.

<!-- DOCGEN:END createMenuCategory -->

<!-- DOCGEN:START createDailyMealMenuCategory -->

### createDailyMealMenuCategory

**Description**: Create a menu category based on a daily meal category price entry.

**Parameters**:

- menuId: {string} - Menu ID to attach to.
- daily_meal_category_price_id: {string} - Reference to daily_meal_category_prices entry.

**Returns**: {Promise<object>} - The created menu category with related data.

<!-- DOCGEN:END createDailyMealMenuCategory -->

<!-- DOCGEN:START addMenuCategoryIdToOrder -->

### addMenuCategoryIdToOrder

**Description**: Append a menu_category_id to a menu's ordered list, if not already present.

**Parameters**:

- menu_id: {string} - Menu ID.
- menuCategoryIdToAdd: {string} - Menu category ID to append.

**Returns**: {Promise<object|undefined>} - The updated menu or undefined if already present.

<!-- DOCGEN:END addMenuCategoryIdToOrder -->

<!-- DOCGEN:START removeMenuCategoryIdFromOrder -->

### removeMenuCategoryIdFromOrder

**Description**: Remove a menu_category_id from a menu's ordered list.

**Parameters**:

- menu_id: {string} - Menu ID.
- menuCategoryIdToRemove: {string} - Menu category ID to remove.

**Returns**: {Promise<object>} - The updated menu.

<!-- DOCGEN:END removeMenuCategoryIdFromOrder -->

<!-- DOCGEN:START getMenuCategoriesByMenuId -->

### getMenuCategoriesByMenuId

**Description**: Get menu categories for a given menu with items and categories included; sorts items by stored order.

**Parameters**:

- menu_id: {string} - Menu ID.

**Returns**: {Promise<object[]>} - Array of menu categories with items.

<!-- DOCGEN:END getMenuCategoriesByMenuId -->

<!-- DOCGEN:START getMenuCategoriesByBusinessId -->

### getMenuCategoriesByBusinessId

**Description**: Get menu categories for a business across all menus.

**Parameters**:

- business_id: {string} - Business ID.

**Returns**: {Promise<object[]>} - Array of menu categories with items.

<!-- DOCGEN:END getMenuCategoriesByBusinessId -->

<!-- DOCGEN:START deleteMenuCategory -->

### deleteMenuCategory

**Description**: Delete a menu category, disconnecting related category links first.

**Parameters**:

- menu_category_id: {string} - Menu category ID.

**Returns**: {Promise<object>} - Deleted menu category record.

<!-- DOCGEN:END deleteMenuCategory -->

<!-- DOCGEN:START updateMenuCategory -->

### updateMenuCategory

**Description**: Update a menu category and include category relations.

**Parameters**:

- menu_category_id: {string} - Menu category ID.
- data: {object} - Fields to update.

**Returns**: {Promise<object>} - The updated menu category.

<!-- DOCGEN:END updateMenuCategory -->

<!-- DOCGEN:START updateMenuItemsOrder -->

### updateMenuItemsOrder

**Description**: Update the ordering of menu items within a category by setting menu_category_order_index.

**Parameters**:

- menu_category_id: {string} - Menu category ID.
- ordered_menu_items_ids: {string[]} - Ordered list of menu_item IDs belonging to the category.

**Returns**: {Promise<object>} - The updated menu category with menu_items_ordered set.

<!-- DOCGEN:END updateMenuItemsOrder -->

<!-- DOCGEN:START addCategoryToMenu -->

### addCategoryToMenu

**Description**: Connect a menu category to a menu.

**Parameters**:

- menu_id: {string} - Menu ID.
- menu_category_id: {string} - Menu category ID.

**Returns**: {Promise<object>} - The updated menu category.

<!-- DOCGEN:END addCategoryToMenu -->

<!-- DOCGEN:START removeCategoryFromMenu -->

### removeCategoryFromMenu

**Description**: Disconnect a menu category from its menu.

**Parameters**:

- menu_category_id: {string} - Menu category ID.

**Returns**: {Promise<object>} - The updated menu category.

<!-- DOCGEN:END removeCategoryFromMenu -->

<!-- DOCGEN:START addCategoryToMenuCategory -->

### addCategoryToMenuCategory

**Description**: Link a category to a menu category.

**Parameters**:

- menu_category_id: {string} - Menu category ID.
- category_id: {string} - Category ID.

**Returns**: {Promise<object>} - The created link record.

<!-- DOCGEN:END addCategoryToMenuCategory -->

<!-- DOCGEN:START removeCategoryFromMenuCategory -->

### removeCategoryFromMenuCategory

**Description**: Unlink a category from a menu category.

**Parameters**:

- menu_category_id: {string} - Menu category ID.
- category_id: {string} - Category ID.

**Returns**: {Promise<object>} - The deleted link record.

<!-- DOCGEN:END removeCategoryFromMenuCategory -->

<!-- DOCGEN:START updateDailyMealMenuPrice -->

### updateDailyMealMenuPrice

**Description**: Update the price on a menu category (daily meal context).

**Parameters**:

- menu_category_id: {string} - Menu category ID.
- price: {number} - New price value.

**Returns**: {Promise<object>} - The updated menu category.

<!-- DOCGEN:END updateDailyMealMenuPrice -->

<!-- DOCGEN:START getMenuCategoryById -->

### getMenuCategoryById

**Description**: Get a menu category by ID with items, categories, and daily meal price.

**Parameters**:

- menu_category_id: {string} - Menu category ID.

**Returns**: {Promise<object|null>} - The menu category or null if not found.

<!-- DOCGEN:END getMenuCategoryById -->

<!-- DOCGEN:START updateMenuCategoriesWithNewPrice -->

### updateMenuCategoriesWithNewPrice

**Description**: Updates all menu_categories for a given daily_meal_category_id where the related menu.date is >= valid_from,
setting daily_meal_category_price_id to the provided priceId.

**Parameters**:

- dailyMealCategoryId: {string}
- priceId: {string}
- validFrom: {Date}

**Returns**: {Promise<{ count: number }>} - The result of updateMany

<!-- DOCGEN:END updateMenuCategoriesWithNewPrice -->
