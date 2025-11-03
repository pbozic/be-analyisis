// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { MODULE_TYPE, addon_action, business_addon } from '@prisma/client';

export type Addon = {
	addon_id: string;
	module: MODULE_TYPE;
	name: string;
	price_cents: number;
	stripe_price_id: string;
	stripe_product_id: string;
	actions: addon_action[];
	business_addons: business_addon[];
};
