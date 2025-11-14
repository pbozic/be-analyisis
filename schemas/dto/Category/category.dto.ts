import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { CATEGORY_TYPE } from '@prisma/client';

import { UUID, LanguageCode, Timestamp } from '../../primitives.js';
import { TranslationItemSchema } from '../Word/word.dto.js';

extendZodWithOpenApi(z);

// =======================
// Base Schema - scalars only, no relations
// =======================
export const CategoryBaseSchema = z
	.object({
		categories_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		name: z.string().min(1).openapi({ example: 'Italian Cuisine' }),
		description: z.string().nullable().optional().openapi({ example: 'Traditional Italian dishes and flavors' }),
		tag: z.string().min(1).openapi({ example: 'italian' }),
		icon_file_id: UUID.nullable().optional().openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		category_type: z.nativeEnum(CATEGORY_TYPE).openapi({ example: CATEGORY_TYPE.MENU }),
		parent_categories_id: UUID.nullable().optional().openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		translatable_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		created_at: Timestamp.openapi({ example: '2025-01-01T12:00:00.000Z' }),
		updated_at: Timestamp.openapi({ example: '2025-01-10T12:00:00.000Z' }),
		deleted_at: Timestamp.nullable().optional().openapi({ example: null }),
	})
	.openapi('CategoryBase');

export type CategoryBase = z.infer<typeof CategoryBaseSchema>;

// =======================
// Ref Schema - minimal identity for embedding elsewhere
// =======================
export const CategoryRefSchema = z
	.object({
		categories_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		name: z.string().min(1).openapi({ example: 'Italian Cuisine' }),
		tag: z.string().min(1).openapi({ example: 'italian' }),
		category_type: z.nativeEnum(CATEGORY_TYPE).openapi({ example: CATEGORY_TYPE.MENU }),
	})
	.openapi('CategoryRef');

export type CategoryRef = z.infer<typeof CategoryRefSchema>;

// =======================
// Response Schema - complete with embedded refs
// =======================
export const CategoryResponseSchema = CategoryBaseSchema.extend({
	parent_category: CategoryRefSchema.nullable().optional(),
	sub_categories: z.array(CategoryRefSchema).openapi({ example: [] }),
	translations: z
		.array(
			z.object({
				language: LanguageCode,
				translation: z.string().min(1),
			})
		)
		.openapi({
			example: [
				{ language: 'en', translation: 'Italian Cuisine' },
				{ language: 'sl', translation: 'Italijanska kuhinja' },
			],
		}),
	icon: z
		.object({
			file_id: UUID,
			file_type: z.string(),
			mime_type: z.string(),
			url: z.string().url().nullable(),
			public: z.boolean(),
			created_at: Timestamp,
			updated_at: Timestamp,
		})
		.nullable()
		.optional(),
}).openapi('CategoryResponse');

export type CategoryResponse = z.infer<typeof CategoryResponseSchema>;

// =======================
// Response Lists
// =======================
export const CategoryListResponseSchema = z
	.object({
		categories: z.array(CategoryResponseSchema),
		total: z.number().int().nonnegative().openapi({ example: 25 }),
	})
	.openapi('CategoryListResponse');

export type CategoryListResponse = z.infer<typeof CategoryListResponseSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('CategoryBase', CategoryBaseSchema);
	registry.register('CategoryRef', CategoryRefSchema);

	// Register response schemas
	registry.register('Category', CategoryResponseSchema);
	registry.register('CategoryListResponse', CategoryListResponseSchema);
	registry.register('CategoryResponse', CategoryResponseSchema);
}
