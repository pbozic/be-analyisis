# Menu DAO

<!-- DOCGEN:START createMenu -->

### createMenu

**Description**: Create a new menu for a business.

**Parameters**:

- business_id: {string} - The business ID to create the menu for.
- isDailyMeal?: {boolean} - Whether the menu is a daily meal menu.
- date?: {string|Date|null} - Optional date for daily meal menus.

**Returns**: {Promise<object>} - The created menu record.

<!-- DOCGEN:END createMenu -->

<!-- DOCGEN:START getMenuByBusinessId -->

### getMenuByBusinessId

**Description**: List active menus for a business, optionally filtering daily meal menus by start date.

**Parameters**:

- business_id: {string} - The business ID.
- isDailyMeal?: {boolean} - Whether to fetch daily meal menus.
- startDate?: {Date|null} - Start date for filtering daily meal menus.

**Returns**: {Promise<object[]>} - Array of menu records with categories and items.

<!-- DOCGEN:END getMenuByBusinessId -->

<!-- DOCGEN:START deleteMenu -->

### deleteMenu

**Description**: Delete a menu by ID.

**Parameters**:

- menu_id: {string} - Menu ID.

**Returns**: {Promise<object>} - The deleted menu record.

<!-- DOCGEN:END deleteMenu -->

<!-- DOCGEN:START setActiveMenu -->

### setActiveMenu

**Description**: Set a menu's active flag.

**Parameters**:

- menu_id: {string} - Menu ID.
- active: {boolean} - New active state.

**Returns**: {Promise<object>} - The updated menu record.

<!-- DOCGEN:END setActiveMenu -->

<!-- DOCGEN:START updateMenuOrder -->

### updateMenuOrder

**Description**: Update the order of menu categories for a menu by setting menu_order_index.

**Parameters**:

- menu_id: {string} - Menu ID.
- orderedMenuCategoryIds: {string[]} - Ordered list of menu_category IDs belonging to the menu.

**Returns**: {Promise<object>} - The updated menu record with menu_categories_ordered set.

<!-- DOCGEN:END updateMenuOrder -->

<!-- DOCGEN:START getMenuByDate -->

### getMenuByDate

**Description**: Get a daily meal menu for a business by date (same day match).

**Parameters**:

- business_id: {string} - Business ID.
- date: {Date|string} - Target date.

**Returns**: {Promise<object|null>} - The menu record or null if not found.

<!-- DOCGEN:END getMenuByDate -->

<!-- DOCGEN:START getMenuById -->

### getMenuById

**Description**: Get a menu by its ID with categories and items.

**Parameters**:

- menu_id: {string} - Menu ID.

**Returns**: {Promise<object|null>} - The menu record or null if not found.

<!-- DOCGEN:END getMenuById -->
