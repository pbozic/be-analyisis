import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesUpdateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUpdateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesUncheckedUpdateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUncheckedUpdateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema } from './menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';

export const menu_categoriesUpsertWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menu_categoriesUpsertWithoutDaily_meal_subscribersInput> = z.object({
  update: z.union([ z.lazy(() => menu_categoriesUpdateWithoutDaily_meal_subscribersInputSchema),z.lazy(() => menu_categoriesUncheckedUpdateWithoutDaily_meal_subscribersInputSchema) ]),
  create: z.union([ z.lazy(() => menu_categoriesCreateWithoutDaily_meal_subscribersInputSchema),z.lazy(() => menu_categoriesUncheckedCreateWithoutDaily_meal_subscribersInputSchema) ]),
  where: z.lazy(() => menu_categoriesWhereInputSchema).optional()
}).strict();

export default menu_categoriesUpsertWithoutDaily_meal_subscribersInputSchema;
