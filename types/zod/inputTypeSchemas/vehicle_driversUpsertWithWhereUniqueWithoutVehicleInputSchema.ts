import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversWhereUniqueInputSchema } from './vehicle_driversWhereUniqueInputSchema';
import { vehicle_driversUpdateWithoutVehicleInputSchema } from './vehicle_driversUpdateWithoutVehicleInputSchema';
import { vehicle_driversUncheckedUpdateWithoutVehicleInputSchema } from './vehicle_driversUncheckedUpdateWithoutVehicleInputSchema';
import { vehicle_driversCreateWithoutVehicleInputSchema } from './vehicle_driversCreateWithoutVehicleInputSchema';
import { vehicle_driversUncheckedCreateWithoutVehicleInputSchema } from './vehicle_driversUncheckedCreateWithoutVehicleInputSchema';

export const vehicle_driversUpsertWithWhereUniqueWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_driversUpsertWithWhereUniqueWithoutVehicleInput> = z.object({
  where: z.lazy(() => vehicle_driversWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => vehicle_driversUpdateWithoutVehicleInputSchema),z.lazy(() => vehicle_driversUncheckedUpdateWithoutVehicleInputSchema) ]),
  create: z.union([ z.lazy(() => vehicle_driversCreateWithoutVehicleInputSchema),z.lazy(() => vehicle_driversUncheckedCreateWithoutVehicleInputSchema) ]),
}).strict();

export default vehicle_driversUpsertWithWhereUniqueWithoutVehicleInputSchema;
