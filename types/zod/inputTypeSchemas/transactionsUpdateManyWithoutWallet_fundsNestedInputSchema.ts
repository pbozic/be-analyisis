import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateWithoutWallet_fundsInputSchema } from './transactionsCreateWithoutWallet_fundsInputSchema';
import { transactionsUncheckedCreateWithoutWallet_fundsInputSchema } from './transactionsUncheckedCreateWithoutWallet_fundsInputSchema';
import { transactionsCreateOrConnectWithoutWallet_fundsInputSchema } from './transactionsCreateOrConnectWithoutWallet_fundsInputSchema';
import { transactionsUpsertWithWhereUniqueWithoutWallet_fundsInputSchema } from './transactionsUpsertWithWhereUniqueWithoutWallet_fundsInputSchema';
import { transactionsCreateManyWallet_fundsInputEnvelopeSchema } from './transactionsCreateManyWallet_fundsInputEnvelopeSchema';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithWhereUniqueWithoutWallet_fundsInputSchema } from './transactionsUpdateWithWhereUniqueWithoutWallet_fundsInputSchema';
import { transactionsUpdateManyWithWhereWithoutWallet_fundsInputSchema } from './transactionsUpdateManyWithWhereWithoutWallet_fundsInputSchema';
import { transactionsScalarWhereInputSchema } from './transactionsScalarWhereInputSchema';

export const transactionsUpdateManyWithoutWallet_fundsNestedInputSchema: z.ZodType<Prisma.transactionsUpdateManyWithoutWallet_fundsNestedInput> = z.object({
  create: z.union([ z.lazy(() => transactionsCreateWithoutWallet_fundsInputSchema),z.lazy(() => transactionsCreateWithoutWallet_fundsInputSchema).array(),z.lazy(() => transactionsUncheckedCreateWithoutWallet_fundsInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutWallet_fundsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => transactionsCreateOrConnectWithoutWallet_fundsInputSchema),z.lazy(() => transactionsCreateOrConnectWithoutWallet_fundsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => transactionsUpsertWithWhereUniqueWithoutWallet_fundsInputSchema),z.lazy(() => transactionsUpsertWithWhereUniqueWithoutWallet_fundsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => transactionsCreateManyWallet_fundsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => transactionsUpdateWithWhereUniqueWithoutWallet_fundsInputSchema),z.lazy(() => transactionsUpdateWithWhereUniqueWithoutWallet_fundsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => transactionsUpdateManyWithWhereWithoutWallet_fundsInputSchema),z.lazy(() => transactionsUpdateManyWithWhereWithoutWallet_fundsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => transactionsScalarWhereInputSchema),z.lazy(() => transactionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default transactionsUpdateManyWithoutWallet_fundsNestedInputSchema;
