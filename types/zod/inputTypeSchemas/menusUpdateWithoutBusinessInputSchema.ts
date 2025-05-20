import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { menu_categoriesUpdateManyWithoutMenuNestedInputSchema } from './menu_categoriesUpdateManyWithoutMenuNestedInputSchema';
import { daily_meals_subscriptionsUpdateManyWithoutMenuNestedInputSchema } from './daily_meals_subscriptionsUpdateManyWithoutMenuNestedInputSchema';

export const menusUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.menusUpdateWithoutBusinessInput> = z.object({
  menu_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  menu_categories_ordered: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isDailyMeal: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => menu_categoriesUpdateManyWithoutMenuNestedInputSchema).optional(),
  daily_meal_subscribers: z.lazy(() => daily_meals_subscriptionsUpdateManyWithoutMenuNestedInputSchema).optional()
}).strict();

export default menusUpdateWithoutBusinessInputSchema;
