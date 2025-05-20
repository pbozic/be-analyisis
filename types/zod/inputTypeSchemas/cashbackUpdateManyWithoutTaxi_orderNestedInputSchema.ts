import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackCreateWithoutTaxi_orderInputSchema } from './cashbackCreateWithoutTaxi_orderInputSchema';
import { cashbackUncheckedCreateWithoutTaxi_orderInputSchema } from './cashbackUncheckedCreateWithoutTaxi_orderInputSchema';
import { cashbackCreateOrConnectWithoutTaxi_orderInputSchema } from './cashbackCreateOrConnectWithoutTaxi_orderInputSchema';
import { cashbackUpsertWithWhereUniqueWithoutTaxi_orderInputSchema } from './cashbackUpsertWithWhereUniqueWithoutTaxi_orderInputSchema';
import { cashbackCreateManyTaxi_orderInputEnvelopeSchema } from './cashbackCreateManyTaxi_orderInputEnvelopeSchema';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackUpdateWithWhereUniqueWithoutTaxi_orderInputSchema } from './cashbackUpdateWithWhereUniqueWithoutTaxi_orderInputSchema';
import { cashbackUpdateManyWithWhereWithoutTaxi_orderInputSchema } from './cashbackUpdateManyWithWhereWithoutTaxi_orderInputSchema';
import { cashbackScalarWhereInputSchema } from './cashbackScalarWhereInputSchema';

export const cashbackUpdateManyWithoutTaxi_orderNestedInputSchema: z.ZodType<Prisma.cashbackUpdateManyWithoutTaxi_orderNestedInput> = z.object({
  create: z.union([ z.lazy(() => cashbackCreateWithoutTaxi_orderInputSchema),z.lazy(() => cashbackCreateWithoutTaxi_orderInputSchema).array(),z.lazy(() => cashbackUncheckedCreateWithoutTaxi_orderInputSchema),z.lazy(() => cashbackUncheckedCreateWithoutTaxi_orderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cashbackCreateOrConnectWithoutTaxi_orderInputSchema),z.lazy(() => cashbackCreateOrConnectWithoutTaxi_orderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => cashbackUpsertWithWhereUniqueWithoutTaxi_orderInputSchema),z.lazy(() => cashbackUpsertWithWhereUniqueWithoutTaxi_orderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cashbackCreateManyTaxi_orderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => cashbackWhereUniqueInputSchema),z.lazy(() => cashbackWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => cashbackWhereUniqueInputSchema),z.lazy(() => cashbackWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => cashbackWhereUniqueInputSchema),z.lazy(() => cashbackWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => cashbackWhereUniqueInputSchema),z.lazy(() => cashbackWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => cashbackUpdateWithWhereUniqueWithoutTaxi_orderInputSchema),z.lazy(() => cashbackUpdateWithWhereUniqueWithoutTaxi_orderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => cashbackUpdateManyWithWhereWithoutTaxi_orderInputSchema),z.lazy(() => cashbackUpdateManyWithWhereWithoutTaxi_orderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => cashbackScalarWhereInputSchema),z.lazy(() => cashbackScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default cashbackUpdateManyWithoutTaxi_orderNestedInputSchema;
