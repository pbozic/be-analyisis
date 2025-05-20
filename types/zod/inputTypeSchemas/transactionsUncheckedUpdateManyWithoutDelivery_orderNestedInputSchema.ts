import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateWithoutDelivery_orderInputSchema } from './transactionsCreateWithoutDelivery_orderInputSchema';
import { transactionsUncheckedCreateWithoutDelivery_orderInputSchema } from './transactionsUncheckedCreateWithoutDelivery_orderInputSchema';
import { transactionsCreateOrConnectWithoutDelivery_orderInputSchema } from './transactionsCreateOrConnectWithoutDelivery_orderInputSchema';
import { transactionsUpsertWithWhereUniqueWithoutDelivery_orderInputSchema } from './transactionsUpsertWithWhereUniqueWithoutDelivery_orderInputSchema';
import { transactionsCreateManyDelivery_orderInputEnvelopeSchema } from './transactionsCreateManyDelivery_orderInputEnvelopeSchema';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema } from './transactionsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema';
import { transactionsUpdateManyWithWhereWithoutDelivery_orderInputSchema } from './transactionsUpdateManyWithWhereWithoutDelivery_orderInputSchema';
import { transactionsScalarWhereInputSchema } from './transactionsScalarWhereInputSchema';

export const transactionsUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema: z.ZodType<Prisma.transactionsUncheckedUpdateManyWithoutDelivery_orderNestedInput> = z.object({
  create: z.union([ z.lazy(() => transactionsCreateWithoutDelivery_orderInputSchema),z.lazy(() => transactionsCreateWithoutDelivery_orderInputSchema).array(),z.lazy(() => transactionsUncheckedCreateWithoutDelivery_orderInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutDelivery_orderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => transactionsCreateOrConnectWithoutDelivery_orderInputSchema),z.lazy(() => transactionsCreateOrConnectWithoutDelivery_orderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => transactionsUpsertWithWhereUniqueWithoutDelivery_orderInputSchema),z.lazy(() => transactionsUpsertWithWhereUniqueWithoutDelivery_orderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => transactionsCreateManyDelivery_orderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => transactionsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema),z.lazy(() => transactionsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => transactionsUpdateManyWithWhereWithoutDelivery_orderInputSchema),z.lazy(() => transactionsUpdateManyWithWhereWithoutDelivery_orderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => transactionsScalarWhereInputSchema),z.lazy(() => transactionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default transactionsUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema;
