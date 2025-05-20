import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateWithoutTranslatableInputSchema } from './categoriesUpdateWithoutTranslatableInputSchema';
import { categoriesUncheckedUpdateWithoutTranslatableInputSchema } from './categoriesUncheckedUpdateWithoutTranslatableInputSchema';

export const categoriesUpdateWithWhereUniqueWithoutTranslatableInputSchema: z.ZodType<Prisma.categoriesUpdateWithWhereUniqueWithoutTranslatableInput> = z.object({
  where: z.lazy(() => categoriesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => categoriesUpdateWithoutTranslatableInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutTranslatableInputSchema) ]),
}).strict();

export default categoriesUpdateWithWhereUniqueWithoutTranslatableInputSchema;
