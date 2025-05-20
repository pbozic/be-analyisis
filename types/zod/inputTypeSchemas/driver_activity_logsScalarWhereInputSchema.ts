import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumACTIVITY_TYPEFilterSchema } from './EnumACTIVITY_TYPEFilterSchema';
import { ACTIVITY_TYPESchema } from './ACTIVITY_TYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const driver_activity_logsScalarWhereInputSchema: z.ZodType<Prisma.driver_activity_logsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => driver_activity_logsScalarWhereInputSchema),z.lazy(() => driver_activity_logsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => driver_activity_logsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => driver_activity_logsScalarWhereInputSchema),z.lazy(() => driver_activity_logsScalarWhereInputSchema).array() ]).optional(),
  driver_activity_log_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  driver_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  activity_type: z.union([ z.lazy(() => EnumACTIVITY_TYPEFilterSchema),z.lazy(() => ACTIVITY_TYPESchema) ]).optional(),
  started_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ended_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeout_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lockout_until: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default driver_activity_logsScalarWhereInputSchema;
