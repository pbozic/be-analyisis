import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesUpdateWithoutDelivery_ordersInputSchema } from './order_lobbiesUpdateWithoutDelivery_ordersInputSchema';
import { order_lobbiesUncheckedUpdateWithoutDelivery_ordersInputSchema } from './order_lobbiesUncheckedUpdateWithoutDelivery_ordersInputSchema';
import { order_lobbiesCreateWithoutDelivery_ordersInputSchema } from './order_lobbiesCreateWithoutDelivery_ordersInputSchema';
import { order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema } from './order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';

export const order_lobbiesUpsertWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.order_lobbiesUpsertWithoutDelivery_ordersInput> = z.object({
  update: z.union([ z.lazy(() => order_lobbiesUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => order_lobbiesUncheckedUpdateWithoutDelivery_ordersInputSchema) ]),
  create: z.union([ z.lazy(() => order_lobbiesCreateWithoutDelivery_ordersInputSchema),z.lazy(() => order_lobbiesUncheckedCreateWithoutDelivery_ordersInputSchema) ]),
  where: z.lazy(() => order_lobbiesWhereInputSchema).optional()
}).strict();

export default order_lobbiesUpsertWithoutDelivery_ordersInputSchema;
