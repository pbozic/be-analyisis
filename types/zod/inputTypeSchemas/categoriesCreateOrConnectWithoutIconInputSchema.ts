import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesCreateWithoutIconInputSchema } from './categoriesCreateWithoutIconInputSchema';
import { categoriesUncheckedCreateWithoutIconInputSchema } from './categoriesUncheckedCreateWithoutIconInputSchema';

export const categoriesCreateOrConnectWithoutIconInputSchema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutIconInput> = z.object({
  where: z.lazy(() => categoriesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => categoriesCreateWithoutIconInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutIconInputSchema) ]),
}).strict();

export default categoriesCreateOrConnectWithoutIconInputSchema;
