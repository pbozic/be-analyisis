import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';
import { promo_ads_categoryUncheckedCreateNestedManyWithoutCategoryInputSchema } from './promo_ads_categoryUncheckedCreateNestedManyWithoutCategoryInputSchema';
import { categoriesUncheckedCreateNestedManyWithoutParent_categoryInputSchema } from './categoriesUncheckedCreateNestedManyWithoutParent_categoryInputSchema';
import { wordsUncheckedCreateNestedManyWithoutCategoryInputSchema } from './wordsUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const categoriesUncheckedCreateWithoutMenu_categoriesInputSchema: z.ZodType<Prisma.categoriesUncheckedCreateWithoutMenu_categoriesInput> =
	z
		.object({
			categories_id: z.string().uuid().optional(),
			name: z.string(),
			description: z.string().optional().nullable(),
			tag: z.string(),
			icon_file_id: z.string().optional().nullable(),
			category_type: z.lazy(() => CATEGORY_TYPESchema),
			parent_categories_id: z.string().optional().nullable(),
			translatable_id: z.string(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			deleted_at: z.coerce.date().optional().nullable(),
			promo_ads_category: z
				.lazy(() => promo_ads_categoryUncheckedCreateNestedManyWithoutCategoryInputSchema)
				.optional(),
			sub_categories: z
				.lazy(() => categoriesUncheckedCreateNestedManyWithoutParent_categoryInputSchema)
				.optional(),
			words: z.lazy(() => wordsUncheckedCreateNestedManyWithoutCategoryInputSchema).optional(),
		})
		.strict();

export default categoriesUncheckedCreateWithoutMenu_categoriesInputSchema;
