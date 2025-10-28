# StripeController Controller

<!-- DOCGEN:START removePaymentMethod -->
### removePaymentMethod

**Summary**: Remove a payment method from the authenticated user's Stripe customer account

**Description**: Removes the specified Stripe payment method from the authenticated user's Stripe customer account. Returns the updated list of payment methods.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | pm_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removePaymentMethod )

<!-- DOCGEN:END removePaymentMethod -->
