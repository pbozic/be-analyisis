// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import type { CrmModule } from '../crm/CrmModule.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';

export type BusinessClient = {
	business_clients_id: string;
	created_at: string;
	updated_at: string;
	crm_module_id: string;
	crm_module: CrmModule;
	first_name?: string | null;
	last_name?: string | null;
	email?: string | null;
	telephone: string;
	telephone_code: string;
	taxi_orders: TaxiOrder[];
};
