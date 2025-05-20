import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersWhereUniqueInputSchema } from './promo_bannersWhereUniqueInputSchema';
import { promo_bannersUpdateWithoutPromo_adsInputSchema } from './promo_bannersUpdateWithoutPromo_adsInputSchema';
import { promo_bannersUncheckedUpdateWithoutPromo_adsInputSchema } from './promo_bannersUncheckedUpdateWithoutPromo_adsInputSchema';
import { promo_bannersCreateWithoutPromo_adsInputSchema } from './promo_bannersCreateWithoutPromo_adsInputSchema';
import { promo_bannersUncheckedCreateWithoutPromo_adsInputSchema } from './promo_bannersUncheckedCreateWithoutPromo_adsInputSchema';

export const promo_bannersUpsertWithWhereUniqueWithoutPromo_adsInputSchema: z.ZodType<Prisma.promo_bannersUpsertWithWhereUniqueWithoutPromo_adsInput> = z.object({
  where: z.lazy(() => promo_bannersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => promo_bannersUpdateWithoutPromo_adsInputSchema),z.lazy(() => promo_bannersUncheckedUpdateWithoutPromo_adsInputSchema) ]),
  create: z.union([ z.lazy(() => promo_bannersCreateWithoutPromo_adsInputSchema),z.lazy(() => promo_bannersUncheckedCreateWithoutPromo_adsInputSchema) ]),
}).strict();

export default promo_bannersUpsertWithWhereUniqueWithoutPromo_adsInputSchema;
