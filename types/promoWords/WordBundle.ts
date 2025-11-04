// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Word } from './Word.js';
import { WordResponseSchema } from './Word';

extendZodWithOpenApi(z);

export type WordBundle = {
	id: string;
	name: string;
	description?: string | null;
	words: Word[];
	created_at: Date;
};

export const CreateWordBundleSchema = z
	.object({
		id: z.string().uuid(),
		name: z.string(),
		description: z.string().nullable().optional(),
	})
	.openapi('CreateWordBundle');

export type CreateWordBundleInput = z.infer<typeof CreateWordBundleSchema>;

export const UpdateWordBundleSchema = CreateWordBundleSchema.partial().openapi('UpdateWordBundle');
export type UpdateWordBundleInput = z.infer<typeof UpdateWordBundleSchema>;

export const WordBundleResponseSchema = z
	.object({
		id: z.string(),
		name: z.string(),
		description: z.string().nullable().optional(),
		words: z.array(WordResponseSchema),
		created_at: z.string().datetime(),
	})
	.openapi('WordBundleResponse');

export type WordBundleResponse = z.infer<typeof WordBundleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateWordBundle', CreateWordBundleSchema);
	registry.register('UpdateWordBundle', UpdateWordBundleSchema);
	registry.register('WordBundleResponse', WordBundleResponseSchema);
}
