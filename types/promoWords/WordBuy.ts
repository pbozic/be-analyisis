import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Word } from './Word.js';
import type { Business } from '../business/Business.js';
import { WordResponseSchema } from './Word';
import { BusinessResponseSchema } from '../business/Business';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type WordBuy = {
	word_buy_id: string;
	word_id: string;
	word: Word;
	stripe_subscription_id?: string | null;
	stripe_price_id?: string | null;
	pending_stripe_price_id?: string | null;
	price: number;
	pending_price?: number | null;
	active_at?: Date | null;
	expires_at?: Date | null;
	paid: boolean;
	business_id: string;
	business: Business;
	created_at: Date;
	updated_at: Date;
	deleted_at?: Date | null;
};

export const CreateWordBuySchema = z
	.object({
		word_buy_id: z.string().uuid(),
		word_id: z.string().uuid(),
		stripe_subscription_id: z.string().uuid().nullable().optional(),
		stripe_price_id: z.string().uuid().nullable().optional(),
		pending_stripe_price_id: z.string().uuid().nullable().optional(),
		price: z.number(),
		pending_price: z.number().nullable().optional(),
		active_at: z.unknown().nullable().optional(),
		expires_at: z.unknown().nullable().optional(),
		paid: z.boolean(),
		business_id: z.string().uuid(),
		deleted_at: z.unknown().nullable().optional(),
	})
	.openapi('CreateWordBuy');

export type CreateWordBuyInput = z.infer<typeof CreateWordBuySchema>;

export const UpdateWordBuySchema = CreateWordBuySchema.partial().openapi('UpdateWordBuy');
export type UpdateWordBuyInput = z.infer<typeof UpdateWordBuySchema>;

export const WordBuyResponseSchema = z
	.object({
		word_buy_id: z.string(),
		word_id: z.string(),
		word: WordResponseSchema,
		stripe_subscription_id: z.string().nullable().optional(),
		stripe_price_id: z.string().nullable().optional(),
		pending_stripe_price_id: z.string().nullable().optional(),
		price: z.number(),
		pending_price: z.number().nullable().optional(),
		active_at: z.string().datetime().nullable().optional(),
		expires_at: z.string().datetime().nullable().optional(),
		paid: z.boolean(),
		business_id: z.string(),
		business: BusinessResponseSchema,
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		deleted_at: z.string().datetime().nullable().optional(),
	})
	.openapi('WordBuyResponse');

export type WordBuyResponse = z.infer<typeof WordBuyResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateWordBuy', CreateWordBuySchema);
	registry.register('UpdateWordBuy', UpdateWordBuySchema);
	registry.register('WordBuyResponse', WordBuyResponseSchema);
}
