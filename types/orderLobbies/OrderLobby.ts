import type { OrderLobbyItem } from './OrderLobbyItem.js';
import type { OrderLobbyUser } from './OrderLobbyUser.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type OrderLobby = {
	order_lobbies_id: string;
	lobby_name: string;
	lobby_description: string;
	active: boolean;
	delivery_location?: unknown | null;
	courier_note?: string | null;
	restaurant_message?: string | null;
	stores_id: string;
	food_drinks_id?: string | null;
	creator_id: string;
	delivery_orders_id?: string | null;
	created_at: string;
	updated_at: string;
	order_lobby_items: OrderLobbyItem[];
	order_lobby_users: OrderLobbyUser[];
	delivery_orders?: DeliveryOrder | null;
	stores_module?: StoresModule | null;
	food_drinks_module?: FoodDrinksModule | null;
};
