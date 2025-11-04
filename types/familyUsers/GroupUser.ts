import type { User } from '../users/User.js';
import type { Allowance } from './Allowance.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

export type GroupUser = {
	group_user_id: string;
	parent_user_id: string;
	child_user_id: string;
	created_at: string;
	updated_at: string;
	parent_user: User;
	child_user: User;
	allowance?: Allowance | null;
	enabled: boolean;
};
