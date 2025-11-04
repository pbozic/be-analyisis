import { CATEGORY_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { File } from '../files/File.js';
import type { MenuCategory } from './MenuCategory.js';
import type { PromoAd } from '../promoAds/PromoAd.js';
import type { Translatable } from '../translations/Translatable.js';
import type { Word } from '../promoWords/Word.js';
import type { DailyMealCategory } from '../dailyMeals/DailyMealCategory.js';
import type { MenuCategoriesCategory } from '../general/MenuCategoriesCategory.js';
import type { PromoAdsCategory } from '../promoAds/PromoAdsCategory.js';
import { FileResponseSchema } from '../files/File';
import { MenuCategoriesCategoryResponseSchema } from '../general/MenuCategoriesCategory';
import { PromoAdsCategoryResponseSchema } from '../promoAds/PromoAdsCategory';
import { TranslatableResponseSchema } from '../translations/Translatable';
import { WordResponseSchema } from '../promoWords/Word';
import { DailyMealCategoryResponseSchema } from '../dailyMeals/DailyMealCategory';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateCategorySchema = z
	.object({
		categories_id: z.string().uuid(),
		name: z.string(),
		description: z.string().nullable().optional(),
		tag: z.string(),
		icon_file_id: z.string().uuid().nullable().optional(),
		category_type: z.nativeEnum(CATEGORY_TYPE),
		parent_categories_id: z.string().uuid().nullable().optional(),
		parent_category: z.unknown().nullable().optional(),
		sub_categories: z.array(z.unknown()),
		translatable_id: z.string().uuid(),
		deleted_at: z.unknown().nullable().optional(),
	})
	.openapi('CreateCategory');

export type CreateCategoryInput = z.infer<typeof CreateCategorySchema>;

export const UpdateCategorySchema = CreateCategorySchema.partial().openapi('UpdateCategory');
export type UpdateCategoryInput = z.infer<typeof UpdateCategorySchema>;

export const baseCategoryResponseSchema = z
	.object({
		categories_id: z.string().uuid(),
		name: z.string(),
		description: z.string().nullable().optional(),
		tag: z.string(),
		icon_file_id: z.string().uuid().nullable().optional(),
		icon: FileResponseSchema.nullable().optional(),
		category_type: z.nativeEnum(CATEGORY_TYPE),
		menu_categories: z.array(MenuCategoriesCategoryResponseSchema),
		promo_ads_category: z.array(PromoAdsCategoryResponseSchema),
		parent_categories_id: z.string().uuid().nullable().optional(),
		translatable_id: z.string().uuid(),
		translatable: TranslatableResponseSchema,
		words: z.array(WordResponseSchema),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		deleted_at: z.string().datetime().nullable().optional(),
		daily_meal_categories: z.array(DailyMealCategoryResponseSchema),
	})
	.openapi('CategoryResponse');

type CategoryRes = z.infer<typeof baseCategoryResponseSchema> & {
	sub_categories: CategoryRes[];
};

export const CategoryResponseSchema: z.ZodType<CategoryRes> = baseCategoryResponseSchema
	.extend({
		parent_category: z
			.lazy(() => CategoryResponseSchema)
			.nullable()
			.optional(),
		sub_categories: z.array(z.lazy(() => CategoryResponseSchema)),
	})
	.openapi('CategoryResponse');

export type CategoryResponse = z.infer<typeof CategoryResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateCategory', CreateCategorySchema);
	registry.register('UpdateCategory', UpdateCategorySchema);
	registry.register('CategoryResponse', CategoryResponseSchema);
}

export type Category = {
	categories_id: string;
	name: string;
	description?: string | null;
	tag: string;
	icon_file_id?: string | null;
	icon?: File | null;
	category_type: CATEGORY_TYPE;
	menu_categories?: MenuCategoriesCategory[];
	promo_ads_category?: PromoAdsCategory[];
	parent_categories_id?: string | null;
	parent_category?: Category | null;
	sub_categories?: Category[];
	translatable_id: string;
	translatable?: Translatable;
	words?: Word[];
	created_at: Date;
	updated_at: Date;
	deleted_at?: Date | null;
	daily_meal_categories?: DailyMealCategory[];
};
