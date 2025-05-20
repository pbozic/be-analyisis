import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesArgsSchema } from "../outputTypeSchemas/vehiclesArgsSchema"
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"

export const vehicle_driversSelectSchema: z.ZodType<Prisma.vehicle_driversSelect> = z.object({
  vehicle_drivers_id: z.boolean().optional(),
  vehicle_id: z.boolean().optional(),
  driver_id: z.boolean().optional(),
  can_drive: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  vehicle: z.union([z.boolean(),z.lazy(() => vehiclesArgsSchema)]).optional(),
  driver: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
}).strict()

export default vehicle_driversSelectSchema;
