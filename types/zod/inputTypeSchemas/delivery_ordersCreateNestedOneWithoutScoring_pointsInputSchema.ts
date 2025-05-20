import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutScoring_pointsInputSchema } from './delivery_ordersCreateWithoutScoring_pointsInputSchema';
import { delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema } from './delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema';
import { delivery_ordersCreateOrConnectWithoutScoring_pointsInputSchema } from './delivery_ordersCreateOrConnectWithoutScoring_pointsInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedOneWithoutScoring_pointsInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedOneWithoutScoring_pointsInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutScoring_pointsInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutScoring_pointsInputSchema).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional()
}).strict();

export default delivery_ordersCreateNestedOneWithoutScoring_pointsInputSchema;
