import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';

export const CategoriesRelationFilterSchema: z.ZodType<Prisma.CategoriesRelationFilter> = z.object({
  is: z.lazy(() => categoriesWhereInputSchema).optional(),
  isNot: z.lazy(() => categoriesWhereInputSchema).optional()
}).strict();

export default CategoriesRelationFilterSchema;
