import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, LanguageCode } from '../../primitives';

extendZodWithOpenApi(z);

// Common translation item
export const TranslationItemSchema = z
	.object({
		language: LanguageCode,
		translation: z.string().min(1),
	})
	.openapi('TranslationItem');

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
	})
	.openapi('WordBuyItem');

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
	registry.register('TranslationItem', TranslationItemSchema);
	registry.register('WordData', WordDataSchema);
	registry.register('CreateWordRequest', CreateWordRequestSchema);
	registry.register('UpdateWordRequest', UpdateWordRequestSchema);
	registry.register('WordBuyItem', WordBuyItemSchema);
	registry.register('CreateWordBuyRequest', CreateWordBuyRequestSchema);
	registry.register('UpdateWordBuysRequest', UpdateWordBuysRequestSchema);
	registry.register('UpdateSingleWordBuyRequest', UpdateSingleWordBuyRequestSchema);
}
