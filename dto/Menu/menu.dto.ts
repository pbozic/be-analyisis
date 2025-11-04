
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { DOCUMENT_TYPE } from '@prisma/client';
import { CreateFileDataSchema } from '../Files/file.dto.ts';

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
		menu_category: z.any().optional().openapi({ example: { name: { en: 'Lunch' }, price: 5.5 } }),
	})
	.openapi('CreateDailyMealMenu');

// =======================
// MenuCategory schemas
// =======================
export const MenuCategoryDataSchema = z
	.object({
		name_translatable_id: z.string().uuid().optional(),
		names: z.record(z.string()).optional().openapi({ example: { en: 'Starters', sl: 'Predjedi' } }),
		description_translatable_id: z.string().uuid().optional(),
		description: z.record(z.string()).optional(),
		categories: z.array(z.string()).optional().openapi({ example: ['salads', 'vegan'] }),
		business_id: z.string().uuid().optional(),
		menu_id: z.string().uuid().optional(),
		order: z.number().int().optional(),
		price: z.number().optional(),
	}).passthrough()
	.openapi('MenuCategoryData');

export const CreateMenuCategorySchema = z
	.object({
		menu_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		data: MenuCategoryDataSchema,
	})
	.openapi('CreateMenuCategory');

// (Menu category response schema removed - only input schemas kept)

// =======================
// MenuItem schemas
// =======================
export const MenuItemDataSchema = z
	.object({
		name_translatable_id: z.string().uuid().optional(),
		names: z.record(z.string()).optional().openapi({ example: { en: 'Burger' } }),
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
	}).passthrough()
	.openapi('MenuItemData');

export const CreateMenuItemSchema = z
	.object({
		category_id: z.string().uuid().openapi({ example: 'aa0e8400-e29b-41d4-a716-446655440000' }),
		tax_rate_id: z.string().uuid().optional().nullable(),
		data: MenuItemDataSchema,
		image: z
			.object({
				documentData: z.object({
					document_type: z.nativeEnum(DOCUMENT_TYPE).optional(),
					public: z.boolean().optional(),
				}).optional(),
				files: z.array(CreateFileDataSchema).optional(),
				document_id: z.string().uuid().optional(),
			})
			.optional(),
		is_copy: z.boolean().optional(),
	})
	.openapi('CreateMenuItem');

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
	registry.register('CreateMenuItem', CreateMenuItemSchema);
	registry.register('GetMenuItemsByIdsRequest', GetMenuItemsByIdsRequestSchema);
	registry.register('UpdateMenuItemEnabled', UpdateMenuItemEnabledSchema);
	registry.register('UpdateMenuItemPrice', UpdateMenuItemPriceSchema);
	registry.register('CreateMenuItemVersion', CreateMenuItemVersionSchema);
}
