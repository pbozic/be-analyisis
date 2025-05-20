import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateWithoutDelivery_orderInputSchema } from './transactionsCreateWithoutDelivery_orderInputSchema';
import { transactionsUncheckedCreateWithoutDelivery_orderInputSchema } from './transactionsUncheckedCreateWithoutDelivery_orderInputSchema';
import { transactionsCreateOrConnectWithoutDelivery_orderInputSchema } from './transactionsCreateOrConnectWithoutDelivery_orderInputSchema';
import { transactionsCreateManyDelivery_orderInputEnvelopeSchema } from './transactionsCreateManyDelivery_orderInputEnvelopeSchema';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';

export const transactionsUncheckedCreateNestedManyWithoutDelivery_orderInputSchema: z.ZodType<Prisma.transactionsUncheckedCreateNestedManyWithoutDelivery_orderInput> = z.object({
  create: z.union([ z.lazy(() => transactionsCreateWithoutDelivery_orderInputSchema),z.lazy(() => transactionsCreateWithoutDelivery_orderInputSchema).array(),z.lazy(() => transactionsUncheckedCreateWithoutDelivery_orderInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutDelivery_orderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => transactionsCreateOrConnectWithoutDelivery_orderInputSchema),z.lazy(() => transactionsCreateOrConnectWithoutDelivery_orderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => transactionsCreateManyDelivery_orderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default transactionsUncheckedCreateNestedManyWithoutDelivery_orderInputSchema;
