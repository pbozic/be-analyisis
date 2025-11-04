import { MODULE_TYPE } from '@prisma/client';

import type { BusinessAddon } from './BusinessAddon.js';
import type { Action } from './Action.js';
import type { AddonAction } from './AddonAction.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Addon = {
	addon_id: string;
	module: MODULE_TYPE;
	name: string;
	price_cents: number;
	stripe_price_id: string;
	stripe_product_id: string;
	actions: AddonAction[];
	business_addons: BusinessAddon[];
};
