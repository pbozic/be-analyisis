import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyCreateManyUserInputSchema } from './flag_historyCreateManyUserInputSchema';

export const flag_historyCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.flag_historyCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => flag_historyCreateManyUserInputSchema),z.lazy(() => flag_historyCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default flag_historyCreateManyUserInputEnvelopeSchema;
