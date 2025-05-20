import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_activity_logsCreateManyDriverInputSchema } from './driver_activity_logsCreateManyDriverInputSchema';

export const driver_activity_logsCreateManyDriverInputEnvelopeSchema: z.ZodType<Prisma.driver_activity_logsCreateManyDriverInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => driver_activity_logsCreateManyDriverInputSchema),z.lazy(() => driver_activity_logsCreateManyDriverInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default driver_activity_logsCreateManyDriverInputEnvelopeSchema;
