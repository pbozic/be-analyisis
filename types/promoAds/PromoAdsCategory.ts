// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { PromoAd } from './PromoAd.js';
import type { Category } from '../menus/Category.js';
import { PromoAdResponseSchema } from './PromoAd';
import { CategoryResponseSchema } from '../menus/Category';

extendZodWithOpenApi(z);

export const CreatePromoAdsCategorySchema = z
	.object({
		promo_ads_category_id: z.string().uuid(),
		promo_ads_id: z.string().uuid(),
		categories_id: z.string().uuid(),
	})
	.openapi('CreatePromoAdsCategory');

export type CreatePromoAdsCategoryInput = z.infer<typeof CreatePromoAdsCategorySchema>;

export const UpdatePromoAdsCategorySchema = CreatePromoAdsCategorySchema.partial().openapi('UpdatePromoAdsCategory');
export type UpdatePromoAdsCategoryInput = z.infer<typeof UpdatePromoAdsCategorySchema>;

export const PromoAdsCategoryResponseSchema = z
	.object({
		promo_ads_category_id: z.string(),
		promo_ads_id: z.string(),
		categories_id: z.string(),
		promo_ad: PromoAdResponseSchema,
		category: CategoryResponseSchema,
	})
	.openapi('PromoAdsCategoryResponse');

export type PromoAdsCategoryResponse = z.infer<typeof PromoAdsCategoryResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePromoAdsCategory', CreatePromoAdsCategorySchema);
	registry.register('UpdatePromoAdsCategory', UpdatePromoAdsCategorySchema);
	registry.register('PromoAdsCategoryResponse', PromoAdsCategoryResponseSchema);
}

export type PromoAdsCategory = {
	promo_ads_category_id: string;
	promo_ads_id: string;
	categories_id: string;
	promo_ad?: PromoAd;
	category?: Category;
};
