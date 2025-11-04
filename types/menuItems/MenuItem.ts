import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Translatable } from '../translations/Translatable.js';
import type { Allergen } from './Allergen.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import type { File } from '../files/File.js';
import type { OrderLobbyItem } from '../orderLobbies/OrderLobbyItem.js';
import type { MenuItemStockChange } from './MenuItemStockChange.js';
import type { LineItem } from './LineItem.js';
import type { MenuItemVersion } from './MenuItemVersion.js';
import type { TaxRate } from '../general/TaxRate.js';
import type { AllergensToMenuItem } from './AllergensToMenuItem.js';
import { TranslatableResponseSchema } from '../translations/Translatable';
import { AllergensToMenuItemResponseSchema } from './AllergensToMenuItem';
import { MenuCategoryResponseSchema } from '../menus/MenuCategory';
import { FileResponseSchema } from '../files/File';
import { OrderLobbyItemResponseSchema } from '../orderLobbies/OrderLobbyItem';
import { MenuItemStockChangeResponseSchema } from './MenuItemStockChange';
import { LineItemResponseSchema } from './LineItem';
import { MenuItemVersionResponseSchema } from './MenuItemVersion';
import { TaxRateResponseSchema } from '../general/TaxRate';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type MenuItem = {
	menu_item_id: string;
	name_translatable_id: string;
	names?: Translatable | null;
	description_translatable_id: string;
	description?: Translatable | null;
	allergens: AllergensToMenuItem[];
	spicy_level?: number | null;
	unit_size?: string | null;
	price: number;
	discount?: number | null;
	sides: string;
	extras: string;
	ingredients: unknown;
	availability: string;
	business_id: string;
	menu_category_id?: string | null;
	daily_date?: Date | null;
	menu_category?: MenuCategory | null;
	image_file_id?: string | null;
	image_file?: File | null;
	requires_id_check: boolean;
	is_enabled: boolean;
	is_copy: boolean;
	menu_category_order_index?: number | null;
	order_lobby_items: OrderLobbyItem[];
	allergens_text?: unknown | null;
	ingredients_text?: unknown | null;
	usage_text?: unknown | null;
	origin_text?: unknown | null;
	is_weighted: boolean;
	weight_quantity?: number | null;
	stock?: number | null;
	stock_movements: MenuItemStockChange[];
	line_items: LineItem[];
	latest_version_id?: string | null;
	versions: MenuItemVersion[];
	tax_rates_id?: string | null;
	tax_rate?: TaxRate | null;
};

export const CreateMenuItemSchema = z
	.object({
		menu_item_id: z.string().uuid(),
		name_translatable_id: z.string().uuid(),
		description_translatable_id: z.string().uuid(),
		spicy_level: z.number().nullable().optional(),
		unit_size: z.string().nullable().optional(),
		price: z.number(),
		discount: z.number().nullable().optional(),
		sides: z.string(),
		extras: z.string(),
		ingredients: z.unknown(),
		availability: z.string(),
		business_id: z.string().uuid(),
		menu_category_id: z.string().uuid().nullable().optional(),
		daily_date: z.unknown().nullable().optional(),
		image_file_id: z.string().uuid().nullable().optional(),
		requires_id_check: z.boolean(),
		is_enabled: z.boolean(),
		is_copy: z.boolean(),
		menu_category_order_index: z.number().nullable().optional(),
		allergens_text: z.unknown().nullable().optional(),
		ingredients_text: z.unknown().nullable().optional(),
		usage_text: z.unknown().nullable().optional(),
		origin_text: z.unknown().nullable().optional(),
		is_weighted: z.boolean(),
		weight_quantity: z.number().nullable().optional(),
		stock: z.number().nullable().optional(),
		latest_version_id: z.string().uuid().nullable().optional(),
		tax_rates_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateMenuItem');

export type CreateMenuItemInput = z.infer<typeof CreateMenuItemSchema>;

export const UpdateMenuItemSchema = CreateMenuItemSchema.partial().openapi('UpdateMenuItem');
export type UpdateMenuItemInput = z.infer<typeof UpdateMenuItemSchema>;

export const MenuItemResponseSchema = z
	.object({
		menu_item_id: z.string(),
		name_translatable_id: z.string(),
		names: TranslatableResponseSchema.nullable().optional(),
		description_translatable_id: z.string(),
		description: TranslatableResponseSchema.nullable().optional(),
		allergens: z.array(AllergensToMenuItemResponseSchema),
		spicy_level: z.number().nullable().optional(),
		unit_size: z.string().nullable().optional(),
		price: z.number(),
		discount: z.number().nullable().optional(),
		sides: z.string(),
		extras: z.string(),
		ingredients: z.unknown(),
		availability: z.string(),
		business_id: z.string(),
		menu_category_id: z.string().nullable().optional(),
		daily_date: z.string().datetime().nullable().optional(),
		menu_category: MenuCategoryResponseSchema.nullable().optional(),
		image_file_id: z.string().nullable().optional(),
		image_file: FileResponseSchema.nullable().optional(),
		requires_id_check: z.boolean(),
		is_enabled: z.boolean(),
		is_copy: z.boolean(),
		menu_category_order_index: z.number().nullable().optional(),
		order_lobby_items: z.array(OrderLobbyItemResponseSchema),
		allergens_text: z.unknown().nullable().optional(),
		ingredients_text: z.unknown().nullable().optional(),
		usage_text: z.unknown().nullable().optional(),
		origin_text: z.unknown().nullable().optional(),
		is_weighted: z.boolean(),
		weight_quantity: z.number().nullable().optional(),
		stock: z.number().nullable().optional(),
		stock_movements: z.array(MenuItemStockChangeResponseSchema),
		line_items: z.array(LineItemResponseSchema),
		latest_version_id: z.string().nullable().optional(),
		versions: z.array(MenuItemVersionResponseSchema),
		tax_rates_id: z.string().nullable().optional(),
		tax_rate: TaxRateResponseSchema.nullable().optional(),
	})
	.openapi('MenuItemResponse');

export type MenuItemResponse = z.infer<typeof MenuItemResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenuItem', CreateMenuItemSchema);
	registry.register('UpdateMenuItem', UpdateMenuItemSchema);
	registry.register('MenuItemResponse', MenuItemResponseSchema);
}
