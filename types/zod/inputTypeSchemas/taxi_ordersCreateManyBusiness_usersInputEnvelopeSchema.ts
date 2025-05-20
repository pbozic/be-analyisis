import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateManyBusiness_usersInputSchema } from './taxi_ordersCreateManyBusiness_usersInputSchema';

export const taxi_ordersCreateManyBusiness_usersInputEnvelopeSchema: z.ZodType<Prisma.taxi_ordersCreateManyBusiness_usersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => taxi_ordersCreateManyBusiness_usersInputSchema),z.lazy(() => taxi_ordersCreateManyBusiness_usersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default taxi_ordersCreateManyBusiness_usersInputEnvelopeSchema;
