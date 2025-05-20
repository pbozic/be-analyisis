import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryWhereUniqueInputSchema } from './promo_ads_categoryWhereUniqueInputSchema';
import { promo_ads_categoryUpdateWithoutPromo_adInputSchema } from './promo_ads_categoryUpdateWithoutPromo_adInputSchema';
import { promo_ads_categoryUncheckedUpdateWithoutPromo_adInputSchema } from './promo_ads_categoryUncheckedUpdateWithoutPromo_adInputSchema';

export const promo_ads_categoryUpdateWithWhereUniqueWithoutPromo_adInputSchema: z.ZodType<Prisma.promo_ads_categoryUpdateWithWhereUniqueWithoutPromo_adInput> = z.object({
  where: z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => promo_ads_categoryUpdateWithoutPromo_adInputSchema),z.lazy(() => promo_ads_categoryUncheckedUpdateWithoutPromo_adInputSchema) ]),
}).strict();

export default promo_ads_categoryUpdateWithWhereUniqueWithoutPromo_adInputSchema;
