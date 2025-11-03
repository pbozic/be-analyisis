// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { MODULE_TYPE } from '@prisma/client';

import type { ActionBundle } from '../subscriptions/ActionBundle.js';
import type { Action } from '../subscriptions/Action.js';

export type ActionBundleAction = {
	action_bundle_action_id: string;
	action_bundle_id: string;
	action_id: string;
	module: MODULE_TYPE;
	limit?: number | null;
	action_bundle: ActionBundle;
	action: Action;
};
