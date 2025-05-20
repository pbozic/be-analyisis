import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateManyIconInputSchema } from './categoriesCreateManyIconInputSchema';

export const categoriesCreateManyIconInputEnvelopeSchema: z.ZodType<Prisma.categoriesCreateManyIconInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => categoriesCreateManyIconInputSchema),z.lazy(() => categoriesCreateManyIconInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default categoriesCreateManyIconInputEnvelopeSchema;
