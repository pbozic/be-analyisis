import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereInputSchema } from './menusWhereInputSchema';
import { menusUpdateWithoutCategoriesInputSchema } from './menusUpdateWithoutCategoriesInputSchema';
import { menusUncheckedUpdateWithoutCategoriesInputSchema } from './menusUncheckedUpdateWithoutCategoriesInputSchema';

export const menusUpdateToOneWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.menusUpdateToOneWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => menusWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => menusUpdateWithoutCategoriesInputSchema),z.lazy(() => menusUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export default menusUpdateToOneWithWhereWithoutCategoriesInputSchema;
