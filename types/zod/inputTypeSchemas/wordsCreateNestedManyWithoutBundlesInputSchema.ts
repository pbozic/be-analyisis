import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateWithoutBundlesInputSchema } from './wordsCreateWithoutBundlesInputSchema';
import { wordsUncheckedCreateWithoutBundlesInputSchema } from './wordsUncheckedCreateWithoutBundlesInputSchema';
import { wordsCreateOrConnectWithoutBundlesInputSchema } from './wordsCreateOrConnectWithoutBundlesInputSchema';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';

export const wordsCreateNestedManyWithoutBundlesInputSchema: z.ZodType<Prisma.wordsCreateNestedManyWithoutBundlesInput> = z.object({
  create: z.union([ z.lazy(() => wordsCreateWithoutBundlesInputSchema),z.lazy(() => wordsCreateWithoutBundlesInputSchema).array(),z.lazy(() => wordsUncheckedCreateWithoutBundlesInputSchema),z.lazy(() => wordsUncheckedCreateWithoutBundlesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => wordsCreateOrConnectWithoutBundlesInputSchema),z.lazy(() => wordsCreateOrConnectWithoutBundlesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => wordsWhereUniqueInputSchema),z.lazy(() => wordsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default wordsCreateNestedManyWithoutBundlesInputSchema;
