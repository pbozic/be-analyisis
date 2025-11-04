// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import { MODULE_TYPE, PERMISSION_SCOPE } from '@prisma/client';

import type { Role } from '../userRoles/Role.js';
import type { Action } from '../subscriptions/Action.js';

export type Permission = {
	permission_id: string;
	action_id?: string | null;
	name?: string | null;
	description?: string | null;
	display_name?: string | null;
	module: MODULE_TYPE;
	limit?: number | null;
	scope: PERMISSION_SCOPE;
	group?: string | null;
	roles: Role[];
	action?: Action | null;
};
