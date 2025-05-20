import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryWhereUniqueInputSchema } from './promo_ads_categoryWhereUniqueInputSchema';
import { promo_ads_categoryUpdateWithoutCategoryInputSchema } from './promo_ads_categoryUpdateWithoutCategoryInputSchema';
import { promo_ads_categoryUncheckedUpdateWithoutCategoryInputSchema } from './promo_ads_categoryUncheckedUpdateWithoutCategoryInputSchema';

export const promo_ads_categoryUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.promo_ads_categoryUpdateWithWhereUniqueWithoutCategoryInput> =
	z
		.object({
			where: z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => promo_ads_categoryUpdateWithoutCategoryInputSchema),
				z.lazy(() => promo_ads_categoryUncheckedUpdateWithoutCategoryInputSchema),
			]),
		})
		.strict();

export default promo_ads_categoryUpdateWithWhereUniqueWithoutCategoryInputSchema;
