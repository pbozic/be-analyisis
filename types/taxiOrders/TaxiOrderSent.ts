import type { TaxiOrder } from './TaxiOrder.js';
import type { Driver } from '../drivers/Driver.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type TaxiOrderSent = {
	taxi_order_sent_id: string;
	order_id: string;
	driver_id: string;
	accepted: boolean;
	location?: unknown | null;
	timeline: unknown;
	created_at: Date;
	updated_at: Date;
	order?: TaxiOrder | null;
	driver?: Driver | null;
	rejected: boolean;
};
