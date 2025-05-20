import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const vehicle_driversScalarWhereInputSchema: z.ZodType<Prisma.vehicle_driversScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => vehicle_driversScalarWhereInputSchema),z.lazy(() => vehicle_driversScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => vehicle_driversScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => vehicle_driversScalarWhereInputSchema),z.lazy(() => vehicle_driversScalarWhereInputSchema).array() ]).optional(),
  vehicle_drivers_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  vehicle_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  driver_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  can_drive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default vehicle_driversScalarWhereInputSchema;
