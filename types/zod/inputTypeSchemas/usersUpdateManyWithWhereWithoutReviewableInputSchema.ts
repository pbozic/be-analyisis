import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersScalarWhereInputSchema } from './usersScalarWhereInputSchema';
import { usersUpdateManyMutationInputSchema } from './usersUpdateManyMutationInputSchema';
import { usersUncheckedUpdateManyWithoutReviewableInputSchema } from './usersUncheckedUpdateManyWithoutReviewableInputSchema';

export const usersUpdateManyWithWhereWithoutReviewableInputSchema: z.ZodType<Prisma.usersUpdateManyWithWhereWithoutReviewableInput> = z.object({
  where: z.lazy(() => usersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => usersUpdateManyMutationInputSchema),z.lazy(() => usersUncheckedUpdateManyWithoutReviewableInputSchema) ]),
}).strict();

export default usersUpdateManyWithWhereWithoutReviewableInputSchema;
