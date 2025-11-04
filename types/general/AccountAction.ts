import { ACCOUNT_ACTIONS, ACCOUNT_ACTIONS_REASON } from '@prisma/client';

import type { Business } from '../business/Business.js';
import type { User } from '../users/User.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type AccountAction = {
	account_action_id: string;
	business_id?: string | null;
	user_id?: string | null;
	created_at: string;
	action_creator_user_id: string;
	reason: ACCOUNT_ACTIONS_REASON;
	action: ACCOUNT_ACTIONS;
	business?: Business | null;
	user?: User | null;
	action_creator?: User | null;
};
