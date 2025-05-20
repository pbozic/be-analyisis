import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersUpdateWithoutHistoryInputSchema } from './delivery_ordersUpdateWithoutHistoryInputSchema';
import { delivery_ordersUncheckedUpdateWithoutHistoryInputSchema } from './delivery_ordersUncheckedUpdateWithoutHistoryInputSchema';

export const delivery_ordersUpdateToOneWithWhereWithoutHistoryInputSchema: z.ZodType<Prisma.delivery_ordersUpdateToOneWithWhereWithoutHistoryInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => delivery_ordersUpdateWithoutHistoryInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutHistoryInputSchema) ]),
}).strict();

export default delivery_ordersUpdateToOneWithWhereWithoutHistoryInputSchema;
