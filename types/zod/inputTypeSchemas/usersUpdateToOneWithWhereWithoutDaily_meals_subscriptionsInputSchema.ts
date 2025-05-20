import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutDaily_meals_subscriptionsInputSchema } from './usersUpdateWithoutDaily_meals_subscriptionsInputSchema';
import { usersUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema } from './usersUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema';

export const usersUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutDaily_meals_subscriptionsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutDaily_meals_subscriptionsInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutDaily_meals_subscriptionsInputSchema;
