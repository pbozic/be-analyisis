import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';
import { delivery_order_sentCreateWithoutOrderInputSchema } from './delivery_order_sentCreateWithoutOrderInputSchema';
import { delivery_order_sentUncheckedCreateWithoutOrderInputSchema } from './delivery_order_sentUncheckedCreateWithoutOrderInputSchema';

export const delivery_order_sentCreateOrConnectWithoutOrderInputSchema: z.ZodType<Prisma.delivery_order_sentCreateOrConnectWithoutOrderInput> = z.object({
  where: z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_order_sentCreateWithoutOrderInputSchema),z.lazy(() => delivery_order_sentUncheckedCreateWithoutOrderInputSchema) ]),
}).strict();

export default delivery_order_sentCreateOrConnectWithoutOrderInputSchema;
