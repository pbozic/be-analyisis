import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithoutDriverInputSchema } from './delivery_ordersUpdateWithoutDriverInputSchema';
import { delivery_ordersUncheckedUpdateWithoutDriverInputSchema } from './delivery_ordersUncheckedUpdateWithoutDriverInputSchema';

export const delivery_ordersUpdateWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.delivery_ordersUpdateWithWhereUniqueWithoutDriverInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => delivery_ordersUpdateWithoutDriverInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutDriverInputSchema) ]),
}).strict();

export default delivery_ordersUpdateWithWhereUniqueWithoutDriverInputSchema;
