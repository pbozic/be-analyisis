// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { categories, menu_categories, menu_items, translations } from '@prisma/client';

import type { Word } from '../promoWords/Word.js';
import type { PromoSection } from '../promoSections/PromoSection.js';

export type Translatable = {
	translatable_id: string;
	translations: translations[];
	words: Word[];
	categories: categories[];
	promo_sections: PromoSection[];
	menu_categories_names: menu_categories[];
	menu_categories_descriptions: menu_categories[];
	menu_items_names: menu_items[];
	menu_items_descriptions: menu_items[];
};
