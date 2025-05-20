import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';

export const TranslatableRelationFilterSchema: z.ZodType<Prisma.TranslatableRelationFilter> = z.object({
  is: z.lazy(() => translatableWhereInputSchema).optional(),
  isNot: z.lazy(() => translatableWhereInputSchema).optional()
}).strict();

export default TranslatableRelationFilterSchema;
