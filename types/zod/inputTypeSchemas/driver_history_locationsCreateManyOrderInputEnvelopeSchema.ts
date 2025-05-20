import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsCreateManyOrderInputSchema } from './driver_history_locationsCreateManyOrderInputSchema';

export const driver_history_locationsCreateManyOrderInputEnvelopeSchema: z.ZodType<Prisma.driver_history_locationsCreateManyOrderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => driver_history_locationsCreateManyOrderInputSchema),z.lazy(() => driver_history_locationsCreateManyOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default driver_history_locationsCreateManyOrderInputEnvelopeSchema;
