import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsCreateManyOrderInputSchema } from './delivery_driver_history_locationsCreateManyOrderInputSchema';

export const delivery_driver_history_locationsCreateManyOrderInputEnvelopeSchema: z.ZodType<Prisma.delivery_driver_history_locationsCreateManyOrderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => delivery_driver_history_locationsCreateManyOrderInputSchema),z.lazy(() => delivery_driver_history_locationsCreateManyOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default delivery_driver_history_locationsCreateManyOrderInputEnvelopeSchema;
