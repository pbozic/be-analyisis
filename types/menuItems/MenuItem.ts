// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { allergens, line_items, menu_item_versions, order_lobby_items, tax_rates } from '@prisma/client';

import type { Translatable } from '../translations/Translatable.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import type { File } from '../files/File.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';

export type MenuItem = {
	menu_item_id: string;
	name_translatable_id: string;
	names?: Translatable | null;
	description_translatable_id: string;
	description?: Translatable | null;
	allergens: allergens[];
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
	daily_date?: string | null;
	menu_category?: MenuCategory | null;
	image_file_id?: string | null;
	image_file?: File | null;
	requires_id_check: boolean;
	is_enabled: boolean;
	is_copy: boolean;
	menu_category_order_index?: number | null;
	order_lobby_items: order_lobby_items[];
	allergens_text?: unknown | null;
	ingredients_text?: unknown | null;
	usage_text?: unknown | null;
	origin_text?: unknown | null;
	is_weighted: boolean;
	weight_quantity?: number | null;
	stock?: number | null;
	stock_movements: DeliveryOrder[];
	line_items: line_items[];
	latest_version_id?: string | null;
	versions: menu_item_versions[];
	tax_rates_id?: string | null;
	tax_rate?: tax_rates | null;
};
