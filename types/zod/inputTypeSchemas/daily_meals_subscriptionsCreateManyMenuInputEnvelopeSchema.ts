import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateManyMenuInputSchema } from './daily_meals_subscriptionsCreateManyMenuInputSchema';

export const daily_meals_subscriptionsCreateManyMenuInputEnvelopeSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateManyMenuInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => daily_meals_subscriptionsCreateManyMenuInputSchema),z.lazy(() => daily_meals_subscriptionsCreateManyMenuInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default daily_meals_subscriptionsCreateManyMenuInputEnvelopeSchema;
