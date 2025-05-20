import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsWhereUniqueInputSchema } from './translationsWhereUniqueInputSchema';
import { translationsUpdateWithoutTranslatableInputSchema } from './translationsUpdateWithoutTranslatableInputSchema';
import { translationsUncheckedUpdateWithoutTranslatableInputSchema } from './translationsUncheckedUpdateWithoutTranslatableInputSchema';
import { translationsCreateWithoutTranslatableInputSchema } from './translationsCreateWithoutTranslatableInputSchema';
import { translationsUncheckedCreateWithoutTranslatableInputSchema } from './translationsUncheckedCreateWithoutTranslatableInputSchema';

export const translationsUpsertWithWhereUniqueWithoutTranslatableInputSchema: z.ZodType<Prisma.translationsUpsertWithWhereUniqueWithoutTranslatableInput> = z.object({
  where: z.lazy(() => translationsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => translationsUpdateWithoutTranslatableInputSchema),z.lazy(() => translationsUncheckedUpdateWithoutTranslatableInputSchema) ]),
  create: z.union([ z.lazy(() => translationsCreateWithoutTranslatableInputSchema),z.lazy(() => translationsUncheckedCreateWithoutTranslatableInputSchema) ]),
}).strict();

export default translationsUpsertWithWhereUniqueWithoutTranslatableInputSchema;
