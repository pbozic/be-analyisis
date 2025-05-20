import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutDelivery_ordersInputSchema } from './driversCreateWithoutDelivery_ordersInputSchema';
import { driversUncheckedCreateWithoutDelivery_ordersInputSchema } from './driversUncheckedCreateWithoutDelivery_ordersInputSchema';
import { driversCreateOrConnectWithoutDelivery_ordersInputSchema } from './driversCreateOrConnectWithoutDelivery_ordersInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversCreateNestedOneWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.driversCreateNestedOneWithoutDelivery_ordersInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutDelivery_ordersInputSchema),z.lazy(() => driversUncheckedCreateWithoutDelivery_ordersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutDelivery_ordersInputSchema).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional()
}).strict();

export default driversCreateNestedOneWithoutDelivery_ordersInputSchema;
