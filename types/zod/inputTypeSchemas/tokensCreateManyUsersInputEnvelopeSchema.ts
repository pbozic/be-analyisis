import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { tokensCreateManyUsersInputSchema } from './tokensCreateManyUsersInputSchema';

export const tokensCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.tokensCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => tokensCreateManyUsersInputSchema),z.lazy(() => tokensCreateManyUsersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default tokensCreateManyUsersInputEnvelopeSchema;
