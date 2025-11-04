import { PROMO_SERVICE_TYPES } from '@prisma/client';

import type { PromoBanner } from './PromoBanner.js';
import type { Category } from '../menus/Category.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';
import type { PromoAdsCategory } from './PromoAdsCategory.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PromoAd = {
	promo_ads_id: string;
	title: string;
	text: string;
	tag: string;
	service_type: PROMO_SERVICE_TYPES;
	discount: number;
	banner: PromoBanner[];
	categories: PromoAdsCategory[];
	active: boolean;
	code?: number | null;
	created_at: Date;
	active_at?: Date | null;
	active_until?: Date | null;
	promo_analytics: PromoAnalytic[];
};
