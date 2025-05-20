import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesArgsSchema } from "../outputTypeSchemas/menu_categoriesArgsSchema"
import { documentsFindManyArgsSchema } from "../outputTypeSchemas/documentsFindManyArgsSchema"
import { Menu_itemsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Menu_itemsCountOutputTypeArgsSchema"

export const menu_itemsIncludeSchema: z.ZodType<Prisma.menu_itemsInclude> = z.object({
  menu_category: z.union([z.boolean(),z.lazy(() => menu_categoriesArgsSchema)]).optional(),
  documents: z.union([z.boolean(),z.lazy(() => documentsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Menu_itemsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default menu_itemsIncludeSchema;
