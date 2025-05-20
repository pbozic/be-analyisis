import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsScalarWhereInputSchema } from './lost_itemsScalarWhereInputSchema';
import { lost_itemsUpdateManyMutationInputSchema } from './lost_itemsUpdateManyMutationInputSchema';
import { lost_itemsUncheckedUpdateManyWithoutUserInputSchema } from './lost_itemsUncheckedUpdateManyWithoutUserInputSchema';

export const lost_itemsUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.lost_itemsUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => lost_itemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => lost_itemsUpdateManyMutationInputSchema),z.lazy(() => lost_itemsUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default lost_itemsUpdateManyWithWhereWithoutUserInputSchema;
