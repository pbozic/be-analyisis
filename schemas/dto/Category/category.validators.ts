import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// Helper Schemas
// =======================
export const CategoryIconFileDataSchema = z
	.object({
		file_type: z.string().openapi({ example: 'image' }),
		mime_type: z.string().openapi({ example: 'image/png' }),
		base64: z.string().openapi({ example: 'iVBORw0KGgoAAAANSUhEUgAA...' }),
	})
	.openapi('CategoryIconFileData');

export type CategoryIconFileData = z.infer<typeof CategoryIconFileDataSchema>;

export const CategoryTranslationSchema = z
	.object({
		language: z.string().openapi({ example: 'en' }),
		translation: z.string().openapi({ example: 'Beverages' }),
	})
	.openapi('CategoryTranslation');

export type CategoryTranslation = z.infer<typeof CategoryTranslationSchema>;

// =======================
// Request Schemas (used in routes with validate())
// =======================
export const CreateCategoryRequestSchema = z
	.object({
		categoryData: z.any().openapi({ example: { name: 'drinks', tag: 'drinks' } }),
		translations: z.array(CategoryTranslationSchema).optional(),
		subcategories: z.array(z.any()).optional().openapi({ example: [] }),
		words: z
			.array(z.string())
			.optional()
			.openapi({ example: ['cola', 'fizzy'] }),
		parent_categories_id: UUID.optional(),
		iconFileData: CategoryIconFileDataSchema.optional(),
	})
	.openapi('CreateCategoryRequest');

export type CreateCategoryRequest = z.infer<typeof CreateCategoryRequestSchema>;

export const UpdateCategoryRequestSchema = z
	.object({
		categoryData: z
			.any()
			.optional()
			.openapi({ example: { name: 'drinks' } }),
		translations: z.array(CategoryTranslationSchema).optional(),
		subcategories: z.array(z.any()).optional(),
		parent_categories_id: UUID.optional(),
		iconFileData: CategoryIconFileDataSchema.optional(),
	})
	.openapi('UpdateCategoryRequest');

export type UpdateCategoryRequest = z.infer<typeof UpdateCategoryRequestSchema>;

// =======================
// Path Parameter Schemas
// =======================
export const CategoryIdParamsSchema = z
	.object({
		id: UUID,
	})
	.openapi('CategoryIdParams');

export type CategoryIdParams = z.infer<typeof CategoryIdParamsSchema>;

export const CategoryTypeParamsSchema = z
	.object({
		category_type: z.string().openapi({ example: 'service' }),
	})
	.openapi('CategoryTypeParams');

export type CategoryTypeParams = z.infer<typeof CategoryTypeParamsSchema>;

// =======================
// DAO-level Input Schemas
// =======================
export const GetCategoriesByTypeParamsDaoSchema = CategoryTypeParamsSchema.openapi('GetCategoriesByTypeParams');
export type GetCategoriesByTypeParamsDao = z.infer<typeof GetCategoriesByTypeParamsDaoSchema>;

export const GetCategoryByIdParamsDaoSchema = CategoryIdParamsSchema.openapi('GetCategoryByIdParams');
export type GetCategoryByIdParamsDao = z.infer<typeof GetCategoryByIdParamsDaoSchema>;

export const CreateCategoryDaoInputSchema = CreateCategoryRequestSchema.openapi('CreateCategoryDaoInput');
export type CreateCategoryDaoInput = z.infer<typeof CreateCategoryDaoInputSchema>;

export const UpdateCategoryDaoInputSchema = z
	.object({
		id: UUID,
		categoryData: z.any().optional(),
		translations: z.array(CategoryTranslationSchema).optional(),
		subcategories: z.array(z.string().uuid()).optional(),
		parent_categories_id: z.string().uuid().optional().nullable(),
		iconFileData: CategoryIconFileDataSchema.optional(),
	})
	.openapi('UpdateCategoryDaoInput');

export type UpdateCategoryDaoInput = z.infer<typeof UpdateCategoryDaoInputSchema>;

export const DeleteCategoryDaoInputSchema = z
	.object({
		id: UUID,
	})
	.openapi('DeleteCategoryDaoInput');

export type DeleteCategoryDaoInput = z.infer<typeof DeleteCategoryDaoInputSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register helper schemas
	registry.register('CategoryIconFileData', CategoryIconFileDataSchema);
	registry.register('CategoryTranslation', CategoryTranslationSchema);

	// Register request schemas
	registry.register('CreateCategoryRequest', CreateCategoryRequestSchema);
	registry.register('UpdateCategoryRequest', UpdateCategoryRequestSchema);

	// Register path param schemas
	registry.register('CategoryIdParams', CategoryIdParamsSchema);
	registry.register('CategoryTypeParams', CategoryTypeParamsSchema);

	// Register DAO-level schemas
	registry.register('GetCategoriesByTypeParams', GetCategoriesByTypeParamsDaoSchema);
	registry.register('GetCategoryByIdParams', GetCategoryByIdParamsDaoSchema);
	registry.register('CreateCategoryDaoInput', CreateCategoryDaoInputSchema);
	registry.register('UpdateCategoryDaoInput', UpdateCategoryDaoInputSchema);
	registry.register('DeleteCategoryDaoInput', DeleteCategoryDaoInputSchema);
}
