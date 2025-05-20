import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereInputSchema } from './wordsWhereInputSchema';
import { wordsUpdateWithoutSubscriptionsInputSchema } from './wordsUpdateWithoutSubscriptionsInputSchema';
import { wordsUncheckedUpdateWithoutSubscriptionsInputSchema } from './wordsUncheckedUpdateWithoutSubscriptionsInputSchema';

export const wordsUpdateToOneWithWhereWithoutSubscriptionsInputSchema: z.ZodType<Prisma.wordsUpdateToOneWithWhereWithoutSubscriptionsInput> = z.object({
  where: z.lazy(() => wordsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => wordsUpdateWithoutSubscriptionsInputSchema),z.lazy(() => wordsUncheckedUpdateWithoutSubscriptionsInputSchema) ]),
}).strict();

export default wordsUpdateToOneWithWhereWithoutSubscriptionsInputSchema;
