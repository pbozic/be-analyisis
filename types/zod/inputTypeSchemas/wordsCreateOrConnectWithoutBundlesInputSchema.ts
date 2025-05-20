import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsCreateWithoutBundlesInputSchema } from './wordsCreateWithoutBundlesInputSchema';
import { wordsUncheckedCreateWithoutBundlesInputSchema } from './wordsUncheckedCreateWithoutBundlesInputSchema';

export const wordsCreateOrConnectWithoutBundlesInputSchema: z.ZodType<Prisma.wordsCreateOrConnectWithoutBundlesInput> = z.object({
  where: z.lazy(() => wordsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => wordsCreateWithoutBundlesInputSchema),z.lazy(() => wordsUncheckedCreateWithoutBundlesInputSchema) ]),
}).strict();

export default wordsCreateOrConnectWithoutBundlesInputSchema;
