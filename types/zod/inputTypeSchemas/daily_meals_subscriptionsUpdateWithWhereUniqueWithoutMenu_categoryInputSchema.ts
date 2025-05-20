import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsUpdateWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsUpdateWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsUncheckedUpdateWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsUncheckedUpdateWithoutMenu_categoryInputSchema';

export const daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenu_categoryInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => daily_meals_subscriptionsUpdateWithoutMenu_categoryInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedUpdateWithoutMenu_categoryInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsUpdateWithWhereUniqueWithoutMenu_categoryInputSchema;
