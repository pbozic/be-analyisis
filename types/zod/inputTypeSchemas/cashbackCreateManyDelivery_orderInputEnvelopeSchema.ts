import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackCreateManyDelivery_orderInputSchema } from './cashbackCreateManyDelivery_orderInputSchema';

export const cashbackCreateManyDelivery_orderInputEnvelopeSchema: z.ZodType<Prisma.cashbackCreateManyDelivery_orderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => cashbackCreateManyDelivery_orderInputSchema),z.lazy(() => cashbackCreateManyDelivery_orderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default cashbackCreateManyDelivery_orderInputEnvelopeSchema;
