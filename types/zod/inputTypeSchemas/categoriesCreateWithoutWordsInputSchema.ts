import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';
import { filesCreateNestedOneWithoutCategoriesInputSchema } from './filesCreateNestedOneWithoutCategoriesInputSchema';
import { menu_categories_categoriesCreateNestedManyWithoutCategoryInputSchema } from './menu_categories_categoriesCreateNestedManyWithoutCategoryInputSchema';
import { promo_ads_categoryCreateNestedManyWithoutCategoryInputSchema } from './promo_ads_categoryCreateNestedManyWithoutCategoryInputSchema';
import { categoriesCreateNestedOneWithoutSub_categoriesInputSchema } from './categoriesCreateNestedOneWithoutSub_categoriesInputSchema';
import { categoriesCreateNestedManyWithoutParent_categoryInputSchema } from './categoriesCreateNestedManyWithoutParent_categoryInputSchema';
import { translatableCreateNestedOneWithoutCategoriesInputSchema } from './translatableCreateNestedOneWithoutCategoriesInputSchema';

export const categoriesCreateWithoutWordsInputSchema: z.ZodType<Prisma.categoriesCreateWithoutWordsInput> = z
	.object({
		categories_id: z.string().uuid().optional(),
		name: z.string(),
		description: z.string().optional().nullable(),
		tag: z.string(),
		category_type: z.lazy(() => CATEGORY_TYPESchema),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		deleted_at: z.coerce.date().optional().nullable(),
		icon: z.lazy(() => filesCreateNestedOneWithoutCategoriesInputSchema).optional(),
		menu_categories: z.lazy(() => menu_categories_categoriesCreateNestedManyWithoutCategoryInputSchema).optional(),
		promo_ads_category: z.lazy(() => promo_ads_categoryCreateNestedManyWithoutCategoryInputSchema).optional(),
		parent_category: z.lazy(() => categoriesCreateNestedOneWithoutSub_categoriesInputSchema).optional(),
		sub_categories: z.lazy(() => categoriesCreateNestedManyWithoutParent_categoryInputSchema).optional(),
		translatable: z.lazy(() => translatableCreateNestedOneWithoutCategoriesInputSchema),
	})
	.strict();

export default categoriesCreateWithoutWordsInputSchema;
