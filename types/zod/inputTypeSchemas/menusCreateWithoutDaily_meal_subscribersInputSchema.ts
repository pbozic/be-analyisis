import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { businessCreateNestedOneWithoutMenusInputSchema } from './businessCreateNestedOneWithoutMenusInputSchema';
import { menu_categoriesCreateNestedManyWithoutMenuInputSchema } from './menu_categoriesCreateNestedManyWithoutMenuInputSchema';

export const menusCreateWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menusCreateWithoutDaily_meal_subscribersInput> = z.object({
  menu_id: z.string().uuid().optional(),
  active: z.boolean().optional(),
  menu_categories_ordered: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isDailyMeal: z.boolean().optional(),
  date: z.coerce.date().optional().nullable(),
  business: z.lazy(() => businessCreateNestedOneWithoutMenusInputSchema),
  categories: z.lazy(() => menu_categoriesCreateNestedManyWithoutMenuInputSchema).optional()
}).strict();

export default menusCreateWithoutDaily_meal_subscribersInputSchema;
