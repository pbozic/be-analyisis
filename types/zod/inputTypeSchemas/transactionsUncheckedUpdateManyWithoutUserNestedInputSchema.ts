import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateWithoutUserInputSchema } from './transactionsCreateWithoutUserInputSchema';
import { transactionsUncheckedCreateWithoutUserInputSchema } from './transactionsUncheckedCreateWithoutUserInputSchema';
import { transactionsCreateOrConnectWithoutUserInputSchema } from './transactionsCreateOrConnectWithoutUserInputSchema';
import { transactionsUpsertWithWhereUniqueWithoutUserInputSchema } from './transactionsUpsertWithWhereUniqueWithoutUserInputSchema';
import { transactionsCreateManyUserInputEnvelopeSchema } from './transactionsCreateManyUserInputEnvelopeSchema';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithWhereUniqueWithoutUserInputSchema } from './transactionsUpdateWithWhereUniqueWithoutUserInputSchema';
import { transactionsUpdateManyWithWhereWithoutUserInputSchema } from './transactionsUpdateManyWithWhereWithoutUserInputSchema';
import { transactionsScalarWhereInputSchema } from './transactionsScalarWhereInputSchema';

export const transactionsUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.transactionsUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => transactionsCreateWithoutUserInputSchema),z.lazy(() => transactionsCreateWithoutUserInputSchema).array(),z.lazy(() => transactionsUncheckedCreateWithoutUserInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => transactionsCreateOrConnectWithoutUserInputSchema),z.lazy(() => transactionsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => transactionsUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => transactionsUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => transactionsCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => transactionsUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => transactionsUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => transactionsUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => transactionsUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => transactionsScalarWhereInputSchema),z.lazy(() => transactionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default transactionsUncheckedUpdateManyWithoutUserNestedInputSchema;
