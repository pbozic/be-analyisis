import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentScalarWhereInputSchema } from './delivery_order_sentScalarWhereInputSchema';
import { delivery_order_sentUpdateManyMutationInputSchema } from './delivery_order_sentUpdateManyMutationInputSchema';
import { delivery_order_sentUncheckedUpdateManyWithoutOrderInputSchema } from './delivery_order_sentUncheckedUpdateManyWithoutOrderInputSchema';

export const delivery_order_sentUpdateManyWithWhereWithoutOrderInputSchema: z.ZodType<Prisma.delivery_order_sentUpdateManyWithWhereWithoutOrderInput> = z.object({
  where: z.lazy(() => delivery_order_sentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => delivery_order_sentUpdateManyMutationInputSchema),z.lazy(() => delivery_order_sentUncheckedUpdateManyWithoutOrderInputSchema) ]),
}).strict();

export default delivery_order_sentUpdateManyWithWhereWithoutOrderInputSchema;
