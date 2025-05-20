import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutDelivery_ordersInputSchema } from './driversCreateWithoutDelivery_ordersInputSchema';
import { driversUncheckedCreateWithoutDelivery_ordersInputSchema } from './driversUncheckedCreateWithoutDelivery_ordersInputSchema';
import { driversCreateOrConnectWithoutDelivery_ordersInputSchema } from './driversCreateOrConnectWithoutDelivery_ordersInputSchema';
import { driversUpsertWithoutDelivery_ordersInputSchema } from './driversUpsertWithoutDelivery_ordersInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutDelivery_ordersInputSchema } from './driversUpdateToOneWithWhereWithoutDelivery_ordersInputSchema';
import { driversUpdateWithoutDelivery_ordersInputSchema } from './driversUpdateWithoutDelivery_ordersInputSchema';
import { driversUncheckedUpdateWithoutDelivery_ordersInputSchema } from './driversUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const driversUpdateOneWithoutDelivery_ordersNestedInputSchema: z.ZodType<Prisma.driversUpdateOneWithoutDelivery_ordersNestedInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutDelivery_ordersInputSchema),z.lazy(() => driversUncheckedCreateWithoutDelivery_ordersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutDelivery_ordersInputSchema).optional(),
  upsert: z.lazy(() => driversUpsertWithoutDelivery_ordersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => driversWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => driversWhereInputSchema) ]).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => driversUpdateToOneWithWhereWithoutDelivery_ordersInputSchema),z.lazy(() => driversUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => driversUncheckedUpdateWithoutDelivery_ordersInputSchema) ]).optional(),
}).strict();

export default driversUpdateOneWithoutDelivery_ordersNestedInputSchema;
