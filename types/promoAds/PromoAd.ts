import { PROMO_SERVICE_TYPES } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { PromoBanner } from './PromoBanner.js';
import type { Category } from '../menus/Category.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';
import type { PromoAdsCategory } from './PromoAdsCategory.js';
import { PromoBannerResponseSchema } from './PromoBanner';
import { PromoAdsCategoryResponseSchema } from './PromoAdsCategory';
import { PromoAnalyticResponseSchema } from '../promoAnalytics/PromoAnalytic';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreatePromoAdSchema = z
	.object({
		promo_ads_id: z.string().uuid(),
		title: z.string(),
		text: z.string(),
		tag: z.string(),
		service_type: z.nativeEnum(PROMO_SERVICE_TYPES),
		discount: z.number(),
		active: z.boolean(),
		code: z.number().nullable().optional(),
		active_at: z.unknown().nullable().optional(),
		active_until: z.unknown().nullable().optional(),
	})
	.openapi('CreatePromoAd');

export type CreatePromoAdInput = z.infer<typeof CreatePromoAdSchema>;

export const UpdatePromoAdSchema = CreatePromoAdSchema.partial().openapi('UpdatePromoAd');
export type UpdatePromoAdInput = z.infer<typeof UpdatePromoAdSchema>;

export const PromoAdResponseSchema = z
	.object({
		promo_ads_id: z.string(),
		title: z.string(),
		text: z.string(),
		tag: z.string(),
		service_type: z.nativeEnum(PROMO_SERVICE_TYPES),
		discount: z.number(),
		banner: z.array(PromoBannerResponseSchema),
		categories: z.array(PromoAdsCategoryResponseSchema),
		active: z.boolean(),
		code: z.number().nullable().optional(),
		created_at: z.string().datetime(),
		active_at: z.string().datetime().nullable().optional(),
		active_until: z.string().datetime().nullable().optional(),
		promo_analytics: z.array(PromoAnalyticResponseSchema),
	})
	.openapi('PromoAdResponse');

export type PromoAdResponse = z.infer<typeof PromoAdResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePromoAd', CreatePromoAdSchema);
	registry.register('UpdatePromoAd', UpdatePromoAdSchema);
	registry.register('PromoAdResponse', PromoAdResponseSchema);
}

export type PromoAd = {
	promo_ads_id: string;
	title: string;
	text: string;
	tag: string;
	service_type: PROMO_SERVICE_TYPES;
	discount: number;
	banner?: PromoBanner[];
	categories?: PromoAdsCategory[];
	active: boolean;
	code?: number | null;
	created_at: Date;
	active_at?: Date | null;
	active_until?: Date | null;
	promo_analytics?: PromoAnalytic[];
};
