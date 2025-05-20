import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentCreateManyDriverInputSchema } from './delivery_order_sentCreateManyDriverInputSchema';

export const delivery_order_sentCreateManyDriverInputEnvelopeSchema: z.ZodType<Prisma.delivery_order_sentCreateManyDriverInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => delivery_order_sentCreateManyDriverInputSchema),z.lazy(() => delivery_order_sentCreateManyDriverInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default delivery_order_sentCreateManyDriverInputEnvelopeSchema;
