import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateManyDelivery_addressInputSchema } from './businessCreateManyDelivery_addressInputSchema';

export const businessCreateManyDelivery_addressInputEnvelopeSchema: z.ZodType<Prisma.businessCreateManyDelivery_addressInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => businessCreateManyDelivery_addressInputSchema),z.lazy(() => businessCreateManyDelivery_addressInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default businessCreateManyDelivery_addressInputEnvelopeSchema;
