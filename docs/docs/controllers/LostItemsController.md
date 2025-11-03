# LostItemsController Controller

<!-- DOCGEN:START getAllLostItems -->

### getAllLostItems

**Summary**: Get all lost items with their documents and files

**Description**: Retrieves all lost items, including their associated documents and files.

**Responses:**

- 200 - Successful retrieval of lost items
- 500 - Error retrieving lost items

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllLostItems)

<!-- DOCGEN:END getAllLostItems -->

<!-- DOCGEN:START reportFoundItem -->

### reportFoundItem

**Summary**: Report a found item

**Description**: Reports a found item and adds it to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 201 - Found item reported successfully
- 400 - Error reporting found item

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reportFoundItem)

<!-- DOCGEN:END reportFoundItem -->

<!-- DOCGEN:START deleteFoundItem -->

### deleteFoundItem

**Summary**: Delete a found item

**Description**: Deletes a found item from the database.

**Parameters:**

| Name      | In   | Type         | Description |
| --------- | ---- | ------------ | ----------- |
| undefined | path | lost_item_id |             |

**Responses:**

- 200 - Found item deleted successfully
- 400 - Error deleting found item

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFoundItem)

<!-- DOCGEN:END deleteFoundItem -->

<!-- DOCGEN:START updateLostItem -->

### updateLostItem

**Summary**: Update a lost item

**Description**: Updates the details of a lost item in the database.

**Parameters:**

| Name      | In   | Type         | Description |
| --------- | ---- | ------------ | ----------- |
| undefined | path | lost_item_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Lost item updated successfully
- 400 - Error updating lost item

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateLostItem)

<!-- DOCGEN:END updateLostItem -->
