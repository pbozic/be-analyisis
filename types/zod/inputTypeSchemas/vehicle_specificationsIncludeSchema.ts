import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesArgsSchema } from "../outputTypeSchemas/vehiclesArgsSchema"

export const vehicle_specificationsIncludeSchema: z.ZodType<Prisma.vehicle_specificationsInclude> = z.object({
  vehicle: z.union([z.boolean(),z.lazy(() => vehiclesArgsSchema)]).optional(),
}).strict()

export default vehicle_specificationsIncludeSchema;
