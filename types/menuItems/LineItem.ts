// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { line_items, menu_item_versions } from '@prisma/client';

import type { MenuItem } from './MenuItem.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';

export type LineItem = {
	line_item_id: string;
	menu_item_id: string;
	menu_item_version_id: string;
	order_id: string;
	quantity: number;
	comment?: string | null;
	menu_item: MenuItem;
	menu_item_version: menu_item_versions;
	order: DeliveryOrder;
	replacement_id?: string | null;
	replacement?: line_items | null;
	replaces_id?: string | null;
	replaces?: line_items | null;
	parent_side_id?: string | null;
	parent_side?: line_items | null;
	parent_extra_id?: string | null;
	parent_extra?: line_items | null;
	sides: line_items[];
	extras: line_items[];
	removed: boolean;
};
