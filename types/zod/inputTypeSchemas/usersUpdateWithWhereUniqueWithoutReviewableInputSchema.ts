import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateWithoutReviewableInputSchema } from './usersUpdateWithoutReviewableInputSchema';
import { usersUncheckedUpdateWithoutReviewableInputSchema } from './usersUncheckedUpdateWithoutReviewableInputSchema';

export const usersUpdateWithWhereUniqueWithoutReviewableInputSchema: z.ZodType<Prisma.usersUpdateWithWhereUniqueWithoutReviewableInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => usersUpdateWithoutReviewableInputSchema),z.lazy(() => usersUncheckedUpdateWithoutReviewableInputSchema) ]),
}).strict();

export default usersUpdateWithWhereUniqueWithoutReviewableInputSchema;
