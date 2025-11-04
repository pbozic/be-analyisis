import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Translatable } from './Translatable.js';
import { TranslatableResponseSchema } from './Translatable';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Translation = {
	translations_id: string;
	translatable_id: string;
	translatable: Translatable;
	field?: string | null;
	language: string;
	translation: string;
	created_at: Date;
	updated_at: Date;
};

export const CreateTranslationSchema = z
	.object({
		translations_id: z.string().uuid(),
		translatable_id: z.string().uuid(),
		field: z.string().nullable().optional(),
		language: z.string(),
		translation: z.string(),
	})
	.openapi('CreateTranslation');

export type CreateTranslationInput = z.infer<typeof CreateTranslationSchema>;

export const UpdateTranslationSchema = CreateTranslationSchema.partial().openapi('UpdateTranslation');
export type UpdateTranslationInput = z.infer<typeof UpdateTranslationSchema>;

export const TranslationResponseSchema = z
	.object({
		translations_id: z.string(),
		translatable_id: z.string(),
		translatable: TranslatableResponseSchema,
		field: z.string().nullable().optional(),
		language: z.string(),
		translation: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('TranslationResponse');

export type TranslationResponse = z.infer<typeof TranslationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateTranslation', CreateTranslationSchema);
	registry.register('UpdateTranslation', UpdateTranslationSchema);
	registry.register('TranslationResponse', TranslationResponseSchema);
}
