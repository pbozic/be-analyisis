import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsWhereInputSchema } from './promo_adsWhereInputSchema';
import { promo_adsUpdateWithoutCategoriesInputSchema } from './promo_adsUpdateWithoutCategoriesInputSchema';
import { promo_adsUncheckedUpdateWithoutCategoriesInputSchema } from './promo_adsUncheckedUpdateWithoutCategoriesInputSchema';

export const promo_adsUpdateToOneWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.promo_adsUpdateToOneWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => promo_adsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => promo_adsUpdateWithoutCategoriesInputSchema),z.lazy(() => promo_adsUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export default promo_adsUpdateToOneWithWhereWithoutCategoriesInputSchema;
