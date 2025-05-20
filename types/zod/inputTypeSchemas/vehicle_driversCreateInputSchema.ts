import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateNestedOneWithoutDriversInputSchema } from './vehiclesCreateNestedOneWithoutDriversInputSchema';
import { driversCreateNestedOneWithoutVehiclesInputSchema } from './driversCreateNestedOneWithoutVehiclesInputSchema';

export const vehicle_driversCreateInputSchema: z.ZodType<Prisma.vehicle_driversCreateInput> = z.object({
  vehicle_drivers_id: z.string().uuid().optional(),
  can_drive: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  vehicle: z.lazy(() => vehiclesCreateNestedOneWithoutDriversInputSchema),
  driver: z.lazy(() => driversCreateNestedOneWithoutVehiclesInputSchema)
}).strict();

export default vehicle_driversCreateInputSchema;
