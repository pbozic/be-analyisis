import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { EnumTAXI_ORDER_STATUSWithAggregatesFilterSchema } from './EnumTAXI_ORDER_STATUSWithAggregatesFilterSchema';
import { TAXI_ORDER_STATUSSchema } from './TAXI_ORDER_STATUSSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { EnumORDER_TYPEWithAggregatesFilterSchema } from './EnumORDER_TYPEWithAggregatesFilterSchema';
import { ORDER_TYPESchema } from './ORDER_TYPESchema';
import { EnumORDER_SUBTYPEWithAggregatesFilterSchema } from './EnumORDER_SUBTYPEWithAggregatesFilterSchema';
import { ORDER_SUBTYPESchema } from './ORDER_SUBTYPESchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const taxi_ordersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.taxi_ordersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => taxi_ordersScalarWhereWithAggregatesInputSchema),z.lazy(() => taxi_ordersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => taxi_ordersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => taxi_ordersScalarWhereWithAggregatesInputSchema),z.lazy(() => taxi_ordersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  business_users_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  business_clients_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  driver_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  vehicle_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  route: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  pickup_location: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  delivery_location: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  payment: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  estimates: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  timeline: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  status: z.union([ z.lazy(() => EnumTAXI_ORDER_STATUSWithAggregatesFilterSchema),z.lazy(() => TAXI_ORDER_STATUSSchema) ]).optional(),
  last_sent_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  telephone: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  first_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  last_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  cancellation_reason: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  find_drivers_attempts: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  is_scheduled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  parent_order_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumORDER_TYPEWithAggregatesFilterSchema),z.lazy(() => ORDER_TYPESchema) ]).optional(),
  subtype: z.union([ z.lazy(() => EnumORDER_SUBTYPEWithAggregatesFilterSchema),z.lazy(() => ORDER_SUBTYPESchema) ]).optional(),
  flags: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  cargo_preferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  customer_note: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  parent_user_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  creating_user_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  allow_credits_usage: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  order_number: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default taxi_ordersScalarWhereWithAggregatesInputSchema;
