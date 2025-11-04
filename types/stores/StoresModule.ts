import type { Reviewable } from '../reviews/Reviewable.js';
import type { BusinessLocalLocation } from './BusinessLocalLocation.js';
import type { Business } from '../business/Business.js';
import type { Address } from '../addresses/Address.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Menu } from '../menus/Menu.js';
import type { OrderLobby } from '../orderLobbies/OrderLobby.js';
import type { File } from '../files/File.js';
import type { LateEvent } from '../general/LateEvent.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type StoresModule = {
	stores_id: string;
	business_id: string;
	enabled: boolean;
	settings?: unknown | null;
	created_at: string;
	updated_at: string;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	business_local_locations: BusinessLocalLocation[];
	business: Business;
	delivery_address_id?: string | null;
	delivery_address?: Address | null;
	delivery_orders: DeliveryOrder[];
	minimum_order: number;
	menu?: Menu | null;
	order_lobbies: OrderLobby[];
	overwhelmed: boolean;
	online: boolean;
	logo_id?: string | null;
	logo?: File | null;
	banner_id?: string | null;
	banner?: File | null;
	late_events: LateEvent[];
};
