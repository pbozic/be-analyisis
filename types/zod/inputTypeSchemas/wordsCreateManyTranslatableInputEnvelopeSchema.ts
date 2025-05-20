import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateManyTranslatableInputSchema } from './wordsCreateManyTranslatableInputSchema';

export const wordsCreateManyTranslatableInputEnvelopeSchema: z.ZodType<Prisma.wordsCreateManyTranslatableInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => wordsCreateManyTranslatableInputSchema),z.lazy(() => wordsCreateManyTranslatableInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default wordsCreateManyTranslatableInputEnvelopeSchema;
