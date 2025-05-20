import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackCreateManyUserInputSchema } from './cashbackCreateManyUserInputSchema';

export const cashbackCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.cashbackCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => cashbackCreateManyUserInputSchema),z.lazy(() => cashbackCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default cashbackCreateManyUserInputEnvelopeSchema;
