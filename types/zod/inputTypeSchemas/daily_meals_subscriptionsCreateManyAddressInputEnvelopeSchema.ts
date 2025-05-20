import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { daily_meals_subscriptionsCreateManyAddressInputSchema } from './daily_meals_subscriptionsCreateManyAddressInputSchema';

export const daily_meals_subscriptionsCreateManyAddressInputEnvelopeSchema: z.ZodType<Prisma.daily_meals_subscriptionsCreateManyAddressInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => daily_meals_subscriptionsCreateManyAddressInputSchema),z.lazy(() => daily_meals_subscriptionsCreateManyAddressInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default daily_meals_subscriptionsCreateManyAddressInputEnvelopeSchema;
