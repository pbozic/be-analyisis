import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';
import { categoriesUpdateWithoutWordsInputSchema } from './categoriesUpdateWithoutWordsInputSchema';
import { categoriesUncheckedUpdateWithoutWordsInputSchema } from './categoriesUncheckedUpdateWithoutWordsInputSchema';

export const categoriesUpdateToOneWithWhereWithoutWordsInputSchema: z.ZodType<Prisma.categoriesUpdateToOneWithWhereWithoutWordsInput> = z.object({
  where: z.lazy(() => categoriesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => categoriesUpdateWithoutWordsInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutWordsInputSchema) ]),
}).strict();

export default categoriesUpdateToOneWithWhereWithoutWordsInputSchema;
