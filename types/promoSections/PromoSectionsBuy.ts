import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { PromoSection } from './PromoSection.js';
import type { Business } from '../business/Business.js';
import type { User } from '../users/User.js';
import { PromoSectionResponseSchema } from './PromoSection';
import { BusinessResponseSchema } from '../business/Business';
import { UserResponseSchema } from '../users/User';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PromoSectionsBuy = {
	promo_sections_buy_id: string;
	promo_sections_id: string;
	promo_section: PromoSection;
	payment_intent_id?: string | null;
	business_id: string;
	business: Business;
	user_id?: string | null;
	bought_by?: User | null;
	paid: boolean;
	active_at?: Date | null;
	expires_at?: Date | null;
	tier: number;
	duration: number;
};

export const CreatePromoSectionsBuySchema = z
	.object({
		promo_sections_buy_id: z.string().uuid(),
		promo_sections_id: z.string().uuid(),
		payment_intent_id: z.string().uuid().nullable().optional(),
		business_id: z.string().uuid(),
		user_id: z.string().uuid().nullable().optional(),
		paid: z.boolean(),
		active_at: z.unknown().nullable().optional(),
		expires_at: z.unknown().nullable().optional(),
		tier: z.number(),
		duration: z.number(),
	})
	.openapi('CreatePromoSectionsBuy');

export type CreatePromoSectionsBuyInput = z.infer<typeof CreatePromoSectionsBuySchema>;

export const UpdatePromoSectionsBuySchema = CreatePromoSectionsBuySchema.partial().openapi('UpdatePromoSectionsBuy');
export type UpdatePromoSectionsBuyInput = z.infer<typeof UpdatePromoSectionsBuySchema>;

export const PromoSectionsBuyResponseSchema = z
	.object({
		promo_sections_buy_id: z.string(),
		promo_sections_id: z.string(),
		promo_section: PromoSectionResponseSchema,
		payment_intent_id: z.string().nullable().optional(),
		business_id: z.string(),
		business: BusinessResponseSchema,
		user_id: z.string().nullable().optional(),
		bought_by: UserResponseSchema.nullable().optional(),
		paid: z.boolean(),
		active_at: z.string().datetime().nullable().optional(),
		expires_at: z.string().datetime().nullable().optional(),
		tier: z.number(),
		duration: z.number(),
	})
	.openapi('PromoSectionsBuyResponse');

export type PromoSectionsBuyResponse = z.infer<typeof PromoSectionsBuyResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreatePromoSectionsBuy', CreatePromoSectionsBuySchema);
	registry.register('UpdatePromoSectionsBuy', UpdatePromoSectionsBuySchema);
	registry.register('PromoSectionsBuyResponse', PromoSectionsBuyResponseSchema);
}
