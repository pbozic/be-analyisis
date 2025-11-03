// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { taxi_orders } from '@prisma/client';

import type { Busines } from '../business/Busines.js';
import type { User } from '../users/User.js';

export type CrmModule = {
	crm_module_id: string;
	business_id: string;
	purchase_order_limit_amount?: number | null;
	created_at: string;
	updated_at: string;
	business: Busines;
	business_clients: taxi_orders[];
	business_teams: User[];
};
