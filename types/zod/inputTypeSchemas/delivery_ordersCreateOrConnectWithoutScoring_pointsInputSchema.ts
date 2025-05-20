import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutScoring_pointsInputSchema } from './delivery_ordersCreateWithoutScoring_pointsInputSchema';
import { delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema } from './delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema';

export const delivery_ordersCreateOrConnectWithoutScoring_pointsInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutScoring_pointsInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutScoring_pointsInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema) ]),
}).strict();

export default delivery_ordersCreateOrConnectWithoutScoring_pointsInputSchema;
