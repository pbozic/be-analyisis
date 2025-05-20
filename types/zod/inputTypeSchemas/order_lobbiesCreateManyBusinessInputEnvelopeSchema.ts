import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesCreateManyBusinessInputSchema } from './order_lobbiesCreateManyBusinessInputSchema';

export const order_lobbiesCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.order_lobbiesCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => order_lobbiesCreateManyBusinessInputSchema),z.lazy(() => order_lobbiesCreateManyBusinessInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default order_lobbiesCreateManyBusinessInputEnvelopeSchema;
