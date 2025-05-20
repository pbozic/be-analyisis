import { z } from 'zod';
import { CATEGORY_TYPESchema } from '../inputTypeSchemas/CATEGORY_TYPESchema';
import { filesWithRelationsSchema } from './filesSchema';
import type { filesWithRelations } from './filesSchema';
import { menu_categories_categoriesWithRelationsSchema } from './menu_categories_categoriesSchema';
import type { menu_categories_categoriesWithRelations } from './menu_categories_categoriesSchema';
import { promo_ads_categoryWithRelationsSchema } from './promo_ads_categorySchema';
import type { promo_ads_categoryWithRelations } from './promo_ads_categorySchema';
import { translatableWithRelationsSchema } from './translatableSchema';
import type { translatableWithRelations } from './translatableSchema';
import { wordsWithRelationsSchema } from './wordsSchema';
import type { wordsWithRelations } from './wordsSchema';

/////////////////////////////////////////
// CATEGORIES SCHEMA
/////////////////////////////////////////

export const categoriesSchema = z.object({
	category_type: CATEGORY_TYPESchema,
	categories_id: z.string().uuid(),
	name: z.string(),
	description: z.string().nullable(),
	tag: z.string(),
	icon_file_id: z.string().nullable(),
	parent_categories_id: z.string().nullable(),
	translatable_id: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	deleted_at: z.coerce.date().nullable(),
});

export type categories = z.infer<typeof categoriesSchema>;

/////////////////////////////////////////
// CATEGORIES RELATION SCHEMA
/////////////////////////////////////////

export type categoriesRelations = {
	icon?: filesWithRelations | null;
	menu_categories: menu_categories_categoriesWithRelations[];
	promo_ads_category: promo_ads_categoryWithRelations[];
	parent_category?: categoriesWithRelations | null;
	sub_categories: categoriesWithRelations[];
	translatable: translatableWithRelations;
	words: wordsWithRelations[];
};

export type categoriesWithRelations = z.infer<typeof categoriesSchema> & categoriesRelations;

export const categoriesWithRelationsSchema: z.ZodType<categoriesWithRelations> = categoriesSchema.merge(
	z.object({
		icon: z.lazy(() => filesWithRelationsSchema).nullable(),
		menu_categories: z.lazy(() => menu_categories_categoriesWithRelationsSchema).array(),
		promo_ads_category: z.lazy(() => promo_ads_categoryWithRelationsSchema).array(),
		parent_category: z.lazy(() => categoriesWithRelationsSchema).nullable(),
		sub_categories: z.lazy(() => categoriesWithRelationsSchema).array(),
		translatable: z.lazy(() => translatableWithRelationsSchema),
		words: z.lazy(() => wordsWithRelationsSchema).array(),
	})
);

export default categoriesSchema;
