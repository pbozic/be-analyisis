import { PROMO_SERVICE_TYPES } from '@prisma/client';

import type { PromoSectionsBuy } from './PromoSectionsBuy.js';
import type { Translatable } from '../translations/Translatable.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PromoSection = {
	promo_sections_id: string;
	name: string;
	tag: string;
	active: boolean;
	description?: string | null;
	prices?: unknown | null;
	limits?: unknown | null;
	stripe_product_id?: string | null;
	canPurchase: boolean;
	t1price?: number | null;
	t2price?: number | null;
	t3price?: number | null;
	order: number;
	service_type: PROMO_SERVICE_TYPES;
	promo_section_buy: PromoSectionsBuy[];
	promo_duration_days: number;
	translatable_id: string;
	translatable: Translatable;
	display_cards_per_page?: number | null;
	promo_analytics: PromoAnalytic[];
};
