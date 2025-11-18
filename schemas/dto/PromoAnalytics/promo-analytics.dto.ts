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

// Minimal identity reference schema
export const PromoAnalyticsRefSchema = z
	.object({
		promo_analytics_id: UUID,
		promo_type: z.string(),
		type: z.string(),
		created_at: z.string().datetime(),
	})
	.openapi('PromoAnalyticsRef');
export type PromoAnalyticsRef = z.infer<typeof PromoAnalyticsRefSchema>;

export const PromoAnalyticsDetailSchema = PromoAnalyticsBaseSchema.extend({
	order: z
		.object({
			order_id: UUID,
		})
		.nullable()
		.optional(),
}).openapi('PromoAnalyticsDetail');
export type PromoAnalyticsDetail = z.infer<typeof PromoAnalyticsDetailSchema>;

// Row input (internal creation payload) — DAO only, not exposed publicly
export const PromoAnalyticsRowInputSchema = z
	.object({
		promo_ads_id: UUID.nullable().optional(),
		promo_sections_id: UUID.nullable().optional(),
		word_id: UUID.nullable().optional(),
		order_id: UUID.nullable().optional(),
		business_id: UUID,
		user_id: UUID.nullable().optional(),
		promo_type: z.string(),
		type: z.string(),
		daily_meal_subscription_id: UUID.nullable().optional(),
	})
	.openapi('PromoAnalyticsRowInput');
export type PromoAnalyticsRowInput = z.infer<typeof PromoAnalyticsRowInputSchema>;

// Log params (input to helper)
export const LogPromoAnalyticsParamsSchema = z
	.object({
		searchQuery: z.string().optional(),
		wordIds: z.array(UUID).optional(),
		promo_sections_id: UUID.optional(),
		promo_ads_id: UUID.optional(),
		business_id: UUID,
		user_id: UUID.optional(),
		order_id: UUID.optional(),
		daily_meal_subscription_id: UUID.optional(),
		promo_type: z.string(),
		analytics_type: z.string(),
	})
	.openapi('LogPromoAnalyticsParams');
export type LogPromoAnalyticsParams = z.infer<typeof LogPromoAnalyticsParamsSchema>;

// Detail entry for logging result (skipped rows etc.)
export const PromoAnalyticsLogDetailSchema = z
	.object({
		word_id: UUID.optional(),
		reason: z.string(),
	})
	.openapi('PromoAnalyticsLogDetail');
export type PromoAnalyticsLogDetail = z.infer<typeof PromoAnalyticsLogDetailSchema>;

// Result schema for logPromoAnalytics helper
export const PromoAnalyticsLogResultSchema = z
	.object({
		created: z.number().int().nonnegative(),
		skipped: z.number().int().nonnegative(),
		details: z.array(PromoAnalyticsLogDetailSchema),
	})
	.openapi('PromoAnalyticsLogResult');
export type PromoAnalyticsLogResult = z.infer<typeof PromoAnalyticsLogResultSchema>;

// Mappers moved to promoAnalytics.mappers.ts

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('PromoAnalyticsBase', PromoAnalyticsBaseSchema);
	registry.register('PromoAnalyticsDetail', PromoAnalyticsDetailSchema);
	registry.register('PromoAnalyticsRef', PromoAnalyticsRefSchema);
	registry.register('PromoAnalyticsRowInput', PromoAnalyticsRowInputSchema);
	registry.register('LogPromoAnalyticsParams', LogPromoAnalyticsParamsSchema);
	registry.register('PromoAnalyticsLogDetail', PromoAnalyticsLogDetailSchema);
	registry.register('PromoAnalyticsLogResult', PromoAnalyticsLogResultSchema);
}
