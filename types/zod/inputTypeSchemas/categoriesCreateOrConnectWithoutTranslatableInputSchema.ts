import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesCreateWithoutTranslatableInputSchema } from './categoriesCreateWithoutTranslatableInputSchema';
import { categoriesUncheckedCreateWithoutTranslatableInputSchema } from './categoriesUncheckedCreateWithoutTranslatableInputSchema';

export const categoriesCreateOrConnectWithoutTranslatableInputSchema: z.ZodType<Prisma.categoriesCreateOrConnectWithoutTranslatableInput> = z.object({
  where: z.lazy(() => categoriesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => categoriesCreateWithoutTranslatableInputSchema),z.lazy(() => categoriesUncheckedCreateWithoutTranslatableInputSchema) ]),
}).strict();

export default categoriesCreateOrConnectWithoutTranslatableInputSchema;
