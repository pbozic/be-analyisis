import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersCreateManyParent_userInputSchema } from './group_usersCreateManyParent_userInputSchema';

export const group_usersCreateManyParent_userInputEnvelopeSchema: z.ZodType<Prisma.group_usersCreateManyParent_userInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => group_usersCreateManyParent_userInputSchema),z.lazy(() => group_usersCreateManyParent_userInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default group_usersCreateManyParent_userInputEnvelopeSchema;
