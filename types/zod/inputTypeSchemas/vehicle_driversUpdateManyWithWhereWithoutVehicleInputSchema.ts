import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversScalarWhereInputSchema } from './vehicle_driversScalarWhereInputSchema';
import { vehicle_driversUpdateManyMutationInputSchema } from './vehicle_driversUpdateManyMutationInputSchema';
import { vehicle_driversUncheckedUpdateManyWithoutVehicleInputSchema } from './vehicle_driversUncheckedUpdateManyWithoutVehicleInputSchema';

export const vehicle_driversUpdateManyWithWhereWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_driversUpdateManyWithWhereWithoutVehicleInput> = z.object({
  where: z.lazy(() => vehicle_driversScalarWhereInputSchema),
  data: z.union([ z.lazy(() => vehicle_driversUpdateManyMutationInputSchema),z.lazy(() => vehicle_driversUncheckedUpdateManyWithoutVehicleInputSchema) ]),
}).strict();

export default vehicle_driversUpdateManyWithWhereWithoutVehicleInputSchema;
