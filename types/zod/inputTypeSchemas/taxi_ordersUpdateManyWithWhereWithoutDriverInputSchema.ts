import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';
import { taxi_ordersUpdateManyMutationInputSchema } from './taxi_ordersUpdateManyMutationInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutDriverInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutDriverInputSchema';

export const taxi_ordersUpdateManyWithWhereWithoutDriverInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithWhereWithoutDriverInput> = z.object({
  where: z.lazy(() => taxi_ordersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => taxi_ordersUpdateManyMutationInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutDriverInputSchema) ]),
}).strict();

export default taxi_ordersUpdateManyWithWhereWithoutDriverInputSchema;
