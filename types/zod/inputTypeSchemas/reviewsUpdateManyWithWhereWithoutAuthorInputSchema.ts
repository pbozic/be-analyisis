import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsScalarWhereInputSchema } from './reviewsScalarWhereInputSchema';
import { reviewsUpdateManyMutationInputSchema } from './reviewsUpdateManyMutationInputSchema';
import { reviewsUncheckedUpdateManyWithoutAuthorInputSchema } from './reviewsUncheckedUpdateManyWithoutAuthorInputSchema';

export const reviewsUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.reviewsUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => reviewsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => reviewsUpdateManyMutationInputSchema),z.lazy(() => reviewsUncheckedUpdateManyWithoutAuthorInputSchema) ]),
}).strict();

export default reviewsUpdateManyWithWhereWithoutAuthorInputSchema;
