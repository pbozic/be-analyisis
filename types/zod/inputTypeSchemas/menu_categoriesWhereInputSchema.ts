import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { Menu_itemsListRelationFilterSchema } from './Menu_itemsListRelationFilterSchema';
import { MenusNullableRelationFilterSchema } from './MenusNullableRelationFilterSchema';
import { menusWhereInputSchema } from './menusWhereInputSchema';
import { Menu_categories_categoriesListRelationFilterSchema } from './Menu_categories_categoriesListRelationFilterSchema';
import { Daily_meals_subscriptionsListRelationFilterSchema } from './Daily_meals_subscriptionsListRelationFilterSchema';

export const menu_categoriesWhereInputSchema: z.ZodType<Prisma.menu_categoriesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => menu_categoriesWhereInputSchema),z.lazy(() => menu_categoriesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => menu_categoriesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => menu_categoriesWhereInputSchema),z.lazy(() => menu_categoriesWhereInputSchema).array() ]).optional(),
  menu_category_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  names: z.lazy(() => JsonNullableFilterSchema).optional(),
  description: z.lazy(() => JsonNullableFilterSchema).optional(),
  categories: z.lazy(() => StringNullableListFilterSchema).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  menu_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  order: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  menu_items_ordered: z.lazy(() => JsonNullableFilterSchema).optional(),
  menu_order_index: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  menu_items: z.lazy(() => Menu_itemsListRelationFilterSchema).optional(),
  menu: z.union([ z.lazy(() => MenusNullableRelationFilterSchema),z.lazy(() => menusWhereInputSchema) ]).optional().nullable(),
  menu_categories_categories: z.lazy(() => Menu_categories_categoriesListRelationFilterSchema).optional(),
  daily_meal_subscribers: z.lazy(() => Daily_meals_subscriptionsListRelationFilterSchema).optional()
}).strict();

export default menu_categoriesWhereInputSchema;
