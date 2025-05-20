import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const driver_history_locationsScalarWhereInputSchema: z.ZodType<Prisma.driver_history_locationsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => driver_history_locationsScalarWhereInputSchema),z.lazy(() => driver_history_locationsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => driver_history_locationsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => driver_history_locationsScalarWhereInputSchema),z.lazy(() => driver_history_locationsScalarWhereInputSchema).array() ]).optional(),
  driver_history_location_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  driver_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  taxi_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  delivery_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.lazy(() => JsonNullableFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default driver_history_locationsScalarWhereInputSchema;
