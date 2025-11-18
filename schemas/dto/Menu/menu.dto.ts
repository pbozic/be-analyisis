import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { MenuCategoryCategorySchema } from './menucategory.dto.js';

extendZodWithOpenApi(z);

// =======================
// Menu Base Schema
// =======================
export const MenuBaseSchema = z
	.object({
		menu_id: UUID,
		stores_id: UUID.nullable().optional(),
		food_drinks_id: UUID.nullable().optional(),
		menu_categories_ordered: z.any().nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('MenuBase');

export type MenuBase = z.infer<typeof MenuBaseSchema>;

// =======================
// MenuItem Base Schema - scalars only, no relations
// =======================
export const MenuItemBaseSchema = z
	.object({
		menu_item_id: UUID,
		name_translatable_id: UUID,
		description_translatable_id: UUID,
		spicy_level: z.number().int().nullable().optional(),
		unit_size: z.string().nullable().optional(),
		price: z.number().default(0),
		discount: z.number().nullable().optional(),
		sides: z.array(UUID),
		extras: z.array(UUID),
		ingredients: z.any().optional(),
		availability: z.array(z.string()).optional(),
		stores_id: UUID.nullable().optional(),
		food_drinks_id: UUID.nullable().optional(),
		menu_category_id: UUID.nullable().optional(),
		daily_date: Timestamp.nullable().optional(),
		image_file_id: UUID.nullable().optional(),
		requires_id_check: z.boolean().default(false),
		is_enabled: z.boolean().default(true),
		is_copy: z.boolean().default(false),
		menu_category_order_index: z.number().int().nullable().optional(),
		allergens_text: z.any().nullable().optional(),
		ingredients_text: z.any().nullable().optional(),
		usage_text: z.any().nullable().optional(),
		origin_text: z.any().nullable().optional(),
		is_weighted: z.boolean().default(false),
		weight_quantity: z.number().nullable().optional(),
		stock: z.number().nullable().default(1),
		latest_version_id: UUID.nullable().optional(),
		tax_rates_id: UUID.nullable().optional(),
	})
	.openapi('MenuItemBase');

export type MenuItemBase = z.infer<typeof MenuItemBaseSchema>;

// =======================
// MenuCategory Ref Schema
// =======================
export const MenuCategoryRefSchema = z
	.object({
		menu_category_id: UUID,
		menu_id: UUID.optional(),
		names: z.record(z.string()).nullable().optional(),
		food_drinks_id: UUID.nullable().optional(),
		stores_id: UUID.nullable().optional(),
		menu_items_ordered: z.array(z.string()).nullable().optional(),
		menu_items: z.array(MenuItemBaseSchema),
		menu_categories_categories: z.array(MenuCategoryCategorySchema).nullable().optional(),
	})
	.openapi('MenuCategoryRef');

export type MenuCategoryRef = z.infer<typeof MenuCategoryRefSchema>;

export const MenuDetailSchema = MenuBaseSchema.extend({
	categories: z.array(MenuCategoryRefSchema),
}).openapi('MenuDetail');

export type MenuDetail = z.infer<typeof MenuDetailSchema>;

// =======================
// MenuItem Ref Schema - minimal identity for embedding
// =======================
export const MenuItemRefSchema = z
	.object({
		menu_item_id: UUID,
		name_translatable_id: UUID,
		price: z.number(),
		image_file_id: UUID.nullable().optional(),
		is_enabled: z.boolean(),
		stock: z.number().nullable(),
	})
	.openapi('MenuItemRef');

export type MenuItemRef = z.infer<typeof MenuItemRefSchema>;

// =======================
// MenuItem Detail Schema - extends Base with relations
// =======================
export const MenuItemDetailSchema = MenuItemBaseSchema.extend({
	created_at: Timestamp.optional(),
	updated_at: Timestamp.nullable().optional(),
	menu_category: MenuCategoryRefSchema.nullable().optional(),
	documents: z
		.array(
			z.object({
				document_id: UUID,
				files: z
					.array(
						z.object({
							file_id: UUID,
							url: z.string().url(),
							document_id: UUID,
						})
					)
					.optional(),
			})
		)
		.optional(),
}).openapi('MenuItemDetail');

export type MenuItemDetail = z.infer<typeof MenuItemDetailSchema>;

// =======================
// MenuItem Response Schemas
// =======================
export const MenuItemResponseSchema = MenuItemDetailSchema.openapi('MenuItemResponse');
export type MenuItemResponse = z.infer<typeof MenuItemResponseSchema>;

export const MenuItemsResponseSchema = z.array(MenuItemResponseSchema).openapi('MenuItemsResponse');
export type MenuItemsResponse = z.infer<typeof MenuItemsResponseSchema>;

// =======================
// MenuItem Version Response
// =======================
export const MenuItemVersionResponseSchema = z
	.object({
		menu_item_version_id: UUID,
		menu_item_id: UUID,
		version: z.number().int(),
		snapshot: z.any(),
		created_at: Timestamp.optional(),
	})
	.openapi('MenuItemVersionResponse');

export type MenuItemVersionResponse = z.infer<typeof MenuItemVersionResponseSchema>;

// =======================
// DailyMealMenu schemas
// =======================
export const DailyMealMenuCategorySchema = MenuCategoryRefSchema.extend({
	menu_items: MenuItemsResponseSchema.optional(),
	menu_categories_categories: z.array(z.any()).optional(),
}).openapi('DailyMealMenuCategory');

export type DailyMealMenuCategory = z.infer<typeof DailyMealMenuCategorySchema>;

export const DailyMealMenuBaseSchema = z
	.object({
		daily_meal_menu_id: UUID,
		daily_meals_module_id: UUID,
		date: Timestamp.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
		categories: z.array(DailyMealMenuCategorySchema).optional(),
	})
	.openapi('DailyMealMenuBase');

export type DailyMealMenuBase = z.infer<typeof DailyMealMenuBaseSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('MenuBase', MenuBaseSchema);
	registry.register('MenuDetail', MenuDetailSchema);
	registry.register('MenuCategoryRef', MenuCategoryRefSchema);
	registry.register('MenuItemBase', MenuItemBaseSchema);
	registry.register('MenuItemRef', MenuItemRefSchema);
	registry.register('MenuItemDetail', MenuItemDetailSchema);
	registry.register('MenuItemResponse', MenuItemResponseSchema);
	registry.register('MenuItemsResponse', MenuItemsResponseSchema);
	registry.register('MenuItemVersionResponse', MenuItemVersionResponseSchema);
	registry.register('DailyMealMenuCategory', DailyMealMenuCategorySchema);
	registry.register('DailyMealMenuBase', DailyMealMenuBaseSchema);
}
