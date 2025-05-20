import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { vehiclesUncheckedCreateNestedOneWithoutVehicle_specificationInputSchema } from './vehiclesUncheckedCreateNestedOneWithoutVehicle_specificationInputSchema';

export const vehicle_specificationsUncheckedCreateInputSchema: z.ZodType<Prisma.vehicle_specificationsUncheckedCreateInput> = z.object({
  vehicle_specification_id: z.string().uuid().optional(),
  class: z.lazy(() => VEHICLE_CLASSSchema),
  category: z.lazy(() => VEHICLE_CATEGORYSchema),
  people: z.string(),
  start_cost: z.string(),
  per_kilometre: z.string(),
  per_minute: z.string(),
  vehicle_id: z.string().optional().nullable(),
  vehicle: z.lazy(() => vehiclesUncheckedCreateNestedOneWithoutVehicle_specificationInputSchema).optional()
}).strict();

export default vehicle_specificationsUncheckedCreateInputSchema;
