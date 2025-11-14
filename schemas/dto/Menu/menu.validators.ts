import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { DOCUMENT_TYPE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';
import { CreateFileDataSchema } from '../Files/index.js';

extendZodWithOpenApi(z);

// =======================
// Menu Request Schemas
// =======================
export const CreateMenuSchema = z
	.object({
		food_drinks_id: UUID.optional().openapi({ example: '770e8400-e29b-41d4-a716-446655440000' }),
		stores_id: UUID.optional().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		is_daily_meals: z.boolean().optional().default(false).openapi({ example: false }),
	})
	.openapi('CreateMenu');

export const CreateDailyMealMenuSchema = z
	.object({
		business_id: UUID.openapi({ example: '770e8400-e29b-41d4-a716-446655440000' }),
		date: Timestamp.openapi({ example: '2025-01-15T00:00:00Z' }),
		menu_category: z
			.any()
			.optional()
			.openapi({ example: { name: { en: 'Lunch' }, price: 5.5 } }),
	})
	.openapi('CreateDailyMealMenu');

export type CreateDailyMealMenu = z.infer<typeof CreateDailyMealMenuSchema>;

export const SetActiveMenuInputSchema = z
	.object({
		menu_id: UUID,
		active: z.boolean().openapi({ example: true }),
	})
	.openapi('SetActiveMenuInput');

export type SetActiveMenuInput = z.infer<typeof SetActiveMenuInputSchema>;

export const UpdateMenuOrderInputSchema = z
	.object({
		menu_id: UUID,
		orderedMenuCategoryIds: z.array(UUID).openapi({ example: ['aa0e8400-e29b-41d4-a716-446655440000'] }),
	})
	.openapi('UpdateMenuOrderInput');

export type UpdateMenuOrderInput = z.infer<typeof UpdateMenuOrderInputSchema>;

export const DailyMenuByBusinessIdBodySchema = z
	.object({
		start_date: z.date().openapi({ example: '2025-01-15T00:00:00Z' }),
	})
	.openapi('DailyMenuByBusinessIdBody');

export type DailyMenuByBusinessIdBody = z.infer<typeof DailyMenuByBusinessIdBodySchema>;

// =======================
// MenuCategory Request Schemas
// =======================
export const MenuCategoryDataSchema = z
	.object({
		name_translatable_id: UUID.optional(),
		names: z
			.record(z.string())
			.optional()
			.openapi({ example: { en: 'Starters', sl: 'Predjedi' } }),
		description_translatable_id: UUID.optional(),
		description: z.record(z.string()).optional(),
		categories: z
			.array(z.string())
			.optional()
			.openapi({ example: ['salads', 'vegan'] }),
		food_drinks_id: UUID.optional().openapi({ example: '770e8400-e29b-41d4-a716-446655440000' }),
		stores_id: UUID.optional().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		menu_id: UUID.optional(),
		order: z.number().int().optional(),
		price: z.number().optional(),
	})
	.passthrough()
	.openapi('MenuCategoryData');

export const CreateMenuCategorySchema = z
	.object({
		menu_id: UUID,
		data: MenuCategoryDataSchema,
	})
	.openapi('CreateMenuCategory');

export const UpdateMenuCategoryInputSchema = z
	.object({
		menu_category_id: UUID,
		data: MenuCategoryDataSchema.partial(),
	})
	.openapi('UpdateMenuCategoryInput');

export type UpdateMenuCategoryInput = z.infer<typeof UpdateMenuCategoryInputSchema>;

export const AddMenuCategoryIdToOrderInputSchema = z
	.object({
		menu_id: UUID,
		menuCategoryIdToAdd: UUID,
	})
	.openapi('AddMenuCategoryIdToOrderInput');

export type AddMenuCategoryIdToOrderInput = z.infer<typeof AddMenuCategoryIdToOrderInputSchema>;

export const RemoveMenuCategoryIdFromOrderInputSchema = z
	.object({
		menu_id: UUID,
		menuCategoryIdToRemove: UUID,
	})
	.openapi('RemoveMenuCategoryIdFromOrderInput');

export type RemoveMenuCategoryIdFromOrderInput = z.infer<typeof RemoveMenuCategoryIdFromOrderInputSchema>;

export const AddCategoryToMenuInputSchema = z
	.object({
		menu_id: UUID,
		menu_category_id: UUID,
	})
	.openapi('AddCategoryToMenuInput');

export type AddCategoryToMenuInput = z.infer<typeof AddCategoryToMenuInputSchema>;

export const RemoveCategoryFromMenuInputSchema = z
	.object({
		menu_category_id: UUID,
	})
	.openapi('RemoveCategoryFromMenuInput');

export type RemoveCategoryFromMenuInput = z.infer<typeof RemoveCategoryFromMenuInputSchema>;

export const UpdateDailyMealMenuPriceInputSchema = z
	.object({
		menu_category_id: UUID,
		price: z.number().openapi({ example: 5.5 }),
	})
	.openapi('UpdateDailyMealMenuPriceInput');

export type UpdateDailyMealMenuPriceInput = z.infer<typeof UpdateDailyMealMenuPriceInputSchema>;

// =======================
// MenuItem Request Schemas
// =======================
export const MenuItemDataSchema = z
	.object({
		name_translatable_id: UUID.optional(),
		names: z
			.record(z.string())
			.optional()
			.openapi({ example: { en: 'Burger' } }),
		description_translatable_id: UUID.optional(),
		description: z.record(z.string()).optional(),
		price: z.number().optional().openapi({ example: 9.99 }),
		discount: z.number().optional(),
		sides: z.array(z.string()).optional(),
		extras: z.array(z.string()).optional(),
		ingredients: z.any().optional(),
		availability: z.array(z.string()).optional(),
		food_drinks_id: UUID.optional().openapi({ example: '770e8400-e29b-41d4-a716-446655440000' }),
		stores_id: UUID.optional().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		menu_category_id: UUID.optional(),
		daily_date: Timestamp.optional(),
		requires_id_check: z.boolean().optional(),
		is_enabled: z.boolean().optional(),
		is_copy: z.boolean().optional(),
		is_weighted: z.boolean().optional(),
		weight_quantity: z.number().optional(),
		stock: z.number().optional(),
		tax_rates_id: UUID.optional(),
	})
	.passthrough()
	.openapi('MenuItemData');

export const CreateMenuItemSchema = z
	.object({
		category_id: UUID.openapi({ example: 'aa0e8400-e29b-41d4-a716-446655440000' }),
		tax_rate_id: UUID.optional().nullable(),
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
				document_id: UUID.optional(),
			})
			.optional(),
		is_copy: z.boolean().optional(),
	})
	.openapi('CreateMenuItem');

export const UpdateMenuItemInputSchema = z
	.object({
		menuItemId: UUID,
		data: z.any().openapi({ example: { price: 12.5 } }),
	})
	.openapi('UpdateMenuItemInput');

export type UpdateMenuItemInput = z.infer<typeof UpdateMenuItemInputSchema>;

export const GetMenuItemsByIdsRequestSchema = z
	.object({
		ids: z.array(UUID).openapi({ example: ['bb0e8400-e29b-41d4-a716-446655440000'] }),
	})
	.openapi('GetMenuItemsByIdsRequest');

export const UpdateMenuItemEnabledSchema = z
	.object({
		menu_item_id: UUID,
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

export const AddMenuItemToCategoryInputSchema = z
	.object({
		menu_item_id: UUID,
		menu_category_id: UUID,
	})
	.openapi('AddMenuItemToCategoryInput');

export type AddMenuItemToCategoryInput = z.infer<typeof AddMenuItemToCategoryInputSchema>;

export const RemoveMenuItemFromCategoryInputSchema = z
	.object({
		menu_item_id: UUID,
	})
	.openapi('RemoveMenuItemFromCategoryInput');

export type RemoveMenuItemFromCategoryInput = z.infer<typeof RemoveMenuItemFromCategoryInputSchema>;

export const UpdateMenuItemsOrderInputSchema = z
	.object({
		menu_category_id: UUID,
		ordered_menu_items_ids: z.array(UUID).openapi({ example: ['cc0e8400-e29b-41d4-a716-446655440000'] }),
	})
	.openapi('UpdateMenuItemsOrderInput');

export type UpdateMenuItemsOrderInput = z.infer<typeof UpdateMenuItemsOrderInputSchema>;

export const MenuItemsIdsBodySchema = z.object({ ids: z.array(UUID).min(1) }).openapi('MenuItemsIdsBody');

// =======================
// DAO-level Input Schemas (from menucategory.dto.ts and menuitem.dto.ts)
// =======================
// Re-export from menucategory.dto.ts
export {
	CreateMenuCategoryInputSchema,
	CreateMenuCategoryWithCategoriesInputSchema,
	CreateDailyMealMenuCategoryInputSchema,
	AddMenuCategoryIdToOrderInputSchema,
	RemoveMenuCategoryIdFromOrderInputSchema,
	GetMenuCategoriesByMenuIdParamsSchema,
	GetMenuCategoriesByBusinessIdParamsSchema,
	DeleteMenuCategoryInputSchema,
	UpdateMenuItemsOrderInputSchema as UpdateMenuCategoryItemsOrderInputSchema,
	AddCategoryToMenuCategoryInputSchema,
	RemoveCategoryFromMenuCategoryInputSchema,
	GetMenuCategoryByIdParamsSchema,
	UpdateMenuCategoriesWithNewPriceInputSchema,
	type CreateMenuCategoryInput,
	type CreateMenuCategoryWithCategoriesInput,
	type CreateDailyMealMenuCategoryInput,
	type AddMenuCategoryIdToOrderInput,
	type RemoveMenuCategoryIdFromOrderInput,
	type GetMenuCategoriesByMenuIdParams,
	type GetMenuCategoriesByBusinessIdParams,
	type DeleteMenuCategoryInput,
	type AddCategoryToMenuCategoryInput,
	type RemoveCategoryFromMenuCategoryInput,
	type GetMenuCategoryByIdParams,
	type UpdateMenuCategoriesWithNewPriceInput,
} from './menucategory.dto.js';

// Re-export from menuitem.dto.ts
export {
	CreateMenuItemVersionInputSchema,
	CreateMenuItemInputSchema,
	AddMenuItemIdToOrderInputSchema,
	RemoveMenuItemIdFromOrderInputSchema,
	GetMenuItemsByIdsDaoInputSchema,
	GetMenuItemsByBusinessIdDaoParamsSchema,
	GetMenuItemsByCategoryIdParamsSchema,
	DeleteMenuItemInputSchema,
	UpdateMenuItemPriceInputSchema,
	type CreateMenuItemVersionInput,
	type CreateMenuItemInput,
	type AddMenuItemIdToOrderInput,
	type RemoveMenuItemIdFromOrderInput,
	type GetMenuItemsByIdsDaoInput,
	type GetMenuItemsByBusinessIdDaoParams,
	type GetMenuItemsByCategoryIdParams,
	type DeleteMenuItemInput,
	type UpdateMenuItemPriceInput,
} from './menuitem.dto.js';

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	// Menu schemas
	registry.register('CreateMenu', CreateMenuSchema);
	registry.register('CreateDailyMealMenu', CreateDailyMealMenuSchema);
	registry.register('SetActiveMenuInput', SetActiveMenuInputSchema);
	registry.register('UpdateMenuOrderInput', UpdateMenuOrderInputSchema);
	registry.register('DailyMenuByBusinessIdBody', DailyMenuByBusinessIdBodySchema);

	// MenuCategory schemas
	registry.register('MenuCategoryData', MenuCategoryDataSchema);
	registry.register('CreateMenuCategory', CreateMenuCategorySchema);
	registry.register('UpdateMenuCategoryInput', UpdateMenuCategoryInputSchema);
	registry.register('AddMenuCategoryIdToOrderInput', AddMenuCategoryIdToOrderInputSchema);
	registry.register('RemoveMenuCategoryIdFromOrderInput', RemoveMenuCategoryIdFromOrderInputSchema);
	registry.register('AddCategoryToMenuInput', AddCategoryToMenuInputSchema);
	registry.register('RemoveCategoryFromMenuInput', RemoveCategoryFromMenuInputSchema);
	registry.register('UpdateDailyMealMenuPriceInput', UpdateDailyMealMenuPriceInputSchema);

	// MenuItem schemas
	registry.register('MenuItemData', MenuItemDataSchema);
	registry.register('CreateMenuItem', CreateMenuItemSchema);
	registry.register('UpdateMenuItemInput', UpdateMenuItemInputSchema);
	registry.register('GetMenuItemsByIdsRequest', GetMenuItemsByIdsRequestSchema);
	registry.register('UpdateMenuItemEnabled', UpdateMenuItemEnabledSchema);
	registry.register('UpdateMenuItemPrice', UpdateMenuItemPriceSchema);
	registry.register('CreateMenuItemVersion', CreateMenuItemVersionSchema);
	registry.register('AddMenuItemToCategoryInput', AddMenuItemToCategoryInputSchema);
	registry.register('RemoveMenuItemFromCategoryInput', RemoveMenuItemFromCategoryInputSchema);
	registry.register('UpdateMenuItemsOrderInput', UpdateMenuItemsOrderInputSchema);
	registry.register('MenuItemsIdsBody', MenuItemsIdsBodySchema);

	// Register DAO-level schemas from menucategory.dto.ts and menuitem.dto.ts
	// These are registered in their respective files, but we can add them here if needed
}
