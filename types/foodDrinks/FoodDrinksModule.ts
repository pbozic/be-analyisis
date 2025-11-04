import type { Reviewable } from '../reviews/Reviewable.js';
import type { Business } from '../business/Business.js';
import type { Address } from '../addresses/Address.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Menu } from '../menus/Menu.js';
import type { OrderLobby } from '../orderLobbies/OrderLobby.js';
import type { DailyMealsModule } from '../dailyMeals/DailyMealsModule.js';
import type { File } from '../files/File.js';
import type { LateEvent } from '../general/LateEvent.js';
import type { TableReservationsModule } from '../tableReservations/TableReservationsModule.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type FoodDrinksModule = {
	food_drinks_id: string;
	business_id: string;
	enabled: boolean;
	settings?: unknown | null;
	created_at: string;
	updated_at: string;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	business: Business;
	delivery_address_id?: string | null;
	delivery_address?: Address | null;
	delivery_orders: DeliveryOrder[];
	minimum_order: number;
	menu?: Menu | null;
	order_lobbies: OrderLobby[];
	table_reservations_module?: TableReservationsModule | null;
	seats?: number | null;
	overwhelmed: boolean;
	online: boolean;
	daily_meals_id?: string | null;
	daily_meals_module?: DailyMealsModule | null;
	logo_id?: string | null;
	logo?: File | null;
	banner_id?: string | null;
	banner?: File | null;
	late_events: LateEvent[];
};
