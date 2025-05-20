import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const menusCreateManyInputSchema: z.ZodType<Prisma.menusCreateManyInput> = z.object({
  menu_id: z.string().uuid().optional(),
  business_id: z.string(),
  active: z.boolean().optional(),
  menu_categories_ordered: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isDailyMeal: z.boolean().optional(),
  date: z.coerce.date().optional().nullable()
}).strict();

export default menusCreateManyInputSchema;
