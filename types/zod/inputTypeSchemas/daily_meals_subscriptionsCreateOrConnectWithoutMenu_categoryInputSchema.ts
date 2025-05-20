import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsWhereUniqueInputSchema } from './daily_meals_subscriptionsWhereUniqueInputSchema';
import { daily_meals_subscriptionsCreateWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsCreateWithoutMenu_categoryInputSchema';
import { daily_meals_subscriptionsUncheckedCreateWithoutMenu_categoryInputSchema } from './daily_meals_subscriptionsUncheckedCreateWithoutMenu_categoryInputSchema';

export const daily_meals_subscriptionsCreateOrConnectWithoutMenu_categoryInputSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateOrConnectWithoutMenu_categoryInput> = z.object({
  where: z.lazy(() => daily_meals_subscriptionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => daily_meals_subscriptionsCreateWithoutMenu_categoryInputSchema),z.lazy(() => daily_meals_subscriptionsUncheckedCreateWithoutMenu_categoryInputSchema) ]),
}).strict();

export default daily_meals_subscriptionsCreateOrConnectWithoutMenu_categoryInputSchema;
