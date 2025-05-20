import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsWhereUniqueInputSchema } from './reviewsWhereUniqueInputSchema';
import { reviewsUpdateWithoutAuthorInputSchema } from './reviewsUpdateWithoutAuthorInputSchema';
import { reviewsUncheckedUpdateWithoutAuthorInputSchema } from './reviewsUncheckedUpdateWithoutAuthorInputSchema';

export const reviewsUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.reviewsUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => reviewsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => reviewsUpdateWithoutAuthorInputSchema),z.lazy(() => reviewsUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export default reviewsUpdateWithWhereUniqueWithoutAuthorInputSchema;
