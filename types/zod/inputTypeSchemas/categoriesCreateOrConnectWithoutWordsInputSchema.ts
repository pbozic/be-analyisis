import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesCreateWithoutWordsInputSchema } from './categoriesCreateWithoutWordsInputSchema';
import { categoriesUncheckedCreateWithoutWordsInputSchema } from './categoriesUncheckedCreateWithoutWordsInputSchema';

export const categoriesCreateOrConnectWithoutWordsInputSchema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutWordsInput> = z.object({
  where: z.lazy(() => categoriesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => categoriesCreateWithoutWordsInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutWordsInputSchema) ]),
}).strict();

export default categoriesCreateOrConnectWithoutWordsInputSchema;
