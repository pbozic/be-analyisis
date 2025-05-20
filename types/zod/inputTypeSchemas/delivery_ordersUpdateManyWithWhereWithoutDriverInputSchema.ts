import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersScalarWhereInputSchema } from './delivery_ordersScalarWhereInputSchema';
import { delivery_ordersUpdateManyMutationInputSchema } from './delivery_ordersUpdateManyMutationInputSchema';
import { delivery_ordersUncheckedUpdateManyWithoutDriverInputSchema } from './delivery_ordersUncheckedUpdateManyWithoutDriverInputSchema';

export const delivery_ordersUpdateManyWithWhereWithoutDriverInputSchema: z.ZodType<Prisma.delivery_ordersUpdateManyWithWhereWithoutDriverInput> = z.object({
  where: z.lazy(() => delivery_ordersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => delivery_ordersUpdateManyMutationInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateManyWithoutDriverInputSchema) ]),
}).strict();

export default delivery_ordersUpdateManyWithWhereWithoutDriverInputSchema;
