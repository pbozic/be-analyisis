import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_logsIncludeSchema } from '../inputTypeSchemas/driver_activity_logsIncludeSchema'
import { driver_activity_logsWhereUniqueInputSchema } from '../inputTypeSchemas/driver_activity_logsWhereUniqueInputSchema'
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const driver_activity_logsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.driver_activity_logsFindUniqueOrThrowArgs> = z.object({
  select: driver_activity_logsSelectSchema.optional(),
  include: driver_activity_logsIncludeSchema.optional(),
  where: driver_activity_logsWhereUniqueInputSchema,
}).strict() ;

export default driver_activity_logsFindUniqueOrThrowArgsSchema;
