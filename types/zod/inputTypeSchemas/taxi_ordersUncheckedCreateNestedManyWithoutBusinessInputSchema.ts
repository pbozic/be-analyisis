import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutBusinessInputSchema } from './taxi_ordersCreateWithoutBusinessInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusinessInputSchema } from './taxi_ordersUncheckedCreateWithoutBusinessInputSchema';
import { taxi_ordersCreateOrConnectWithoutBusinessInputSchema } from './taxi_ordersCreateOrConnectWithoutBusinessInputSchema';
import { taxi_ordersCreateManyBusinessInputEnvelopeSchema } from './taxi_ordersCreateManyBusinessInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.taxi_ordersUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutBusinessInputSchema),z.lazy(() => taxi_ordersCreateWithoutBusinessInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersUncheckedCreateNestedManyWithoutBusinessInputSchema;
