import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateManyDelivery_orderInputSchema } from './transactionsCreateManyDelivery_orderInputSchema';

export const transactionsCreateManyDelivery_orderInputEnvelopeSchema: z.ZodType<Prisma.transactionsCreateManyDelivery_orderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => transactionsCreateManyDelivery_orderInputSchema),z.lazy(() => transactionsCreateManyDelivery_orderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default transactionsCreateManyDelivery_orderInputEnvelopeSchema;
