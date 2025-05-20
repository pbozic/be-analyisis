import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableSelectSchema } from '../inputTypeSchemas/reviewableSelectSchema';
import { reviewableIncludeSchema } from '../inputTypeSchemas/reviewableIncludeSchema';

export const reviewableArgsSchema: z.ZodType<Prisma.reviewableDefaultArgs> = z
	.object({
		select: z.lazy(() => reviewableSelectSchema).optional(),
		include: z.lazy(() => reviewableIncludeSchema).optional(),
	})
	.strict();

export default reviewableArgsSchema;
