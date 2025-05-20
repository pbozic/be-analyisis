import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';
import { translatableUpdateWithoutCategoriesInputSchema } from './translatableUpdateWithoutCategoriesInputSchema';
import { translatableUncheckedUpdateWithoutCategoriesInputSchema } from './translatableUncheckedUpdateWithoutCategoriesInputSchema';

export const translatableUpdateToOneWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.translatableUpdateToOneWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => translatableWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => translatableUpdateWithoutCategoriesInputSchema),z.lazy(() => translatableUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export default translatableUpdateToOneWithWhereWithoutCategoriesInputSchema;
