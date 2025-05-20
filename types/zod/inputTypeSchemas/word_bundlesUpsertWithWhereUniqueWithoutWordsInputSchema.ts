import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_bundlesWhereUniqueInputSchema } from './word_bundlesWhereUniqueInputSchema';
import { word_bundlesUpdateWithoutWordsInputSchema } from './word_bundlesUpdateWithoutWordsInputSchema';
import { word_bundlesUncheckedUpdateWithoutWordsInputSchema } from './word_bundlesUncheckedUpdateWithoutWordsInputSchema';
import { word_bundlesCreateWithoutWordsInputSchema } from './word_bundlesCreateWithoutWordsInputSchema';
import { word_bundlesUncheckedCreateWithoutWordsInputSchema } from './word_bundlesUncheckedCreateWithoutWordsInputSchema';

export const word_bundlesUpsertWithWhereUniqueWithoutWordsInputSchema: z.ZodType<Prisma.word_bundlesUpsertWithWhereUniqueWithoutWordsInput> = z.object({
  where: z.lazy(() => word_bundlesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => word_bundlesUpdateWithoutWordsInputSchema),z.lazy(() => word_bundlesUncheckedUpdateWithoutWordsInputSchema) ]),
  create: z.union([ z.lazy(() => word_bundlesCreateWithoutWordsInputSchema),z.lazy(() => word_bundlesUncheckedCreateWithoutWordsInputSchema) ]),
}).strict();

export default word_bundlesUpsertWithWhereUniqueWithoutWordsInputSchema;
