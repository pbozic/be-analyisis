import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';
import { documentsUpdateManyMutationInputSchema } from './documentsUpdateManyMutationInputSchema';
import { documentsUncheckedUpdateManyWithoutTransactionsInputSchema } from './documentsUncheckedUpdateManyWithoutTransactionsInputSchema';

export const documentsUpdateManyWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.documentsUpdateManyWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => documentsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => documentsUpdateManyMutationInputSchema),z.lazy(() => documentsUncheckedUpdateManyWithoutTransactionsInputSchema) ]),
}).strict();

export default documentsUpdateManyWithWhereWithoutTransactionsInputSchema;
