import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';
import { delivery_order_sentUpdateWithoutOrderInputSchema } from './delivery_order_sentUpdateWithoutOrderInputSchema';
import { delivery_order_sentUncheckedUpdateWithoutOrderInputSchema } from './delivery_order_sentUncheckedUpdateWithoutOrderInputSchema';

export const delivery_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.delivery_order_sentUpdateWithWhereUniqueWithoutOrderInput> = z.object({
  where: z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => delivery_order_sentUpdateWithoutOrderInputSchema),z.lazy(() => delivery_order_sentUncheckedUpdateWithoutOrderInputSchema) ]),
}).strict();

export default delivery_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema;
