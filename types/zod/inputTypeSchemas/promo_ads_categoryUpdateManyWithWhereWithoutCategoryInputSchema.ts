import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryScalarWhereInputSchema } from './promo_ads_categoryScalarWhereInputSchema';
import { promo_ads_categoryUpdateManyMutationInputSchema } from './promo_ads_categoryUpdateManyMutationInputSchema';
import { promo_ads_categoryUncheckedUpdateManyWithoutCategoryInputSchema } from './promo_ads_categoryUncheckedUpdateManyWithoutCategoryInputSchema';

export const promo_ads_categoryUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.promo_ads_categoryUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => promo_ads_categoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => promo_ads_categoryUpdateManyMutationInputSchema),z.lazy(() => promo_ads_categoryUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export default promo_ads_categoryUpdateManyWithWhereWithoutCategoryInputSchema;
