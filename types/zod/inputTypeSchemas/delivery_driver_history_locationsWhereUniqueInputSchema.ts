import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsWhereInputSchema } from './delivery_driver_history_locationsWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumDELIVERY_ORDER_STATUSNullableFilterSchema } from './EnumDELIVERY_ORDER_STATUSNullableFilterSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Delivery_driversNullableRelationFilterSchema } from './Delivery_driversNullableRelationFilterSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { Delivery_ordersNullableRelationFilterSchema } from './Delivery_ordersNullableRelationFilterSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const delivery_driver_history_locationsWhereUniqueInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsWhereUniqueInput> = z.object({
  delivery_driver_history_location_id: z.string().uuid()
})
.and(z.object({
  delivery_driver_history_location_id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => delivery_driver_history_locationsWhereInputSchema),z.lazy(() => delivery_driver_history_locationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => delivery_driver_history_locationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => delivery_driver_history_locationsWhereInputSchema),z.lazy(() => delivery_driver_history_locationsWhereInputSchema).array() ]).optional(),
  delivery_driver_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumDELIVERY_ORDER_STATUSNullableFilterSchema),z.lazy(() => DELIVERY_ORDER_STATUSSchema) ]).optional().nullable(),
  location: z.lazy(() => JsonNullableFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  delivery_driver: z.union([ z.lazy(() => Delivery_driversNullableRelationFilterSchema),z.lazy(() => delivery_driversWhereInputSchema) ]).optional().nullable(),
  order: z.union([ z.lazy(() => Delivery_ordersNullableRelationFilterSchema),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional().nullable(),
}).strict());

export default delivery_driver_history_locationsWhereUniqueInputSchema;
