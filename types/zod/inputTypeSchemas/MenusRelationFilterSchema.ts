import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereInputSchema } from './menusWhereInputSchema';

export const MenusRelationFilterSchema: z.ZodType<Prisma.MenusRelationFilter> = z.object({
  is: z.lazy(() => menusWhereInputSchema).optional(),
  isNot: z.lazy(() => menusWhereInputSchema).optional()
}).strict();

export default MenusRelationFilterSchema;
