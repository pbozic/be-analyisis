import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryWhereUniqueInputSchema } from './promo_ads_categoryWhereUniqueInputSchema';
import { promo_ads_categoryUpdateWithoutCategoryInputSchema } from './promo_ads_categoryUpdateWithoutCategoryInputSchema';
import { promo_ads_categoryUncheckedUpdateWithoutCategoryInputSchema } from './promo_ads_categoryUncheckedUpdateWithoutCategoryInputSchema';
import { promo_ads_categoryCreateWithoutCategoryInputSchema } from './promo_ads_categoryCreateWithoutCategoryInputSchema';
import { promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema } from './promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema';

export const promo_ads_categoryUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.promo_ads_categoryUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => promo_ads_categoryUpdateWithoutCategoryInputSchema),z.lazy(() => promo_ads_categoryUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => promo_ads_categoryCreateWithoutCategoryInputSchema),z.lazy(() => promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default promo_ads_categoryUpsertWithWhereUniqueWithoutCategoryInputSchema;
