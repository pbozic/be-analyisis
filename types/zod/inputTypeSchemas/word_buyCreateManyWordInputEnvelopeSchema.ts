import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyCreateManyWordInputSchema } from './word_buyCreateManyWordInputSchema';

export const word_buyCreateManyWordInputEnvelopeSchema: z.ZodType<Prisma.word_buyCreateManyWordInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => word_buyCreateManyWordInputSchema),z.lazy(() => word_buyCreateManyWordInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default word_buyCreateManyWordInputEnvelopeSchema;
