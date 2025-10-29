# Categories DAO

<!-- DOCGEN:START getCategories -->
### getCategories

**Description**: Get all categories with translations, icon, and subcategories; flattens translations onto the result.

**Returns**: {Promise<object[]>} - Array of category records with translations and relations.

<!-- DOCGEN:END getCategories -->

<!-- DOCGEN:START getCategoriesByType -->
### getCategoriesByType

**Description**: Get categories by category_type with translations and relations.

**Parameters**:
- type: {string} - Category type to filter by.

**Returns**: {Promise<object[]>} - Array of category records.

<!-- DOCGEN:END getCategoriesByType -->

<!-- DOCGEN:START getCategoryById -->
### getCategoryById

**Description**: Get a single category by ID with translations and relations.

**Parameters**:
- id: {string} - Category ID.

**Returns**: {Promise<object>} - The category record.

<!-- DOCGEN:END getCategoryById -->

<!-- DOCGEN:START createCategory -->
### createCategory

**Description**: Create a new category with translations, optional parent, subcategories, and optional icon.

**Parameters**:
- categoryData: {object} - Base category fields (tag, category_type, name, etc.).
- translations: {object[]} - Array of translation objects to insert.
- subcategories: {string[]} - Array of category IDs to connect as subcategories.
- words: {string[]} - Array of word IDs to connect (unused here but kept for signature compatibility).
- parent_categories_id: {string|null} - Optional parent category ID.
- iconFileData?: {object} - Optional icon file metadata (file_type, mime_type).

**Returns**: {Promise<object>} - The created category with translations and icon included.

<!-- DOCGEN:END createCategory -->

<!-- DOCGEN:START updateCategory -->
### updateCategory

**Description**: Update a category and its translations, subcategories, parent, and optional icon.

**Parameters**:
- id: {string} - Category ID to update.
- categoryData: {object} - Partial fields to update on category.
- translations: {object[]} - Translations to upsert by language.
- subcategories: {string[]|null} - New list of subcategory IDs (replaces existing when provided).
- parent_categories_id: {string|null} - New parent category ID or null to disconnect.
- iconFileData?: {object|null} - Optional icon file metadata to set or update.

**Returns**: {Promise<object>} - The updated category with icon included.

<!-- DOCGEN:END updateCategory -->

<!-- DOCGEN:START deleteCategory -->
### deleteCategory

**Description**: Delete a category by ID after disconnecting related words.

**Parameters**:
- id: {string} - Category ID.

**Returns**: {Promise<object>} - The deleted category record.

<!-- DOCGEN:END deleteCategory -->

