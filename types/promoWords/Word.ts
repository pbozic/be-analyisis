import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Category } from '../menus/Category.js';
import type { Translatable } from '../translations/Translatable.js';
import type { WordBuy } from './WordBuy.js';
import type { WordBundle } from './WordBundle.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';
import { CategoryResponseSchema } from '../menus/Category';
import { TranslatableResponseSchema } from '../translations/Translatable';
import { WordBuyResponseSchema } from './WordBuy';
import { WordBundleResponseSchema } from './WordBundle';
import { PromoAnalyticResponseSchema } from '../promoAnalytics/PromoAnalytic';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Word = {
	word_id: string;
	word: string;
	popularity: number;
	categories_id?: string | null;
	category?: Category | null;
	translatable_id: string;
	translatable: Translatable;
	subscriptions: WordBuy[];
	bundles: WordBundle[];
	created_at: Date;
	updated_at: Date;
	promo_analytics: PromoAnalytic[];
};

export const CreateWordSchema = z
	.object({
		word_id: z.string().uuid(),
		word: z.string(),
		popularity: z.number(),
		categories_id: z.string().uuid().nullable().optional(),
		translatable_id: z.string().uuid(),
	})
	.openapi('CreateWord');

export type CreateWordInput = z.infer<typeof CreateWordSchema>;

export const UpdateWordSchema = CreateWordSchema.partial().openapi('UpdateWord');
export type UpdateWordInput = z.infer<typeof UpdateWordSchema>;

export const WordResponseSchema = z
	.object({
		word_id: z.string(),
		word: z.string(),
		popularity: z.number(),
		categories_id: z.string().nullable().optional(),
		category: CategoryResponseSchema.nullable().optional(),
		translatable_id: z.string(),
		translatable: TranslatableResponseSchema,
		subscriptions: z.array(WordBuyResponseSchema),
		bundles: z.array(WordBundleResponseSchema),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		promo_analytics: z.array(PromoAnalyticResponseSchema),
	})
	.openapi('WordResponse');

export type WordResponse = z.infer<typeof WordResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateWord', CreateWordSchema);
	registry.register('UpdateWord', UpdateWordSchema);
	registry.register('WordResponse', WordResponseSchema);
}
