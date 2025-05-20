import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { menu_categoriesUpdatecategoriesInputSchema } from './menu_categoriesUpdatecategoriesInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { menusUpdateOneWithoutCategoriesNestedInputSchema } from './menusUpdateOneWithoutCategoriesNestedInputSchema';
import { menu_categories_categoriesUpdateManyWithoutMenu_categoryNestedInputSchema } from './menu_categories_categoriesUpdateManyWithoutMenu_categoryNestedInputSchema';
import { daily_meals_subscriptionsUpdateManyWithoutMenu_categoryNestedInputSchema } from './daily_meals_subscriptionsUpdateManyWithoutMenu_categoryNestedInputSchema';

export const menu_categoriesUpdateWithoutMenu_itemsInputSchema: z.ZodType<Prisma.menu_categoriesUpdateWithoutMenu_itemsInput> = z.object({
  menu_category_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  names: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  description: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  categories: z.union([ z.lazy(() => menu_categoriesUpdatecategoriesInputSchema),z.string().array() ]).optional(),
  business_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  menu_items_ordered: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  menu_order_index: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  menu: z.lazy(() => menusUpdateOneWithoutCategoriesNestedInputSchema).optional(),
  menu_categories_categories: z.lazy(() => menu_categories_categoriesUpdateManyWithoutMenu_categoryNestedInputSchema).optional(),
  daily_meal_subscribers: z.lazy(() => daily_meals_subscriptionsUpdateManyWithoutMenu_categoryNestedInputSchema).optional()
}).strict();

export default menu_categoriesUpdateWithoutMenu_itemsInputSchema;
