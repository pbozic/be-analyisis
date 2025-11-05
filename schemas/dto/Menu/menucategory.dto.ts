import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MenuCategoryDataSchema } from './menu.dto.ts';

extendZodWithOpenApi(z);

// -----------------------
// MenuCategory DAO-level input schemas
// -----------------------

export const CreateMenuCategoryInputSchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		categoryData: MenuCategoryDataSchema,
	})
	.openapi('CreateMenuCategoryInput');
export type CreateMenuCategoryInput = z.infer<typeof CreateMenuCategoryInputSchema>;

export const CreateDailyMealMenuCategoryInputSchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		daily_meal_category_price_id: z.string().uuid().openapi({ example: 'ff0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('CreateDailyMealMenuCategoryInput');
export type CreateDailyMealMenuCategoryInput = z.infer<typeof CreateDailyMealMenuCategoryInputSchema>;

export const AddMenuCategoryIdToOrderInputSchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		menuCategoryIdToAdd: z.string().uuid().openapi({ example: 'aa0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('AddMenuCategoryIdToOrderInput');
export type AddMenuCategoryIdToOrderInput = z.infer<typeof AddMenuCategoryIdToOrderInputSchema>;

export const RemoveMenuCategoryIdFromOrderInputSchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		menuCategoryIdToRemove: z.string().uuid().openapi({ example: 'aa0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('RemoveMenuCategoryIdFromOrderInput');
export type RemoveMenuCategoryIdFromOrderInput = z.infer<typeof RemoveMenuCategoryIdFromOrderInputSchema>;

export const GetMenuCategoriesByMenuIdParamsSchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('GetMenuCategoriesByMenuIdParams');
export type GetMenuCategoriesByMenuIdParams = z.infer<typeof GetMenuCategoriesByMenuIdParamsSchema>;

export const GetMenuCategoriesByBusinessIdParamsSchema = z
	.object({
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('GetMenuCategoriesByBusinessIdParams');
export type GetMenuCategoriesByBusinessIdParams = z.infer<typeof GetMenuCategoriesByBusinessIdParamsSchema>;

export const DeleteMenuCategoryInputSchema = z
	.object({
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DeleteMenuCategoryInput');
export type DeleteMenuCategoryInput = z.infer<typeof DeleteMenuCategoryInputSchema>;

export const UpdateMenuCategoryInputSchema = z
	.object({
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
		data: MenuCategoryDataSchema.partial(),
	})
	.openapi('UpdateMenuCategoryInput');
export type UpdateMenuCategoryInput = z.infer<typeof UpdateMenuCategoryInputSchema>;

export const UpdateMenuItemsOrderInputSchema = z
	.object({
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
		ordered_menu_items_ids: z.array(z.string().uuid()).openapi({ example: ['cc0e8400-e29b-41d4-a716-446655440000'] }),
	})
	.openapi('UpdateMenuItemsOrderInput');
export type UpdateMenuItemsOrderInput = z.infer<typeof UpdateMenuItemsOrderInputSchema>;

export const AddCategoryToMenuInputSchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('AddCategoryToMenuInput');
export type AddCategoryToMenuInput = z.infer<typeof AddCategoryToMenuInputSchema>;

export const RemoveCategoryFromMenuInputSchema = z
	.object({
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('RemoveCategoryFromMenuInput');
export type RemoveCategoryFromMenuInput = z.infer<typeof RemoveCategoryFromMenuInputSchema>;

export const AddCategoryToMenuCategoryInputSchema = z
	.object({
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
		category_id: z.string().uuid().openapi({ example: 'ee0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('AddCategoryToMenuCategoryInput');
export type AddCategoryToMenuCategoryInput = z.infer<typeof AddCategoryToMenuCategoryInputSchema>;

export const RemoveCategoryFromMenuCategoryInputSchema = z
	.object({
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
		category_id: z.string().uuid().openapi({ example: 'ee0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('RemoveCategoryFromMenuCategoryInput');
export type RemoveCategoryFromMenuCategoryInput = z.infer<typeof RemoveCategoryFromMenuCategoryInputSchema>;

export const UpdateDailyMealMenuPriceInputSchema = z
	.object({
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
		price: z.number().openapi({ example: 5.5 }),
	})
	.openapi('UpdateDailyMealMenuPriceInput');
export type UpdateDailyMealMenuPriceInput = z.infer<typeof UpdateDailyMealMenuPriceInputSchema>;

export const GetMenuCategoryByIdParamsSchema = z
	.object({
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('GetMenuCategoryByIdParams');
export type GetMenuCategoryByIdParams = z.infer<typeof GetMenuCategoryByIdParamsSchema>;

export const UpdateMenuCategoriesWithNewPriceInputSchema = z
	.object({
		dailyMealCategoryId: z.string().uuid().openapi({ example: 'zz0e8400-e29b-41d4-a716-446655440000' }),
		priceId: z.string().uuid().openapi({ example: 'pp0e8400-e29b-41d4-a716-446655440000' }),
		validFrom: z.string().datetime().openapi({ example: '2025-01-01T00:00:00Z' }),
	})
	.openapi('UpdateMenuCategoriesWithNewPriceInput');
export type UpdateMenuCategoriesWithNewPriceInput = z.infer<typeof UpdateMenuCategoriesWithNewPriceInputSchema>;

// Register MenuCategory DAO schemas
export function registerMenuCategoryDaoSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenuCategoryInput', CreateMenuCategoryInputSchema);
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
}
