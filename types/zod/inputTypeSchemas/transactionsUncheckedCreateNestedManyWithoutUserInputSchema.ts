import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateWithoutUserInputSchema } from './transactionsCreateWithoutUserInputSchema';
import { transactionsUncheckedCreateWithoutUserInputSchema } from './transactionsUncheckedCreateWithoutUserInputSchema';
import { transactionsCreateOrConnectWithoutUserInputSchema } from './transactionsCreateOrConnectWithoutUserInputSchema';
import { transactionsCreateManyUserInputEnvelopeSchema } from './transactionsCreateManyUserInputEnvelopeSchema';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';

export const transactionsUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.transactionsUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => transactionsCreateWithoutUserInputSchema),z.lazy(() => transactionsCreateWithoutUserInputSchema).array(),z.lazy(() => transactionsUncheckedCreateWithoutUserInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => transactionsCreateOrConnectWithoutUserInputSchema),z.lazy(() => transactionsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => transactionsCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => transactionsWhereUniqueInputSchema),z.lazy(() => transactionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default transactionsUncheckedCreateNestedManyWithoutUserInputSchema;
