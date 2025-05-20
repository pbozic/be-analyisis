import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_itemsSelectSchema } from '../inputTypeSchemas/menu_itemsSelectSchema';
import { menu_itemsIncludeSchema } from '../inputTypeSchemas/menu_itemsIncludeSchema';

export const menu_itemsArgsSchema: z.ZodType<Prisma.menu_itemsDefaultArgs> = z.object({
  select: z.lazy(() => menu_itemsSelectSchema).optional(),
  include: z.lazy(() => menu_itemsIncludeSchema).optional(),
}).strict();

export default menu_itemsArgsSchema;
