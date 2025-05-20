import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateWithoutIconInputSchema } from './categoriesUpdateWithoutIconInputSchema';
import { categoriesUncheckedUpdateWithoutIconInputSchema } from './categoriesUncheckedUpdateWithoutIconInputSchema';
import { categoriesCreateWithoutIconInputSchema } from './categoriesCreateWithoutIconInputSchema';
import { categoriesUncheckedCreateWithoutIconInputSchema } from './categoriesUncheckedCreateWithoutIconInputSchema';

export const categoriesUpsertWithWhereUniqueWithoutIconInputSchema: z.ZodType<Prisma.categoriesUpsertWithWhereUniqueWithoutIconInput> = z.object({
  where: z.lazy(() => categoriesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => categoriesUpdateWithoutIconInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutIconInputSchema) ]),
  create: z.union([ z.lazy(() => categoriesCreateWithoutIconInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutIconInputSchema) ]),
}).strict();

export default categoriesUpsertWithWhereUniqueWithoutIconInputSchema;
