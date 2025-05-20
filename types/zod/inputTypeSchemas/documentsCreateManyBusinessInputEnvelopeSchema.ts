import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateManyBusinessInputSchema } from './documentsCreateManyBusinessInputSchema';

export const documentsCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.documentsCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => documentsCreateManyBusinessInputSchema),z.lazy(() => documentsCreateManyBusinessInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default documentsCreateManyBusinessInputEnvelopeSchema;
