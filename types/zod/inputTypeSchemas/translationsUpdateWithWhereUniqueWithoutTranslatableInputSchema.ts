import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsWhereUniqueInputSchema } from './translationsWhereUniqueInputSchema';
import { translationsUpdateWithoutTranslatableInputSchema } from './translationsUpdateWithoutTranslatableInputSchema';
import { translationsUncheckedUpdateWithoutTranslatableInputSchema } from './translationsUncheckedUpdateWithoutTranslatableInputSchema';

export const translationsUpdateWithWhereUniqueWithoutTranslatableInputSchema: z.ZodType<Prisma.translationsUpdateWithWhereUniqueWithoutTranslatableInput> = z.object({
  where: z.lazy(() => translationsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => translationsUpdateWithoutTranslatableInputSchema),z.lazy(() => translationsUncheckedUpdateWithoutTranslatableInputSchema) ]),
}).strict();

export default translationsUpdateWithWhereUniqueWithoutTranslatableInputSchema;
