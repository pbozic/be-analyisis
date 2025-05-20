import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewsCreateManyInputSchema } from '../inputTypeSchemas/reviewsCreateManyInputSchema';

export const reviewsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.reviewsCreateManyAndReturnArgs> = z
	.object({
		data: z.union([reviewsCreateManyInputSchema, reviewsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default reviewsCreateManyAndReturnArgsSchema;
