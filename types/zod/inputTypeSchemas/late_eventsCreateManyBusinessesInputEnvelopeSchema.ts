import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateManyBusinessesInputSchema } from './late_eventsCreateManyBusinessesInputSchema';

export const late_eventsCreateManyBusinessesInputEnvelopeSchema: z.ZodType<Prisma.late_eventsCreateManyBusinessesInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => late_eventsCreateManyBusinessesInputSchema),z.lazy(() => late_eventsCreateManyBusinessesInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default late_eventsCreateManyBusinessesInputEnvelopeSchema;
