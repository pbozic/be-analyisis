import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsCreateManyBusinessInputSchema } from './business_clientsCreateManyBusinessInputSchema';

export const business_clientsCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.business_clientsCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => business_clientsCreateManyBusinessInputSchema),z.lazy(() => business_clientsCreateManyBusinessInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default business_clientsCreateManyBusinessInputEnvelopeSchema;
