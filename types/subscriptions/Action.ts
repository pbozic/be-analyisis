import { MODULE_TYPE } from '@prisma/client';

import type { BusinessUsage } from './BusinessUsage.js';
import type { Permission } from '../userRoles/Permission.js';
import type { UserPermission } from '../userRoles/UserPermission.js';
import type { ActionBundle } from './ActionBundle.js';
import type { Addon } from './Addon.js';
import type { ActionBundleAction } from './ActionBundleAction.js';
import type { AddonAction } from './AddonAction.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Action = {
	action_id: string;
	module: MODULE_TYPE;
	name: string;
	action_bundle_actions: ActionBundleAction[];
	addon_actions: AddonAction[];
	business_usages: BusinessUsage[];
	permissions: Permission[];
	user_permissions: UserPermission[];
};
