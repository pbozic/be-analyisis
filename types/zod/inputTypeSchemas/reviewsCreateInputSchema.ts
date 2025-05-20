import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { reviewableCreateNestedOneWithoutReviewsInputSchema } from './reviewableCreateNestedOneWithoutReviewsInputSchema';
import { usersCreateNestedOneWithoutReviewsInputSchema } from './usersCreateNestedOneWithoutReviewsInputSchema';

export const reviewsCreateInputSchema: z.ZodType<Prisma.reviewsCreateInput> = z.object({
  review_id: z.string().uuid().optional(),
  rating: z.number().optional().nullable(),
  comment: z.string().optional().nullable(),
  feedback: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  reviewable: z.lazy(() => reviewableCreateNestedOneWithoutReviewsInputSchema),
  author: z.lazy(() => usersCreateNestedOneWithoutReviewsInputSchema)
}).strict();

export default reviewsCreateInputSchema;
