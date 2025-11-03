// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import type { User } from '../users/User.js';
import type { CrmModule } from './CrmModule.js';

export type BusinessTeam = {
	business_teams_id: string;
	team_name: string;
	crm_module_id: string;
	limit_per_person: number;
	created_at: string;
	updated_at: string;
	users: User[];
	crm_module: CrmModule;
};
