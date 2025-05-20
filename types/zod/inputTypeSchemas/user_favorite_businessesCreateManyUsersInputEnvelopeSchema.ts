import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesCreateManyUsersInputSchema } from './user_favorite_businessesCreateManyUsersInputSchema';

export const user_favorite_businessesCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.user_favorite_businessesCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => user_favorite_businessesCreateManyUsersInputSchema),z.lazy(() => user_favorite_businessesCreateManyUsersInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default user_favorite_businessesCreateManyUsersInputEnvelopeSchema;
