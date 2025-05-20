import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackCreateWithoutDelivery_orderInputSchema } from './cashbackCreateWithoutDelivery_orderInputSchema';
import { cashbackUncheckedCreateWithoutDelivery_orderInputSchema } from './cashbackUncheckedCreateWithoutDelivery_orderInputSchema';
import { cashbackCreateOrConnectWithoutDelivery_orderInputSchema } from './cashbackCreateOrConnectWithoutDelivery_orderInputSchema';
import { cashbackCreateManyDelivery_orderInputEnvelopeSchema } from './cashbackCreateManyDelivery_orderInputEnvelopeSchema';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';

export const cashbackCreateNestedManyWithoutDelivery_orderInputSchema: z.ZodType<Prisma.cashbackCreateNestedManyWithoutDelivery_orderInput> = z.object({
  create: z.union([ z.lazy(() => cashbackCreateWithoutDelivery_orderInputSchema),z.lazy(() => cashbackCreateWithoutDelivery_orderInputSchema).array(),z.lazy(() => cashbackUncheckedCreateWithoutDelivery_orderInputSchema),z.lazy(() => cashbackUncheckedCreateWithoutDelivery_orderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cashbackCreateOrConnectWithoutDelivery_orderInputSchema),z.lazy(() => cashbackCreateOrConnectWithoutDelivery_orderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cashbackCreateManyDelivery_orderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => cashbackWhereUniqueInputSchema),z.lazy(() => cashbackWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default cashbackCreateNestedManyWithoutDelivery_orderInputSchema;
