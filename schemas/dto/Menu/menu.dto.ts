import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { DOCUMENT_TYPE } from '@prisma/client';

import { CreateFileDataSchema } from '../Files/file.dto.js';

extendZodWithOpenApi(z);

// =======================
// Menu create/update schemas
// =======================
export const CreateMenuSchema = z
	.object({
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		is_daily_meals: z.boolean().optional().default(false).openapi({ example: false }),
	})
	.openapi('CreateMenu');

export const CreateDailyMealMenuSchema = z
	.object({
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		date: z.string().datetime().openapi({ example: '2025-01-15T00:00:00Z' }),
		menu_category: z
			.any()
			.optional()
			.openapi({ example: { name: { en: 'Lunch' }, price: 5.5 } }),
	})
	.openapi('CreateDailyMealMenu');

// =======================
// MenuCategory schemas
// =======================
export const MenuCategoryDataSchema = z
	.object({
		name_translatable_id: z.string().uuid().optional(),
		names: z
			.record(z.string())
			.optional()
			.openapi({ example: { en: 'Starters', sl: 'Predjedi' } }),
		description_translatable_id: z.string().uuid().optional(),
		description: z.record(z.string()).optional(),
		categories: z
			.array(z.string())
			.optional()
			.openapi({ example: ['salads', 'vegan'] }),
		business_id: z.string().uuid().optional(),
		menu_id: z.string().uuid().optional(),
		order: z.number().int().optional(),
		price: z.number().optional(),
	})
	.passthrough()
	.openapi('MenuCategoryData');

export const CreateMenuCategorySchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		data: MenuCategoryDataSchema,
	})
	.openapi('CreateMenuCategory');

export type MenuCategory = z.infer<typeof MenuCategoryDataSchema>;

// (Menu category response schema removed - only input schemas kept)

// =======================
// MenuItem schemas
// =======================
export const MenuItemDataSchema = z
	.object({
		name_translatable_id: z.string().uuid().optional(),
		names: z
			.record(z.string())
			.optional()
			.openapi({ example: { en: 'Burger' } }),
		description_translatable_id: z.string().uuid().optional(),
		description: z.record(z.string()).optional(),
		price: z.number().optional().openapi({ example: 9.99 }),
		discount: z.number().optional(),
		sides: z.array(z.string()).optional(),
		extras: z.array(z.string()).optional(),
		ingredients: z.any().optional(),
		availability: z.array(z.string()).optional(),
		business_id: z.string().uuid().optional(),
		menu_category_id: z.string().uuid().optional(),
		daily_date: z.string().datetime().optional(),
		requires_id_check: z.boolean().optional(),
		is_enabled: z.boolean().optional(),
		is_copy: z.boolean().optional(),
		is_weighted: z.boolean().optional(),
		weight_quantity: z.number().optional(),
		stock: z.number().optional(),
		tax_rates_id: z.string().uuid().optional(),
		// allow arbitrary extra fields used by the app
	})
	.passthrough()
	.openapi('MenuItemData');

export type MenuItem = z.infer<typeof MenuItemDataSchema>;

// =======================
// MenuItem Ref Schema - minimal identity for embedding
// =======================
export const MenuItemRefSchema = z
	.object({
		menu_item_id: z.string().uuid().openapi({ example: 'cc0e8400-e29b-41d4-a716-446655440000' }),
		names: z
			.record(z.string())
			.nullable()
			.optional()
			.openapi({ example: { en: 'Burger' } }),
		price: z.number().nullable().optional().openapi({ example: 9.99 }),
	})
	.openapi('MenuItemRef');

export type MenuItemRef = z.infer<typeof MenuItemRefSchema>;

// =======================
// Category Base Schema (from categories table)
// =======================
export const CategoryBaseSchema = z
	.object({
		categories_id: z.string().uuid(),
		name: z.string(),
		description: z.string().nullable().optional(),
		tag: z.string(),
		icon_file_id: z.string().uuid().nullable().optional(),
		icon: z.any().nullable().optional(),
		category_type: z.string(),
		parent_categories_id: z.string().uuid().nullable().optional(),
		parent_category: z.any().nullable().optional(),
		sub_categories: z.array(z.any()).nullable().optional(),
		translatable_id: z.string().uuid(),
		translatable: z.any().nullable().optional(),
		words: z.array(z.any()).nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		deleted_at: z.string().datetime().nullable().optional(),
		daily_meal_categories: z.array(z.any()).nullable().optional(),
	})
	.passthrough()
	.openapi('CategoryBase');

export type CategoryBase = z.infer<typeof CategoryBaseSchema>;

// =======================
// MenuCategoryCategory (junction table) Schema
// =======================
export const MenuCategoryCategorySchema = z
	.object({
		menu_categories_id: z.string().uuid(),
		categories_id: z.string().uuid(),
		category: CategoryBaseSchema.nullable().optional(),
	})
	.openapi('MenuCategoryCategory');

export type MenuCategoryCategory = z.infer<typeof MenuCategoryCategorySchema>;

// =======================
// MenuCategory Ref Schema
// =======================
export const MenuCategoryRefSchema = z
	.object({
		menu_category_id: z.string().uuid(),
		menu_id: z.string().uuid().optional(),
		names: z.record(z.string()).nullable().optional(),
		business_id: z.string().uuid().nullable().optional(),
		menu_items_ordered: z.array(z.string()).nullable().optional(),
		menu_categories_categories: z.array(MenuCategoryCategorySchema).nullable().optional(),
	})
	.openapi('MenuCategoryRef');

export type MenuCategoryRef = z.infer<typeof MenuCategoryRefSchema>;

// =======================
// MenuItem Detail Schema - extends Data with relations
// =======================
export const MenuItemDetailSchema = MenuItemDataSchema.extend({
	menu_item_id: z.string().uuid().openapi({ example: 'cc0e8400-e29b-41d4-a716-446655440000' }),
	created_at: z.string().datetime().optional(),
	updated_at: z.string().datetime().nullable().optional(),
	menu_category: MenuCategoryRefSchema.nullable().optional(),
	documents: z
		.array(
			z.object({
				document_id: z.string().uuid(),
				files: z
					.array(
						z.object({
							file_id: z.string().uuid(),
							url: z.string().url(),
							document_id: z.string().uuid(),
						})
					)
					.optional(),
			})
		)
		.optional(),
}).openapi('MenuItemDetail');

export type MenuItemDetail = z.infer<typeof MenuItemDetailSchema>;

// =======================
// MenuItem Response Schemas - for DAO returns
// =======================
export const MenuItemResponseSchema = MenuItemDetailSchema.openapi('MenuItemResponse');
export type MenuItemResponse = z.infer<typeof MenuItemResponseSchema>;

// Array response for multiple menu items
export const MenuItemsResponseSchema = z.array(MenuItemResponseSchema).openapi('MenuItemsResponse');
export type MenuItemsResponse = z.infer<typeof MenuItemsResponseSchema>;

export const CreateMenuItemSchema = z
	.object({
		category_id: z.string().uuid().openapi({ example: 'aa0e8400-e29b-41d4-a716-446655440000' }),
		tax_rate_id: z.string().uuid().optional().nullable(),
		data: MenuItemDataSchema,
		image: z
			.object({
				documentData: z
					.object({
						document_type: z.nativeEnum(DOCUMENT_TYPE).optional(),
						public: z.boolean().optional(),
					})
					.optional(),
				files: z.array(CreateFileDataSchema).optional(),
				document_id: z.string().uuid().optional(),
			})
			.optional(),
		is_copy: z.boolean().optional(),
	})
	.openapi('CreateMenuItem');

export const UpdateMenuItemSchema = MenuItemDetailSchema.partial();
export type UpdateMenuItem = z.infer<typeof UpdateMenuItemSchema>;
// =======================
// Other small request schemas
// =======================
export const GetMenuItemsByIdsRequestSchema = z
	.object({
		ids: z.array(z.string().uuid()).openapi({ example: ['bb0e8400-e29b-41d4-a716-446655440000'] }),
	})
	.openapi('GetMenuItemsByIdsRequest');

export const UpdateMenuItemEnabledSchema = z
	.object({
		menu_item_id: z.string().uuid(),
		is_enabled: z.boolean(),
	})
	.openapi('UpdateMenuItemEnabled');

export const UpdateMenuItemPriceSchema = z
	.object({
		price: z.number(),
	})
	.openapi('UpdateMenuItemPrice');

export const CreateMenuItemVersionSchema = z
	.object({
		version: z.number().int().openapi({ example: 2 }),
		snapshot: z.any().openapi({ example: { price: 999, names: { en: 'Burger' } } }),
	})
	.openapi('CreateMenuItemVersion');

// Response for MenuItemVersion creation
export const MenuItemVersionResponseSchema = z
	.object({
		menu_item_version_id: z.string().uuid().openapi({ example: 'dd0e8400-e29b-41d4-a716-446655440000' }),
		menu_item_id: z.string().uuid(),
		version: z.number().int(),
		snapshot: z.any(),
		created_at: z.string().datetime().optional(),
	})
	.openapi('MenuItemVersionResponse');

export type MenuItemVersionResponse = z.infer<typeof MenuItemVersionResponseSchema>;

// =======================
// Responses for Menu
// =======================
// (Menu response schemas removed - only input schemas kept)

// =======================
// Register schemas
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenu', CreateMenuSchema);
	registry.register('CreateDailyMealMenu', CreateDailyMealMenuSchema);
	registry.register('MenuCategoryData', MenuCategoryDataSchema);
	registry.register('CreateMenuCategory', CreateMenuCategorySchema);
	registry.register('MenuItemData', MenuItemDataSchema);
	registry.register('MenuItemRef', MenuItemRefSchema);
	registry.register('CategoryBase', CategoryBaseSchema);
	registry.register('MenuCategoryCategory', MenuCategoryCategorySchema);
	registry.register('MenuCategoryRef', MenuCategoryRefSchema);
	registry.register('MenuItemDetail', MenuItemDetailSchema);
	registry.register('CreateMenuItem', CreateMenuItemSchema);
	registry.register('GetMenuItemsByIdsRequest', GetMenuItemsByIdsRequestSchema);
	registry.register('UpdateMenuItemEnabled', UpdateMenuItemEnabledSchema);
	registry.register('UpdateMenuItemPrice', UpdateMenuItemPriceSchema);
	registry.register('CreateMenuItemVersion', CreateMenuItemVersionSchema);
	registry.register('MenuItemResponse', MenuItemResponseSchema);
	registry.register('MenuItemsResponse', MenuItemsResponseSchema);
	registry.register('MenuItemVersionResponse', MenuItemVersionResponseSchema);
}

// -----------------------
// DAO-level input schemas (named exports)
// -----------------------

export const CreateMenuInputSchema = z
	.object({
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		isDailyMeal: z.boolean().optional().openapi({ example: false }),
		date: z.string().datetime().optional().openapi({ example: '2025-01-15T00:00:00Z' }),
	})
	.openapi('CreateMenuInput');
export type CreateMenuInput = z.infer<typeof CreateMenuInputSchema>;

export const GetMenuByBusinessIdParamsSchema = z
	.object({
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		isDailyMeal: z.boolean().optional().openapi({ example: false }),
		startDate: z.string().datetime().optional().openapi({ example: '2025-01-15T00:00:00Z' }),
	})
	.openapi('GetMenuByBusinessIdParams');
export type GetMenuByBusinessIdParams = z.infer<typeof GetMenuByBusinessIdParamsSchema>;

export const DeleteMenuInputSchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DeleteMenuInput');
export type DeleteMenuInput = z.infer<typeof DeleteMenuInputSchema>;

export const SetActiveMenuInputSchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		active: z.boolean().openapi({ example: true }),
	})
	.openapi('SetActiveMenuInput');
export type SetActiveMenuInput = z.infer<typeof SetActiveMenuInputSchema>;

export const UpdateMenuOrderInputSchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		orderedMenuCategoryIds: z
			.array(z.string().uuid())
			.openapi({ example: ['aa0e8400-e29b-41d4-a716-446655440000'] }),
	})
	.openapi('UpdateMenuOrderInput');
export type UpdateMenuOrderInput = z.infer<typeof UpdateMenuOrderInputSchema>;

export const GetMenuByDateInputSchema = z
	.object({
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		date: z.string().datetime().openapi({ example: '2025-01-15T00:00:00Z' }),
	})
	.openapi('GetMenuByDateInput');
export type GetMenuByDateInput = z.infer<typeof GetMenuByDateInputSchema>;

// POST /daily/business/:business_id
export const DailyMenuByBusinessIdBodySchema = z
	.object({
		start_date: z.string().datetime().openapi({ example: '2025-01-15T00:00:00Z' }),
	})
	.openapi('DailyMenuByBusinessIdBody');
export type DailyMenuByBusinessIdBody = z.infer<typeof DailyMenuByBusinessIdBodySchema>;

// Register DAO-level menu schemas
export function registerMenuDaoSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenuInput', CreateMenuInputSchema);
	registry.register('GetMenuByBusinessIdParams', GetMenuByBusinessIdParamsSchema);
	registry.register('DeleteMenuInput', DeleteMenuInputSchema);
	registry.register('SetActiveMenuInput', SetActiveMenuInputSchema);
	registry.register('UpdateMenuOrderInput', UpdateMenuOrderInputSchema);
	registry.register('GetMenuByDateInput', GetMenuByDateInputSchema);
	registry.register('DailyMenuByBusinessIdBody', DailyMenuByBusinessIdBodySchema);
}
