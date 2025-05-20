import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversUpdateWithoutReceived_ordersInputSchema } from './delivery_driversUpdateWithoutReceived_ordersInputSchema';
import { delivery_driversUncheckedUpdateWithoutReceived_ordersInputSchema } from './delivery_driversUncheckedUpdateWithoutReceived_ordersInputSchema';

export const delivery_driversUpdateToOneWithWhereWithoutReceived_ordersInputSchema: z.ZodType<Prisma.delivery_driversUpdateToOneWithWhereWithoutReceived_ordersInput> = z.object({
  where: z.lazy(() => delivery_driversWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => delivery_driversUpdateWithoutReceived_ordersInputSchema),z.lazy(() => delivery_driversUncheckedUpdateWithoutReceived_ordersInputSchema) ]),
}).strict();

export default delivery_driversUpdateToOneWithWhereWithoutReceived_ordersInputSchema;
