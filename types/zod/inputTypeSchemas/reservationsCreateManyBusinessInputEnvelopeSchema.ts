import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsCreateManyBusinessInputSchema } from './reservationsCreateManyBusinessInputSchema';

export const reservationsCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.reservationsCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => reservationsCreateManyBusinessInputSchema),z.lazy(() => reservationsCreateManyBusinessInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default reservationsCreateManyBusinessInputEnvelopeSchema;
