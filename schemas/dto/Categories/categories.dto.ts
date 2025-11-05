import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// -----------------------
// Category input/request schemas
// -----------------------

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

export const CreateCategoryRequestSchema = z
	.object({
		categoryData: z.any().openapi({ example: { name: 'drinks', tag: 'drinks' } }),
		translations: z.array(CategoryTranslationSchema).optional(),
		subcategories: z.array(z.any()).optional().openapi({ example: [] }),
		words: z.array(z.string()).optional().openapi({ example: ['cola', 'fizzy'] }),
		parent_categories_id: z.array(z.string().uuid()).optional().openapi({ example: ['550e8400-e29b-41d4-a716-446655440000'] }),
		iconFileData: CategoryIconFileDataSchema.optional(),
	})
	.openapi('CreateCategoryRequest');

export type CreateCategoryRequest = z.infer<typeof CreateCategoryRequestSchema>;

export const UpdateCategoryRequestSchema = z
	.object({
		categoryData: z.any().optional().openapi({ example: { name: 'drinks' } }),
		translations: z.array(CategoryTranslationSchema).optional(),
		subcategories: z.array(z.any()).optional(),
		parent_categories_id: z.array(z.string().uuid()).optional(),
		iconFileData: CategoryIconFileDataSchema.optional(),
	})
	.openapi('UpdateCategoryRequest');

export type UpdateCategoryRequest = z.infer<typeof UpdateCategoryRequestSchema>;

// -----------------------
// Path / params schemas
// -----------------------

export const CategoryIdParamsSchema = z
	.object({
		id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('CategoryIdParams');

export type CategoryIdParams = z.infer<typeof CategoryIdParamsSchema>;

export const CategoryTypeParamsSchema = z
	.object({
		category_type: z.string().openapi({ example: 'service' }),
	})
	.openapi('CategoryTypeParams');

export type CategoryTypeParams = z.infer<typeof CategoryTypeParamsSchema>;

// -----------------------
// Register schemas
// -----------------------

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CategoryIconFileData', CategoryIconFileDataSchema);
	registry.register('CategoryTranslation', CategoryTranslationSchema);
	registry.register('CreateCategoryRequest', CreateCategoryRequestSchema);
	registry.register('UpdateCategoryRequest', UpdateCategoryRequestSchema);
	registry.register('CategoryIdParams', CategoryIdParamsSchema);
	registry.register('CategoryTypeParams', CategoryTypeParamsSchema);
}

// -----------------------
// DAO-level input schemas (one per DAO function)
// -----------------------

export const GetCategoriesByTypeParamsDaoSchema = CategoryTypeParamsSchema.openapi('GetCategoriesByTypeParams');
export type GetCategoriesByTypeParamsDao = z.infer<typeof GetCategoriesByTypeParamsDaoSchema>;

export const GetCategoryByIdParamsDaoSchema = CategoryIdParamsSchema.openapi('GetCategoryByIdParams');
export type GetCategoryByIdParamsDao = z.infer<typeof GetCategoryByIdParamsDaoSchema>;

export const CreateCategoryDaoInputSchema = CreateCategoryRequestSchema.openapi('CreateCategoryDaoInput');
export type CreateCategoryDaoInput = z.infer<typeof CreateCategoryDaoInputSchema>;

export const UpdateCategoryDaoInputSchema = z
	.object({
		id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
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
		id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DeleteCategoryDaoInput');
export type DeleteCategoryDaoInput = z.infer<typeof DeleteCategoryDaoInputSchema>;

export function registerCategoriesDaoSchemas(registry: OpenAPIRegistry) {
	registry.register('GetCategoriesByTypeParams', GetCategoriesByTypeParamsDaoSchema);
	registry.register('GetCategoryByIdParams', GetCategoryByIdParamsDaoSchema);
	registry.register('CreateCategoryDaoInput', CreateCategoryDaoInputSchema);
	registry.register('UpdateCategoryDaoInput', UpdateCategoryDaoInputSchema);
	registry.register('DeleteCategoryDaoInput', DeleteCategoryDaoInputSchema);
}
