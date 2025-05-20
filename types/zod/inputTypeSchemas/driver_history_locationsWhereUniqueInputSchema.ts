import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsWhereInputSchema } from './driver_history_locationsWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DriversNullableRelationFilterSchema } from './DriversNullableRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { Taxi_ordersNullableRelationFilterSchema } from './Taxi_ordersNullableRelationFilterSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { Delivery_ordersNullableRelationFilterSchema } from './Delivery_ordersNullableRelationFilterSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const driver_history_locationsWhereUniqueInputSchema: z.ZodType<Prisma.driver_history_locationsWhereUniqueInput> = z.object({
  driver_history_location_id: z.string().uuid()
})
.and(z.object({
  driver_history_location_id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => driver_history_locationsWhereInputSchema),z.lazy(() => driver_history_locationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => driver_history_locationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => driver_history_locationsWhereInputSchema),z.lazy(() => driver_history_locationsWhereInputSchema).array() ]).optional(),
  driver_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  taxi_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  delivery_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.lazy(() => JsonNullableFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  driver: z.union([ z.lazy(() => DriversNullableRelationFilterSchema),z.lazy(() => driversWhereInputSchema) ]).optional().nullable(),
  order: z.union([ z.lazy(() => Taxi_ordersNullableRelationFilterSchema),z.lazy(() => taxi_ordersWhereInputSchema) ]).optional().nullable(),
  delivery_order: z.union([ z.lazy(() => Delivery_ordersNullableRelationFilterSchema),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional().nullable(),
}).strict());

export default driver_history_locationsWhereUniqueInputSchema;
