import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutTaxi_ordersInputSchema } from './vehiclesCreateWithoutTaxi_ordersInputSchema';
import { vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema } from './vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema';
import { vehiclesCreateOrConnectWithoutTaxi_ordersInputSchema } from './vehiclesCreateOrConnectWithoutTaxi_ordersInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';

export const vehiclesCreateNestedOneWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.vehiclesCreateNestedOneWithoutTaxi_ordersInput> = z.object({
  create: z.union([ z.lazy(() => vehiclesCreateWithoutTaxi_ordersInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutTaxi_ordersInputSchema).optional(),
  connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional()
}).strict();

export default vehiclesCreateNestedOneWithoutTaxi_ordersInputSchema;
