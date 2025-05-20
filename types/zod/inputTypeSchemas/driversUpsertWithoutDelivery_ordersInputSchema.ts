import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutDelivery_ordersInputSchema } from './driversUpdateWithoutDelivery_ordersInputSchema';
import { driversUncheckedUpdateWithoutDelivery_ordersInputSchema } from './driversUncheckedUpdateWithoutDelivery_ordersInputSchema';
import { driversCreateWithoutDelivery_ordersInputSchema } from './driversCreateWithoutDelivery_ordersInputSchema';
import { driversUncheckedCreateWithoutDelivery_ordersInputSchema } from './driversUncheckedCreateWithoutDelivery_ordersInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.driversUpsertWithoutDelivery_ordersInput> = z.object({
  update: z.union([ z.lazy(() => driversUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => driversUncheckedUpdateWithoutDelivery_ordersInputSchema) ]),
  create: z.union([ z.lazy(() => driversCreateWithoutDelivery_ordersInputSchema),z.lazy(() => driversUncheckedCreateWithoutDelivery_ordersInputSchema) ]),
  where: z.lazy(() => driversWhereInputSchema).optional()
}).strict();

export default driversUpsertWithoutDelivery_ordersInputSchema;
