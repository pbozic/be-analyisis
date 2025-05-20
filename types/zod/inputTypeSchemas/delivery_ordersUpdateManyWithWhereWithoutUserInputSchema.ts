import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersScalarWhereInputSchema } from './delivery_ordersScalarWhereInputSchema';
import { delivery_ordersUpdateManyMutationInputSchema } from './delivery_ordersUpdateManyMutationInputSchema';
import { delivery_ordersUncheckedUpdateManyWithoutUserInputSchema } from './delivery_ordersUncheckedUpdateManyWithoutUserInputSchema';

export const delivery_ordersUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.delivery_ordersUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => delivery_ordersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => delivery_ordersUpdateManyMutationInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default delivery_ordersUpdateManyWithWhereWithoutUserInputSchema;
