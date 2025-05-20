import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesCreateManyDocumentsInputSchema } from './filesCreateManyDocumentsInputSchema';

export const filesCreateManyDocumentsInputEnvelopeSchema: z.ZodType<Prisma.filesCreateManyDocumentsInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => filesCreateManyDocumentsInputSchema),z.lazy(() => filesCreateManyDocumentsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default filesCreateManyDocumentsInputEnvelopeSchema;
