import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersCreateManyPromo_adsInputSchema } from './promo_bannersCreateManyPromo_adsInputSchema';

export const promo_bannersCreateManyPromo_adsInputEnvelopeSchema: z.ZodType<Prisma.promo_bannersCreateManyPromo_adsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => promo_bannersCreateManyPromo_adsInputSchema),z.lazy(() => promo_bannersCreateManyPromo_adsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default promo_bannersCreateManyPromo_adsInputEnvelopeSchema;
