// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import type { allowances } from '@prisma/client';

import type { User } from './User.js';

export type GroupUser = {
	group_user_id: string;
	parent_user_id: string;
	child_user_id: string;
	created_at: string;
	updated_at: string;
	parent_user: User;
	child_user: User;
	allowance?: allowances | null;
	enabled: boolean;
};
