import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsUpdateWithoutSubscriptionsInputSchema } from './wordsUpdateWithoutSubscriptionsInputSchema';
import { wordsUncheckedUpdateWithoutSubscriptionsInputSchema } from './wordsUncheckedUpdateWithoutSubscriptionsInputSchema';
import { wordsCreateWithoutSubscriptionsInputSchema } from './wordsCreateWithoutSubscriptionsInputSchema';
import { wordsUncheckedCreateWithoutSubscriptionsInputSchema } from './wordsUncheckedCreateWithoutSubscriptionsInputSchema';
import { wordsWhereInputSchema } from './wordsWhereInputSchema';

export const wordsUpsertWithoutSubscriptionsInputSchema: z.ZodType<Prisma.wordsUpsertWithoutSubscriptionsInput> = z.object({
  update: z.union([ z.lazy(() => wordsUpdateWithoutSubscriptionsInputSchema),z.lazy(() => wordsUncheckedUpdateWithoutSubscriptionsInputSchema) ]),
  create: z.union([ z.lazy(() => wordsCreateWithoutSubscriptionsInputSchema),z.lazy(() => wordsUncheckedCreateWithoutSubscriptionsInputSchema) ]),
  where: z.lazy(() => wordsWhereInputSchema).optional()
}).strict();

export default wordsUpsertWithoutSubscriptionsInputSchema;
