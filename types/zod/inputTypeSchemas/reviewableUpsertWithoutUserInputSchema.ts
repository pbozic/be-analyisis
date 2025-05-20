import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewableUpdateWithoutUserInputSchema } from './reviewableUpdateWithoutUserInputSchema';
import { reviewableUncheckedUpdateWithoutUserInputSchema } from './reviewableUncheckedUpdateWithoutUserInputSchema';
import { reviewableCreateWithoutUserInputSchema } from './reviewableCreateWithoutUserInputSchema';
import { reviewableUncheckedCreateWithoutUserInputSchema } from './reviewableUncheckedCreateWithoutUserInputSchema';
import { reviewableWhereInputSchema } from './reviewableWhereInputSchema';

export const reviewableUpsertWithoutUserInputSchema: z.ZodType<Prisma.reviewableUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => reviewableUpdateWithoutUserInputSchema),z.lazy(() => reviewableUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => reviewableCreateWithoutUserInputSchema),z.lazy(() => reviewableUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => reviewableWhereInputSchema).optional()
}).strict();

export default reviewableUpsertWithoutUserInputSchema;
