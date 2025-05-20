import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressCreateManyUsersInputSchema } from './user_addressCreateManyUsersInputSchema';

export const user_addressCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.user_addressCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => user_addressCreateManyUsersInputSchema),z.lazy(() => user_addressCreateManyUsersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default user_addressCreateManyUsersInputEnvelopeSchema;
