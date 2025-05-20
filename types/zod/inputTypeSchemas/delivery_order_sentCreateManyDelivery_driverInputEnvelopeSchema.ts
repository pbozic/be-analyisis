import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentCreateManyDelivery_driverInputSchema } from './delivery_order_sentCreateManyDelivery_driverInputSchema';

export const delivery_order_sentCreateManyDelivery_driverInputEnvelopeSchema: z.ZodType<Prisma.delivery_order_sentCreateManyDelivery_driverInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => delivery_order_sentCreateManyDelivery_driverInputSchema),z.lazy(() => delivery_order_sentCreateManyDelivery_driverInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default delivery_order_sentCreateManyDelivery_driverInputEnvelopeSchema;
