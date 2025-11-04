import { CATEGORY_TYPE } from '@prisma/client';

import type { File } from '../files/File.js';
import type { MenuCategory } from './MenuCategory.js';
import type { PromoAd } from '../promoAds/PromoAd.js';
import type { Translatable } from '../translations/Translatable.js';
import type { Word } from '../promoWords/Word.js';
import type { DailyMealCategory } from '../dailyMeals/DailyMealCategory.js';
import type { MenuCategoriesCategory } from '../general/MenuCategoriesCategory.js';
import type { PromoAdsCategory } from '../promoAds/PromoAdsCategory.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Category = {
	categories_id: string;
	name: string;
	description?: string | null;
	tag: string;
	icon_file_id?: string | null;
	icon?: File | null;
	category_type: CATEGORY_TYPE;
	menu_categories: MenuCategoriesCategory[];
	promo_ads_category: PromoAdsCategory[];
	parent_categories_id?: string | null;
	parent_category?: Category | null;
	sub_categories: Category[];
	translatable_id: string;
	translatable: Translatable;
	words: Word[];
	created_at: string;
	updated_at: string;
	deleted_at?: string | null;
	daily_meal_categories: DailyMealCategory[];
};
