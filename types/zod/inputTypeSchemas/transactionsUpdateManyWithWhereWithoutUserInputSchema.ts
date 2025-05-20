import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsScalarWhereInputSchema } from './transactionsScalarWhereInputSchema';
import { transactionsUpdateManyMutationInputSchema } from './transactionsUpdateManyMutationInputSchema';
import { transactionsUncheckedUpdateManyWithoutUserInputSchema } from './transactionsUncheckedUpdateManyWithoutUserInputSchema';

export const transactionsUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.transactionsUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => transactionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => transactionsUpdateManyMutationInputSchema),z.lazy(() => transactionsUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default transactionsUpdateManyWithWhereWithoutUserInputSchema;
