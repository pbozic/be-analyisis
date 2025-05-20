import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { businessCreateNestedOneWithoutMenusInputSchema } from './businessCreateNestedOneWithoutMenusInputSchema';
import { menu_categoriesCreateNestedManyWithoutMenuInputSchema } from './menu_categoriesCreateNestedManyWithoutMenuInputSchema';
import { daily_meals_subscriptionsCreateNestedManyWithoutMenuInputSchema } from './daily_meals_subscriptionsCreateNestedManyWithoutMenuInputSchema';

export const menusCreateInputSchema: z.ZodType<Prisma.menusCreateInput> = z.object({
  menu_id: z.string().uuid().optional(),
  active: z.boolean().optional(),
  menu_categories_ordered: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isDailyMeal: z.boolean().optional(),
  date: z.coerce.date().optional().nullable(),
  business: z.lazy(() => businessCreateNestedOneWithoutMenusInputSchema),
  categories: z.lazy(() => menu_categoriesCreateNestedManyWithoutMenuInputSchema).optional(),
  daily_meal_subscribers: z.lazy(() => daily_meals_subscriptionsCreateNestedManyWithoutMenuInputSchema).optional()
}).strict();

export default menusCreateInputSchema;
