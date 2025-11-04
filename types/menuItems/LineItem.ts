import type { MenuItem } from './MenuItem.js';
import type { MenuItemVersion } from './MenuItemVersion.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type LineItem = {
	line_item_id: string;
	menu_item_id: string;
	menu_item_version_id: string;
	order_id: string;
	quantity: number;
	comment?: string | null;
	menu_item: MenuItem;
	menu_item_version: MenuItemVersion;
	order: DeliveryOrder;
	replacement_id?: string | null;
	replacement?: LineItem | null;
	replaces_id?: string | null;
	replaces?: LineItem | null;
	parent_side_id?: string | null;
	parent_side?: LineItem | null;
	parent_extra_id?: string | null;
	parent_extra?: LineItem | null;
	sides: LineItem[];
	extras: LineItem[];
	removed: boolean;
};
