# PromoController Controller

<!-- DOCGEN:START createPromoSection -->
### createPromoSection

**Summary**: Create a new promo section

**Description**: Creates a new promo section and associated Stripe product and pricing.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPromoSection )

<!-- DOCGEN:END createPromoSection -->

<!-- DOCGEN:START deletePromoSection -->
### deletePromoSection

**Summary**: Delete a promo section

**Description**: Deletes a promo section by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deletePromoSection )

<!-- DOCGEN:END deletePromoSection -->

<!-- DOCGEN:START createPaymentIntentForPromoBuy -->
### createPaymentIntentForPromoBuy

**Summary**: Delete a promo section

**Description**: Deletes a promo section by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deletePromoSection )

<!-- DOCGEN:END createPaymentIntentForPromoBuy -->

<!-- DOCGEN:START createPromoSectionBuy -->
### createPromoSectionBuy

**Summary**: Create promo section buys and payment intent

**Description**: Creates pending promo section buy records (unpaid) and a Stripe PaymentIntent for all of them. On successful webhook confirmation the buys become active.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPromoSectionBuy )

<!-- DOCGEN:END createPromoSectionBuy -->
