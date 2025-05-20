import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateManyBusinessesInputSchema } from './scoring_pointsCreateManyBusinessesInputSchema';

export const scoring_pointsCreateManyBusinessesInputEnvelopeSchema: z.ZodType<Prisma.scoring_pointsCreateManyBusinessesInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => scoring_pointsCreateManyBusinessesInputSchema),z.lazy(() => scoring_pointsCreateManyBusinessesInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default scoring_pointsCreateManyBusinessesInputEnvelopeSchema;
