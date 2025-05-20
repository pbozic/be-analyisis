import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsWhereInputSchema } from './menu_itemsWhereInputSchema';

export const Menu_itemsListRelationFilterSchema: z.ZodType<Prisma.Menu_itemsListRelationFilter> = z.object({
  every: z.lazy(() => menu_itemsWhereInputSchema).optional(),
  some: z.lazy(() => menu_itemsWhereInputSchema).optional(),
  none: z.lazy(() => menu_itemsWhereInputSchema).optional()
}).strict();

export default Menu_itemsListRelationFilterSchema;
