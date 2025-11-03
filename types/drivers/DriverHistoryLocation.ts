// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { drivers } from '@prisma/client';

import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';

export type DriverHistoryLocation = {
	driver_history_location_id: string;
	driver_id: string;
	taxi_order_id?: string | null;
	delivery_order_id?: string | null;
	status?: string | null;
	location?: unknown | null;
	driver?: drivers | null;
	order?: TaxiOrder | null;
	delivery_order?: DeliveryOrder | null;
	created_at: string;
	updated_at: string;
};
