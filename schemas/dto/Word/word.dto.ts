import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, LanguageCode, Timestamp } from '../../primitives';
import { BusinessBaseSchema } from '../Business';

extendZodWithOpenApi(z);

// =======================
// Word Response DTOs (DAO)
// =======================

// Common translation item
export const TranslationItemSchema = z
	.object({
		language: LanguageCode,
		translation: z.string().min(1),
	})
	.openapi('TranslationItem');
export type TranslationItem = z.infer<typeof TranslationItemSchema>;

export const CategoryRefSchema = z
	.object({
		categories_id: UUID,
		label: z.string().min(1),
	})
	.openapi('CategoryRef');
export type CategoryRef = z.infer<typeof CategoryRefSchema>;

export const WordBaseSchema = z
	.object({
		word_id: UUID,
		word: z.string().min(1),
		popularity: z.number().int().nonnegative().default(0),
		categories_id: UUID.nullable().optional(),
		translatable_id: UUID.nullable().optional(),
		created_at: z.string().datetime().optional(),
		updated_at: z.string().datetime().optional(),
	})
	.openapi('WordBase');
export type WordBase = z.infer<typeof WordBaseSchema>;

export const WordDetailSchema = WordBaseSchema.extend({
	translations: z.array(TranslationItemSchema).default([]),
	translatable: z.object({ translations: z.array(TranslationItemSchema).default([]) }).optional(),
	category: CategoryRefSchema.nullable().optional(),
}).openapi('WordDetail');
export type WordDetail = z.infer<typeof WordDetailSchema>;

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
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
		business_id: UUID.optional(),
		business: BusinessBaseSchema.optional(),
	})
	.openapi('WordBuyItem');
export type WordBuyItem = z.infer<typeof WordBuyItemSchema>;

export const WordBuyItemDetailSchema = WordBuyItemSchema.extend({
	word: WordDetailSchema,
}).openapi('WordBuyItemDetail');
export type WordBuyItemDetail = z.infer<typeof WordBuyItemDetailSchema>;

export const CreateWordBuyRequestSchema = z
	.object({
		words: z.array(WordBuyItemSchema).min(1),
		business_id: UUID,
	})
	.openapi('CreateWordBuyRequest');
export type CreateWordBuyRequest = z.infer<typeof CreateWordBuyRequestSchema>;

export const UpdateWordBuysRequestSchema = CreateWordBuyRequestSchema.openapi('UpdateWordBuysRequest');
export type UpdateWordBuysRequest = z.infer<typeof UpdateWordBuysRequestSchema>;

export const UpdateSingleWordBuyRequestSchema = z
	.object({
		price: z.number().nonnegative(),
	})
	.openapi('UpdateSingleWordBuyRequest');
export type UpdateSingleWordBuyRequest = z.infer<typeof UpdateSingleWordBuyRequestSchema>;

// =======================
// Subscription Responses
// =======================

export const UpdateUserSubscriptionSuccessSchema = z
	.object({
		success: z.literal(true),
		subscriptionId: z.string(),
		paymentRequired: z.boolean(),
		clientSecret: z.string().nullable(),
	})
	.openapi('UpdateUserSubscriptionSuccess');

export const UpdateUserSubscriptionErrorSchema = z
	.object({
		success: z.literal(false),
		error: z.string(),
	})
	.openapi('UpdateUserSubscriptionError');

export const UpdateUserSubscriptionResponseSchema = z
	.union([UpdateUserSubscriptionSuccessSchema, UpdateUserSubscriptionErrorSchema])
	.openapi('UpdateUserSubscriptionResponse');
export type UpdateUserSubscriptionResponse = z.infer<typeof UpdateUserSubscriptionResponseSchema>;

export const CreateWordBuySubscriptionResponseSchema = z
	.object({
		wordBuyIds: z.array(UUID),
		subscriptionId: z.string(),
		clientSecret: z.string().nullable(),
		paymentRequired: z.boolean(),
		reusedSubscription: z.boolean(),
	})
	.openapi('CreateWordBuySubscriptionResponse');
export type CreateWordBuySubscriptionResponse = z.infer<typeof CreateWordBuySubscriptionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Responses
	registry.register('CategoryRef', CategoryRefSchema);
	registry.register('WordBase', WordBaseSchema);
	registry.register('WordDetail', WordDetailSchema);
	registry.register('TranslationItem', TranslationItemSchema);
	registry.register('WordData', WordDataSchema);
	registry.register('CreateWordRequest', CreateWordRequestSchema);
	registry.register('UpdateWordRequest', UpdateWordRequestSchema);
	registry.register('WordBuyItem', WordBuyItemSchema);
	registry.register('CreateWordBuyRequest', CreateWordBuyRequestSchema);
	registry.register('UpdateWordBuysRequest', UpdateWordBuysRequestSchema);
	registry.register('UpdateSingleWordBuyRequest', UpdateSingleWordBuyRequestSchema);

	// Subscription Responses
	registry.register('UpdateUserSubscriptionSuccess', UpdateUserSubscriptionSuccessSchema);
	registry.register('UpdateUserSubscriptionError', UpdateUserSubscriptionErrorSchema);
	registry.register('UpdateUserSubscriptionResponse', UpdateUserSubscriptionResponseSchema);
	registry.register('CreateWordBuySubscriptionResponse', CreateWordBuySubscriptionResponseSchema);
}
