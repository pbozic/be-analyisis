import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"

export const driver_activity_logsSelectSchema: z.ZodType<Prisma.driver_activity_logsSelect> = z.object({
  driver_activity_log_id: z.boolean().optional(),
  driver_id: z.boolean().optional(),
  activity_type: z.boolean().optional(),
  started_at: z.boolean().optional(),
  ended_at: z.boolean().optional(),
  timeout_at: z.boolean().optional(),
  lockout_until: z.boolean().optional(),
  driver: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
}).strict()

export default driver_activity_logsSelectSchema;
