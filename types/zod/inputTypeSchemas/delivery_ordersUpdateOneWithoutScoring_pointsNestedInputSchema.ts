import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutScoring_pointsInputSchema } from './delivery_ordersCreateWithoutScoring_pointsInputSchema';
import { delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema } from './delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema';
import { delivery_ordersCreateOrConnectWithoutScoring_pointsInputSchema } from './delivery_ordersCreateOrConnectWithoutScoring_pointsInputSchema';
import { delivery_ordersUpsertWithoutScoring_pointsInputSchema } from './delivery_ordersUpsertWithoutScoring_pointsInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateToOneWithWhereWithoutScoring_pointsInputSchema } from './delivery_ordersUpdateToOneWithWhereWithoutScoring_pointsInputSchema';
import { delivery_ordersUpdateWithoutScoring_pointsInputSchema } from './delivery_ordersUpdateWithoutScoring_pointsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutScoring_pointsInputSchema } from './delivery_ordersUncheckedUpdateWithoutScoring_pointsInputSchema';

export const delivery_ordersUpdateOneWithoutScoring_pointsNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateOneWithoutScoring_pointsNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutScoring_pointsInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutScoring_pointsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutScoring_pointsInputSchema).optional(),
  upsert: z.lazy(() => delivery_ordersUpsertWithoutScoring_pointsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => delivery_ordersUpdateToOneWithWhereWithoutScoring_pointsInputSchema),z.lazy(() => delivery_ordersUpdateWithoutScoring_pointsInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutScoring_pointsInputSchema) ]).optional(),
}).strict();

export default delivery_ordersUpdateOneWithoutScoring_pointsNestedInputSchema;
