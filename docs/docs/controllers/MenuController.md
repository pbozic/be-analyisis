# MenuController Controller



<!-- DOCGEN:START getMenuByBusinessId -->
### getMenuByBusinessId

**Summary**: Get menus by business ID

**Description**: Retrieves a list of menus for a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200 - Successful operation, returns a list of menus
- 400 - Error occurred while obtaining the menu list

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuByBusinessId )

<!-- DOCGEN:END getMenuByBusinessId -->



<!-- DOCGEN:START getDailyMenuByBusinessId -->
### getDailyMenuByBusinessId

**Summary**: Get menus by business ID

**Description**: Retrieves a list of menus for a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200 - Successful operation, returns a list of menus
- 400 - Error occurred while obtaining the menu list

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDailyMenuByBusinessId )

<!-- DOCGEN:END getDailyMenuByBusinessId -->



<!-- DOCGEN:START createMenu -->
### createMenu

**Summary**: Create a new menu

**Description**: Creates a new menu for a business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201 - Menu created successfully
- 400 - Error creating new menu

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createMenu )

<!-- DOCGEN:END createMenu -->



<!-- DOCGEN:START createDailyMealMenu -->
### createDailyMealMenu

**Summary**: Create a new daily meal menu

**Description**: Creates a new daily meal menu for merchant.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu created successfully
- 400 - Error creating new menu

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealMenu )

<!-- DOCGEN:END createDailyMealMenu -->



<!-- DOCGEN:START deleteMenu -->
### deleteMenu

**Summary**: Delete a menu

**Description**: Deletes a menu by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_id |  |

**Responses:**
- 204 - Menu deleted successfully
- 400 - Error deleting menu

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteMenu )

<!-- DOCGEN:END deleteMenu -->



<!-- DOCGEN:START setActiveMenu -->
### setActiveMenu

**Summary**: Set menu active status

**Description**: Updates the active status of a menu.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu active status updated successfully
- 400 - Error updating menu active status

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setActiveMenu )

<!-- DOCGEN:END setActiveMenu -->



<!-- DOCGEN:START createMenuCategory -->
### createMenuCategory

**Summary**: Create a new menu category

**Description**: Creates a new menu category for a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201 - Menu category created successfully
- 400 - Error creating new menu category

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createMenuCategory )

<!-- DOCGEN:END createMenuCategory -->



<!-- DOCGEN:START addMenuItemIdToOrder -->
### addMenuItemIdToOrder

**Summary**: Add a menu item ID to the ordered list

**Description**: Adds a menu item ID to the ordered list of a menu category.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu item ID added to order successfully
- 400 - Error adding menu item ID to order

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addMenuItemIdToOrder )

<!-- DOCGEN:END addMenuItemIdToOrder -->



<!-- DOCGEN:START removeMenuItemIdFromOrder -->
### removeMenuItemIdFromOrder

**Summary**: Remove a menu item ID from the ordered list

**Description**: Removes a menu item ID from the ordered list of a menu category.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu item ID removed from order successfully
- 400 - Error removing menu item ID from order

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeMenuItemIdFromOrder )

<!-- DOCGEN:END removeMenuItemIdFromOrder -->



<!-- DOCGEN:START addMenuCategoryIdToOrder -->
### addMenuCategoryIdToOrder

**Summary**: Add a menu category ID to the ordered list

**Description**: Adds a menu category ID to the ordered list of categories in a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu category ID added to order successfully
- 400 - Error adding menu category ID to order

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addMenuCategoryIdToOrder )

<!-- DOCGEN:END addMenuCategoryIdToOrder -->



<!-- DOCGEN:START removeMenuCategoryIdFromOrder -->
### removeMenuCategoryIdFromOrder

**Summary**: Remove a menu category ID from the ordered list

**Description**: Removes a menu category ID from the ordered list of categories in a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu category ID removed from order successfully
- 400 - Error removing menu category ID from order

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeMenuCategoryIdFromOrder )

<!-- DOCGEN:END removeMenuCategoryIdFromOrder -->



<!-- DOCGEN:START getMenuItemsByCategoryId -->
### getMenuItemsByCategoryId

**Summary**: Get menu items by category ID

**Description**: Retrieves a list of menu items for a specific menu category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | category_id |  |

**Responses:**
- 200 - Successful operation, returns a list of menu items
- 400 - Error occurred while obtaining the menu items

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuItemsByCategoryId )

<!-- DOCGEN:END getMenuItemsByCategoryId -->



<!-- DOCGEN:START getMenuCategoriesByMenuId -->
### getMenuCategoriesByMenuId

**Summary**: Get menu categories by menu ID

**Description**: Retrieves a list of menu categories for a specific menu.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_id |  |

**Responses:**
- 200 - Successful operation, returns a list of menu categories
- 400 - Error occurred while obtaining the menu categories

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuCategoriesByMenuId )

<!-- DOCGEN:END getMenuCategoriesByMenuId -->



<!-- DOCGEN:START getMenuCategoriesByBusinessId -->
### getMenuCategoriesByBusinessId

**Summary**: Get menu categories by business ID

**Description**: Retrieves a list of menu categories for a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200 - Successful operation, returns a list of menu categories
- 400 - Error occurred while obtaining the menu categories

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuCategoriesByBusinessId )

<!-- DOCGEN:END getMenuCategoriesByBusinessId -->



<!-- DOCGEN:START getMenuItemsByBusinessId -->
### getMenuItemsByBusinessId

**Summary**: Get menu items by business ID

**Description**: Retrieves a list of menu items for a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200 - Successful operation, returns a list of menu items
- 400 - Error occurred while obtaining the menu items

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuItemsByBusinessId )

<!-- DOCGEN:END getMenuItemsByBusinessId -->



<!-- DOCGEN:START deleteMenuCategory -->
### deleteMenuCategory

**Summary**: Delete a menu category

**Description**: Deletes a menu category by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_category_id |  |

**Responses:**
- 204 - Menu category deleted successfully
- 400 - Error deleting menu category

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteMenuCategory )

<!-- DOCGEN:END deleteMenuCategory -->



<!-- DOCGEN:START updateMenuCategory -->
### updateMenuCategory

**Summary**: Update a menu category

**Description**: Updates a menu category by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_category_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu category updated successfully
- 400 - Error updating menu category

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuCategory )

<!-- DOCGEN:END updateMenuCategory -->



<!-- DOCGEN:START updateMenuOrder -->
### updateMenuOrder

**Summary**: Update a menu order

**Description**: Updates a menu order by the menu category IDs.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu category updated successfully
- 400 - Error updating menu order

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuOrder )

<!-- DOCGEN:END updateMenuOrder -->



<!-- DOCGEN:START updateMenuItemsOrder -->
### updateMenuItemsOrder

**Summary**: Update a menu items order

**Description**: Updates a menu items order by the menu items IDs.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_category_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu items order updated successfully
- 400 - Error updating menu order

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuItemsOrder )

<!-- DOCGEN:END updateMenuItemsOrder -->



<!-- DOCGEN:START createMenuItem -->
### createMenuItem

**Summary**: Create a new menu item

**Description**: Creates a new menu item for a menu category.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201 - Menu item created successfully
- 400 - Error creating new menu item

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createMenuItem )

<!-- DOCGEN:END createMenuItem -->



<!-- DOCGEN:START createDailyMealsMenu -->
### createDailyMealsMenu

**Summary**: Create a new menu daily meals menu

**Description**: Creates a new daily meals menu for a business

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201 - Menu created successfully
- 400 - Error creating new menu

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->



<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200 - Last daily meals menu retrieved successfully
- 404 - No daily meals menu found
- 500 - Error retrieving the last daily meals menu

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `404.application/json`
- ⚠️ Could not parse: `500.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getLastDailyMealsMenu )

<!-- DOCGEN:END getLastUploadedDailyMealsMenu -->



<!-- DOCGEN:START deleteMenuItem -->
### deleteMenuItem

**Summary**: Delete a menu item

**Description**: Deletes a menu item by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_item_id |  |

**Responses:**
- 204 - Menu item deleted successfully
- 400 - Error deleting menu item

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteMenuItem )

<!-- DOCGEN:END deleteMenuItem -->



<!-- DOCGEN:START updateMenuItem -->
### updateMenuItem

**Summary**: Update a menu item

**Description**: Updates a menu item by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_item_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu item updated successfully
- 400 - Error updating menu item

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuItem )

<!-- DOCGEN:END updateMenuItem -->



<!-- DOCGEN:START updateMenuItemEnabled -->
### updateMenuItemEnabled

**Summary**: Update a menu item enabled field

**Description**: Updates a menu item by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_item_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu item updated successfully
- 400 - Error updating menu item

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuItem )

<!-- DOCGEN:END updateMenuItemEnabled -->



<!-- DOCGEN:START updateMenuItemPrice -->
### updateMenuItemPrice

**Summary**: Update menu item price

**Description**: Updates the price of a menu item.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_item_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu item price updated successfully
- 400 - Error updating menu item price

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuItemPrice )

<!-- DOCGEN:END updateMenuItemPrice -->



<!-- DOCGEN:START addMenuItemMenuCategory -->
### addMenuItemMenuCategory

**Summary**: Update menu item category

**Description**: Add menu item to a category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_item_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu item category updated successfully
- 400 - Error updating menu item category

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addMenuItemToCategory )

<!-- DOCGEN:END addMenuItemMenuCategory -->



<!-- DOCGEN:START removeMenuItemFromCategory -->
### removeMenuItemFromCategory

**Summary**: Remove menu item from category

**Description**: Removes a menu item from its category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_item_id |  |

**Responses:**
- 200 - Menu item removed from category successfully
- 400 - Error removing menu item from category

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeMenuItemFromCategory )

<!-- DOCGEN:END removeMenuItemFromCategory -->



<!-- DOCGEN:START addMenuCategory -->
### addMenuCategory

**Summary**: Add a menu category to a menu

**Description**: Adds a menu category to a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu category added successfully
- 400 - Error adding menu category

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addMenuCategory )

<!-- DOCGEN:END addMenuCategory -->



<!-- DOCGEN:START removeMenuCategory -->
### removeMenuCategory

**Summary**: Remove a menu category from a menu

**Description**: Removes a menu category from a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Menu category removed successfully
- 400 - Error removing menu category

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeMenuCategory )

<!-- DOCGEN:END removeMenuCategory -->



<!-- DOCGEN:START deleteDocumentsAndFilesByDocumentId -->
### deleteDocumentsAndFilesByDocumentId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END deleteDocumentsAndFilesByDocumentId -->



<!-- DOCGEN:START getMenuItemsByDate -->
### getMenuItemsByDate

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getMenuItemsByDate -->



<!-- DOCGEN:START getMenuByDate -->
### getMenuByDate

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getMenuByDate -->



<!-- DOCGEN:START updateDailyMealMenuPrice -->
### updateDailyMealMenuPrice

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END updateDailyMealMenuPrice -->



<!-- DOCGEN:START getMenuItemsByIds -->
### getMenuItemsByIds

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getMenuItemsByIds -->



<!-- DOCGEN:START getActiveTaxRates -->
### getActiveTaxRates

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getActiveTaxRates -->

