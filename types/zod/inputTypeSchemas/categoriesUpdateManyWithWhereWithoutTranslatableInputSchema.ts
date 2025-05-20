import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesScalarWhereInputSchema } from './categoriesScalarWhereInputSchema';
import { categoriesUpdateManyMutationInputSchema } from './categoriesUpdateManyMutationInputSchema';
import { categoriesUncheckedUpdateManyWithoutTranslatableInputSchema } from './categoriesUncheckedUpdateManyWithoutTranslatableInputSchema';

export const categoriesUpdateManyWithWhereWithoutTranslatableInputSchema: z.ZodType<Prisma.categoriesUpdateManyWithWhereWithoutTranslatableInput> = z.object({
  where: z.lazy(() => categoriesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => categoriesUpdateManyMutationInputSchema),z.lazy(() => categoriesUncheckedUpdateManyWithoutTranslatableInputSchema) ]),
}).strict();

export default categoriesUpdateManyWithWhereWithoutTranslatableInputSchema;
