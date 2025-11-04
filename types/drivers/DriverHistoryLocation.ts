import type { Driver } from './Driver.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DriverHistoryLocation = {
	driver_history_location_id: string;
	driver_id: string;
	taxi_order_id?: string | null;
	delivery_order_id?: string | null;
	status?: string | null;
	location?: unknown | null;
	driver?: Driver | null;
	order?: TaxiOrder | null;
	delivery_order?: DeliveryOrder | null;
	created_at: string;
	updated_at: string;
};
