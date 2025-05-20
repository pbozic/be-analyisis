import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewsWhereInputSchema } from '../inputTypeSchemas/reviewsWhereInputSchema';

export const reviewsDeleteManyArgsSchema: z.ZodType<Prisma.reviewsDeleteManyArgs> = z
	.object({
		where: reviewsWhereInputSchema.optional(),
	})
	.strict();

export default reviewsDeleteManyArgsSchema;
