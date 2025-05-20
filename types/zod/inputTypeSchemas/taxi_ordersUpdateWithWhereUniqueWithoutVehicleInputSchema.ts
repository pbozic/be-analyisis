import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutVehicleInputSchema } from './taxi_ordersUpdateWithoutVehicleInputSchema';
import { taxi_ordersUncheckedUpdateWithoutVehicleInputSchema } from './taxi_ordersUncheckedUpdateWithoutVehicleInputSchema';

export const taxi_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema: z.ZodType<Prisma.taxi_ordersUpdateWithWhereUniqueWithoutVehicleInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => taxi_ordersUpdateWithoutVehicleInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutVehicleInputSchema) ]),
}).strict();

export default taxi_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema;
