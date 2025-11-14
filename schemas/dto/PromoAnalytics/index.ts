import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === PromoAnalytics DTOs (Response) ===
export {
	PromoAnalyticsBaseSchema,
	PromoAnalyticsDetailSchema,
	type PromoAnalyticsBase,
	type PromoAnalyticsDetail,
	registerSchemas as registerPromoAnalyticsSchemas,
} from './promo-analytics.dto.js';

// === PromoAnalytics Mappers ===
export { toPromoAnalyticsDetail } from './promoAnalytics.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerPromoAnalyticsSchemas(registry);
}
