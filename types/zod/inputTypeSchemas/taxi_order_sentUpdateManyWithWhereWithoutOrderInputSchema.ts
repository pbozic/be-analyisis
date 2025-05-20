import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentScalarWhereInputSchema } from './taxi_order_sentScalarWhereInputSchema';
import { taxi_order_sentUpdateManyMutationInputSchema } from './taxi_order_sentUpdateManyMutationInputSchema';
import { taxi_order_sentUncheckedUpdateManyWithoutOrderInputSchema } from './taxi_order_sentUncheckedUpdateManyWithoutOrderInputSchema';

export const taxi_order_sentUpdateManyWithWhereWithoutOrderInputSchema: z.ZodType<Prisma.taxi_order_sentUpdateManyWithWhereWithoutOrderInput> = z.object({
  where: z.lazy(() => taxi_order_sentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => taxi_order_sentUpdateManyMutationInputSchema),z.lazy(() => taxi_order_sentUncheckedUpdateManyWithoutOrderInputSchema) ]),
}).strict();

export default taxi_order_sentUpdateManyWithWhereWithoutOrderInputSchema;
