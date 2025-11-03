// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { MenuItem } from '../menuItems/MenuItem.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';

export type MenuItemStockChange = {
	id: string;
	menu_item_id: string;
	quantity: number;
	reason: string;
	menu_item: MenuItem;
	order_id?: string | null;
	order?: DeliveryOrder | null;
	created_at: string;
};
