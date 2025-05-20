import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateManyUserInputSchema } from './taxi_ordersCreateManyUserInputSchema';

export const taxi_ordersCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.taxi_ordersCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => taxi_ordersCreateManyUserInputSchema),z.lazy(() => taxi_ordersCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default taxi_ordersCreateManyUserInputEnvelopeSchema;
