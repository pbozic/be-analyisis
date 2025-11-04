import { ANALYTICS_TYPE, PROMO_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Business } from '../business/Business.js';
import type { User } from '../users/User.js';
import type { PromoAd } from '../promoAds/PromoAd.js';
import type { PromoSection } from '../promoSections/PromoSection.js';
import type { Word } from '../promoWords/Word.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import { BusinessResponseSchema } from '../business/Business';
import { UserResponseSchema } from '../users/User';
import { PromoAdResponseSchema } from '../promoAds/PromoAd';
import { PromoSectionResponseSchema } from '../promoSections/PromoSection';
import { WordResponseSchema } from '../promoWords/Word';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { DailyMealSubscriptionResponseSchema } from '../dailymeal/DailyMealSubscription';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PromoAnalytic = {
	promo_analytics_id: string;
	promo_ads_id?: string | null;
	promo_sections_id?: string | null;
	word_id?: string | null;
	order_id?: string | null;
	daily_meal_subscription_id?: string | null;
	business_id: string;
	user_id?: string | null;
	created_at: Date;
	updated_at: Date;
	promo_type: PROMO_TYPE;
	type: ANALYTICS_TYPE;
	business: Business;
	user?: User | null;
	promo_ads?: PromoAd | null;
	promo_sections?: PromoSection | null;
	promo_words?: Word | null;
	order?: DeliveryOrder | null;
	daily_meal_subscription?: DailyMealSubscription | null;
};

export const CreatePromoAnalyticSchema = z
	.object({
		promo_analytics_id: z.string().uuid(),
		promo_ads_id: z.string().uuid().nullable().optional(),
		promo_sections_id: z.string().uuid().nullable().optional(),
		word_id: z.string().uuid().nullable().optional(),
		order_id: z.string().uuid().nullable().optional(),
		daily_meal_subscription_id: z.string().uuid().nullable().optional(),
		business_id: z.string().uuid(),
		user_id: z.string().uuid().nullable().optional(),
		promo_type: z.nativeEnum(PROMO_TYPE),
		type: z.nativeEnum(ANALYTICS_TYPE),
	})
	.openapi('CreatePromoAnalytic');

export type CreatePromoAnalyticInput = z.infer<typeof CreatePromoAnalyticSchema>;

export const UpdatePromoAnalyticSchema = CreatePromoAnalyticSchema.partial().openapi('UpdatePromoAnalytic');
export type UpdatePromoAnalyticInput = z.infer<typeof UpdatePromoAnalyticSchema>;

export const PromoAnalyticResponseSchema = z
	.object({
		promo_analytics_id: z.string(),
		promo_ads_id: z.string().nullable().optional(),
		promo_sections_id: z.string().nullable().optional(),
		word_id: z.string().nullable().optional(),
		order_id: z.string().nullable().optional(),
		daily_meal_subscription_id: z.string().nullable().optional(),
		business_id: z.string(),
		user_id: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		promo_type: z.nativeEnum(PROMO_TYPE),
		type: z.nativeEnum(ANALYTICS_TYPE),
		business: BusinessResponseSchema,
		user: UserResponseSchema.nullable().optional(),
		promo_ads: PromoAdResponseSchema.nullable().optional(),
		promo_sections: PromoSectionResponseSchema.nullable().optional(),
		promo_words: WordResponseSchema.nullable().optional(),
		order: DeliveryOrderResponseSchema.nullable().optional(),
		daily_meal_subscription: DailyMealSubscriptionResponseSchema.nullable().optional(),
	})
	.openapi('PromoAnalyticResponse');

export type PromoAnalyticResponse = z.infer<typeof PromoAnalyticResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePromoAnalytic', CreatePromoAnalyticSchema);
	registry.register('UpdatePromoAnalytic', UpdatePromoAnalyticSchema);
	registry.register('PromoAnalyticResponse', PromoAnalyticResponseSchema);
}
