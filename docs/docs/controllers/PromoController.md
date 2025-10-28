# PromoController Controller



<!-- DOCGEN:START getDiscountedPricePerQuantity -->
### getDiscountedPricePerQuantity

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getDiscountedPricePerQuantity -->



<!-- DOCGEN:START createPromoSection -->
### createPromoSection

**Summary**: Create a new promo section

**Description**: Creates a new promo section and associated Stripe product and pricing.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Promo section created successfully
- 500 - Error creating new promo section

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPromoSection )

<!-- DOCGEN:END createPromoSection -->



<!-- DOCGEN:START updatePromoSection -->
### updatePromoSection

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END updatePromoSection -->



<!-- DOCGEN:START reorderPromoSections -->
### reorderPromoSections

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END reorderPromoSections -->



<!-- DOCGEN:START deletePromoSection -->
### deletePromoSection

**Summary**: Delete a promo section

**Description**: Deletes a promo section by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | id |  |

**Responses:**
- 200 - Promo section deleted successfully
- 500 - Error deleting promo section

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deletePromoSection )

<!-- DOCGEN:END deletePromoSection -->



<!-- DOCGEN:START getPromoSectionById -->
### getPromoSectionById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPromoSectionById -->



<!-- DOCGEN:START getAllPromoSections -->
### getAllPromoSections

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoSections -->



<!-- DOCGEN:START getAllPromoSectionsByServiceType -->
### getAllPromoSectionsByServiceType

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoSectionsByServiceType -->



<!-- DOCGEN:START createPromoAd -->
### createPromoAd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createPromoAd -->



<!-- DOCGEN:START updatePromoAd -->
### updatePromoAd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END updatePromoAd -->



<!-- DOCGEN:START deletePromoAd -->
### deletePromoAd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END deletePromoAd -->



<!-- DOCGEN:START getPromoAdById -->
### getPromoAdById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPromoAdById -->



<!-- DOCGEN:START getAllPromoAds -->
### getAllPromoAds

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoAds -->



<!-- DOCGEN:START getPromoAdsByServiceType -->
### getPromoAdsByServiceType

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPromoAdsByServiceType -->



<!-- DOCGEN:START getPromoAdsByCategory -->
### getPromoAdsByCategory

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPromoAdsByCategory -->



<!-- DOCGEN:START createPromoBanner -->
### createPromoBanner

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createPromoBanner -->



<!-- DOCGEN:START updatePromoBanner -->
### updatePromoBanner

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END updatePromoBanner -->



<!-- DOCGEN:START deletePromoBanner -->
### deletePromoBanner

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END deletePromoBanner -->



<!-- DOCGEN:START getPromoBannerById -->
### getPromoBannerById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPromoBannerById -->



<!-- DOCGEN:START getAllPromoBanners -->
### getAllPromoBanners

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoBanners -->



<!-- DOCGEN:START getAllPromoBannersByType -->
### getAllPromoBannersByType

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoBannersByType -->



<!-- DOCGEN:START getAllPromoBannersBySize -->
### getAllPromoBannersBySize

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoBannersBySize -->



<!-- DOCGEN:START getAllPromoBannersByAd -->
### getAllPromoBannersByAd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoBannersByAd -->



<!-- DOCGEN:START getPromoBannersByServiceType -->
### getPromoBannersByServiceType

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPromoBannersByServiceType -->



<!-- DOCGEN:START createPaymentIntentForPromoBuy -->
### createPaymentIntentForPromoBuy

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createPaymentIntentForPromoBuy -->



<!-- DOCGEN:START createPromoSectionBuy -->
### createPromoSectionBuy

**Summary**: Create promo section buys and payment intent

**Description**: Creates pending promo section buy records (unpaid) and a Stripe PaymentIntent for all of them. On successful webhook confirmation the buys become active.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Created payment intent for promo section buys
- 400 - Validation error
- 500 - Error creating promo section buy payment intent

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPromoSectionBuy )

<!-- DOCGEN:END createPromoSectionBuy -->



<!-- DOCGEN:START updatePromoSectionBuy -->
### updatePromoSectionBuy

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END updatePromoSectionBuy -->



<!-- DOCGEN:START deletePromoSectionBuy -->
### deletePromoSectionBuy

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END deletePromoSectionBuy -->



<!-- DOCGEN:START getPromoSectionBuyById -->
### getPromoSectionBuyById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPromoSectionBuyById -->



<!-- DOCGEN:START getAllPromoSectionBuys -->
### getAllPromoSectionBuys

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoSectionBuys -->



<!-- DOCGEN:START getAllPromoSectionBuysBySection -->
### getAllPromoSectionBuysBySection

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoSectionBuysBySection -->



<!-- DOCGEN:START getAllPromoSectionBuysByBusiness -->
### getAllPromoSectionBuysByBusiness

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoSectionBuysByBusiness -->



<!-- DOCGEN:START getAllPromoSectionBuysByTier -->
### getAllPromoSectionBuysByTier

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoSectionBuysByTier -->



<!-- DOCGEN:START getAllPromoSectionBuysByStripeSub -->
### getAllPromoSectionBuysByStripeSub

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getAllPromoSectionBuysByStripeSub -->



<!-- DOCGEN:START addStripeSubToPromoSectionBuy -->
### addStripeSubToPromoSectionBuy

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addStripeSubToPromoSectionBuy -->

