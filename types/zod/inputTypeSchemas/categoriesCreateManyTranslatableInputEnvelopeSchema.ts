import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateManyTranslatableInputSchema } from './categoriesCreateManyTranslatableInputSchema';

export const categoriesCreateManyTranslatableInputEnvelopeSchema: z.ZodType<Prisma.categoriesCreateManyTranslatableInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => categoriesCreateManyTranslatableInputSchema),z.lazy(() => categoriesCreateManyTranslatableInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default categoriesCreateManyTranslatableInputEnvelopeSchema;
