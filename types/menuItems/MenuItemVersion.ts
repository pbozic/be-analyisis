import type { MenuItem } from './MenuItem.js';
import type { OrderLobbyItem } from '../orderLobbies/OrderLobbyItem.js';
import type { LineItem } from './LineItem.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type MenuItemVersion = {
	menu_item_version_id: string;
	menu_item_id: string;
	version: number;
	snapshot: unknown;
	created_at: Date;
	menu_item: MenuItem;
	order_lobby_items: OrderLobbyItem[];
	line_items: LineItem[];
};
