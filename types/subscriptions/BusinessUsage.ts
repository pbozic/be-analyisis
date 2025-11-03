// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { Action } from '../subscriptions/Action.js';
import type { ReservationModule } from '../reservation/ReservationModule.js';

export type BusinessUsage = {
	business_usage_id: string;
	action_id: string;
	used: number;
	reset_date?: string | null;
	reservation_module_id?: string | null;
	action: Action;
	reservation_module?: ReservationModule | null;
};
