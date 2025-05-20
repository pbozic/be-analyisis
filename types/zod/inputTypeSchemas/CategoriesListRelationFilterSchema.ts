import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';

export const CategoriesListRelationFilterSchema: z.ZodType<Prisma.CategoriesListRelationFilter> = z.object({
  every: z.lazy(() => categoriesWhereInputSchema).optional(),
  some: z.lazy(() => categoriesWhereInputSchema).optional(),
  none: z.lazy(() => categoriesWhereInputSchema).optional()
}).strict();

export default CategoriesListRelationFilterSchema;
