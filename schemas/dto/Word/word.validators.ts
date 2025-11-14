import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';
import { TranslationItemSchema } from './word.dto.js';

extendZodWithOpenApi(z);

// Request schemas moved from word.dto.ts

// Create/Update Word
export const WordDataSchema = z
	.object({
		word: z.string().min(1),
		categories_id: UUID,
	})
	.openapi('WordData');

export const CreateWordRequestSchema = z
	.object({
		wordData: WordDataSchema,
		translations: z.array(TranslationItemSchema).min(1),
	})
	.openapi('CreateWordRequest');
export type CreateWordRequest = z.infer<typeof CreateWordRequestSchema>;

export const UpdateWordRequestSchema = CreateWordRequestSchema.openapi('UpdateWordRequest');
export type UpdateWordRequest = z.infer<typeof UpdateWordRequestSchema>;

// Word Buy
export const WordBuyItemSchema = z
	.object({
		word_id: UUID,
		price: z.number().nonnegative(),
		word_buy_id: UUID.optional(),
		stripe_subscription_id: z.string().nullable().optional(),
		created_at: z.string().datetime().optional(),
		updated_at: z.string().datetime().optional(),
		business_id: UUID.optional(),
		business: z.any().optional(), // BusinessBaseSchema from Business - avoid circular import
	})
	.openapi('WordBuyItem');
export type WordBuyItem = z.infer<typeof WordBuyItemSchema>;

export const CreateWordBuyRequestSchema = z
	.object({
		words: z.array(WordBuyItemSchema).min(1),
		business_id: UUID,
	})
	.openapi('CreateWordBuyRequest');
export type CreateWordBuyRequest = z.infer<typeof CreateWordBuyRequestSchema>;

export const UpdateWordBuysRequestSchema = z
	.object({
		word_buys: z.array(WordBuyItemSchema).min(1),
		business_id: UUID,
	})
	.openapi('UpdateWordBuysRequest');
export type UpdateWordBuysRequest = z.infer<typeof UpdateWordBuysRequestSchema>;

export const UpdateSingleWordBuyRequestSchema = z
	.object({
		price: z.number().nonnegative(),
	})
	.openapi('UpdateSingleWordBuyRequest');
export type UpdateSingleWordBuyRequest = z.infer<typeof UpdateSingleWordBuyRequestSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('WordData', WordDataSchema);
	registry.register('CreateWordRequest', CreateWordRequestSchema);
	registry.register('UpdateWordRequest', UpdateWordRequestSchema);
	registry.register('WordBuyItem', WordBuyItemSchema);
	registry.register('CreateWordBuyRequest', CreateWordBuyRequestSchema);
	registry.register('UpdateWordBuysRequest', UpdateWordBuysRequestSchema);
	registry.register('UpdateSingleWordBuyRequest', UpdateSingleWordBuyRequestSchema);
}
