// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { PROMO_SERVICE_TYPES, categories, promo_analytics } from '@prisma/client';

import type { File } from '../files/File.js';

export type PromoAd = {
	promo_ads_id: string;
	title: string;
	text: string;
	tag: string;
	service_type: PROMO_SERVICE_TYPES;
	discount: number;
	banner: File[];
	categories: categories[];
	active: boolean;
	code?: number | null;
	created_at: string;
	active_at?: string | null;
	active_until?: string | null;
	promo_analytics: promo_analytics[];
};
