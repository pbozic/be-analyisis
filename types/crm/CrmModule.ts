import type { Business } from '../business/Business.js';
import type { BusinessClient } from './BusinessClient.js';
import type { BusinessTeam } from './BusinessTeam.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type CrmModule = {
	crm_module_id: string;
	business_id: string;
	purchase_order_limit_amount?: number | null;
	created_at: Date;
	updated_at: Date;
	business: Business;
	business_clients: BusinessClient[];
	business_teams: BusinessTeam[];
};
