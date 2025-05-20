import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ACTIVITY_TYPESchema } from './ACTIVITY_TYPESchema';

export const driver_activity_logsCreateManyInputSchema: z.ZodType<Prisma.driver_activity_logsCreateManyInput> = z.object({
  driver_activity_log_id: z.string().uuid().optional(),
  driver_id: z.string(),
  activity_type: z.lazy(() => ACTIVITY_TYPESchema),
  started_at: z.coerce.date().optional(),
  ended_at: z.coerce.date().optional().nullable(),
  timeout_at: z.coerce.date().optional().nullable(),
  lockout_until: z.coerce.date().optional().nullable()
}).strict();

export default driver_activity_logsCreateManyInputSchema;
