import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesArgsSchema } from "../outputTypeSchemas/vehiclesArgsSchema"
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"

export const vehicle_driversIncludeSchema: z.ZodType<Prisma.vehicle_driversInclude> = z.object({
  vehicle: z.union([z.boolean(),z.lazy(() => vehiclesArgsSchema)]).optional(),
  driver: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
}).strict()

export default vehicle_driversIncludeSchema;
