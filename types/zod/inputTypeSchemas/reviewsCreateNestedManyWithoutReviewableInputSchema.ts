import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsCreateWithoutReviewableInputSchema } from './reviewsCreateWithoutReviewableInputSchema';
import { reviewsUncheckedCreateWithoutReviewableInputSchema } from './reviewsUncheckedCreateWithoutReviewableInputSchema';
import { reviewsCreateOrConnectWithoutReviewableInputSchema } from './reviewsCreateOrConnectWithoutReviewableInputSchema';
import { reviewsCreateManyReviewableInputEnvelopeSchema } from './reviewsCreateManyReviewableInputEnvelopeSchema';
import { reviewsWhereUniqueInputSchema } from './reviewsWhereUniqueInputSchema';

export const reviewsCreateNestedManyWithoutReviewableInputSchema: z.ZodType<Prisma.reviewsCreateNestedManyWithoutReviewableInput> = z.object({
  create: z.union([ z.lazy(() => reviewsCreateWithoutReviewableInputSchema),z.lazy(() => reviewsCreateWithoutReviewableInputSchema).array(),z.lazy(() => reviewsUncheckedCreateWithoutReviewableInputSchema),z.lazy(() => reviewsUncheckedCreateWithoutReviewableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => reviewsCreateOrConnectWithoutReviewableInputSchema),z.lazy(() => reviewsCreateOrConnectWithoutReviewableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => reviewsCreateManyReviewableInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => reviewsWhereUniqueInputSchema),z.lazy(() => reviewsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default reviewsCreateNestedManyWithoutReviewableInputSchema;
