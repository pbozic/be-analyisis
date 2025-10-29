# PromoAnalytics DAO

<!-- DOCGEN:START getAllPromoAnalyticsForPeriod -->
### getAllPromoAnalyticsForPeriod

**Description**: Get all promo analytics for a specific period.

**Parameters**:
- businessId: {string} - The ID of the business.
- start: {Date} - The start date of the period.
- end: {Date} - The end date of the period.

**Returns**: {Promise<promo_analytics[]>} - - The promo analytics for the specified period.

<!-- DOCGEN:END getAllPromoAnalyticsForPeriod -->

<!-- DOCGEN:START getPromoAnalyticsForPeriodByPromoType -->
### getPromoAnalyticsForPeriodByPromoType

**Description**: Get promo analytics for a specific period filtered by promo type and optional IDs.

**Parameters**:
- businessId: {string} - The ID of the business.
- start: {Date} - The start date of the period.
- end: {Date} - The end date of the period.
- promoType: {string} - The type of the promo.
- wordIds: {string[]} - The IDs of the words to filter by.
- sectionIds: {string[]} - The IDs of the sections to filter by.
- adIds: {string[]} - The IDs of the ads to filter by.

**Returns**: {Promise<promo_analytics[]>} - - The filtered promo analytics.

<!-- DOCGEN:END getPromoAnalyticsForPeriodByPromoType -->

