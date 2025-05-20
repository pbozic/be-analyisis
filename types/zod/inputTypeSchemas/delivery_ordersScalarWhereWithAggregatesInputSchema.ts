import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { EnumDELIVERY_ORDER_STATUSWithAggregatesFilterSchema } from './EnumDELIVERY_ORDER_STATUSWithAggregatesFilterSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const delivery_ordersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.delivery_ordersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => delivery_ordersScalarWhereWithAggregatesInputSchema),z.lazy(() => delivery_ordersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => delivery_ordersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => delivery_ordersScalarWhereWithAggregatesInputSchema),z.lazy(() => delivery_ordersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  route: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  pickup_location: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  delivery_location: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  payment: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  estimates: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  items: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  details: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  courier_instructions: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  restaurant_message: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  scheduled: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  timeline: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumDELIVERY_ORDER_STATUSWithAggregatesFilterSchema),z.lazy(() => DELIVERY_ORDER_STATUSSchema) ]).optional(),
  last_sent_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  vehicle_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  delivery_driver_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  driver_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  business_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  payment_intent_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  find_drivers_attempts: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  is_daily_meal: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  flags: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  allow_credits_usage: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  order_number: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default delivery_ordersScalarWhereWithAggregatesInputSchema;
