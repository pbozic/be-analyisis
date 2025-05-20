import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutDelivery_ordersInputSchema } from './usersUpdateWithoutDelivery_ordersInputSchema';
import { usersUncheckedUpdateWithoutDelivery_ordersInputSchema } from './usersUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const usersUpdateToOneWithWhereWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutDelivery_ordersInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutDelivery_ordersInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutDelivery_ordersInputSchema;
