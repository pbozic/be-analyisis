import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACTIVITY_TYPESchema } from './ACTIVITY_TYPESchema';
import { driversCreateNestedOneWithoutActivity_logsInputSchema } from './driversCreateNestedOneWithoutActivity_logsInputSchema';

export const driver_activity_logsCreateInputSchema: z.ZodType<Prisma.driver_activity_logsCreateInput> = z.object({
  driver_activity_log_id: z.string().uuid().optional(),
  activity_type: z.lazy(() => ACTIVITY_TYPESchema),
  started_at: z.coerce.date().optional(),
  ended_at: z.coerce.date().optional().nullable(),
  timeout_at: z.coerce.date().optional().nullable(),
  lockout_until: z.coerce.date().optional().nullable(),
  driver: z.lazy(() => driversCreateNestedOneWithoutActivity_logsInputSchema)
}).strict();

export default driver_activity_logsCreateInputSchema;
