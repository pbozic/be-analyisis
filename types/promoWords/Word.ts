// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { categories, promo_analytics, translatable, word_bundles } from '@prisma/client';

import type { Busines } from '../business/Busines.js';

export type Word = {
	word_id: string;
	word: string;
	popularity: number;
	categories_id?: string | null;
	category?: categories | null;
	translatable_id: string;
	translatable: translatable;
	subscriptions: Busines[];
	bundles: word_bundles[];
	created_at: string;
	updated_at: string;
	promo_analytics: promo_analytics[];
};
