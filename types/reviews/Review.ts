import type { Reviewable } from './Reviewable.js';
import type { User } from '../users/User.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Review = {
	review_id: string;
	reviewable_id: string;
	author_id: string;
	rating?: number | null;
	comment?: string | null;
	feedback?: unknown | null;
	created_at: string;
	updated_at: string;
	reviewable: Reviewable;
	author: User;
	delivery_order?: DeliveryOrder | null;
	taxi_order?: TaxiOrder | null;
	vehicle_id?: string | null;
};
