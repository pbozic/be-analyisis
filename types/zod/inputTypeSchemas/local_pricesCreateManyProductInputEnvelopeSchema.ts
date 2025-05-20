import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesCreateManyProductInputSchema } from './local_pricesCreateManyProductInputSchema';

export const local_pricesCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.local_pricesCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => local_pricesCreateManyProductInputSchema),z.lazy(() => local_pricesCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default local_pricesCreateManyProductInputEnvelopeSchema;
