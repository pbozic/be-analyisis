import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsScalarWhereInputSchema } from './wordsScalarWhereInputSchema';
import { wordsUpdateManyMutationInputSchema } from './wordsUpdateManyMutationInputSchema';
import { wordsUncheckedUpdateManyWithoutCategoryInputSchema } from './wordsUncheckedUpdateManyWithoutCategoryInputSchema';

export const wordsUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.wordsUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => wordsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => wordsUpdateManyMutationInputSchema),z.lazy(() => wordsUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export default wordsUpdateManyWithWhereWithoutCategoryInputSchema;
