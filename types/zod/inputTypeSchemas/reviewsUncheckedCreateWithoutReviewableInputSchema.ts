import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const reviewsUncheckedCreateWithoutReviewableInputSchema: z.ZodType<Prisma.reviewsUncheckedCreateWithoutReviewableInput> = z.object({
  review_id: z.string().uuid().optional(),
  author_id: z.string(),
  rating: z.number().optional().nullable(),
  comment: z.string().optional().nullable(),
  feedback: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default reviewsUncheckedCreateWithoutReviewableInputSchema;
