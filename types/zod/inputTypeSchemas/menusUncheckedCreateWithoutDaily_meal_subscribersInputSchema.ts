import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { menu_categoriesUncheckedCreateNestedManyWithoutMenuInputSchema } from './menu_categoriesUncheckedCreateNestedManyWithoutMenuInputSchema';

export const menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menusUncheckedCreateWithoutDaily_meal_subscribersInput> = z.object({
  menu_id: z.string().uuid().optional(),
  business_id: z.string(),
  active: z.boolean().optional(),
  menu_categories_ordered: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isDailyMeal: z.boolean().optional(),
  date: z.coerce.date().optional().nullable(),
  categories: z.lazy(() => menu_categoriesUncheckedCreateNestedManyWithoutMenuInputSchema).optional()
}).strict();

export default menusUncheckedCreateWithoutDaily_meal_subscribersInputSchema;
