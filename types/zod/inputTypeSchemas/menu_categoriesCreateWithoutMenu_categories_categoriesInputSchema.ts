import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { menu_categoriesCreatecategoriesInputSchema } from './menu_categoriesCreatecategoriesInputSchema';
import { menu_itemsCreateNestedManyWithoutMenu_categoryInputSchema } from './menu_itemsCreateNestedManyWithoutMenu_categoryInputSchema';
import { menusCreateNestedOneWithoutCategoriesInputSchema } from './menusCreateNestedOneWithoutCategoriesInputSchema';
import { daily_meals_subscriptionsCreateNestedManyWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsCreateNestedManyWithoutMenu_categoryInputSchema';

export const menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema: z.ZodType<Prisma.menu_categoriesCreateWithoutMenu_categories_categoriesInput> = z.object({
  menu_category_id: z.string().uuid().optional(),
  names: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  description: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  categories: z.union([ z.lazy(() => menu_categoriesCreatecategoriesInputSchema),z.string().array() ]).optional(),
  business_id: z.string(),
  order: z.number().int().optional().nullable(),
  price: z.number().optional().nullable(),
  menu_items_ordered: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  menu_order_index: z.number().int().optional().nullable(),
  menu_items: z.lazy(() => menu_itemsCreateNestedManyWithoutMenu_categoryInputSchema).optional(),
  menu: z.lazy(() => menusCreateNestedOneWithoutCategoriesInputSchema).optional(),
  daily_meal_subscribers: z.lazy(() => daily_meals_subscriptionsCreateNestedManyWithoutMenu_categoryInputSchema).optional()
}).strict();

export default menu_categoriesCreateWithoutMenu_categories_categoriesInputSchema;
