import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesArgsSchema } from "../outputTypeSchemas/menu_categoriesArgsSchema"
import { documentsFindManyArgsSchema } from "../outputTypeSchemas/documentsFindManyArgsSchema"
import { Menu_itemsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Menu_itemsCountOutputTypeArgsSchema"

export const menu_itemsSelectSchema: z.ZodType<Prisma.menu_itemsSelect> = z.object({
  menu_item_id: z.boolean().optional(),
  names: z.boolean().optional(),
  image: z.boolean().optional(),
  description: z.boolean().optional(),
  allergens: z.boolean().optional(),
  spicy_level: z.boolean().optional(),
  unit_size: z.boolean().optional(),
  price: z.boolean().optional(),
  discount: z.boolean().optional(),
  sides: z.boolean().optional(),
  extras: z.boolean().optional(),
  ingredients: z.boolean().optional(),
  availability: z.boolean().optional(),
  business_id: z.boolean().optional(),
  menu_category_id: z.boolean().optional(),
  daily_date: z.boolean().optional(),
  is_enabled: z.boolean().optional(),
  menu_category_order_index: z.boolean().optional(),
  menu_category: z.union([z.boolean(),z.lazy(() => menu_categoriesArgsSchema)]).optional(),
  documents: z.union([z.boolean(),z.lazy(() => documentsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Menu_itemsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default menu_itemsSelectSchema;
