import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const daily_meals_subscriptionsScalarWhereInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema),z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema),z.lazy(() => daily_meals_subscriptionsScalarWhereInputSchema).array() ]).optional(),
  daily_meals_subscriptions_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  grouped_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  menu_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  address_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  menu_categories_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  order_created: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  restaurant_comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  courier_comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default daily_meals_subscriptionsScalarWhereInputSchema;
