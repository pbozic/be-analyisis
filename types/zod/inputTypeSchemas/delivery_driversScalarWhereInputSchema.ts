import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';

export const delivery_driversScalarWhereInputSchema: z.ZodType<Prisma.delivery_driversScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => delivery_driversScalarWhereInputSchema),z.lazy(() => delivery_driversScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => delivery_driversScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => delivery_driversScalarWhereInputSchema),z.lazy(() => delivery_driversScalarWhereInputSchema).array() ]).optional(),
  delivery_driver_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  online: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  on_order: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  delivers_daily_meals: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  working_hours: z.lazy(() => JsonNullableFilterSchema).optional(),
  business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.lazy(() => JsonNullableFilterSchema).optional(),
  delivery_timeline: z.lazy(() => JsonNullableFilterSchema).optional(),
  last_ping_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  on_daily_meals: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  is_inactive: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  scheduled_meals_route: z.lazy(() => JsonNullableFilterSchema).optional(),
  regions: z.lazy(() => StringNullableListFilterSchema).optional(),
  partner_cash_balance: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  daily_meal_business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default delivery_driversScalarWhereInputSchema;
