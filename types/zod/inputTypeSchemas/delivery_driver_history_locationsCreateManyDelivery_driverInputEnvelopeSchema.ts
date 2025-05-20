import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsCreateManyDelivery_driverInputSchema } from './delivery_driver_history_locationsCreateManyDelivery_driverInputSchema';

export const delivery_driver_history_locationsCreateManyDelivery_driverInputEnvelopeSchema: z.ZodType<Prisma.delivery_driver_history_locationsCreateManyDelivery_driverInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => delivery_driver_history_locationsCreateManyDelivery_driverInputSchema),z.lazy(() => delivery_driver_history_locationsCreateManyDelivery_driverInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default delivery_driver_history_locationsCreateManyDelivery_driverInputEnvelopeSchema;
