import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereInputSchema } from './menusWhereInputSchema';
import { menusUpdateWithoutDaily_meal_subscribersInputSchema } from './menusUpdateWithoutDaily_meal_subscribersInputSchema';
import { menusUncheckedUpdateWithoutDaily_meal_subscribersInputSchema } from './menusUncheckedUpdateWithoutDaily_meal_subscribersInputSchema';

export const menusUpdateToOneWithWhereWithoutDaily_meal_subscribersInputSchema: z.ZodType<Prisma.menusUpdateToOneWithWhereWithoutDaily_meal_subscribersInput> = z.object({
  where: z.lazy(() => menusWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => menusUpdateWithoutDaily_meal_subscribersInputSchema),z.lazy(() => menusUncheckedUpdateWithoutDaily_meal_subscribersInputSchema) ]),
}).strict();

export default menusUpdateToOneWithWhereWithoutDaily_meal_subscribersInputSchema;
