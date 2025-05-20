import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { EnumDELIVERY_ORDER_STATUSNullableWithAggregatesFilterSchema } from './EnumDELIVERY_ORDER_STATUSNullableWithAggregatesFilterSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const delivery_driver_history_locationsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => delivery_driver_history_locationsScalarWhereWithAggregatesInputSchema),z.lazy(() => delivery_driver_history_locationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => delivery_driver_history_locationsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => delivery_driver_history_locationsScalarWhereWithAggregatesInputSchema),z.lazy(() => delivery_driver_history_locationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  delivery_driver_history_location_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  delivery_driver_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumDELIVERY_ORDER_STATUSNullableWithAggregatesFilterSchema),z.lazy(() => DELIVERY_ORDER_STATUSSchema) ]).optional().nullable(),
  location: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default delivery_driver_history_locationsScalarWhereWithAggregatesInputSchema;
