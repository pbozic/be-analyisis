import type { Category } from '../menus/Category.js';
import type { Translatable } from '../translations/Translatable.js';
import type { WordBuy } from './WordBuy.js';
import type { WordBundle } from './WordBundle.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Word = {
	word_id: string;
	word: string;
	popularity: number;
	categories_id?: string | null;
	category?: Category | null;
	translatable_id: string;
	translatable: Translatable;
	subscriptions: WordBuy[];
	bundles: WordBundle[];
	created_at: string;
	updated_at: string;
	promo_analytics: PromoAnalytic[];
};
