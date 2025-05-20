import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateWithoutSubscriptionsInputSchema } from './wordsCreateWithoutSubscriptionsInputSchema';
import { wordsUncheckedCreateWithoutSubscriptionsInputSchema } from './wordsUncheckedCreateWithoutSubscriptionsInputSchema';
import { wordsCreateOrConnectWithoutSubscriptionsInputSchema } from './wordsCreateOrConnectWithoutSubscriptionsInputSchema';
import { wordsUpsertWithoutSubscriptionsInputSchema } from './wordsUpsertWithoutSubscriptionsInputSchema';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsUpdateToOneWithWhereWithoutSubscriptionsInputSchema } from './wordsUpdateToOneWithWhereWithoutSubscriptionsInputSchema';
import { wordsUpdateWithoutSubscriptionsInputSchema } from './wordsUpdateWithoutSubscriptionsInputSchema';
import { wordsUncheckedUpdateWithoutSubscriptionsInputSchema } from './wordsUncheckedUpdateWithoutSubscriptionsInputSchema';

export const wordsUpdateOneRequiredWithoutSubscriptionsNestedInputSchema: z.ZodType<Prisma.wordsUpdateOneRequiredWithoutSubscriptionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => wordsCreateWithoutSubscriptionsInputSchema),z.lazy(() => wordsUncheckedCreateWithoutSubscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => wordsCreateOrConnectWithoutSubscriptionsInputSchema).optional(),
  upsert: z.lazy(() => wordsUpsertWithoutSubscriptionsInputSchema).optional(),
  connect: z.lazy(() => wordsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => wordsUpdateToOneWithWhereWithoutSubscriptionsInputSchema),z.lazy(() => wordsUpdateWithoutSubscriptionsInputSchema),z.lazy(() => wordsUncheckedUpdateWithoutSubscriptionsInputSchema) ]).optional(),
}).strict();

export default wordsUpdateOneRequiredWithoutSubscriptionsNestedInputSchema;
