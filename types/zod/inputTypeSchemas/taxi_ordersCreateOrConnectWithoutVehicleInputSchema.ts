import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutVehicleInputSchema } from './taxi_ordersCreateWithoutVehicleInputSchema';
import { taxi_ordersUncheckedCreateWithoutVehicleInputSchema } from './taxi_ordersUncheckedCreateWithoutVehicleInputSchema';

export const taxi_ordersCreateOrConnectWithoutVehicleInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutVehicleInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutVehicleInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutVehicleInputSchema) ]),
}).strict();

export default taxi_ordersCreateOrConnectWithoutVehicleInputSchema;
