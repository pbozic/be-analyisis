import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateManyWithoutMenuNestedInputSchema } from './daily_meals_subscriptionsUncheckedUpdateManyWithoutMenuNestedInputSchema';

export const menusUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.menusUncheckedUpdateWithoutCategoriesInput> = z.object({
  menu_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  business_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  menu_categories_ordered: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isDailyMeal: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  daily_meal_subscribers: z.lazy(() => daily_meals_subscriptionsUncheckedUpdateManyWithoutMenuNestedInputSchema).optional()
}).strict();

export default menusUncheckedUpdateWithoutCategoriesInputSchema;
