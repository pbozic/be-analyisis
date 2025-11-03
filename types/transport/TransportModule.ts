// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { drivers, taxi_orders, vehicles } from '@prisma/client';

import type { Busines } from '../business/Busines.js';
import type { Reviewable } from '../reviews/Reviewable.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { BusinessPremise } from '../invoices/BusinessPremise.js';

export type TransportModule = {
	transport_module_id: string;
	business_id: string;
	created_at: string;
	updated_at: string;
	business: Busines;
	active: boolean;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	taxi_orders: taxi_orders[];
	delivery_orders: DeliveryOrder[];
	drivers: drivers[];
	vehicles: vehicles[];
	business_premises: BusinessPremise[];
};
