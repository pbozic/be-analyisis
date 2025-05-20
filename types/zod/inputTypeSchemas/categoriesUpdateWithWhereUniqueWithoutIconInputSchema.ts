import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateWithoutIconInputSchema } from './categoriesUpdateWithoutIconInputSchema';
import { categoriesUncheckedUpdateWithoutIconInputSchema } from './categoriesUncheckedUpdateWithoutIconInputSchema';

export const categoriesUpdateWithWhereUniqueWithoutIconInputSchema: z.ZodType<Prisma.categoriesUpdateWithWhereUniqueWithoutIconInput> = z.object({
  where: z.lazy(() => categoriesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => categoriesUpdateWithoutIconInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutIconInputSchema) ]),
}).strict();

export default categoriesUpdateWithWhereUniqueWithoutIconInputSchema;
