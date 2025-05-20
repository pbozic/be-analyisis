import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewsSelectSchema } from '../inputTypeSchemas/reviewsSelectSchema';
import { reviewsIncludeSchema } from '../inputTypeSchemas/reviewsIncludeSchema';

export const reviewsArgsSchema: z.ZodType<Prisma.reviewsDefaultArgs> = z
	.object({
		select: z.lazy(() => reviewsSelectSchema).optional(),
		include: z.lazy(() => reviewsIncludeSchema).optional(),
	})
	.strict();

export default reviewsArgsSchema;
