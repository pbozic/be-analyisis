import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsWhereUniqueInputSchema } from './reviewsWhereUniqueInputSchema';
import { reviewsUpdateWithoutAuthorInputSchema } from './reviewsUpdateWithoutAuthorInputSchema';
import { reviewsUncheckedUpdateWithoutAuthorInputSchema } from './reviewsUncheckedUpdateWithoutAuthorInputSchema';
import { reviewsCreateWithoutAuthorInputSchema } from './reviewsCreateWithoutAuthorInputSchema';
import { reviewsUncheckedCreateWithoutAuthorInputSchema } from './reviewsUncheckedCreateWithoutAuthorInputSchema';

export const reviewsUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.reviewsUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => reviewsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => reviewsUpdateWithoutAuthorInputSchema),z.lazy(() => reviewsUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => reviewsCreateWithoutAuthorInputSchema),z.lazy(() => reviewsUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export default reviewsUpsertWithWhereUniqueWithoutAuthorInputSchema;
