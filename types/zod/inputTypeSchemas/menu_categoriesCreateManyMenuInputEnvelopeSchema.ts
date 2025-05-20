import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateManyMenuInputSchema } from './menu_categoriesCreateManyMenuInputSchema';

export const menu_categoriesCreateManyMenuInputEnvelopeSchema: z.ZodType<Prisma.menu_categoriesCreateManyMenuInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => menu_categoriesCreateManyMenuInputSchema),z.lazy(() => menu_categoriesCreateManyMenuInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default menu_categoriesCreateManyMenuInputEnvelopeSchema;
