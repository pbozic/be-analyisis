import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';
import { documentsUpdateManyMutationInputSchema } from './documentsUpdateManyMutationInputSchema';
import { documentsUncheckedUpdateManyWithoutUserInputSchema } from './documentsUncheckedUpdateManyWithoutUserInputSchema';

export const documentsUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.documentsUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => documentsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => documentsUpdateManyMutationInputSchema),z.lazy(() => documentsUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default documentsUpdateManyWithWhereWithoutUserInputSchema;
