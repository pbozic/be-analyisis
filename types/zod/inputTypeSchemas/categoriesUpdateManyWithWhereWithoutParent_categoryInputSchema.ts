import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesScalarWhereInputSchema } from './categoriesScalarWhereInputSchema';
import { categoriesUpdateManyMutationInputSchema } from './categoriesUpdateManyMutationInputSchema';
import { categoriesUncheckedUpdateManyWithoutParent_categoryInputSchema } from './categoriesUncheckedUpdateManyWithoutParent_categoryInputSchema';

export const categoriesUpdateManyWithWhereWithoutParent_categoryInputSchema: z.ZodType<Prisma.categoriesUpdateManyWithWhereWithoutParent_categoryInput> = z.object({
  where: z.lazy(() => categoriesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => categoriesUpdateManyMutationInputSchema),z.lazy(() => categoriesUncheckedUpdateManyWithoutParent_categoryInputSchema) ]),
}).strict();

export default categoriesUpdateManyWithWhereWithoutParent_categoryInputSchema;
