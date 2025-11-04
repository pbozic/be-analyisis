// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { Word } from '../promoWords/Word.js';
import type { PromoSection } from '../promoSections/PromoSection.js';
import type { Translation } from './Translation.js';
import type { Category } from '../menus/Category.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import type { MenuItem } from '../menuItems/MenuItem.js';

export type Translatable = {
	translatable_id: string;
	translations: Translation[];
	words: Word[];
	categories: Category[];
	promo_sections: PromoSection[];
	menu_categories_names: MenuCategory[];
	menu_categories_descriptions: MenuCategory[];
	menu_items_names: MenuItem[];
	menu_items_descriptions: MenuItem[];
};
