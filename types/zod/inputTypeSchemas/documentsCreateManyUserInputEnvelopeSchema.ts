import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateManyUserInputSchema } from './documentsCreateManyUserInputSchema';

export const documentsCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.documentsCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => documentsCreateManyUserInputSchema),z.lazy(() => documentsCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default documentsCreateManyUserInputEnvelopeSchema;
