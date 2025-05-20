import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversWhereUniqueInputSchema } from './vehicle_driversWhereUniqueInputSchema';
import { vehicle_driversCreateWithoutVehicleInputSchema } from './vehicle_driversCreateWithoutVehicleInputSchema';
import { vehicle_driversUncheckedCreateWithoutVehicleInputSchema } from './vehicle_driversUncheckedCreateWithoutVehicleInputSchema';

export const vehicle_driversCreateOrConnectWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_driversCreateOrConnectWithoutVehicleInput> = z.object({
  where: z.lazy(() => vehicle_driversWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => vehicle_driversCreateWithoutVehicleInputSchema),z.lazy(() => vehicle_driversUncheckedCreateWithoutVehicleInputSchema) ]),
}).strict();

export default vehicle_driversCreateOrConnectWithoutVehicleInputSchema;
