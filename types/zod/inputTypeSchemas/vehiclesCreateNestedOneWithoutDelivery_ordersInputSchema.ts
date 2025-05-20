import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutDelivery_ordersInputSchema } from './vehiclesCreateWithoutDelivery_ordersInputSchema';
import { vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema } from './vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema';
import { vehiclesCreateOrConnectWithoutDelivery_ordersInputSchema } from './vehiclesCreateOrConnectWithoutDelivery_ordersInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';

export const vehiclesCreateNestedOneWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.vehiclesCreateNestedOneWithoutDelivery_ordersInput> = z.object({
  create: z.union([ z.lazy(() => vehiclesCreateWithoutDelivery_ordersInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutDelivery_ordersInputSchema).optional(),
  connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional()
}).strict();

export default vehiclesCreateNestedOneWithoutDelivery_ordersInputSchema;
