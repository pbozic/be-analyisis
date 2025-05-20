import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';
import { menu_categoriesUpdateWithoutMenuInputSchema } from './menu_categoriesUpdateWithoutMenuInputSchema';
import { menu_categoriesUncheckedUpdateWithoutMenuInputSchema } from './menu_categoriesUncheckedUpdateWithoutMenuInputSchema';

export const menu_categoriesUpdateWithWhereUniqueWithoutMenuInputSchema: z.ZodType<Prisma.menu_categoriesUpdateWithWhereUniqueWithoutMenuInput> = z.object({
  where: z.lazy(() => menu_categoriesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => menu_categoriesUpdateWithoutMenuInputSchema),z.lazy(() => menu_categoriesUncheckedUpdateWithoutMenuInputSchema) ]),
}).strict();

export default menu_categoriesUpdateWithWhereUniqueWithoutMenuInputSchema;
