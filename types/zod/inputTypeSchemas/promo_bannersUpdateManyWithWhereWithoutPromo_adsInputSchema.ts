import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersScalarWhereInputSchema } from './promo_bannersScalarWhereInputSchema';
import { promo_bannersUpdateManyMutationInputSchema } from './promo_bannersUpdateManyMutationInputSchema';
import { promo_bannersUncheckedUpdateManyWithoutPromo_adsInputSchema } from './promo_bannersUncheckedUpdateManyWithoutPromo_adsInputSchema';

export const promo_bannersUpdateManyWithWhereWithoutPromo_adsInputSchema: z.ZodType<Prisma.promo_bannersUpdateManyWithWhereWithoutPromo_adsInput> = z.object({
  where: z.lazy(() => promo_bannersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => promo_bannersUpdateManyMutationInputSchema),z.lazy(() => promo_bannersUncheckedUpdateManyWithoutPromo_adsInputSchema) ]),
}).strict();

export default promo_bannersUpdateManyWithWhereWithoutPromo_adsInputSchema;
