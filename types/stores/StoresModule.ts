// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { business_local_locations, delivery_orders, menus, order_lobbies } from '@prisma/client';

import type { Reviewable } from '../reviews/Reviewable.js';
import type { Busines } from '../business/Busines.js';
import type { Address } from '../addresses/Address.js';
import type { File } from '../files/File.js';
import type { LateEvent } from '../general/LateEvent.js';

export type StoresModule = {
	stores_id: string;
	business_id: string;
	enabled: boolean;
	settings?: unknown | null;
	created_at: string;
	updated_at: string;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	business_local_locations: business_local_locations[];
	business: Busines;
	delivery_address_id?: string | null;
	delivery_address?: Address | null;
	delivery_orders: delivery_orders[];
	minimum_order: number;
	menu?: menus | null;
	order_lobbies: order_lobbies[];
	overwhelmed: boolean;
	online: boolean;
	logo_id?: string | null;
	logo?: File | null;
	banner_id?: string | null;
	banner?: File | null;
	late_events: LateEvent[];
};
