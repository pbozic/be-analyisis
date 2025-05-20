import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesCountOutputTypeSelectSchema } from './menu_categoriesCountOutputTypeSelectSchema';

export const menu_categoriesCountOutputTypeArgsSchema: z.ZodType<Prisma.menu_categoriesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => menu_categoriesCountOutputTypeSelectSchema).nullish(),
}).strict();

export default menu_categoriesCountOutputTypeSelectSchema;
