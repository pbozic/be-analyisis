import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateWithoutSubscriptionsInputSchema } from './wordsCreateWithoutSubscriptionsInputSchema';
import { wordsUncheckedCreateWithoutSubscriptionsInputSchema } from './wordsUncheckedCreateWithoutSubscriptionsInputSchema';
import { wordsCreateOrConnectWithoutSubscriptionsInputSchema } from './wordsCreateOrConnectWithoutSubscriptionsInputSchema';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';

export const wordsCreateNestedOneWithoutSubscriptionsInputSchema: z.ZodType<Prisma.wordsCreateNestedOneWithoutSubscriptionsInput> = z.object({
  create: z.union([ z.lazy(() => wordsCreateWithoutSubscriptionsInputSchema),z.lazy(() => wordsUncheckedCreateWithoutSubscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => wordsCreateOrConnectWithoutSubscriptionsInputSchema).optional(),
  connect: z.lazy(() => wordsWhereUniqueInputSchema).optional()
}).strict();

export default wordsCreateNestedOneWithoutSubscriptionsInputSchema;
