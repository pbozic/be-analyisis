import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateManyParent_businessInputSchema } from './businessCreateManyParent_businessInputSchema';

export const businessCreateManyParent_businessInputEnvelopeSchema: z.ZodType<Prisma.businessCreateManyParent_businessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => businessCreateManyParent_businessInputSchema),z.lazy(() => businessCreateManyParent_businessInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default businessCreateManyParent_businessInputEnvelopeSchema;
