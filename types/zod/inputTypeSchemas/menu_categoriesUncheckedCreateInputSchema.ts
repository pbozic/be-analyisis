import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { menu_categoriesCreatecategoriesInputSchema } from './menu_categoriesCreatecategoriesInputSchema';
import { menu_itemsUncheckedCreateNestedManyWithoutMenu_categoryInputSchema } from './menu_itemsUncheckedCreateNestedManyWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesUncheckedCreateNestedManyWithoutMenu_categoryInputSchema } from './menu_categories_categoriesUncheckedCreateNestedManyWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenu_categoryInputSchema';

export const menu_categoriesUncheckedCreateInputSchema: z.ZodType<Prisma.menu_categoriesUncheckedCreateInput> = z.object({
  menu_category_id: z.string().uuid().optional(),
  names: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  description: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  categories: z.union([ z.lazy(() => menu_categoriesCreatecategoriesInputSchema),z.string().array() ]).optional(),
  business_id: z.string(),
  menu_id: z.string().optional().nullable(),
  order: z.number().int().optional().nullable(),
  price: z.number().optional().nullable(),
  menu_items_ordered: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  menu_order_index: z.number().int().optional().nullable(),
  menu_items: z.lazy(() => menu_itemsUncheckedCreateNestedManyWithoutMenu_categoryInputSchema).optional(),
  menu_categories_categories: z.lazy(() => menu_categories_categoriesUncheckedCreateNestedManyWithoutMenu_categoryInputSchema).optional(),
  daily_meal_subscribers: z.lazy(() => daily_meals_subscriptionsUncheckedCreateNestedManyWithoutMenu_categoryInputSchema).optional()
}).strict();

export default menu_categoriesUncheckedCreateInputSchema;
