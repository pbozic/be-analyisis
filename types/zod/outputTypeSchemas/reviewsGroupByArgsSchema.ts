import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewsWhereInputSchema } from '../inputTypeSchemas/reviewsWhereInputSchema';
import { reviewsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/reviewsOrderByWithAggregationInputSchema';
import { ReviewsScalarFieldEnumSchema } from '../inputTypeSchemas/ReviewsScalarFieldEnumSchema';
import { reviewsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/reviewsScalarWhereWithAggregatesInputSchema';

export const reviewsGroupByArgsSchema: z.ZodType<Prisma.reviewsGroupByArgs> = z
	.object({
		where: reviewsWhereInputSchema.optional(),
		orderBy: z
			.union([reviewsOrderByWithAggregationInputSchema.array(), reviewsOrderByWithAggregationInputSchema])
			.optional(),
		by: ReviewsScalarFieldEnumSchema.array(),
		having: reviewsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default reviewsGroupByArgsSchema;
