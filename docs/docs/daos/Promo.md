# Promo DAO

<!-- DOCGEN:START createPromoSection -->

### createPromoSection

**Description**: Create a promo section with translations; handles tier prices when canPurchase=true.

**Parameters**:

- args: {object} - Section fields (name, tag, description, service_type, canPurchase, t1price, t2price, t3price).
- translations: {object[]} - Array of { language, translation }.

**Returns**: {Promise<object>} - Created promo section with translations.

<!-- DOCGEN:END createPromoSection -->

<!-- DOCGEN:START updatePromoSection -->

### updatePromoSection

**Description**: Update a promo section and replace translations if provided.

**Parameters**:

- id: {string} - promo_sections_id.
- args: {object} - Fields to update.
- translations?: {object[]} - New translations to set.

**Returns**: {Promise<object>} - Updated promo section with translations.

<!-- DOCGEN:END updatePromoSection -->

<!-- DOCGEN:START reorderPromoSections -->

### reorderPromoSections

**Description**: Reorder promo sections by given list of ids; sets order by index.

**Parameters**:

- promo_sections_ids: {string[]} - Ordered list of section ids.

**Returns**: {Promise<object[]>} - Updated promo sections.

<!-- DOCGEN:END reorderPromoSections -->

<!-- DOCGEN:START deletePromoSection -->

### deletePromoSection

**Description**: Delete a promo section by id.

**Parameters**:

- id: {string} - promo_sections_id.

**Returns**: {Promise<object>} - Deleted promo section.

<!-- DOCGEN:END deletePromoSection -->

<!-- DOCGEN:START getPromoSectionById -->

### getPromoSectionById

**Description**: Get a promo section by id with translations and purchases; flattens translations.

**Parameters**:

- id: {string} - promo_sections_id.

**Returns**: {Promise<object>} - Promo section with translations.

<!-- DOCGEN:END getPromoSectionById -->

<!-- DOCGEN:START getAllPromoSections -->

### getAllPromoSections

**Description**: Get all promo sections with optional where args and flattened translations.

**Parameters**:

- args: {object} - Where filters.

**Returns**: {Promise<object[]>} - Promo sections.

<!-- DOCGEN:END getAllPromoSections -->

<!-- DOCGEN:START getAllPromoSectionsByServiceType -->

### getAllPromoSectionsByServiceType

**Description**: Get promo sections by service_type; includes purchases and translations.

**Parameters**:

- type: {string} - Service type.

**Returns**: {Promise<object[]>} - Promo sections.

<!-- DOCGEN:END getAllPromoSectionsByServiceType -->

<!-- DOCGEN:START createPromoAd -->

### createPromoAd

**Description**: Create a promo ad and connect categories and banners.

**Parameters**:

- promoAdData: {object} - Fields for promo ad (title, text, service_type, discount?).
- categories_ids: {string[]} - Category ids to connect.
- promo_banners_ids: {string[]} - Banner ids to connect.

**Returns**: {Promise<object>} - Created promo ad.

<!-- DOCGEN:END createPromoAd -->

<!-- DOCGEN:START updatePromoAd -->

### updatePromoAd

**Description**: Update a promo ad; replaces category and banner relations.

**Parameters**:

- id: {string} - promo_ads_id.
- promoAdData: {object} - Fields to update.
- categories_ids: {string[]} - Category ids to set.
- promo_banners_ids: {string[]} - Banner ids to set.

**Returns**: {Promise<object>} - Updated promo ad.

<!-- DOCGEN:END updatePromoAd -->

<!-- DOCGEN:START deletePromoAd -->

### deletePromoAd

**Description**: Delete a promo ad and its category relations in a transaction.

**Parameters**:

- id: {string} - promo_ads_id.

**Returns**: {Promise<object[]>} - Transaction results.

<!-- DOCGEN:END deletePromoAd -->

<!-- DOCGEN:START getPromoAdById -->

### getPromoAdById

**Description**: Get a promo ad by id including categories and banners.

**Parameters**:

- id: {string} - promo_ads_id.

**Returns**: {Promise<object|null>} - Promo ad or null.

<!-- DOCGEN:END getPromoAdById -->

<!-- DOCGEN:START getAllPromoAds -->

### getAllPromoAds

**Description**: Get all promo ads including categories and banner files.

**Returns**: {Promise<object[]>} - Promo ads.

<!-- DOCGEN:END getAllPromoAds -->

<!-- DOCGEN:START getAllPromoAdsByServiceType -->

### getAllPromoAdsByServiceType

**Description**: Get promo ads by service_type including categories and banner files.

**Parameters**:

- type: {string} - Service type.

**Returns**: {Promise<object[]>} - Promo ads.

<!-- DOCGEN:END getAllPromoAdsByServiceType -->

<!-- DOCGEN:START getAllPromoAdsByCategory -->

### getAllPromoAdsByCategory

**Description**: Get promo ads by category id including categories and banner files.

**Parameters**:

- category: {string} - categories_id filter.

**Returns**: {Promise<object[]>} - Promo ads.

<!-- DOCGEN:END getAllPromoAdsByCategory -->

<!-- DOCGEN:START createPromoBanner -->

### createPromoBanner

**Description**: Create a promo banner and optionally create a public file; may connect to promo ad.

**Parameters**:

- promoBannerData: {object} - Fields for banner (title, text, type, size, promo_ads_id?).
- imageFileData?: {object} - Optional file fields (file_type, mime_type).

**Returns**: {Promise<object>} - Created promo banner with files.

<!-- DOCGEN:END createPromoBanner -->

<!-- DOCGEN:START updatePromoBanner -->

### updatePromoBanner

**Description**: Update a promo banner; connect/disconnect promo_ad and optionally append a new file.

**Parameters**:

- id: {string} - promo_banners_id.
- promoBannerData: {object} - Fields to update.
- imageFileData?: {object} - Optional new file (file_type, mime_type).

**Returns**: {Promise<object>} - Updated promo banner with files.

<!-- DOCGEN:END updatePromoBanner -->

<!-- DOCGEN:START deletePromoBanner -->

### deletePromoBanner

**Description**: Delete a promo banner by id.

**Parameters**:

- id: {string} - promo_banners_id.

**Returns**: {Promise<object>} - Deleted banner.

<!-- DOCGEN:END deletePromoBanner -->

<!-- DOCGEN:START getPromoBannerById -->

### getPromoBannerById

**Description**: Get a promo banner by id.

**Parameters**:

- id: {string} - promo_banners_id.

**Returns**: {Promise<object|null>} - Promo banner or null.

<!-- DOCGEN:END getPromoBannerById -->

<!-- DOCGEN:START getAllPromoBanners -->

### getAllPromoBanners

**Description**: Get all promo banners including files and associated promo_ad categories.

**Returns**: {Promise<object[]>} - Promo banners.

<!-- DOCGEN:END getAllPromoBanners -->

<!-- DOCGEN:START getAllPromoBannersByType -->

### getAllPromoBannersByType

**Description**: Get promo banners filtered by type including files and promo_ad categories.

**Parameters**:

- type: {string} - Banner type.

**Returns**: {Promise<object[]>} - Promo banners.

<!-- DOCGEN:END getAllPromoBannersByType -->

<!-- DOCGEN:START getAllPromoBannersBySize -->

### getAllPromoBannersBySize

**Description**: Get promo banners filtered by size including files and promo_ad categories.

**Parameters**:

- size: {string} - Banner size.

**Returns**: {Promise<object[]>} - Promo banners.

<!-- DOCGEN:END getAllPromoBannersBySize -->

<!-- DOCGEN:START getAllPromoBannersByAd -->

### getAllPromoBannersByAd

**Description**: Get promo banners for a specific promo_ad including files and categories.

**Parameters**:

- ad: {string} - promo_ads_id.

**Returns**: {Promise<object[]>} - Promo banners.

<!-- DOCGEN:END getAllPromoBannersByAd -->

<!-- DOCGEN:START createPromoSectionBuy -->

### createPromoSectionBuy

**Description**: Create a promo_sections_buy linking business and promo section with optional activation/expires.

**Parameters**:

- business_id: {string} - Business ID.
- promo_sections_id: {string} - Promo section ID.
- active_at?: {string|Date} - Active from date.
- expires_at?: {string|Date} - Expires at date.
- tier: {number} - Tier number.

**Returns**: {Promise<object>} - Created promo_sections_buy.

<!-- DOCGEN:END createPromoSectionBuy -->

<!-- DOCGEN:START getPromoSectionBuyById -->

### getPromoSectionBuyById

**Description**: Get a promo_sections_buy by id.

**Parameters**:

- id: {string} - promo_sections_buy_id.

**Returns**: {Promise<object|null>} - Row or null.

<!-- DOCGEN:END getPromoSectionBuyById -->

<!-- DOCGEN:START getAllPromoSectionBuys -->

### getAllPromoSectionBuys

**Description**: Get all promo_sections_buy rows.

**Returns**: {Promise<object[]>} - Rows.

<!-- DOCGEN:END getAllPromoSectionBuys -->

<!-- DOCGEN:START getAllPromoSectionBuysBySection -->

### getAllPromoSectionBuysBySection

**Description**: Get promo_sections_buy by section id.

**Parameters**:

- section: {string} - promo_sections_id.

**Returns**: {Promise<object[]>} - Rows.

<!-- DOCGEN:END getAllPromoSectionBuysBySection -->

<!-- DOCGEN:START getAllPromoSectionBuysByBusiness -->

### getAllPromoSectionBuysByBusiness

**Description**: Get paid promo_sections_buy for a business with optional extra where filters; includes section translations.

**Parameters**:

- business: {string} - Business ID.
- whereObj?: {object} - Additional where clauses.

**Returns**: {Promise<object[]>} - Rows with section translations.

<!-- DOCGEN:END getAllPromoSectionBuysByBusiness -->

<!-- DOCGEN:START getAllPromoSectionBuysByTier -->

### getAllPromoSectionBuysByTier

**Description**: Get promo_sections_buy by tier value.

**Parameters**:

- tier: {number} - Tier.

**Returns**: {Promise<object[]>} - Rows.

<!-- DOCGEN:END getAllPromoSectionBuysByTier -->

<!-- DOCGEN:START updatePromoSectionBuy -->

### updatePromoSectionBuy

**Description**: Update a promo_sections_buy row by id.

**Parameters**:

- id: {string} - promo_sections_buy_id.
- args: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated row.

<!-- DOCGEN:END updatePromoSectionBuy -->

<!-- DOCGEN:START getPromoSectionBuyByPaymentIntentId -->

### getPromoSectionBuyByPaymentIntentId

<!-- DOCGEN:END getPromoSectionBuyByPaymentIntentId -->
