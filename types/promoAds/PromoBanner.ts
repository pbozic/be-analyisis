import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { File } from '../files/File.js';
import type { PromoAd } from './PromoAd.js';
import { FileResponseSchema } from '../files/File';
import { PromoAdResponseSchema } from './PromoAd';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PromoBanner = {
	promo_banners_id: string;
	type: string;
	size?: string | null;
	title: string;
	text: string;
	promo_section_buy_id?: string | null;
	file_id: string;
	files: File;
	promo_ads_id?: string | null;
	promo_ads?: PromoAd | null;
};

export const CreatePromoBannerSchema = z
	.object({
		promo_banners_id: z.string().uuid(),
		type: z.string(),
		size: z.string().nullable().optional(),
		title: z.string(),
		text: z.string(),
		promo_section_buy_id: z.string().uuid().nullable().optional(),
		file_id: z.string().uuid(),
		promo_ads_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreatePromoBanner');

export type CreatePromoBannerInput = z.infer<typeof CreatePromoBannerSchema>;

export const UpdatePromoBannerSchema = CreatePromoBannerSchema.partial().openapi('UpdatePromoBanner');
export type UpdatePromoBannerInput = z.infer<typeof UpdatePromoBannerSchema>;

export const PromoBannerResponseSchema = z
	.object({
		promo_banners_id: z.string(),
		type: z.string(),
		size: z.string().nullable().optional(),
		title: z.string(),
		text: z.string(),
		promo_section_buy_id: z.string().nullable().optional(),
		file_id: z.string(),
		files: FileResponseSchema,
		promo_ads_id: z.string().nullable().optional(),
		promo_ads: PromoAdResponseSchema.nullable().optional(),
	})
	.openapi('PromoBannerResponse');

export type PromoBannerResponse = z.infer<typeof PromoBannerResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePromoBanner', CreatePromoBannerSchema);
	registry.register('UpdatePromoBanner', UpdatePromoBannerSchema);
	registry.register('PromoBannerResponse', PromoBannerResponseSchema);
}
