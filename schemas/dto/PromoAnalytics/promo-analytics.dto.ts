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

// ===============
// Mappers
// ===============
type PrismaPromoAnalytics = {
	promo_analytics_id: string;
	promo_ads_id?: string | null;
	promo_sections_id?: string | null;
	word_id?: string | null;
	order_id?: string | null;
	daily_meal_subscription_id?: string | null;
	business_id: string;
	user_id?: string | null;
	created_at: string | Date;
	updated_at: string | Date;
	promo_type: string;
	type: string;
	order?: { order_id: string } | null;
};

export function toPromoAnalyticsDetail(row: unknown): PromoAnalyticsDetail {
	const r = row as PrismaPromoAnalytics;
	return PromoAnalyticsDetailSchema.parse({
		promo_analytics_id: r.promo_analytics_id,
		promo_ads_id: r.promo_ads_id ?? null,
		promo_sections_id: r.promo_sections_id ?? null,
		word_id: r.word_id ?? null,
		order_id: r.order_id ?? null,
		daily_meal_subscription_id: r.daily_meal_subscription_id ?? null,
		business_id: r.business_id,
		user_id: r.user_id ?? null,
		created_at: new Date(r.created_at).toISOString(),
		updated_at: new Date(r.updated_at).toISOString(),
		promo_type: r.promo_type,
		type: r.type,
		order: r.order ? { order_id: r.order.order_id } : null,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('PromoAnalyticsBase', PromoAnalyticsBaseSchema);
	registry.register('PromoAnalyticsDetail', PromoAnalyticsDetailSchema);
}
