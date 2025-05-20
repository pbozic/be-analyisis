import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutDriverInputSchema } from './taxi_ordersCreateWithoutDriverInputSchema';
import { taxi_ordersUncheckedCreateWithoutDriverInputSchema } from './taxi_ordersUncheckedCreateWithoutDriverInputSchema';
import { taxi_ordersCreateOrConnectWithoutDriverInputSchema } from './taxi_ordersCreateOrConnectWithoutDriverInputSchema';
import { taxi_ordersCreateManyDriverInputEnvelopeSchema } from './taxi_ordersCreateManyDriverInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersUncheckedCreateNestedManyWithoutDriverInputSchema: z.ZodType<Prisma.taxi_ordersUncheckedCreateNestedManyWithoutDriverInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutDriverInputSchema),z.lazy(() => taxi_ordersCreateWithoutDriverInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutDriverInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutDriverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutDriverInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutDriverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyDriverInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersUncheckedCreateNestedManyWithoutDriverInputSchema;
