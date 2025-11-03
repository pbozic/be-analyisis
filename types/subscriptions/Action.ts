// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { MODULE_TYPE, action_bundle, addon } from '@prisma/client';

import type { ReservationModule } from '../reservation/ReservationModule.js';
import type { RolePermission } from '../userRoles/RolePermission.js';
import type { UserPermission } from '../userRoles/UserPermission.js';

export type Action = {
	action_id: string;
	module: MODULE_TYPE;
	name: string;
	action_bundle_actions: action_bundle[];
	addon_actions: addon[];
	business_usages: ReservationModule[];
	permissions: RolePermission[];
	user_permissions: UserPermission[];
};
