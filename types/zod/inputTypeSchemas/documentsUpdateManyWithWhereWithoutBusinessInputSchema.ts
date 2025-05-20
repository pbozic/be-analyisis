import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';
import { documentsUpdateManyMutationInputSchema } from './documentsUpdateManyMutationInputSchema';
import { documentsUncheckedUpdateManyWithoutBusinessInputSchema } from './documentsUncheckedUpdateManyWithoutBusinessInputSchema';

export const documentsUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.documentsUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => documentsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => documentsUpdateManyMutationInputSchema),z.lazy(() => documentsUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export default documentsUpdateManyWithWhereWithoutBusinessInputSchema;
