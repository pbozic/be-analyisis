import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { JsonValue } from '@prisma/client/runtime/library';

import { UUID, Timestamp } from '../../primitives.ts';
import { CreateMenuItemSchema, GetMenuItemsByIdsRequestSchema } from './menu.validators.ts';

extendZodWithOpenApi(z);

// ===========================
// MenuItem Base Schema - scalars only, no relations
// ===========================

export const MenuItemBaseSchema = z
	.object({
		menu_item_id: UUID,
		name_translatable_id: UUID,
		description_translatable_id: UUID,
		spicy_level: z.number().int().nullable().optional().openapi({ example: 2 }),
		unit_size: z.string().nullable().optional().openapi({ example: '500g' }),
		price: z.number().default(0).openapi({ example: 12.99 }),
		discount: z.number().nullable().optional().openapi({ example: 10.5 }),
		sides: z.array(UUID),
		extras: z.array(UUID),
		ingredients: z.any().openapi({ example: [{ name: 'Tomato', allergen: false }] }),
		availability: z.array(z.string()).openapi({ example: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'] }),
		stores_id: UUID.nullable().optional(),
		food_drinks_id: UUID.nullable().optional(),
		menu_category_id: UUID.nullable().optional(),
		daily_date: Timestamp.nullable().optional(),
		image_file_id: UUID.nullable().optional(),
		requires_id_check: z.boolean().default(false).openapi({ example: false }),
		is_enabled: z.boolean().default(true).openapi({ example: true }),
		is_copy: z.boolean().default(false).openapi({ example: false }),
		menu_category_order_index: z.number().int().nullable().optional().openapi({ example: 1 }),
		allergens_text: z
			.any()
			.nullable()
			.optional()
			.openapi({ example: { en: 'Contains nuts' } }),
		ingredients_text: z
			.any()
			.nullable()
			.optional()
			.openapi({ example: { en: 'Fresh ingredients' } }),
		usage_text: z
			.any()
			.nullable()
			.optional()
			.openapi({ example: { en: 'Best served hot' } }),
		origin_text: z
			.any()
			.nullable()
			.optional()
			.openapi({ example: { en: 'Local farm' } }),
		is_weighted: z.boolean().default(false).openapi({ example: false }),
		weight_quantity: z.number().nullable().optional().openapi({ example: 0.5 }),
		stock: z.number().nullable().default(1).openapi({ example: 100 }),
		latest_version_id: UUID.nullable().optional(),
		tax_rates_id: UUID.nullable().optional(),
	})
	.openapi('MenuItemBase');

export type MenuItemBase = z.infer<typeof MenuItemBaseSchema>;

// ===========================
// MenuItem Ref Schema - minimal identity for embedding elsewhere
// ===========================

export const MenuItemRefSchema = z
	.object({
		menu_item_id: UUID,
		name_translatable_id: UUID,
		price: z.number().openapi({ example: 12.99 }),
		image_file_id: UUID.nullable().optional(),
		is_enabled: z.boolean().openapi({ example: true }),
		stock: z.number().nullable().openapi({ example: 100 }),
	})
	.openapi('MenuItemRef');

export type MenuItemRef = z.infer<typeof MenuItemRefSchema>;

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
		food_drinks_id: z.string().uuid().optional().openapi({ example: '770e8400-e29b-41d4-a716-446655440000' }),
		stores_id: z.string().uuid().optional().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
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

// POST /business/search/menu-items/extras-sides/:business_id body
export const MenuItemsIdsBodySchema = z.object({ ids: z.array(UUID).min(1) }).openapi('MenuItemsIdsBody');

export type PrismaMenuItemVersion = {
	menu_item_version_id: UUID;
	menu_item_id: UUID;
	version: number;
	snapshot: JsonValue;
	created_at: Date;
};

// Register MenuItem DAO schemas
export function registerMenuItemDaoSchemas(registry: OpenAPIRegistry) {
	registry.register('MenuItemBase', MenuItemBaseSchema);
	registry.register('MenuItemRef', MenuItemRefSchema);
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
	registry.register('MenuItemsIdsBody', MenuItemsIdsBodySchema);
}
