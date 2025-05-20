import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { EnumDELIVERY_ORDER_STATUSFilterSchema } from './EnumDELIVERY_ORDER_STATUSFilterSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const delivery_ordersScalarWhereInputSchema: z.ZodType<Prisma.delivery_ordersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => delivery_ordersScalarWhereInputSchema),z.lazy(() => delivery_ordersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => delivery_ordersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => delivery_ordersScalarWhereInputSchema),z.lazy(() => delivery_ordersScalarWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  route: z.lazy(() => JsonFilterSchema).optional(),
  pickup_location: z.lazy(() => JsonFilterSchema).optional(),
  delivery_location: z.lazy(() => JsonFilterSchema).optional(),
  payment: z.lazy(() => JsonNullableFilterSchema).optional(),
  estimates: z.lazy(() => JsonNullableFilterSchema).optional(),
  items: z.lazy(() => JsonFilterSchema).optional(),
  details: z.lazy(() => JsonNullableFilterSchema).optional(),
  courier_instructions: z.lazy(() => JsonNullableFilterSchema).optional(),
  restaurant_message: z.lazy(() => JsonNullableFilterSchema).optional(),
  scheduled: z.lazy(() => JsonNullableFilterSchema).optional(),
  timeline: z.lazy(() => JsonFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumDELIVERY_ORDER_STATUSFilterSchema),z.lazy(() => DELIVERY_ORDER_STATUSSchema) ]).optional(),
  last_sent_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  vehicle_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  delivery_driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  payment_intent_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  find_drivers_attempts: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  is_daily_meal: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  flags: z.lazy(() => JsonNullableFilterSchema).optional(),
  allow_credits_usage: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  order_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default delivery_ordersScalarWhereInputSchema;
