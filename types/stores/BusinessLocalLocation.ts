import type { local_locations } from '@prisma/client';

import type { StoresModule } from './StoresModule.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BusinessLocalLocation = {
	business_local_location_id: string;
	stores_id: string;
	local_location_id: string;
	created_at: string;
	updated_at: string;
	time: string;
	local_location: local_locations;
	stores_module: StoresModule;
	orders: DeliveryOrder[];
};
