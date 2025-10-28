# DailyMealCategoryController Controller

<!-- DOCGEN:START createDailyMealCategoryWithPrice -->
### createDailyMealCategoryWithPrice

**Summary**: Create a daily meal category for a business

**Description**: Creates a new daily meal category for a business and sets its initial price.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDailyMealCategoryWithPrice )

<!-- DOCGEN:END createDailyMealCategoryWithPrice -->

<!-- DOCGEN:START getDailyMealCategoriesForBusiness -->
### getDailyMealCategoriesForBusiness

**Summary**: List active daily meal categories for a business

**Description**: Lists all currently active daily meal categories for a business, including their latest price.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDailyMealCategoriesForBusiness )

<!-- DOCGEN:END getDailyMealCategoriesForBusiness -->

<!-- DOCGEN:START addPriceToDailyMealCategory -->
### addPriceToDailyMealCategory

**Summary**: Add a new price entry to a daily meal category

**Description**: Adds a new price entry for a daily meal category, effective from a given date. Also updates all menu_category entries for the relevant daily meal category where the menu date is above the new price's valid_from, to connect with the new daily_meal_category_price_id.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addPriceToDailyMealCategory )

<!-- DOCGEN:END addPriceToDailyMealCategory -->

<!-- DOCGEN:START deactivateDailyMealCategory -->
### deactivateDailyMealCategory

**Summary**: Remove a daily meal category from a business

**Description**: Deactivates a daily meal category from a business.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateDailyMealCategory )

<!-- DOCGEN:END deactivateDailyMealCategory -->

<!-- DOCGEN:START activateDailyMealCategory -->
### activateDailyMealCategory

**Summary**: Add a daily meal category back to business

**Description**: Activates a daily meal category of a business.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateDailyMealCategory )

<!-- DOCGEN:END activateDailyMealCategory -->
