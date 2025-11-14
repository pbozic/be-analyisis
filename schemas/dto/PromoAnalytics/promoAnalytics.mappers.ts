import { PromoAnalyticsDetailSchema } from './promo-analytics.dto.js';
import type { PromoAnalyticsDetail } from './promo-analytics.dto.js';

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
