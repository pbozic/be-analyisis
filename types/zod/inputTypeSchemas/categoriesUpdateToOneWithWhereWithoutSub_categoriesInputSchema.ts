import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';
import { categoriesUpdateWithoutSub_categoriesInputSchema } from './categoriesUpdateWithoutSub_categoriesInputSchema';
import { categoriesUncheckedUpdateWithoutSub_categoriesInputSchema } from './categoriesUncheckedUpdateWithoutSub_categoriesInputSchema';

export const categoriesUpdateToOneWithWhereWithoutSub_categoriesInputSchema: z.ZodType<Prisma.categoriesUpdateToOneWithWhereWithoutSub_categoriesInput> = z.object({
  where: z.lazy(() => categoriesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => categoriesUpdateWithoutSub_categoriesInputSchema),z.lazy(() => categoriesUncheckedUpdateWithoutSub_categoriesInputSchema) ]),
}).strict();

export default categoriesUpdateToOneWithWhereWithoutSub_categoriesInputSchema;
