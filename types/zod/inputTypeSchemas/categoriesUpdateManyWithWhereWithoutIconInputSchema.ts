import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesScalarWhereInputSchema } from './categoriesScalarWhereInputSchema';
import { categoriesUpdateManyMutationInputSchema } from './categoriesUpdateManyMutationInputSchema';
import { categoriesUncheckedUpdateManyWithoutIconInputSchema } from './categoriesUncheckedUpdateManyWithoutIconInputSchema';

export const categoriesUpdateManyWithWhereWithoutIconInputSchema: z.ZodType<Prisma.categoriesUpdateManyWithWhereWithoutIconInput> = z.object({
  where: z.lazy(() => categoriesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => categoriesUpdateManyMutationInputSchema),z.lazy(() => categoriesUncheckedUpdateManyWithoutIconInputSchema) ]),
}).strict();

export default categoriesUpdateManyWithWhereWithoutIconInputSchema;
