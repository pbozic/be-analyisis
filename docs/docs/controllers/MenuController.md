# MenuController Controller


<!-- DOCGEN:START getMenuByBusinessId -->
### getMenuByBusinessId

**Summary**: Getmenus by business ID

**Description**: Retrievesa list of menus for a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuByBusinessId)

<!-- DOCGEN:END getMenuByBusinessId -->

<!-- DOCGEN:START getDailyMenuByBusinessId -->
### getDailyMenuByBusinessId

**Summary**: Getmenus by business ID

**Description**: Retrievesa list of menus for a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDailyMenuByBusinessId)

<!-- DOCGEN:END getDailyMenuByBusinessId -->

<!-- DOCGEN:START createMenu -->
### createMenu

**Summary**: Createa new menu

**Description**: Createsa new menu for a business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createMenu)

<!-- DOCGEN:END createMenu -->

<!-- DOCGEN:START createDailyMealMenu -->
### createDailyMealMenu

**Summary**: Createa new daily meal menu

**Description**: Createsa new daily meal menu for merchant.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealMenu)

<!-- DOCGEN:END createDailyMealMenu -->

<!-- DOCGEN:START deleteMenu -->
### deleteMenu

**Summary**: Deletea menu

**Description**: Deletesa menu by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_id |  |

**Responses:**
- 204
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteMenu)

<!-- DOCGEN:END deleteMenu -->

<!-- DOCGEN:START setActiveMenu -->
### setActiveMenu

**Summary**: Setmenu active status

**Description**: Updatesthe active status of a menu.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setActiveMenu)

<!-- DOCGEN:END setActiveMenu -->

<!-- DOCGEN:START createMenuCategory -->
### createMenuCategory

**Summary**: Createa new menu category

**Description**: Createsa new menu category for a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createMenuCategory)

<!-- DOCGEN:END createMenuCategory -->

<!-- DOCGEN:START addMenuItemIdToOrder -->
### addMenuItemIdToOrder

**Summary**: Adda menu item ID to the ordered list

**Description**: Addsa menu item ID to the ordered list of a menu category.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addMenuItemIdToOrder)

<!-- DOCGEN:END addMenuItemIdToOrder -->

<!-- DOCGEN:START removeMenuItemIdFromOrder -->
### removeMenuItemIdFromOrder

**Summary**: Removea menu item ID from the ordered list

**Description**: Removesa menu item ID from the ordered list of a menu category.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeMenuItemIdFromOrder)

<!-- DOCGEN:END removeMenuItemIdFromOrder -->

<!-- DOCGEN:START addMenuCategoryIdToOrder -->
### addMenuCategoryIdToOrder

**Summary**: Adda menu category ID to the ordered list

**Description**: Addsa menu category ID to the ordered list of categories in a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addMenuCategoryIdToOrder)

<!-- DOCGEN:END addMenuCategoryIdToOrder -->

<!-- DOCGEN:START removeMenuCategoryIdFromOrder -->
### removeMenuCategoryIdFromOrder

**Summary**: Removea menu category ID from the ordered list

**Description**: Removesa menu category ID from the ordered list of categories in a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeMenuCategoryIdFromOrder)

<!-- DOCGEN:END removeMenuCategoryIdFromOrder -->

<!-- DOCGEN:START getMenuItemsByCategoryId -->
### getMenuItemsByCategoryId

**Summary**: Getmenu items by category ID

**Description**: Retrievesa list of menu items for a specific menu category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | category_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuItemsByCategoryId)

<!-- DOCGEN:END getMenuItemsByCategoryId -->

<!-- DOCGEN:START getMenuCategoriesByMenuId -->
### getMenuCategoriesByMenuId

**Summary**: Getmenu categories by menu ID

**Description**: Retrievesa list of menu categories for a specific menu.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuCategoriesByMenuId)

<!-- DOCGEN:END getMenuCategoriesByMenuId -->

<!-- DOCGEN:START getMenuCategoriesByBusinessId -->
### getMenuCategoriesByBusinessId

**Summary**: Getmenu categories by business ID

**Description**: Retrievesa list of menu categories for a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuCategoriesByBusinessId)

<!-- DOCGEN:END getMenuCategoriesByBusinessId -->

<!-- DOCGEN:START getMenuItemsByBusinessId -->
### getMenuItemsByBusinessId

**Summary**: Getmenu items by business ID

**Description**: Retrievesa list of menu items for a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMenuItemsByBusinessId)

<!-- DOCGEN:END getMenuItemsByBusinessId -->

<!-- DOCGEN:START deleteMenuCategory -->
### deleteMenuCategory

**Summary**: Deletea menu category

**Description**: Deletesa menu category by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_category_id |  |

**Responses:**
- 204
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteMenuCategory)

<!-- DOCGEN:END deleteMenuCategory -->

<!-- DOCGEN:START updateMenuCategory -->
### updateMenuCategory

**Summary**: Updatea menu category

**Description**: Updatesa menu category by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_category_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuCategory)

<!-- DOCGEN:END updateMenuCategory -->

<!-- DOCGEN:START updateMenuOrder -->
### updateMenuOrder

**Summary**: Updatea menu order

**Description**: Updatesa menu order by the menu category IDs.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuOrder)

<!-- DOCGEN:END updateMenuOrder -->

<!-- DOCGEN:START updateMenuItemsOrder -->
### updateMenuItemsOrder

**Summary**: Updatea menu items order

**Description**: Updatesa menu items order by the menu items IDs.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_category_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuItemsOrder)

<!-- DOCGEN:END updateMenuItemsOrder -->

<!-- DOCGEN:START createMenuItem -->
### createMenuItem

**Summary**: Createa new menu item

**Description**: Createsa new menu item for a menu category.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createMenuItem)

<!-- DOCGEN:END createMenuItem -->

<!-- DOCGEN:START createDailyMealsMenu -->
### createDailyMealsMenu

**Summary**: Createa new menu daily meals menu

**Description**: Createsa new daily meals menu for a business

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu)

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrievethe last uploaded daily meals menu

**Description**: Fetchesthe most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `404.application/json`
- ⚠️ Could not parse: `500.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getLastDailyMealsMenu)

<!-- DOCGEN:END getLastUploadedDailyMealsMenu -->

<!-- DOCGEN:START deleteMenuItem -->
### deleteMenuItem

**Summary**: Deletea menu item

**Description**: Deletesa menu item by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_item_id |  |

**Responses:**
- 204
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteMenuItem)

<!-- DOCGEN:END deleteMenuItem -->

<!-- DOCGEN:START updateMenuItem -->
### updateMenuItem

**Summary**: Updatea menu item

**Description**: Updatesa menu item by its ID.

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuItem)

<!-- DOCGEN:END updateMenuItem -->

<!-- DOCGEN:START updateMenuItemEnabled -->
### updateMenuItemEnabled

**Summary**: Updatea menu item enabled field

**Description**: Updatesa menu item by its ID.

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuItem)

<!-- DOCGEN:END updateMenuItemEnabled -->

<!-- DOCGEN:START updateMenuItemPrice -->
### updateMenuItemPrice

**Summary**: Updatemenu item price

**Description**: Updatesthe price of a menu item.

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMenuItemPrice)

<!-- DOCGEN:END updateMenuItemPrice -->

<!-- DOCGEN:START addMenuItemMenuCategory -->
### addMenuItemMenuCategory

**Summary**: Updatemenu item category

**Description**: Addmenu item to a category.

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

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addMenuItemToCategory)

<!-- DOCGEN:END addMenuItemMenuCategory -->

<!-- DOCGEN:START removeMenuItemFromCategory -->
### removeMenuItemFromCategory

**Summary**: Removemenu item from category

**Description**: Removesa menu item from its category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | menu_item_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeMenuItemFromCategory)

<!-- DOCGEN:END removeMenuItemFromCategory -->

<!-- DOCGEN:START addMenuCategory -->
### addMenuCategory

**Summary**: Adda menu category to a menu

**Description**: Addsa menu category to a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addMenuCategory)

<!-- DOCGEN:END addMenuCategory -->

<!-- DOCGEN:START removeMenuCategory -->
### removeMenuCategory

**Summary**: Removea menu category from a menu

**Description**: Removesa menu category from a menu.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeMenuCategory)

<!-- DOCGEN:END removeMenuCategory -->

<!-- DOCGEN:START deleteDocumentsAndFilesByDocumentId -->
### deleteDocumentsAndFilesByDocumentId

<!-- DOCGEN:END deleteDocumentsAndFilesByDocumentId -->

<!-- DOCGEN:START getMenuItemsByDate -->
### getMenuItemsByDate

<!-- DOCGEN:END getMenuItemsByDate -->

<!-- DOCGEN:START getMenuByDate -->
### getMenuByDate

<!-- DOCGEN:END getMenuByDate -->

<!-- DOCGEN:START updateDailyMealMenuPrice -->
### updateDailyMealMenuPrice

<!-- DOCGEN:END updateDailyMealMenuPrice -->

<!-- DOCGEN:START getMenuItemsByIds -->
### getMenuItemsByIds

<!-- DOCGEN:END getMenuItemsByIds -->

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 201
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 201
- 400

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
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealsMenu )

<!-- DOCGEN:END createDailyMealsMenu -->

<!-- DOCGEN:START getLastUploadedDailyMealsMenu -->
### getLastUploadedDailyMealsMenu

**Summary**: Retrieve the last uploaded daily meals menu

**Description**: Fetches the most recent daily meals menu for a business, including the menu's name and URL.

**Responses:**
- 200
- 404
- 500

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
- 204
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
- 200
- 400

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
