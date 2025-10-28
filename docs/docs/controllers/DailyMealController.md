# DailyMealController Controller

<!-- DOCGEN:START dailyMealsSubscriptionPayment -->
### dailyMealsSubscriptionPayment

**Summary**: Create a daily meals subscription payment

**Description**: Creates a payment intent for a daily meals subscription, creates the subscription (with nested customers, days, weekdays), and returns the subscription id and payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/dailyMealsSubscriptionPayment )

<!-- DOCGEN:END dailyMealsSubscriptionPayment -->

<!-- DOCGEN:START getUserDailyMealSubscriptions -->
### getUserDailyMealSubscriptions

**Summary**: Get all daily meal subscriptions for the current user

**Description**: Returns all daily meal subscriptions for the authenticated user, including related user, business, delivery_address, customers, days, weekdays, and daily_meal_instances.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getUserDailyMealSubscriptions )

<!-- DOCGEN:END getUserDailyMealSubscriptions -->

<!-- DOCGEN:START getActiveDailyMealsSubscriptionsByBusinessId -->
### getActiveDailyMealsSubscriptionsByBusinessId

**Summary**: Get active daily meal subscriptions for a business

**Description**: Returns all daily meal subscriptions for the given business, including related user, business, delivery_address, customers, days, weekdays, and daily_meal_instances. Optionally filter by start_date in the request body.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDailyMealsSubscriptionsByBusinessId )

<!-- DOCGEN:END getActiveDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START getDailyMealsSubscriptionsByBusinessId -->
### getDailyMealsSubscriptionsByBusinessId

**Summary**: Get all daily meal subscriptions for a business

**Description**: Returns all daily meal subscriptions for the given business, including related user, business, delivery_address, customers, days, weekdays, and daily_meal_instances. Optionally filter by start_date in the request body.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDailyMealsSubscriptionsByBusinessId )

<!-- DOCGEN:END getDailyMealsSubscriptionsByBusinessId -->

<!-- DOCGEN:START activateSubscriptionById -->
### activateSubscriptionById

**Summary**: Activate a daily meal subscription by ID

**Description**: Activates a daily meal subscription by its ID, marking it as active and ready for delivery.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | subscription_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateSubscriptionById )

<!-- DOCGEN:END activateSubscriptionById -->

<!-- DOCGEN:START cancelSubscriptionById -->
### cancelSubscriptionById

**Summary**: Cancel a daily meal subscription by ID

**Description**: Cancels a daily meal subscription by its ID, marking it as canceled and updating all related daily meal instances to CANCELED status.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | subscription_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/cancelSubscriptionById )

<!-- DOCGEN:END cancelSubscriptionById -->

<!-- DOCGEN:START cancelDailyMealInstanceById -->
### cancelDailyMealInstanceById

**Summary**: Cancel a daily meal instance by ID

**Description**: Cancels a daily meal instance by its ID, marking it as canceled.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | instance_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/cancelDailyMealInstanceById )

<!-- DOCGEN:END cancelDailyMealInstanceById -->

<!-- DOCGEN:START getSubscriptionById -->
### getSubscriptionById

**Summary**: Get a daily meal subscription by ID

**Description**: Returns a daily meal subscription by its ID, including related user, business, delivery_address, customers, days, weekdays, and daily_meal_instances.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | subscription_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 404, Type: `unknown`, Content-Type: `application/json`
- Status: 500, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getSubscriptionById )

<!-- DOCGEN:END getSubscriptionById -->

<!-- DOCGEN:START assignDeliveryDriverToSubscription -->
### assignDeliveryDriverToSubscription

**Summary**: Assign a delivery driver to a daily meal subscription

**Description**: Assigns a delivery driver to a daily meal subscription by its ID, updating the subscription with the driver's ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | subscription_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 500, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/assignDeliveryDriverToSubscription )

<!-- DOCGEN:END assignDeliveryDriverToSubscription -->
