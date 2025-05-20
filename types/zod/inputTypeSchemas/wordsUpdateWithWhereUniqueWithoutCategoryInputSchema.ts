import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsUpdateWithoutCategoryInputSchema } from './wordsUpdateWithoutCategoryInputSchema';
import { wordsUncheckedUpdateWithoutCategoryInputSchema } from './wordsUncheckedUpdateWithoutCategoryInputSchema';

export const wordsUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.wordsUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => wordsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => wordsUpdateWithoutCategoryInputSchema),z.lazy(() => wordsUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export default wordsUpdateWithWhereUniqueWithoutCategoryInputSchema;
