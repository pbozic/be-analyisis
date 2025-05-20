import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackCreateWithoutDelivery_orderInputSchema } from './cashbackCreateWithoutDelivery_orderInputSchema';
import { cashbackUncheckedCreateWithoutDelivery_orderInputSchema } from './cashbackUncheckedCreateWithoutDelivery_orderInputSchema';
import { cashbackCreateOrConnectWithoutDelivery_orderInputSchema } from './cashbackCreateOrConnectWithoutDelivery_orderInputSchema';
import { cashbackUpsertWithWhereUniqueWithoutDelivery_orderInputSchema } from './cashbackUpsertWithWhereUniqueWithoutDelivery_orderInputSchema';
import { cashbackCreateManyDelivery_orderInputEnvelopeSchema } from './cashbackCreateManyDelivery_orderInputEnvelopeSchema';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackUpdateWithWhereUniqueWithoutDelivery_orderInputSchema } from './cashbackUpdateWithWhereUniqueWithoutDelivery_orderInputSchema';
import { cashbackUpdateManyWithWhereWithoutDelivery_orderInputSchema } from './cashbackUpdateManyWithWhereWithoutDelivery_orderInputSchema';
import { cashbackScalarWhereInputSchema } from './cashbackScalarWhereInputSchema';

export const cashbackUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema: z.ZodType<Prisma.cashbackUncheckedUpdateManyWithoutDelivery_orderNestedInput> = z.object({
  create: z.union([ z.lazy(() => cashbackCreateWithoutDelivery_orderInputSchema),z.lazy(() => cashbackCreateWithoutDelivery_orderInputSchema).array(),z.lazy(() => cashbackUncheckedCreateWithoutDelivery_orderInputSchema),z.lazy(() => cashbackUncheckedCreateWithoutDelivery_orderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cashbackCreateOrConnectWithoutDelivery_orderInputSchema),z.lazy(() => cashbackCreateOrConnectWithoutDelivery_orderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => cashbackUpsertWithWhereUniqueWithoutDelivery_orderInputSchema),z.lazy(() => cashbackUpsertWithWhereUniqueWithoutDelivery_orderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cashbackCreateManyDelivery_orderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => cashbackWhereUniqueInputSchema),z.lazy(() => cashbackWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => cashbackWhereUniqueInputSchema),z.lazy(() => cashbackWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => cashbackWhereUniqueInputSchema),z.lazy(() => cashbackWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => cashbackWhereUniqueInputSchema),z.lazy(() => cashbackWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => cashbackUpdateWithWhereUniqueWithoutDelivery_orderInputSchema),z.lazy(() => cashbackUpdateWithWhereUniqueWithoutDelivery_orderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => cashbackUpdateManyWithWhereWithoutDelivery_orderInputSchema),z.lazy(() => cashbackUpdateManyWithWhereWithoutDelivery_orderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => cashbackScalarWhereInputSchema),z.lazy(() => cashbackScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default cashbackUncheckedUpdateManyWithoutDelivery_orderNestedInputSchema;
