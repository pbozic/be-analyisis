import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsCreateNestedOneWithoutCategoriesInputSchema } from './promo_adsCreateNestedOneWithoutCategoriesInputSchema';

export const promo_ads_categoryCreateWithoutCategoryInputSchema: z.ZodType<Prisma.promo_ads_categoryCreateWithoutCategoryInput> =
	z
		.object({
			promo_ads_category_id: z.string().uuid().optional(),
			promo_ad: z.lazy(() => promo_adsCreateNestedOneWithoutCategoriesInputSchema),
		})
		.strict();

export default promo_ads_categoryCreateWithoutCategoryInputSchema;
