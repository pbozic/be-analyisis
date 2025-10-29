# WordController Controller

<!-- DOCGEN:START createWord -->
### createWord

**Summary**: Create a new word

**Description**: Creates a word with category and translations.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createWord )

<!-- DOCGEN:END createWord -->

<!-- DOCGEN:START updateWord -->
### updateWord

**Summary**: Update a word

**Description**: Updates word value, category, and translations.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateWord )

<!-- DOCGEN:END updateWord -->

<!-- DOCGEN:START deleteWord -->
### deleteWord

**Summary**: Delete a word

**Description**: Deletes a word by ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteWord )

<!-- DOCGEN:END deleteWord -->

<!-- DOCGEN:START getWordById -->
### getWordById

**Summary**: Get a word by ID

**Description**: Retrieves a word with its translations and category.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getWordById )

<!-- DOCGEN:END getWordById -->

<!-- DOCGEN:START getAllWords -->
### getAllWords

**Summary**: List all words

**Description**: Retrieves all words with translations and categories.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllWords )

<!-- DOCGEN:END getAllWords -->

<!-- DOCGEN:START removeCategoryFromWord -->
### removeCategoryFromWord

**Summary**: Remove category from word

**Description**: Disconnects the category from the specified word.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeCategoryFromWord )

<!-- DOCGEN:END removeCategoryFromWord -->

<!-- DOCGEN:START createWordBuy -->
### createWordBuy

**Summary**: Create word buy subscription items

**Description**: Creates word buy entries and ensures a Stripe subscription is active or updated.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createWordBuy )

<!-- DOCGEN:END createWordBuy -->

<!-- DOCGEN:START getWordBuyById -->
### getWordBuyById

**Summary**: Get word buy by ID

**Description**: Retrieves a single word buy entry by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getWordBuyById )

<!-- DOCGEN:END getWordBuyById -->

<!-- DOCGEN:START getAllWordBuys -->
### getAllWordBuys

**Summary**: List all word buys

**Description**: Retrieves all word buys.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllWordBuys )

<!-- DOCGEN:END getAllWordBuys -->

<!-- DOCGEN:START deleteWordBuy -->
### deleteWordBuy

**Summary**: Delete a word buy

**Description**: Soft-deletes a word buy and updates user subscription state.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteWordBuy )

<!-- DOCGEN:END deleteWordBuy -->

<!-- DOCGEN:START updateWordBuy -->
### updateWordBuy

**Summary**: Update a word buy

**Description**: Updates fields on a word buy, such as price.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateWordBuy )

<!-- DOCGEN:END updateWordBuy -->

<!-- DOCGEN:START updateWordBuys -->
### updateWordBuys

**Summary**: Bulk create/update word buys

**Description**: Creates or updates multiple word buys and updates Stripe subscription accordingly.

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateWordBuys )

<!-- DOCGEN:END updateWordBuys -->

<!-- DOCGEN:START getWordBuysByBusiness -->
### getWordBuysByBusiness

**Summary**: Get active word buys for a business

**Description**: Retrieves active word buys for the specified business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getWordBuysByBusiness )

<!-- DOCGEN:END getWordBuysByBusiness -->
