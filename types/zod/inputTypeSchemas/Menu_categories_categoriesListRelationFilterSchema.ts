import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesWhereInputSchema } from './menu_categories_categoriesWhereInputSchema';

export const Menu_categories_categoriesListRelationFilterSchema: z.ZodType<Prisma.Menu_categories_categoriesListRelationFilter> = z.object({
  every: z.lazy(() => menu_categories_categoriesWhereInputSchema).optional(),
  some: z.lazy(() => menu_categories_categoriesWhereInputSchema).optional(),
  none: z.lazy(() => menu_categories_categoriesWhereInputSchema).optional()
}).strict();

export default Menu_categories_categoriesListRelationFilterSchema;
