// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { MODULE_TYPE, action_bundle_action } from '@prisma/client';

import type { ReservationModule } from '../reservation/ReservationModule.js';

export type ActionBundle = {
	action_bundle_id: string;
	module: MODULE_TYPE;
	name: string;
	price_cents: number;
	stripe_price_id: string;
	stripe_product_id: string;
	actions: action_bundle_action[];
	business_modules: ReservationModule[];
};
