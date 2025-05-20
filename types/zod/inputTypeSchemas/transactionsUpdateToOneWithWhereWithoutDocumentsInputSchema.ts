import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereInputSchema } from './transactionsWhereInputSchema';
import { transactionsUpdateWithoutDocumentsInputSchema } from './transactionsUpdateWithoutDocumentsInputSchema';
import { transactionsUncheckedUpdateWithoutDocumentsInputSchema } from './transactionsUncheckedUpdateWithoutDocumentsInputSchema';

export const transactionsUpdateToOneWithWhereWithoutDocumentsInputSchema: z.ZodType<Prisma.transactionsUpdateToOneWithWhereWithoutDocumentsInput> = z.object({
  where: z.lazy(() => transactionsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => transactionsUpdateWithoutDocumentsInputSchema),z.lazy(() => transactionsUncheckedUpdateWithoutDocumentsInputSchema) ]),
}).strict();

export default transactionsUpdateToOneWithWhereWithoutDocumentsInputSchema;
