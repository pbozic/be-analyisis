import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersWhereUniqueInputSchema } from './promo_bannersWhereUniqueInputSchema';
import { promo_bannersCreateWithoutPromo_adsInputSchema } from './promo_bannersCreateWithoutPromo_adsInputSchema';
import { promo_bannersUncheckedCreateWithoutPromo_adsInputSchema } from './promo_bannersUncheckedCreateWithoutPromo_adsInputSchema';

export const promo_bannersCreateOrConnectWithoutPromo_adsInputSchema: z.ZodType<Prisma.promo_bannersCreateOrConnectWithoutPromo_adsInput> = z.object({
  where: z.lazy(() => promo_bannersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => promo_bannersCreateWithoutPromo_adsInputSchema),z.lazy(() => promo_bannersUncheckedCreateWithoutPromo_adsInputSchema) ]),
}).strict();

export default promo_bannersCreateOrConnectWithoutPromo_adsInputSchema;
