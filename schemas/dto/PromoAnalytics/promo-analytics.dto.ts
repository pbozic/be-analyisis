import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Promo Analytics DTOs
// =======================

export const PromoAnalyticsBaseSchema = z
	.object({
		promo_analytics_id: UUID,
		promo_ads_id: UUID.nullable().optional(),
		promo_sections_id: UUID.nullable().optional(),
		word_id: UUID.nullable().optional(),
		order_id: UUID.nullable().optional(),
		daily_meal_subscription_id: UUID.nullable().optional(),
		business_id: UUID,
		user_id: UUID.nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		promo_type: z.string(),
		type: z.string(),
	})
	.openapi('PromoAnalyticsBase');
export type PromoAnalyticsBase = z.infer<typeof PromoAnalyticsBaseSchema>;

export const PromoAnalyticsDetailSchema = PromoAnalyticsBaseSchema.extend({
	order: z
		.object({
			order_id: UUID,
		})
		.nullable()
		.optional(),
}).openapi('PromoAnalyticsDetail');
export type PromoAnalyticsDetail = z.infer<typeof PromoAnalyticsDetailSchema>;

// Mappers moved to promoAnalytics.mappers.ts

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('PromoAnalyticsBase', PromoAnalyticsBaseSchema);
	registry.register('PromoAnalyticsDetail', PromoAnalyticsDetailSchema);
}
