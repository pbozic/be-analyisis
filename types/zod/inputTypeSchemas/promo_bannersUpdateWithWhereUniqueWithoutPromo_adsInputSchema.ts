import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersWhereUniqueInputSchema } from './promo_bannersWhereUniqueInputSchema';
import { promo_bannersUpdateWithoutPromo_adsInputSchema } from './promo_bannersUpdateWithoutPromo_adsInputSchema';
import { promo_bannersUncheckedUpdateWithoutPromo_adsInputSchema } from './promo_bannersUncheckedUpdateWithoutPromo_adsInputSchema';

export const promo_bannersUpdateWithWhereUniqueWithoutPromo_adsInputSchema: z.ZodType<Prisma.promo_bannersUpdateWithWhereUniqueWithoutPromo_adsInput> = z.object({
  where: z.lazy(() => promo_bannersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => promo_bannersUpdateWithoutPromo_adsInputSchema),z.lazy(() => promo_bannersUncheckedUpdateWithoutPromo_adsInputSchema) ]),
}).strict();

export default promo_bannersUpdateWithWhereUniqueWithoutPromo_adsInputSchema;
