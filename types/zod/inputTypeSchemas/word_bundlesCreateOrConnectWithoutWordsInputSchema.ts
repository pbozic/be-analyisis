import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_bundlesWhereUniqueInputSchema } from './word_bundlesWhereUniqueInputSchema';
import { word_bundlesCreateWithoutWordsInputSchema } from './word_bundlesCreateWithoutWordsInputSchema';
import { word_bundlesUncheckedCreateWithoutWordsInputSchema } from './word_bundlesUncheckedCreateWithoutWordsInputSchema';

export const word_bundlesCreateOrConnectWithoutWordsInputSchema: z.ZodType<Prisma.word_bundlesCreateOrConnectWithoutWordsInput> = z.object({
  where: z.lazy(() => word_bundlesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => word_bundlesCreateWithoutWordsInputSchema),z.lazy(() => word_bundlesUncheckedCreateWithoutWordsInputSchema) ]),
}).strict();

export default word_bundlesCreateOrConnectWithoutWordsInputSchema;
