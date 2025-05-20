import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';

export const Menu_categoriesListRelationFilterSchema: z.ZodType<Prisma.Menu_categoriesListRelationFilter> = z.object({
  every: z.lazy(() => menu_categoriesWhereInputSchema).optional(),
  some: z.lazy(() => menu_categoriesWhereInputSchema).optional(),
  none: z.lazy(() => menu_categoriesWhereInputSchema).optional()
}).strict();

export default Menu_categoriesListRelationFilterSchema;
