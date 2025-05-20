import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewsWhereInputSchema } from '../inputTypeSchemas/reviewsWhereInputSchema';
import { reviewsOrderByWithRelationInputSchema } from '../inputTypeSchemas/reviewsOrderByWithRelationInputSchema';
import { reviewsWhereUniqueInputSchema } from '../inputTypeSchemas/reviewsWhereUniqueInputSchema';

export const reviewsAggregateArgsSchema: z.ZodType<Prisma.reviewsAggregateArgs> = z
	.object({
		where: reviewsWhereInputSchema.optional(),
		orderBy: z
			.union([reviewsOrderByWithRelationInputSchema.array(), reviewsOrderByWithRelationInputSchema])
			.optional(),
		cursor: reviewsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default reviewsAggregateArgsSchema;
