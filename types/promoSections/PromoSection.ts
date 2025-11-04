import { PROMO_SERVICE_TYPES } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { PromoSectionsBuy } from './PromoSectionsBuy.js';
import type { Translatable } from '../translations/Translatable.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';
import { PromoSectionsBuyResponseSchema } from './PromoSectionsBuy';
import { TranslatableResponseSchema } from '../translations/Translatable';
import { PromoAnalyticResponseSchema } from '../promoAnalytics/PromoAnalytic';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PromoSection = {
	promo_sections_id: string;
	name: string;
	tag: string;
	active: boolean;
	description?: string | null;
	prices?: unknown | null;
	limits?: unknown | null;
	stripe_product_id?: string | null;
	canPurchase: boolean;
	t1price?: number | null;
	t2price?: number | null;
	t3price?: number | null;
	order: number;
	service_type: PROMO_SERVICE_TYPES;
	promo_section_buy: PromoSectionsBuy[];
	promo_duration_days: number;
	translatable_id: string;
	translatable: Translatable;
	display_cards_per_page?: number | null;
	promo_analytics: PromoAnalytic[];
};

export const CreatePromoSectionSchema = z
	.object({
		promo_sections_id: z.string().uuid(),
		name: z.string(),
		tag: z.string(),
		active: z.boolean(),
		description: z.string().nullable().optional(),
		prices: z.unknown().nullable().optional(),
		limits: z.unknown().nullable().optional(),
		stripe_product_id: z.string().uuid().nullable().optional(),
		canPurchase: z.boolean(),
		t1price: z.number().nullable().optional(),
		t2price: z.number().nullable().optional(),
		t3price: z.number().nullable().optional(),
		order: z.number(),
		service_type: z.nativeEnum(PROMO_SERVICE_TYPES),
		promo_duration_days: z.number(),
		translatable_id: z.string().uuid(),
		display_cards_per_page: z.number().nullable().optional(),
	})
	.openapi('CreatePromoSection');

export type CreatePromoSectionInput = z.infer<typeof CreatePromoSectionSchema>;

export const UpdatePromoSectionSchema = CreatePromoSectionSchema.partial().openapi('UpdatePromoSection');
export type UpdatePromoSectionInput = z.infer<typeof UpdatePromoSectionSchema>;

export const PromoSectionResponseSchema = z
	.object({
		promo_sections_id: z.string(),
		name: z.string(),
		tag: z.string(),
		active: z.boolean(),
		description: z.string().nullable().optional(),
		prices: z.unknown().nullable().optional(),
		limits: z.unknown().nullable().optional(),
		stripe_product_id: z.string().nullable().optional(),
		canPurchase: z.boolean(),
		t1price: z.number().nullable().optional(),
		t2price: z.number().nullable().optional(),
		t3price: z.number().nullable().optional(),
		order: z.number(),
		service_type: z.nativeEnum(PROMO_SERVICE_TYPES),
		promo_section_buy: z.array(PromoSectionsBuyResponseSchema),
		promo_duration_days: z.number(),
		translatable_id: z.string(),
		translatable: TranslatableResponseSchema,
		display_cards_per_page: z.number().nullable().optional(),
		promo_analytics: z.array(PromoAnalyticResponseSchema),
	})
	.openapi('PromoSectionResponse');

export type PromoSectionResponse = z.infer<typeof PromoSectionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePromoSection', CreatePromoSectionSchema);
	registry.register('UpdatePromoSection', UpdatePromoSectionSchema);
	registry.register('PromoSectionResponse', PromoSectionResponseSchema);
}
