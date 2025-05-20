import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversWhereUniqueInputSchema } from './vehicle_driversWhereUniqueInputSchema';
import { vehicle_driversUpdateWithoutVehicleInputSchema } from './vehicle_driversUpdateWithoutVehicleInputSchema';
import { vehicle_driversUncheckedUpdateWithoutVehicleInputSchema } from './vehicle_driversUncheckedUpdateWithoutVehicleInputSchema';

export const vehicle_driversUpdateWithWhereUniqueWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_driversUpdateWithWhereUniqueWithoutVehicleInput> = z.object({
  where: z.lazy(() => vehicle_driversWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => vehicle_driversUpdateWithoutVehicleInputSchema),z.lazy(() => vehicle_driversUncheckedUpdateWithoutVehicleInputSchema) ]),
}).strict();

export default vehicle_driversUpdateWithWhereUniqueWithoutVehicleInputSchema;
