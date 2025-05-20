import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';

export const Menu_categoriesRelationFilterSchema: z.ZodType<Prisma.Menu_categoriesRelationFilter> = z.object({
  is: z.lazy(() => menu_categoriesWhereInputSchema).optional(),
  isNot: z.lazy(() => menu_categoriesWhereInputSchema).optional()
}).strict();

export default Menu_categoriesRelationFilterSchema;
