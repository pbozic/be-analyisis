import type { MenuItem } from '../menuItems/MenuItem.js';
import type { MenuItemVersion } from '../menuItems/MenuItemVersion.js';
import type { OrderLobby } from './OrderLobby.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type OrderLobbyItem = {
	order_lobby_items_id: string;
	order_lobbies_id: string;
	menu_item_id: string;
	menu_item_version_id: string;
	user_id?: string | null;
	sides: string;
	extras: string;
	quantity: number;
	customer_note?: string | null;
	created_at: Date;
	updated_at: Date;
	menu_items?: MenuItem | null;
	menu_item_version: MenuItemVersion;
	order_lobbies: OrderLobby;
};
