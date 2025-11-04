import { MODULE_TYPE } from '@prisma/client';

import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { Action } from './Action.js';
import type { ActionBundleAction } from './ActionBundleAction.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type ActionBundle = {
	action_bundle_id: string;
	module: MODULE_TYPE;
	name: string;
	price_cents: number;
	stripe_price_id: string;
	stripe_product_id: string;
	actions: ActionBundleAction[];
	business_modules: ReservationModule[];
};
