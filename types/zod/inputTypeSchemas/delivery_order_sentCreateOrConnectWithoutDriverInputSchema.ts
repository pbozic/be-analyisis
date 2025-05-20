import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';
import { delivery_order_sentCreateWithoutDriverInputSchema } from './delivery_order_sentCreateWithoutDriverInputSchema';
import { delivery_order_sentUncheckedCreateWithoutDriverInputSchema } from './delivery_order_sentUncheckedCreateWithoutDriverInputSchema';

export const delivery_order_sentCreateOrConnectWithoutDriverInputSchema: z.ZodType<Prisma.delivery_order_sentCreateOrConnectWithoutDriverInput> = z.object({
  where: z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_order_sentCreateWithoutDriverInputSchema),z.lazy(() => delivery_order_sentUncheckedCreateWithoutDriverInputSchema) ]),
}).strict();

export default delivery_order_sentCreateOrConnectWithoutDriverInputSchema;
