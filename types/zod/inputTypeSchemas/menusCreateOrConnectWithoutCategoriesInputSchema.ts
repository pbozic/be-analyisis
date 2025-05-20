import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';
import { menusCreateWithoutCategoriesInputSchema } from './menusCreateWithoutCategoriesInputSchema';
import { menusUncheckedCreateWithoutCategoriesInputSchema } from './menusUncheckedCreateWithoutCategoriesInputSchema';

export const menusCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.menusCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => menusWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => menusCreateWithoutCategoriesInputSchema),z.lazy(() => menusUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export default menusCreateOrConnectWithoutCategoriesInputSchema;
