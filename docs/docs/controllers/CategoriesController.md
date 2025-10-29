# CategoriesController Controller

<!-- DOCGEN:START getCategories -->
### getCategories

**Summary**: Get all categories

**Description**: Retrieves all categories.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCategories )

<!-- DOCGEN:END getCategories -->

<!-- DOCGEN:START getCategoriesByType -->
### getCategoriesByType

**Summary**: Get categories by type

**Description**: Retrieves categories by category type.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | category_type |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCategoriesByType )

<!-- DOCGEN:END getCategoriesByType -->

<!-- DOCGEN:START createCategory -->
### createCategory

**Summary**: Create a category

**Description**: Creates a category with translations, subcategories and optional icon.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createCategory )

<!-- DOCGEN:END createCategory -->

<!-- DOCGEN:START updateCategory -->
### updateCategory

**Summary**: Update a category

**Description**: Updates a category with translations, subcategories and optional icon.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateCategory )

<!-- DOCGEN:END updateCategory -->

<!-- DOCGEN:START deleteCategory -->
### deleteCategory

**Summary**: Delete a category

**Description**: Deletes a category by id.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Responses:**
- 204
- 500

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteCategory )

<!-- DOCGEN:END deleteCategory -->

<!-- DOCGEN:START getCategoryById -->
### getCategoryById

**Summary**: Get category by id

**Description**: Retrieves a category by id.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getCategoryById )

<!-- DOCGEN:END getCategoryById -->

