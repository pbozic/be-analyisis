import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives';

extendZodWithOpenApi(z);

export const MenuCategoryDataSchema = z
	.object({
		name_translatable_id: UUID.optional(),
		names: z
			.record(z.string())
			.optional()
			.openapi({ example: { en: 'Starters', sl: 'Predjedi' } }),
		description_translatable_id: UUID.optional(),
		description: z.record(z.string()).optional(),
		category_ids: z.array(UUID),
		categories: z
			.array(z.string())
			.optional()
			.openapi({ example: ['salads', 'vegan'] }),
		food_drinks_id: UUID.optional().openapi({ example: '770e8400-e29b-41d4-a716-446655440000' }),
		stores_id: UUID.optional().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		menu_id: UUID,
		order: z.number().int().optional(),
		daily_meal_category_id: UUID.optional(),
		daily_meal_category_price_id: UUID.optional(),
		price: z.number().optional(),
	})
	.passthrough()
	.openapi('MenuCategoryData');
export type MenuCategoryData = z.infer<typeof MenuCategoryDataSchema>;

export const CreateMenuCategorySchema = z
	.object({
		menu_id: UUID,
		data: MenuCategoryDataSchema,
	})
	.openapi('CreateMenuCategory');

export type MenuCategory = z.infer<typeof MenuCategoryDataSchema>;
// -----------------------
// MenuCategory DAO-level input schemas
// -----------------------

export const CreateMenuCategoryInputSchema = z
	.object({
		menu_id: UUID,
		categoryData: MenuCategoryDataSchema,
	})
	.openapi('CreateMenuCategoryInput');
export type CreateMenuCategoryInput = z.infer<typeof CreateMenuCategoryInputSchema>;

// Extended CreateMenuCategoryInput with category_ids for linking categories
export const CreateMenuCategoryWithCategoriesInputSchema = MenuCategoryDataSchema.extend({
	category_ids: z
		.array(UUID)
		.optional()
		.openapi({ example: ['ee0e8400-e29b-41d4-a716-446655440000'] }),
}).openapi('CreateMenuCategoryWithCategoriesInput');
export type CreateMenuCategoryWithCategoriesInput = z.infer<typeof CreateMenuCategoryWithCategoriesInputSchema>;

export const CreateDailyMealMenuCategoryInputSchema = z
	.object({
		menu_id: UUID,
		daily_meal_category_price_id: UUID,
	})
	.openapi('CreateDailyMealMenuCategoryInput');
export type CreateDailyMealMenuCategoryInput = z.infer<typeof CreateDailyMealMenuCategoryInputSchema>;

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

export const GetMenuCategoriesByMenuIdParamsSchema = z
	.object({
		menu_id: UUID,
	})
	.openapi('GetMenuCategoriesByMenuIdParams');
export type GetMenuCategoriesByMenuIdParams = z.infer<typeof GetMenuCategoriesByMenuIdParamsSchema>;

export const GetMenuCategoriesByBusinessIdParamsSchema = z
	.object({
		food_drinks_id: UUID.optional(),
		stores_id: UUID.optional(),
	})
	.openapi('GetMenuCategoriesByBusinessIdParams');
export type GetMenuCategoriesByBusinessIdParams = z.infer<typeof GetMenuCategoriesByBusinessIdParamsSchema>;

export const DeleteMenuCategoryInputSchema = z
	.object({
		menu_category_id: UUID,
	})
	.openapi('DeleteMenuCategoryInput');
export type DeleteMenuCategoryInput = z.infer<typeof DeleteMenuCategoryInputSchema>;

export const UpdateMenuCategoryInputSchema = z
	.object({
		menu_category_id: UUID,
		data: MenuCategoryDataSchema.partial(),
	})
	.openapi('UpdateMenuCategoryInput');
export type UpdateMenuCategoryInput = z.infer<typeof UpdateMenuCategoryInputSchema>;

export const UpdateMenuItemsOrderInputSchema = z
	.object({
		menu_category_id: UUID,
		ordered_menu_items_ids: z.array(UUID),
	})
	.openapi('UpdateMenuItemsOrderInput');
export type UpdateMenuItemsOrderInput = z.infer<typeof UpdateMenuItemsOrderInputSchema>;

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

export const AddCategoryToMenuCategoryInputSchema = z
	.object({
		menu_category_id: UUID,
		category_id: UUID,
	})
	.openapi('AddCategoryToMenuCategoryInput');
export type AddCategoryToMenuCategoryInput = z.infer<typeof AddCategoryToMenuCategoryInputSchema>;

export const RemoveCategoryFromMenuCategoryInputSchema = z
	.object({
		menu_category_id: UUID,
		category_id: UUID,
	})
	.openapi('RemoveCategoryFromMenuCategoryInput');
export type RemoveCategoryFromMenuCategoryInput = z.infer<typeof RemoveCategoryFromMenuCategoryInputSchema>;

export const UpdateDailyMealMenuPriceInputSchema = z
	.object({
		menu_category_id: UUID,
		price: z.number().openapi({ example: 5.5 }),
	})
	.openapi('UpdateDailyMealMenuPriceInput');
export type UpdateDailyMealMenuPriceInput = z.infer<typeof UpdateDailyMealMenuPriceInputSchema>;

export const GetMenuCategoryByIdParamsSchema = z
	.object({
		menu_category_id: UUID,
	})
	.openapi('GetMenuCategoryByIdParams');
export type GetMenuCategoryByIdParams = z.infer<typeof GetMenuCategoryByIdParamsSchema>;

export const UpdateMenuCategoriesWithNewPriceInputSchema = z
	.object({
		dailyMealCategoryId: UUID,
		priceId: UUID,
		validFrom: Timestamp,
	})
	.openapi('UpdateMenuCategoriesWithNewPriceInput');
export type UpdateMenuCategoriesWithNewPriceInput = z.infer<typeof UpdateMenuCategoriesWithNewPriceInputSchema>;
// =======================
// Category Base Schema (from categories table)
// =======================
export const CategoryBaseSchema = z
	.object({
		categories_id: UUID,
		name: z.string(),
		description: z.string().nullable().optional(),
		tag: z.string(),
		icon_file_id: UUID.nullable().optional(),
		icon: z.any().nullable().optional(),
		category_type: z.string(),
		parent_categories_id: UUID.nullable().optional(),
		parent_category: z.any().nullable().optional(),
		sub_categories: z.array(z.any()).nullable().optional(),
		translatable_id: UUID,
		translatable: z.any().nullable().optional(),
		words: z.array(z.any()).nullable().optional(),
		created_at: Timestamp,
		updated_at: Timestamp,
		deleted_at: Timestamp.nullable().optional(),
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
		menu_categories_id: UUID,
		categories_id: UUID,
		category: CategoryBaseSchema.nullable().optional(),
	})
	.openapi('MenuCategoryCategory');

export type MenuCategoryCategory = z.infer<typeof MenuCategoryCategorySchema>;
// Register MenuCategory DAO schemas
export function registerMenuCategoryDaoSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenuCategoryInput', CreateMenuCategoryInputSchema);
	registry.register('CreateMenuCategoryWithCategoriesInput', CreateMenuCategoryWithCategoriesInputSchema);
	registry.register('CreateDailyMealMenuCategoryInput', CreateDailyMealMenuCategoryInputSchema);
	registry.register('AddMenuCategoryIdToOrderInput', AddMenuCategoryIdToOrderInputSchema);
	registry.register('RemoveMenuCategoryIdFromOrderInput', RemoveMenuCategoryIdFromOrderInputSchema);
	registry.register('GetMenuCategoriesByMenuIdParams', GetMenuCategoriesByMenuIdParamsSchema);
	registry.register('GetMenuCategoriesByBusinessIdParams', GetMenuCategoriesByBusinessIdParamsSchema);
	registry.register('DeleteMenuCategoryInput', DeleteMenuCategoryInputSchema);
	registry.register('UpdateMenuCategoryInput', UpdateMenuCategoryInputSchema);
	registry.register('UpdateMenuItemsOrderInput', UpdateMenuItemsOrderInputSchema);
	registry.register('AddCategoryToMenuInput', AddCategoryToMenuInputSchema);
	registry.register('RemoveCategoryFromMenuInput', RemoveCategoryFromMenuInputSchema);
	registry.register('AddCategoryToMenuCategoryInput', AddCategoryToMenuCategoryInputSchema);
	registry.register('RemoveCategoryFromMenuCategoryInput', RemoveCategoryFromMenuCategoryInputSchema);
	registry.register('UpdateDailyMealMenuPriceInput', UpdateDailyMealMenuPriceInputSchema);
	registry.register('GetMenuCategoryByIdParams', GetMenuCategoryByIdParamsSchema);
	registry.register('UpdateMenuCategoriesWithNewPriceInput', UpdateMenuCategoriesWithNewPriceInputSchema);
	registry.register('MenuCategoryCategory', MenuCategoryCategorySchema);
	registry.register('CategoryBase', CategoryBaseSchema);
	registry.register('MenuCategory', MenuCategoryDataSchema);
	registry.register('CreateMenuCategory', CreateMenuCategorySchema);
}
