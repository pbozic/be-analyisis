import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';

export const delivery_driversScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.delivery_driversScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => delivery_driversScalarWhereWithAggregatesInputSchema),z.lazy(() => delivery_driversScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => delivery_driversScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => delivery_driversScalarWhereWithAggregatesInputSchema),z.lazy(() => delivery_driversScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  delivery_driver_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  online: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  on_order: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  delivers_daily_meals: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  working_hours: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  business_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  delivery_timeline: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  last_ping_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  on_daily_meals: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  is_inactive: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  scheduled_meals_route: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  regions: z.lazy(() => StringNullableListFilterSchema).optional(),
  partner_cash_balance: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  daily_meal_business_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default delivery_driversScalarWhereWithAggregatesInputSchema;
