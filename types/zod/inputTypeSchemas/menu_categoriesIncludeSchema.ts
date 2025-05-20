import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_itemsFindManyArgsSchema } from "../outputTypeSchemas/menu_itemsFindManyArgsSchema"
import { menusArgsSchema } from "../outputTypeSchemas/menusArgsSchema"
import { menu_categories_categoriesFindManyArgsSchema } from "../outputTypeSchemas/menu_categories_categoriesFindManyArgsSchema"
import { daily_meals_subscriptionsFindManyArgsSchema } from "../outputTypeSchemas/daily_meals_subscriptionsFindManyArgsSchema"
import { Menu_categoriesCountOutputTypeArgsSchema } from "../outputTypeSchemas/Menu_categoriesCountOutputTypeArgsSchema"

export const menu_categoriesIncludeSchema: z.ZodType<Prisma.menu_categoriesInclude> = z.object({
  menu_items: z.union([z.boolean(),z.lazy(() => menu_itemsFindManyArgsSchema)]).optional(),
  menu: z.union([z.boolean(),z.lazy(() => menusArgsSchema)]).optional(),
  menu_categories_categories: z.union([z.boolean(),z.lazy(() => menu_categories_categoriesFindManyArgsSchema)]).optional(),
  daily_meal_subscribers: z.union([z.boolean(),z.lazy(() => daily_meals_subscriptionsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Menu_categoriesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default menu_categoriesIncludeSchema;
