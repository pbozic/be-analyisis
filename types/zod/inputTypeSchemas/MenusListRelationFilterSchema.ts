import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereInputSchema } from './menusWhereInputSchema';

export const MenusListRelationFilterSchema: z.ZodType<Prisma.MenusListRelationFilter> = z.object({
  every: z.lazy(() => menusWhereInputSchema).optional(),
  some: z.lazy(() => menusWhereInputSchema).optional(),
  none: z.lazy(() => menusWhereInputSchema).optional()
}).strict();

export default MenusListRelationFilterSchema;
