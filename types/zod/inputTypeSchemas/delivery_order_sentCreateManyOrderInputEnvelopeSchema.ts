import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentCreateManyOrderInputSchema } from './delivery_order_sentCreateManyOrderInputSchema';

export const delivery_order_sentCreateManyOrderInputEnvelopeSchema: z.ZodType<Prisma.delivery_order_sentCreateManyOrderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => delivery_order_sentCreateManyOrderInputSchema),z.lazy(() => delivery_order_sentCreateManyOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default delivery_order_sentCreateManyOrderInputEnvelopeSchema;
