import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutUserInputSchema } from './taxi_ordersCreateWithoutUserInputSchema';
import { taxi_ordersUncheckedCreateWithoutUserInputSchema } from './taxi_ordersUncheckedCreateWithoutUserInputSchema';
import { taxi_ordersCreateOrConnectWithoutUserInputSchema } from './taxi_ordersCreateOrConnectWithoutUserInputSchema';
import { taxi_ordersCreateManyUserInputEnvelopeSchema } from './taxi_ordersCreateManyUserInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutUserInputSchema),z.lazy(() => taxi_ordersCreateWithoutUserInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutUserInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutUserInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersCreateNestedManyWithoutUserInputSchema;
