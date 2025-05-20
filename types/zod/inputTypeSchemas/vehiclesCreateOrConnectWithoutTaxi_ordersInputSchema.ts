import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesCreateWithoutTaxi_ordersInputSchema } from './vehiclesCreateWithoutTaxi_ordersInputSchema';
import { vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema } from './vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema';

export const vehiclesCreateOrConnectWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.vehiclesCreateOrConnectWithoutTaxi_ordersInput> = z.object({
  where: z.lazy(() => vehiclesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => vehiclesCreateWithoutTaxi_ordersInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema) ]),
}).strict();

export default vehiclesCreateOrConnectWithoutTaxi_ordersInputSchema;
