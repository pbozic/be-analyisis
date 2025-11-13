import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerCategorySchemas } from './category.dto.js';
import { registerSchemas as registerCategoryValidatorSchemas } from './category.validators.js';

// === Category DTOs (Response) ===
export {
	CategoryBaseSchema,
	CategoryRefSchema,
	CategoryResponseSchema,
	CategoryListResponseSchema,
	type CategoryBase,
	type CategoryRef,
	type CategoryResponse,
	type CategoryListResponse,
} from './category.dto.js';

// === Category Validators (Request Body, Query, Params) ===
export {
	CategoryIconFileDataSchema,
	CategoryTranslationSchema,
	CreateCategoryRequestSchema,
	UpdateCategoryRequestSchema,
	CategoryIdParamsSchema,
	CategoryTypeParamsSchema,
	GetCategoriesByTypeParamsDaoSchema,
	GetCategoryByIdParamsDaoSchema,
	CreateCategoryDaoInputSchema,
	UpdateCategoryDaoInputSchema,
	DeleteCategoryDaoInputSchema,
	type CategoryIconFileData,
	type CategoryTranslation,
	type CreateCategoryRequest,
	type UpdateCategoryRequest,
	type CategoryIdParams,
	type CategoryTypeParams,
	type GetCategoriesByTypeParamsDao,
	type GetCategoryByIdParamsDao,
	type CreateCategoryDaoInput,
	type UpdateCategoryDaoInput,
	type DeleteCategoryDaoInput,
} from './category.validators.js';

// === Category Mappers ===
export * from './category.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerCategorySchemas(registry);
	registerCategoryValidatorSchemas(registry);
}
