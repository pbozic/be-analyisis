import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateWithoutWallet_fundsInputSchema } from './transactionsCreateWithoutWallet_fundsInputSchema';
import { transactionsUncheckedCreateWithoutWallet_fundsInputSchema } from './transactionsUncheckedCreateWithoutWallet_fundsInputSchema';
import { transactionsCreateOrConnectWithoutWallet_fundsInputSchema } from './transactionsCreateOrConnectWithoutWallet_fundsInputSchema';
import { transactionsCreateManyWallet_fundsInputEnvelopeSchema } from './transactionsCreateManyWallet_fundsInputEnvelopeSchema';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';

export const transactionsCreateNestedManyWithoutWallet_fundsInputSchema: z.ZodType<Prisma.transactionsCreateNestedManyWithoutWallet_fundsInput> = z.object({
  create: z.union([ z.lazy(() => transactionsCreateWithoutWallet_fundsInputSchema),z.lazy(() => transactionsCreateWithoutWallet_fundsInputSchema).array(),z.lazy(() => transactionsUncheckedCreateWithoutWallet_fundsInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutWallet_fundsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => transactionsCreateOrConnectWithoutWallet_fundsInputSchema),z.lazy(() => transactionsCreateOrConnectWithoutWallet_fundsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => transactionsCreateManyWallet_fundsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default transactionsCreateNestedManyWithoutWallet_fundsInputSchema;
