import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsUpdateWithoutTranslatableInputSchema } from './wordsUpdateWithoutTranslatableInputSchema';
import { wordsUncheckedUpdateWithoutTranslatableInputSchema } from './wordsUncheckedUpdateWithoutTranslatableInputSchema';
import { wordsCreateWithoutTranslatableInputSchema } from './wordsCreateWithoutTranslatableInputSchema';
import { wordsUncheckedCreateWithoutTranslatableInputSchema } from './wordsUncheckedCreateWithoutTranslatableInputSchema';

export const wordsUpsertWithWhereUniqueWithoutTranslatableInputSchema: z.ZodType<Prisma.wordsUpsertWithWhereUniqueWithoutTranslatableInput> = z.object({
  where: z.lazy(() => wordsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => wordsUpdateWithoutTranslatableInputSchema),z.lazy(() => wordsUncheckedUpdateWithoutTranslatableInputSchema) ]),
  create: z.union([ z.lazy(() => wordsCreateWithoutTranslatableInputSchema),z.lazy(() => wordsUncheckedCreateWithoutTranslatableInputSchema) ]),
}).strict();

export default wordsUpsertWithWhereUniqueWithoutTranslatableInputSchema;
