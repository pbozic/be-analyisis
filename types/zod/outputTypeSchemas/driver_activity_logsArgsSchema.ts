import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_activity_logsSelectSchema } from '../inputTypeSchemas/driver_activity_logsSelectSchema';
import { driver_activity_logsIncludeSchema } from '../inputTypeSchemas/driver_activity_logsIncludeSchema';

export const driver_activity_logsArgsSchema: z.ZodType<Prisma.driver_activity_logsDefaultArgs> = z.object({
  select: z.lazy(() => driver_activity_logsSelectSchema).optional(),
  include: z.lazy(() => driver_activity_logsIncludeSchema).optional(),
}).strict();

export default driver_activity_logsArgsSchema;
