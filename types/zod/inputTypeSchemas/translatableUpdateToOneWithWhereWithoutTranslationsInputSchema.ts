import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';
import { translatableUpdateWithoutTranslationsInputSchema } from './translatableUpdateWithoutTranslationsInputSchema';
import { translatableUncheckedUpdateWithoutTranslationsInputSchema } from './translatableUncheckedUpdateWithoutTranslationsInputSchema';

export const translatableUpdateToOneWithWhereWithoutTranslationsInputSchema: z.ZodType<Prisma.translatableUpdateToOneWithWhereWithoutTranslationsInput> = z.object({
  where: z.lazy(() => translatableWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => translatableUpdateWithoutTranslationsInputSchema),z.lazy(() => translatableUncheckedUpdateWithoutTranslationsInputSchema) ]),
}).strict();

export default translatableUpdateToOneWithWhereWithoutTranslationsInputSchema;
