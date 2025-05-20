import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsUpdateWithoutDocumentsInputSchema } from './transactionsUpdateWithoutDocumentsInputSchema';
import { transactionsUncheckedUpdateWithoutDocumentsInputSchema } from './transactionsUncheckedUpdateWithoutDocumentsInputSchema';
import { transactionsCreateWithoutDocumentsInputSchema } from './transactionsCreateWithoutDocumentsInputSchema';
import { transactionsUncheckedCreateWithoutDocumentsInputSchema } from './transactionsUncheckedCreateWithoutDocumentsInputSchema';
import { transactionsWhereInputSchema } from './transactionsWhereInputSchema';

export const transactionsUpsertWithoutDocumentsInputSchema: z.ZodType<Prisma.transactionsUpsertWithoutDocumentsInput> = z.object({
  update: z.union([ z.lazy(() => transactionsUpdateWithoutDocumentsInputSchema),z.lazy(() => transactionsUncheckedUpdateWithoutDocumentsInputSchema) ]),
  create: z.union([ z.lazy(() => transactionsCreateWithoutDocumentsInputSchema),z.lazy(() => transactionsUncheckedCreateWithoutDocumentsInputSchema) ]),
  where: z.lazy(() => transactionsWhereInputSchema).optional()
}).strict();

export default transactionsUpsertWithoutDocumentsInputSchema;
