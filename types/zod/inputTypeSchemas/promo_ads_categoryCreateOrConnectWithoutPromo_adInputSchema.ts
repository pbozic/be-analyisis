import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryWhereUniqueInputSchema } from './promo_ads_categoryWhereUniqueInputSchema';
import { promo_ads_categoryCreateWithoutPromo_adInputSchema } from './promo_ads_categoryCreateWithoutPromo_adInputSchema';
import { promo_ads_categoryUncheckedCreateWithoutPromo_adInputSchema } from './promo_ads_categoryUncheckedCreateWithoutPromo_adInputSchema';

export const promo_ads_categoryCreateOrConnectWithoutPromo_adInputSchema: z.ZodType<Prisma.promo_ads_categoryCreateOrConnectWithoutPromo_adInput> = z.object({
  where: z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => promo_ads_categoryCreateWithoutPromo_adInputSchema),z.lazy(() => promo_ads_categoryUncheckedCreateWithoutPromo_adInputSchema) ]),
}).strict();

export default promo_ads_categoryCreateOrConnectWithoutPromo_adInputSchema;
