import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesUpdateWithoutWordsInputSchema } from './categoriesUpdateWithoutWordsInputSchema';
import { categoriesUncheckedUpdateWithoutWordsInputSchema } from './categoriesUncheckedUpdateWithoutWordsInputSchema';
import { categoriesCreateWithoutWordsInputSchema } from './categoriesCreateWithoutWordsInputSchema';
import { categoriesUncheckedCreateWithoutWordsInputSchema } from './categoriesUncheckedCreateWithoutWordsInputSchema';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';

export const categoriesUpsertWithoutWordsInputSchema: z.ZodType<Prisma.categoriesUpsertWithoutWordsInput> = z.object({
  update: z.union([ z.lazy(() => categoriesUpdateWithoutWordsInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutWordsInputSchema) ]),
  create: z.union([ z.lazy(() => categoriesCreateWithoutWordsInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutWordsInputSchema) ]),
  where: z.lazy(() => categoriesWhereInputSchema).optional()
}).strict();

export default categoriesUpsertWithoutWordsInputSchema;
