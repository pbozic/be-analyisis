import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateManyBusinessInputSchema } from './business_usersCreateManyBusinessInputSchema';

export const business_usersCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.business_usersCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => business_usersCreateManyBusinessInputSchema),z.lazy(() => business_usersCreateManyBusinessInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default business_usersCreateManyBusinessInputEnvelopeSchema;
