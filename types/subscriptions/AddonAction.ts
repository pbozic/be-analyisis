// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { MODULE_TYPE } from '@prisma/client';

import type { Addon } from '../subscriptions/Addon.js';
import type { Action } from '../subscriptions/Action.js';
import type { Addon } from './Addon.js';
import type { Action } from './Action.js';

export type AddonAction = {
	addon_action_id: string;
	addon_id: string;
	action_id: string;
	module: MODULE_TYPE;
	limit?: number | null;
	addon: Addon;
	action: Action;
};
