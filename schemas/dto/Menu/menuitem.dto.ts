import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { CreateMenuItemSchema, GetMenuItemsByIdsRequestSchema } from './menu.dto.ts';

extendZodWithOpenApi(z);

// -----------------------
// MenuItem DAO-level input schemas
// -----------------------

export const CreateMenuItemVersionInputSchema = z
	.object({
		menu_item_id: z.string().uuid().openapi({ example: 'aa0e8400-e29b-41d4-a716-446655440000' }),
		version: z.number().int().openapi({ example: 2 }),
		snapshot: z.any().openapi({ example: { price: 9.99 } }),
	})
	.openapi('CreateMenuItemVersionInput');
export type CreateMenuItemVersionInput = z.infer<typeof CreateMenuItemVersionInputSchema>;

export const CreateMenuItemInputSchema = CreateMenuItemSchema.openapi('CreateMenuItemInput');
export type CreateMenuItemInput = z.infer<typeof CreateMenuItemInputSchema>;

export const AddMenuItemIdToOrderInputSchema = z
	.object({
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
		menu_item_id: z.string().uuid().openapi({ example: 'cc0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('AddMenuItemIdToOrderInput');
export type AddMenuItemIdToOrderInput = z.infer<typeof AddMenuItemIdToOrderInputSchema>;

export const RemoveMenuItemIdFromOrderInputSchema = z
	.object({
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
		menu_item_id: z.string().uuid().openapi({ example: 'cc0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('RemoveMenuItemIdFromOrderInput');
export type RemoveMenuItemIdFromOrderInput = z.infer<typeof RemoveMenuItemIdFromOrderInputSchema>;

export const GetMenuItemsByIdsDaoInputSchema = GetMenuItemsByIdsRequestSchema.openapi('GetMenuItemsByIdsDaoInput');
export type GetMenuItemsByIdsDaoInput = z.infer<typeof GetMenuItemsByIdsDaoInputSchema>;

export const GetMenuItemsByBusinessIdDaoParamsSchema = z
	.object({
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		args: z.any().optional(),
	})
	.openapi('GetMenuItemsByBusinessIdDaoParams');
export type GetMenuItemsByBusinessIdDaoParams = z.infer<typeof GetMenuItemsByBusinessIdDaoParamsSchema>;

export const GetMenuItemsByCategoryIdParamsSchema = z
	.object({ categoryId: z.string().uuid().openapi({ example: 'aa0e8400-e29b-41d4-a716-446655440000' }) })
	.openapi('GetMenuItemsByCategoryIdParams');
export type GetMenuItemsByCategoryIdParams = z.infer<typeof GetMenuItemsByCategoryIdParamsSchema>;

export const DeleteMenuItemInputSchema = z
	.object({
		menuItemId: z.string().uuid().openapi({ example: 'dd0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DeleteMenuItemInput');
export type DeleteMenuItemInput = z.infer<typeof DeleteMenuItemInputSchema>;

export const UpdateMenuItemInputSchema = z
	.object({
		menuItemId: z.string().uuid().openapi({ example: 'dd0e8400-e29b-41d4-a716-446655440000' }),
		data: z.any().openapi({ example: { price: 12.5 } }),
	})
	.openapi('UpdateMenuItemInput');
export type UpdateMenuItemInput = z.infer<typeof UpdateMenuItemInputSchema>;

export const UpdateMenuItemPriceInputSchema = z
	.object({
		menuItemId: z.string().uuid().openapi({ example: 'dd0e8400-e29b-41d4-a716-446655440000' }),
		price: z.number().openapi({ example: 9.99 }),
	})
	.openapi('UpdateMenuItemPriceInput');
export type UpdateMenuItemPriceInput = z.infer<typeof UpdateMenuItemPriceInputSchema>;

export const AddMenuItemToCategoryInputSchema = z
	.object({
		menu_item_id: z.string().uuid().openapi({ example: 'cc0e8400-e29b-41d4-a716-446655440000' }),
		menu_category_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('AddMenuItemToCategoryInput');
export type AddMenuItemToCategoryInput = z.infer<typeof AddMenuItemToCategoryInputSchema>;

export const RemoveMenuItemFromCategoryInputSchema = z
	.object({
		menu_item_id: z.string().uuid().openapi({ example: 'cc0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('RemoveMenuItemFromCategoryInput');
export type RemoveMenuItemFromCategoryInput = z.infer<typeof RemoveMenuItemFromCategoryInputSchema>;

// Register MenuItem DAO schemas
export function registerMenuItemDaoSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenuItemVersionInput', CreateMenuItemVersionInputSchema);
	registry.register('CreateMenuItemInput', CreateMenuItemInputSchema);
	registry.register('AddMenuItemIdToOrderInput', AddMenuItemIdToOrderInputSchema);
	registry.register('RemoveMenuItemIdFromOrderInput', RemoveMenuItemIdFromOrderInputSchema);
	registry.register('GetMenuItemsByIdsDaoInput', GetMenuItemsByIdsDaoInputSchema);
	registry.register('GetMenuItemsByBusinessIdDaoParams', GetMenuItemsByBusinessIdDaoParamsSchema);
	registry.register('GetMenuItemsByCategoryIdParams', GetMenuItemsByCategoryIdParamsSchema);
	registry.register('DeleteMenuItemInput', DeleteMenuItemInputSchema);
	registry.register('UpdateMenuItemInput', UpdateMenuItemInputSchema);
	registry.register('UpdateMenuItemPriceInput', UpdateMenuItemPriceInputSchema);
	registry.register('AddMenuItemToCategoryInput', AddMenuItemToCategoryInputSchema);
	registry.register('RemoveMenuItemFromCategoryInput', RemoveMenuItemFromCategoryInputSchema);
}
