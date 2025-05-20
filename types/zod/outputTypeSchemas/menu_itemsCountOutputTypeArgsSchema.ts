import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_itemsCountOutputTypeSelectSchema } from './menu_itemsCountOutputTypeSelectSchema';

export const menu_itemsCountOutputTypeArgsSchema: z.ZodType<Prisma.menu_itemsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => menu_itemsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default menu_itemsCountOutputTypeSelectSchema;
