import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateWithoutReviewableInputSchema } from './usersUpdateWithoutReviewableInputSchema';
import { usersUncheckedUpdateWithoutReviewableInputSchema } from './usersUncheckedUpdateWithoutReviewableInputSchema';
import { usersCreateWithoutReviewableInputSchema } from './usersCreateWithoutReviewableInputSchema';
import { usersUncheckedCreateWithoutReviewableInputSchema } from './usersUncheckedCreateWithoutReviewableInputSchema';

export const usersUpsertWithWhereUniqueWithoutReviewableInputSchema: z.ZodType<Prisma.usersUpsertWithWhereUniqueWithoutReviewableInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => usersUpdateWithoutReviewableInputSchema),z.lazy(() => usersUncheckedUpdateWithoutReviewableInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutReviewableInputSchema),z.lazy(() => usersUncheckedCreateWithoutReviewableInputSchema) ]),
}).strict();

export default usersUpsertWithWhereUniqueWithoutReviewableInputSchema;
