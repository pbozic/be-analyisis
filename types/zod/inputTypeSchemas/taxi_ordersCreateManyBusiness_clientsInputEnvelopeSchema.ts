import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateManyBusiness_clientsInputSchema } from './taxi_ordersCreateManyBusiness_clientsInputSchema';

export const taxi_ordersCreateManyBusiness_clientsInputEnvelopeSchema: z.ZodType<Prisma.taxi_ordersCreateManyBusiness_clientsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => taxi_ordersCreateManyBusiness_clientsInputSchema),z.lazy(() => taxi_ordersCreateManyBusiness_clientsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default taxi_ordersCreateManyBusiness_clientsInputEnvelopeSchema;
