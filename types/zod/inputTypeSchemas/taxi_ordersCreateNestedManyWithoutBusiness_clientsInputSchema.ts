import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutBusiness_clientsInputSchema } from './taxi_ordersCreateWithoutBusiness_clientsInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema } from './taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema';
import { taxi_ordersCreateOrConnectWithoutBusiness_clientsInputSchema } from './taxi_ordersCreateOrConnectWithoutBusiness_clientsInputSchema';
import { taxi_ordersCreateManyBusiness_clientsInputEnvelopeSchema } from './taxi_ordersCreateManyBusiness_clientsInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedManyWithoutBusiness_clientsInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedManyWithoutBusiness_clientsInput> = z.object({
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersCreateWithoutBusiness_clientsInputSchema).array(),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => taxi_ordersCreateOrConnectWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersCreateOrConnectWithoutBusiness_clientsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => taxi_ordersCreateManyBusiness_clientsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => taxi_ordersWhereUniqueInputSchema),z.lazy(() => taxi_ordersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default taxi_ordersCreateNestedManyWithoutBusiness_clientsInputSchema;
