import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsCreateWithoutCategoriesInputSchema } from './promo_adsCreateWithoutCategoriesInputSchema';
import { promo_adsUncheckedCreateWithoutCategoriesInputSchema } from './promo_adsUncheckedCreateWithoutCategoriesInputSchema';
import { promo_adsCreateOrConnectWithoutCategoriesInputSchema } from './promo_adsCreateOrConnectWithoutCategoriesInputSchema';
import { promo_adsUpsertWithoutCategoriesInputSchema } from './promo_adsUpsertWithoutCategoriesInputSchema';
import { promo_adsWhereUniqueInputSchema } from './promo_adsWhereUniqueInputSchema';
import { promo_adsUpdateToOneWithWhereWithoutCategoriesInputSchema } from './promo_adsUpdateToOneWithWhereWithoutCategoriesInputSchema';
import { promo_adsUpdateWithoutCategoriesInputSchema } from './promo_adsUpdateWithoutCategoriesInputSchema';
import { promo_adsUncheckedUpdateWithoutCategoriesInputSchema } from './promo_adsUncheckedUpdateWithoutCategoriesInputSchema';

export const promo_adsUpdateOneRequiredWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.promo_adsUpdateOneRequiredWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => promo_adsCreateWithoutCategoriesInputSchema),z.lazy(() => promo_adsUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => promo_adsCreateOrConnectWithoutCategoriesInputSchema).optional(),
  upsert: z.lazy(() => promo_adsUpsertWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => promo_adsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => promo_adsUpdateToOneWithWhereWithoutCategoriesInputSchema),z.lazy(() => promo_adsUpdateWithoutCategoriesInputSchema),z.lazy(() => promo_adsUncheckedUpdateWithoutCategoriesInputSchema) ]).optional(),
}).strict();

export default promo_adsUpdateOneRequiredWithoutCategoriesNestedInputSchema;
