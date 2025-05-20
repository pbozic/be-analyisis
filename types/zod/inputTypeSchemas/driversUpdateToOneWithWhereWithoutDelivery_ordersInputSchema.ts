import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutDelivery_ordersInputSchema } from './driversUpdateWithoutDelivery_ordersInputSchema';
import { driversUncheckedUpdateWithoutDelivery_ordersInputSchema } from './driversUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const driversUpdateToOneWithWhereWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutDelivery_ordersInput> = z.object({
  where: z.lazy(() => driversWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => driversUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => driversUncheckedUpdateWithoutDelivery_ordersInputSchema) ]),
}).strict();

export default driversUpdateToOneWithWhereWithoutDelivery_ordersInputSchema;
