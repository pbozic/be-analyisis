import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateWithoutTaxi_ordersInputSchema } from './scoring_pointsCreateWithoutTaxi_ordersInputSchema';
import { scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema } from './scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema';
import { scoring_pointsCreateOrConnectWithoutTaxi_ordersInputSchema } from './scoring_pointsCreateOrConnectWithoutTaxi_ordersInputSchema';
import { scoring_pointsCreateManyTaxi_ordersInputEnvelopeSchema } from './scoring_pointsCreateManyTaxi_ordersInputEnvelopeSchema';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';

export const scoring_pointsUncheckedCreateNestedManyWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.scoring_pointsUncheckedCreateNestedManyWithoutTaxi_ordersInput> = z.object({
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutTaxi_ordersInputSchema),z.lazy(() => scoring_pointsCreateWithoutTaxi_ordersInputSchema).array(),z.lazy(() => scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => scoring_pointsCreateOrConnectWithoutTaxi_ordersInputSchema),z.lazy(() => scoring_pointsCreateOrConnectWithoutTaxi_ordersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => scoring_pointsCreateManyTaxi_ordersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => scoring_pointsWhereUniqueInputSchema),z.lazy(() => scoring_pointsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default scoring_pointsUncheckedCreateNestedManyWithoutTaxi_ordersInputSchema;
