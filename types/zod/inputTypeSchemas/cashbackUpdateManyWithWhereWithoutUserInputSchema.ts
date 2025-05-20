import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackScalarWhereInputSchema } from './cashbackScalarWhereInputSchema';
import { cashbackUpdateManyMutationInputSchema } from './cashbackUpdateManyMutationInputSchema';
import { cashbackUncheckedUpdateManyWithoutUserInputSchema } from './cashbackUncheckedUpdateManyWithoutUserInputSchema';

export const cashbackUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.cashbackUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => cashbackScalarWhereInputSchema),
  data: z.union([ z.lazy(() => cashbackUpdateManyMutationInputSchema),z.lazy(() => cashbackUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default cashbackUpdateManyWithWhereWithoutUserInputSchema;
