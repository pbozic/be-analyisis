import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';
import { documentsUpdateManyMutationInputSchema } from './documentsUpdateManyMutationInputSchema';
import { documentsUncheckedUpdateManyWithoutDriversInputSchema } from './documentsUncheckedUpdateManyWithoutDriversInputSchema';

export const documentsUpdateManyWithWhereWithoutDriversInputSchema: z.ZodType<Prisma.documentsUpdateManyWithWhereWithoutDriversInput> = z.object({
  where: z.lazy(() => documentsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => documentsUpdateManyMutationInputSchema),z.lazy(() => documentsUncheckedUpdateManyWithoutDriversInputSchema) ]),
}).strict();

export default documentsUpdateManyWithWhereWithoutDriversInputSchema;
