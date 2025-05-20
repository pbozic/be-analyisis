import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsCreateWithoutCategoriesInputSchema } from './promo_adsCreateWithoutCategoriesInputSchema';
import { promo_adsUncheckedCreateWithoutCategoriesInputSchema } from './promo_adsUncheckedCreateWithoutCategoriesInputSchema';
import { promo_adsCreateOrConnectWithoutCategoriesInputSchema } from './promo_adsCreateOrConnectWithoutCategoriesInputSchema';
import { promo_adsWhereUniqueInputSchema } from './promo_adsWhereUniqueInputSchema';

export const promo_adsCreateNestedOneWithoutCategoriesInputSchema: z.ZodType<Prisma.promo_adsCreateNestedOneWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => promo_adsCreateWithoutCategoriesInputSchema),z.lazy(() => promo_adsUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => promo_adsCreateOrConnectWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => promo_adsWhereUniqueInputSchema).optional()
}).strict();

export default promo_adsCreateNestedOneWithoutCategoriesInputSchema;
