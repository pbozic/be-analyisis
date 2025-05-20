import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';

export const menu_categories_categoriesScalarWhereInputSchema: z.ZodType<Prisma.menu_categories_categoriesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => menu_categories_categoriesScalarWhereInputSchema),z.lazy(() => menu_categories_categoriesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => menu_categories_categoriesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => menu_categories_categoriesScalarWhereInputSchema),z.lazy(() => menu_categories_categoriesScalarWhereInputSchema).array() ]).optional(),
  menu_categories_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  categories_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export default menu_categories_categoriesScalarWhereInputSchema;
