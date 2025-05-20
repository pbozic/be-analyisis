import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateManyDelivery_driverInputSchema } from './delivery_ordersCreateManyDelivery_driverInputSchema';

export const delivery_ordersCreateManyDelivery_driverInputEnvelopeSchema: z.ZodType<Prisma.delivery_ordersCreateManyDelivery_driverInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => delivery_ordersCreateManyDelivery_driverInputSchema),z.lazy(() => delivery_ordersCreateManyDelivery_driverInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default delivery_ordersCreateManyDelivery_driverInputEnvelopeSchema;
