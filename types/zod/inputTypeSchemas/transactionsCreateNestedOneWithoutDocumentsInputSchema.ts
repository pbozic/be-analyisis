import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateWithoutDocumentsInputSchema } from './transactionsCreateWithoutDocumentsInputSchema';
import { transactionsUncheckedCreateWithoutDocumentsInputSchema } from './transactionsUncheckedCreateWithoutDocumentsInputSchema';
import { transactionsCreateOrConnectWithoutDocumentsInputSchema } from './transactionsCreateOrConnectWithoutDocumentsInputSchema';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';

export const transactionsCreateNestedOneWithoutDocumentsInputSchema: z.ZodType<Prisma.transactionsCreateNestedOneWithoutDocumentsInput> = z.object({
  create: z.union([ z.lazy(() => transactionsCreateWithoutDocumentsInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutDocumentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => transactionsCreateOrConnectWithoutDocumentsInputSchema).optional(),
  connect: z.lazy(() => transactionsWhereUniqueInputSchema).optional()
}).strict();

export default transactionsCreateNestedOneWithoutDocumentsInputSchema;
