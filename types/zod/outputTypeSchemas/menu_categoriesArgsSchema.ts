import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesSelectSchema } from '../inputTypeSchemas/menu_categoriesSelectSchema';
import { menu_categoriesIncludeSchema } from '../inputTypeSchemas/menu_categoriesIncludeSchema';

export const menu_categoriesArgsSchema: z.ZodType<Prisma.menu_categoriesDefaultArgs> = z.object({
  select: z.lazy(() => menu_categoriesSelectSchema).optional(),
  include: z.lazy(() => menu_categoriesIncludeSchema).optional(),
}).strict();

export default menu_categoriesArgsSchema;
