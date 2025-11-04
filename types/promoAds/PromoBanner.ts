import type { File } from '../files/File.js';
import type { PromoAd } from './PromoAd.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PromoBanner = {
	promo_banners_id: string;
	type: string;
	size?: string | null;
	title: string;
	text: string;
	promo_section_buy_id?: string | null;
	file_id: string;
	files: File;
	promo_ads_id?: string | null;
	promo_ads?: PromoAd | null;
};
