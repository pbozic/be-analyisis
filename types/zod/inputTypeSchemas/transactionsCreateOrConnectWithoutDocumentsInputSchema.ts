import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsCreateWithoutDocumentsInputSchema } from './transactionsCreateWithoutDocumentsInputSchema';
import { transactionsUncheckedCreateWithoutDocumentsInputSchema } from './transactionsUncheckedCreateWithoutDocumentsInputSchema';

export const transactionsCreateOrConnectWithoutDocumentsInputSchema: z.ZodType<Prisma.transactionsCreateOrConnectWithoutDocumentsInput> = z.object({
  where: z.lazy(() => transactionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => transactionsCreateWithoutDocumentsInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutDocumentsInputSchema) ]),
}).strict();

export default transactionsCreateOrConnectWithoutDocumentsInputSchema;
