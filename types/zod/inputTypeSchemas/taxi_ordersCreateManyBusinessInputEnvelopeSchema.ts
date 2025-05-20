import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateManyBusinessInputSchema } from './taxi_ordersCreateManyBusinessInputSchema';

export const taxi_ordersCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.taxi_ordersCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => taxi_ordersCreateManyBusinessInputSchema),z.lazy(() => taxi_ordersCreateManyBusinessInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default taxi_ordersCreateManyBusinessInputEnvelopeSchema;
