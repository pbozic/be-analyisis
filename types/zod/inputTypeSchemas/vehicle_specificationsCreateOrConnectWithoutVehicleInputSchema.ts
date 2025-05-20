import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_specificationsWhereUniqueInputSchema } from './vehicle_specificationsWhereUniqueInputSchema';
import { vehicle_specificationsCreateWithoutVehicleInputSchema } from './vehicle_specificationsCreateWithoutVehicleInputSchema';
import { vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema } from './vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema';

export const vehicle_specificationsCreateOrConnectWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_specificationsCreateOrConnectWithoutVehicleInput> = z.object({
  where: z.lazy(() => vehicle_specificationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => vehicle_specificationsCreateWithoutVehicleInputSchema),z.lazy(() => vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema) ]),
}).strict();

export default vehicle_specificationsCreateOrConnectWithoutVehicleInputSchema;
