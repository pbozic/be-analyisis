import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewsCreateManyInputSchema } from '../inputTypeSchemas/reviewsCreateManyInputSchema';

export const reviewsCreateManyArgsSchema: z.ZodType<Prisma.reviewsCreateManyArgs> = z
	.object({
		data: z.union([reviewsCreateManyInputSchema, reviewsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default reviewsCreateManyArgsSchema;
