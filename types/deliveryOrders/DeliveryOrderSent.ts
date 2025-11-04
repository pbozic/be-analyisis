import type { DeliveryOrder } from './DeliveryOrder.js';
import type { Driver } from '../drivers/Driver.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DeliveryOrderSent = {
	delivery_order_sent_id: string;
	order_id: string;
	accepted: boolean;
	location: unknown;
	timeline: unknown;
	created_at: string;
	updated_at: string;
	order?: DeliveryOrder | null;
	driver_id?: string | null;
	driver?: Driver | null;
};
