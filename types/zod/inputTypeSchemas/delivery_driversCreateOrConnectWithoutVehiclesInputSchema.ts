import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversCreateWithoutVehiclesInputSchema } from './delivery_driversCreateWithoutVehiclesInputSchema';
import { delivery_driversUncheckedCreateWithoutVehiclesInputSchema } from './delivery_driversUncheckedCreateWithoutVehiclesInputSchema';

export const delivery_driversCreateOrConnectWithoutVehiclesInputSchema: z.ZodType<Prisma.delivery_driversCreateOrConnectWithoutVehiclesInput> = z.object({
  where: z.lazy(() => delivery_driversWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutVehiclesInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutVehiclesInputSchema) ]),
}).strict();

export default delivery_driversCreateOrConnectWithoutVehiclesInputSchema;
