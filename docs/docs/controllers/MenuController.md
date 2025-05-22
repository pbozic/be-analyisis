# MenuController Controller


<!-- DOCGEN:START getMenuByBusinessId -->
### getMenuByBusinessId

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Set

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Get

**Description**: Retrieves

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Create

**Description**: Creates

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

**Summary**: Retrieve

**Description**: Fetches

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

**Summary**: Delete

**Description**: Deletes

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Updates

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

**Summary**: Update

**Description**: Add

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

**Summary**: Remove

**Description**: Removes

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

**Summary**: Add

**Description**: Adds

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

**Summary**: Remove

**Description**: Removes

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
