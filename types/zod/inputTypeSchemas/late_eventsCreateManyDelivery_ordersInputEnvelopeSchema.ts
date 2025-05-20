import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateManyDelivery_ordersInputSchema } from './late_eventsCreateManyDelivery_ordersInputSchema';

export const late_eventsCreateManyDelivery_ordersInputEnvelopeSchema: z.ZodType<Prisma.late_eventsCreateManyDelivery_ordersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => late_eventsCreateManyDelivery_ordersInputSchema),z.lazy(() => late_eventsCreateManyDelivery_ordersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default late_eventsCreateManyDelivery_ordersInputEnvelopeSchema;
