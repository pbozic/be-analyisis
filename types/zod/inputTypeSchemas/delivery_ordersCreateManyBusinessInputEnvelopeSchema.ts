import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateManyBusinessInputSchema } from './delivery_ordersCreateManyBusinessInputSchema';

export const delivery_ordersCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.delivery_ordersCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => delivery_ordersCreateManyBusinessInputSchema),z.lazy(() => delivery_ordersCreateManyBusinessInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default delivery_ordersCreateManyBusinessInputEnvelopeSchema;
