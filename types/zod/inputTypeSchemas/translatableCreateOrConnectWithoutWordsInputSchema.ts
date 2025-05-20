import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';
import { translatableCreateWithoutWordsInputSchema } from './translatableCreateWithoutWordsInputSchema';
import { translatableUncheckedCreateWithoutWordsInputSchema } from './translatableUncheckedCreateWithoutWordsInputSchema';

export const translatableCreateOrConnectWithoutWordsInputSchema: z.ZodType<Prisma.translatableCreateOrConnectWithoutWordsInput> = z.object({
  where: z.lazy(() => translatableWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => translatableCreateWithoutWordsInputSchema),z.lazy(() => translatableUncheckedCreateWithoutWordsInputSchema) ]),
}).strict();

export default translatableCreateOrConnectWithoutWordsInputSchema;
