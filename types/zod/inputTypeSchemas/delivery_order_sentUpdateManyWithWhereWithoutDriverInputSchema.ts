import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentScalarWhereInputSchema } from './delivery_order_sentScalarWhereInputSchema';
import { delivery_order_sentUpdateManyMutationInputSchema } from './delivery_order_sentUpdateManyMutationInputSchema';
import { delivery_order_sentUncheckedUpdateManyWithoutDriverInputSchema } from './delivery_order_sentUncheckedUpdateManyWithoutDriverInputSchema';

export const delivery_order_sentUpdateManyWithWhereWithoutDriverInputSchema: z.ZodType<Prisma.delivery_order_sentUpdateManyWithWhereWithoutDriverInput> = z.object({
  where: z.lazy(() => delivery_order_sentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => delivery_order_sentUpdateManyMutationInputSchema),z.lazy(() => delivery_order_sentUncheckedUpdateManyWithoutDriverInputSchema) ]),
}).strict();

export default delivery_order_sentUpdateManyWithWhereWithoutDriverInputSchema;
