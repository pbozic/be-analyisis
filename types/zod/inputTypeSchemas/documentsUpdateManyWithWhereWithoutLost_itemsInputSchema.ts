import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';
import { documentsUpdateManyMutationInputSchema } from './documentsUpdateManyMutationInputSchema';
import { documentsUncheckedUpdateManyWithoutLost_itemsInputSchema } from './documentsUncheckedUpdateManyWithoutLost_itemsInputSchema';

export const documentsUpdateManyWithWhereWithoutLost_itemsInputSchema: z.ZodType<Prisma.documentsUpdateManyWithWhereWithoutLost_itemsInput> = z.object({
  where: z.lazy(() => documentsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => documentsUpdateManyMutationInputSchema),z.lazy(() => documentsUncheckedUpdateManyWithoutLost_itemsInputSchema) ]),
}).strict();

export default documentsUpdateManyWithWhereWithoutLost_itemsInputSchema;
