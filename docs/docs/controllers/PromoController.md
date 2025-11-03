# PromoController Controller

<!-- DOCGEN:START createPromoSection -->

### createPromoSection

**Summary**: Create a new promo section

**Description**: Creates a new promo section and translations. If canPurchase is true, tier prices are expected.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Promo section created successfully
- 500 - Error creating new promo section

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPromoSection)

<!-- DOCGEN:END createPromoSection -->

<!-- DOCGEN:START deletePromoSection -->

### deletePromoSection

**Summary**: Delete a promo section

**Description**: Deletes a promo section by its ID.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | id   |             |

**Responses:**

- 200 - Promo section deleted successfully
- 500 - Error deleting promo section

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deletePromoSection)

<!-- DOCGEN:END deletePromoSection -->

<!-- DOCGEN:START createPaymentIntentForPromoBuy -->

### createPaymentIntentForPromoBuy

**Summary**: List promo banners by ad

**Description**: Returns promo banners filtered by promo ad ID.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | ad   |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllPromoBannersByAd)

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

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPromoSectionBuy)

<!-- DOCGEN:END createPromoSectionBuy -->

<!-- DOCGEN:START updatePromoSection -->

### updatePromoSection

**Summary**: Update a promo section

**Description**: Updates fields and translations of a promo section by ID.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | id   |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePromoSection)

<!-- DOCGEN:END updatePromoSection -->

<!-- DOCGEN:START reorderPromoSections -->

### reorderPromoSections

**Summary**: Reorder promo sections

**Description**: Sets the display order of promo sections by their IDs.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reorderPromoSections)

<!-- DOCGEN:END reorderPromoSections -->

<!-- DOCGEN:START getPromoSectionById -->

### getPromoSectionById

**Summary**: Get promo section by ID

**Description**: Returns a promo section with translations and buys.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | id   |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPromoSectionById)

<!-- DOCGEN:END getPromoSectionById -->

<!-- DOCGEN:START getAllPromoSections -->

### getAllPromoSections

**Summary**: List promo sections

**Description**: Returns all active promo sections. Optional query: ?purchasable=true to filter.

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllPromoSections)

<!-- DOCGEN:END getAllPromoSections -->

<!-- DOCGEN:START getAllPromoSectionsByServiceType -->

### getAllPromoSectionsByServiceType

**Summary**: List promo sections by service type

**Description**: Returns all promo sections filtered by service type.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | type |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllPromoSectionsByServiceType)

<!-- DOCGEN:END getAllPromoSectionsByServiceType -->

<!-- DOCGEN:START createPromoAd -->

### createPromoAd

**Summary**: Create a promo ad

**Description**: Creates a promo ad with optional category and banner relations.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPromoAd)

<!-- DOCGEN:END createPromoAd -->

<!-- DOCGEN:START updatePromoAd -->

### updatePromoAd

**Summary**: Update a promo ad

**Description**: Updates a promo ad and resets its relations.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | id   |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePromoAd)

<!-- DOCGEN:END updatePromoAd -->

<!-- DOCGEN:START deletePromoAd -->

### deletePromoAd

**Summary**: Delete a promo ad

**Description**: Deletes a promo ad and its relations.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | id   |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deletePromoAd)

<!-- DOCGEN:END deletePromoAd -->

<!-- DOCGEN:START getPromoAdById -->

### getPromoAdById

**Summary**: Get promo ad by ID

**Description**: Returns promo ad with categories and banners.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | id   |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPromoAdById)

<!-- DOCGEN:END getPromoAdById -->

<!-- DOCGEN:START getAllPromoAds -->

### getAllPromoAds

**Summary**: List promo ads

**Description**: Returns all promo ads with categories and banners.

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllPromoAds)

<!-- DOCGEN:END getAllPromoAds -->

<!-- DOCGEN:START getPromoAdsByServiceType -->

### getPromoAdsByServiceType

**Summary**: List promo ads by service type

**Description**: Returns all promo ads filtered by service type.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | type |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPromoAdsByServiceType)

<!-- DOCGEN:END getPromoAdsByServiceType -->

<!-- DOCGEN:START getPromoAdsByCategory -->

### getPromoAdsByCategory

**Summary**: List promo ads by category

**Description**: Returns all promo ads that have the given category.

**Parameters:**

| Name      | In   | Type     | Description |
| --------- | ---- | -------- | ----------- |
| undefined | path | category |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPromoAdsByCategory)

<!-- DOCGEN:END getPromoAdsByCategory -->

<!-- DOCGEN:START createPromoBanner -->

### createPromoBanner

**Summary**: Create a promo banner

**Description**: Creates a promo banner with optional file and promo ad relation; uploads image to S3 when base64 provided.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPromoBanner)

<!-- DOCGEN:END createPromoBanner -->

<!-- DOCGEN:START updatePromoBanner -->

### updatePromoBanner

**Summary**: Update a promo banner

**Description**: Updates a promo banner and optionally creates a new file when imageFileData is provided.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | id   |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePromoBanner)

<!-- DOCGEN:END updatePromoBanner -->

<!-- DOCGEN:START deletePromoBanner -->

### deletePromoBanner

**Summary**: Delete a promo banner

**Description**: Deletes a promo banner by ID.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | id   |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deletePromoBanner)

<!-- DOCGEN:END deletePromoBanner -->

<!-- DOCGEN:START getPromoBannerById -->

### getPromoBannerById

**Summary**: Get promo banner by ID

**Description**: Returns a promo banner by ID.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | id   |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPromoBannerById)

<!-- DOCGEN:END getPromoBannerById -->

<!-- DOCGEN:START getAllPromoBanners -->

### getAllPromoBanners

**Summary**: List promo banners

**Description**: Returns all promo banners including files and promo ad categories.

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllPromoBanners)

<!-- DOCGEN:END getAllPromoBanners -->

<!-- DOCGEN:START getAllPromoBannersByType -->

### getAllPromoBannersByType

**Summary**: List promo banners by type

**Description**: Returns promo banners filtered by type.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | type |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllPromoBannersByType)

<!-- DOCGEN:END getAllPromoBannersByType -->

<!-- DOCGEN:START getAllPromoBannersBySize -->

### getAllPromoBannersBySize

**Summary**: List promo banners by size

**Description**: Returns promo banners filtered by size.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | size |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllPromoBannersBySize)

<!-- DOCGEN:END getAllPromoBannersBySize -->

<!-- DOCGEN:START getAllPromoBannersByAd -->

### getAllPromoBannersByAd

**Summary**: List promo banners by ad

**Description**: Returns promo banners filtered by promo ad ID.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | ad   |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllPromoBannersByAd)

<!-- DOCGEN:END getAllPromoBannersByAd -->
