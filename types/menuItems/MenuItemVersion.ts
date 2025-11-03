// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { order_lobby_items } from '@prisma/client';

import type { MenuItem } from './MenuItem.js';
import type { LineItem } from './LineItem.js';

export type MenuItemVersion = {
	menu_item_version_id: string;
	menu_item_id: string;
	version: number;
	snapshot: unknown;
	created_at: string;
	menu_item: MenuItem;
	order_lobby_items: order_lobby_items[];
	line_items: LineItem[];
};
