import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewsIncludeSchema } from '../inputTypeSchemas/reviewsIncludeSchema'
import { reviewsWhereInputSchema } from '../inputTypeSchemas/reviewsWhereInputSchema'
import { reviewsOrderByWithRelationInputSchema } from '../inputTypeSchemas/reviewsOrderByWithRelationInputSchema'
import { reviewsWhereUniqueInputSchema } from '../inputTypeSchemas/reviewsWhereUniqueInputSchema'
import { ReviewsScalarFieldEnumSchema } from '../inputTypeSchemas/ReviewsScalarFieldEnumSchema'
import { reviewableArgsSchema } from "../outputTypeSchemas/reviewableArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const reviewsSelectSchema: z.ZodType<Prisma.reviewsSelect> = z.object({
  review_id: z.boolean().optional(),
  reviewable_id: z.boolean().optional(),
  author_id: z.boolean().optional(),
  rating: z.boolean().optional(),
  comment: z.boolean().optional(),
  feedback: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  reviewable: z.union([z.boolean(),z.lazy(() => reviewableArgsSchema)]).optional(),
  author: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export const reviewsFindFirstArgsSchema: z.ZodType<Prisma.reviewsFindFirstArgs> = z.object({
  select: reviewsSelectSchema.optional(),
  include: reviewsIncludeSchema.optional(),
  where: reviewsWhereInputSchema.optional(),
  orderBy: z.union([ reviewsOrderByWithRelationInputSchema.array(),reviewsOrderByWithRelationInputSchema ]).optional(),
  cursor: reviewsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReviewsScalarFieldEnumSchema,ReviewsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default reviewsFindFirstArgsSchema;
