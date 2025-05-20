import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsScalarWhereInputSchema } from './transactionsScalarWhereInputSchema';
import { transactionsUpdateManyMutationInputSchema } from './transactionsUpdateManyMutationInputSchema';
import { transactionsUncheckedUpdateManyWithoutDelivery_orderInputSchema } from './transactionsUncheckedUpdateManyWithoutDelivery_orderInputSchema';

export const transactionsUpdateManyWithWhereWithoutDelivery_orderInputSchema: z.ZodType<Prisma.transactionsUpdateManyWithWhereWithoutDelivery_orderInput> = z.object({
  where: z.lazy(() => transactionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => transactionsUpdateManyMutationInputSchema),z.lazy(() => transactionsUncheckedUpdateManyWithoutDelivery_orderInputSchema) ]),
}).strict();

export default transactionsUpdateManyWithWhereWithoutDelivery_orderInputSchema;
