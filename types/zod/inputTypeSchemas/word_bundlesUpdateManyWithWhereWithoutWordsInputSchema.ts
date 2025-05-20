import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_bundlesScalarWhereInputSchema } from './word_bundlesScalarWhereInputSchema';
import { word_bundlesUpdateManyMutationInputSchema } from './word_bundlesUpdateManyMutationInputSchema';
import { word_bundlesUncheckedUpdateManyWithoutWordsInputSchema } from './word_bundlesUncheckedUpdateManyWithoutWordsInputSchema';

export const word_bundlesUpdateManyWithWhereWithoutWordsInputSchema: z.ZodType<Prisma.word_bundlesUpdateManyWithWhereWithoutWordsInput> = z.object({
  where: z.lazy(() => word_bundlesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => word_bundlesUpdateManyMutationInputSchema),z.lazy(() => word_bundlesUncheckedUpdateManyWithoutWordsInputSchema) ]),
}).strict();

export default word_bundlesUpdateManyWithWhereWithoutWordsInputSchema;
