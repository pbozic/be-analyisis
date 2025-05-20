import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsCreateWithoutReviewableInputSchema } from './reviewsCreateWithoutReviewableInputSchema';
import { reviewsUncheckedCreateWithoutReviewableInputSchema } from './reviewsUncheckedCreateWithoutReviewableInputSchema';
import { reviewsCreateOrConnectWithoutReviewableInputSchema } from './reviewsCreateOrConnectWithoutReviewableInputSchema';
import { reviewsUpsertWithWhereUniqueWithoutReviewableInputSchema } from './reviewsUpsertWithWhereUniqueWithoutReviewableInputSchema';
import { reviewsCreateManyReviewableInputEnvelopeSchema } from './reviewsCreateManyReviewableInputEnvelopeSchema';
import { reviewsWhereUniqueInputSchema } from './reviewsWhereUniqueInputSchema';
import { reviewsUpdateWithWhereUniqueWithoutReviewableInputSchema } from './reviewsUpdateWithWhereUniqueWithoutReviewableInputSchema';
import { reviewsUpdateManyWithWhereWithoutReviewableInputSchema } from './reviewsUpdateManyWithWhereWithoutReviewableInputSchema';
import { reviewsScalarWhereInputSchema } from './reviewsScalarWhereInputSchema';

export const reviewsUpdateManyWithoutReviewableNestedInputSchema: z.ZodType<Prisma.reviewsUpdateManyWithoutReviewableNestedInput> = z.object({
  create: z.union([ z.lazy(() => reviewsCreateWithoutReviewableInputSchema),z.lazy(() => reviewsCreateWithoutReviewableInputSchema).array(),z.lazy(() => reviewsUncheckedCreateWithoutReviewableInputSchema),z.lazy(() => reviewsUncheckedCreateWithoutReviewableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => reviewsCreateOrConnectWithoutReviewableInputSchema),z.lazy(() => reviewsCreateOrConnectWithoutReviewableInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => reviewsUpsertWithWhereUniqueWithoutReviewableInputSchema),z.lazy(() => reviewsUpsertWithWhereUniqueWithoutReviewableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => reviewsCreateManyReviewableInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => reviewsWhereUniqueInputSchema),z.lazy(() => reviewsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => reviewsWhereUniqueInputSchema),z.lazy(() => reviewsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => reviewsWhereUniqueInputSchema),z.lazy(() => reviewsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => reviewsWhereUniqueInputSchema),z.lazy(() => reviewsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => reviewsUpdateWithWhereUniqueWithoutReviewableInputSchema),z.lazy(() => reviewsUpdateWithWhereUniqueWithoutReviewableInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => reviewsUpdateManyWithWhereWithoutReviewableInputSchema),z.lazy(() => reviewsUpdateManyWithWhereWithoutReviewableInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => reviewsScalarWhereInputSchema),z.lazy(() => reviewsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default reviewsUpdateManyWithoutReviewableNestedInputSchema;
