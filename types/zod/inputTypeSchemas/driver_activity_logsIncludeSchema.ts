import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"

export const driver_activity_logsIncludeSchema: z.ZodType<Prisma.driver_activity_logsInclude> = z.object({
  driver: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
}).strict()

export default driver_activity_logsIncludeSchema;
