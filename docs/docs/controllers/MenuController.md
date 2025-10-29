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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 201
- 400

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 204
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteMenu )

<!-- DOCGEN:END deleteMenu -->

<!-- DOCGEN:START setActiveMenu -->
### setActiveMenu

**Summary**: Set menu active status

**Description**: Updates the active status of a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 201
- 400

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeMenuCategoryIdFromOrder )

<!-- DOCGEN:END removeMenuCategoryIdFromOrder -->

<!-- DOCGEN:START getMenuItemsByCategoryId -->
### getMenuItemsByCategoryId

**Summary**: Get menu items by category ID

**Description**: Retrieves a list of menu items for a specific menu category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_category_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 204
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteMenuCategory )

<!-- DOCGEN:END deleteMenuCategory -->

<!-- DOCGEN:START updateMenuCategory -->
### updateMenuCategory

**Summary**: Update a menu category

**Description**: Updates a menu category by its ID.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuCategory )

<!-- DOCGEN:END updateMenuCategory -->

<!-- DOCGEN:START updateMenuOrder -->
### updateMenuOrder

**Summary**: Update a menu order

**Description**: Updates a menu order by the menu category IDs.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuOrder )

<!-- DOCGEN:END updateMenuOrder -->

<!-- DOCGEN:START updateMenuItemsOrder -->
### updateMenuItemsOrder

**Summary**: Update a menu items order

**Description**: Updates a menu items order by the menu items IDs.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 201
- 400

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

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
- 201
- 400

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 404, Type: `unknown`, Content-Type: `application/json`
- Status: 500, Type: `unknown`, Content-Type: `application/json`

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
- 204
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteMenuItem )

<!-- DOCGEN:END deleteMenuItem -->

<!-- DOCGEN:START updateMenuItem -->
### updateMenuItem

**Summary**: Update a menu item

**Description**: Updates a menu item by its ID.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuItem )

<!-- DOCGEN:END updateMenuItem -->

<!-- DOCGEN:START updateMenuItemEnabled -->
### updateMenuItemEnabled

**Summary**: Update a menu item enabled field

**Description**: Updates a menu item by its ID.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuItemPrice )

<!-- DOCGEN:END updateMenuItemPrice -->

<!-- DOCGEN:START addMenuItemMenuCategory -->
### addMenuItemMenuCategory

**Summary**: Update menu item category

**Description**: Add menu item to a category.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addMenuItemToCategory )

<!-- DOCGEN:END addMenuItemMenuCategory -->

<!-- DOCGEN:START removeMenuItemFromCategory -->
### removeMenuItemFromCategory

**Summary**: Remove menu item from category

**Description**: Removes a menu item from its category.

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeMenuCategory )

<!-- DOCGEN:END removeMenuCategory -->

<!-- DOCGEN:START createMenuItemVersion -->
### createMenuItemVersion

**Summary**: Create a new menu item version

**Description**: Creates a menu_item_versions snapshot for a menu item.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createMenuItemVersion )

<!-- DOCGEN:END createMenuItemVersion -->

<!-- DOCGEN:START deleteDocumentsAndFilesByDocumentId -->
### deleteDocumentsAndFilesByDocumentId

**Summary**: Delete documents and files by field and id

**Description**: Deletes all documents and associated files based on the provided field and id.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | field |  |
| undefined | path | id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteDocumentsAndFilesByDocumentId )

<!-- DOCGEN:END deleteDocumentsAndFilesByDocumentId -->

<!-- DOCGEN:START getMenuItemsByDate -->
### getMenuItemsByDate

**Summary**: Get menu items by date

**Description**: Retrieves menu items for a business on a specific date.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |
| undefined | path | date |  |

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuItemsByDate )

<!-- DOCGEN:END getMenuItemsByDate -->

<!-- DOCGEN:START getMenuByDate -->
### getMenuByDate

**Summary**: Get menu by date

**Description**: Retrieves a menu for a business on a specific date.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |
| undefined | path | date |  |

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuByDate )

<!-- DOCGEN:END getMenuByDate -->

<!-- DOCGEN:START updateDailyMealMenuPrice -->
### updateDailyMealMenuPrice

**Summary**: Update daily meal menu price

**Description**: Updates the price for a daily meal menu category.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDailyMealMenuPrice )

<!-- DOCGEN:END updateDailyMealMenuPrice -->

<!-- DOCGEN:START getMenuItemsByIds -->
### getMenuItemsByIds

**Summary**: Get menu items by IDs

**Description**: Retrieves menu items by list of ids for a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuItemsByIds )

<!-- DOCGEN:END getMenuItemsByIds -->

<!-- DOCGEN:START getActiveTaxRates -->
### getActiveTaxRates

**Summary**: Get active tax rates

**Description**: Retrieves all active tax rates.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveTaxRates )

<!-- DOCGEN:END getActiveTaxRates -->
