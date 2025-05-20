import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateManyUserInputSchema } from './daily_meals_subscriptionsCreateManyUserInputSchema';

export const daily_meals_subscriptionsCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => daily_meals_subscriptionsCreateManyUserInputSchema),z.lazy(() => daily_meals_subscriptionsCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default daily_meals_subscriptionsCreateManyUserInputEnvelopeSchema;
