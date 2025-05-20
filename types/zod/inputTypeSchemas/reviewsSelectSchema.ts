import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableArgsSchema } from '../outputTypeSchemas/reviewableArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';

export const reviewsSelectSchema: z.ZodType<Prisma.reviewsSelect> = z
	.object({
		review_id: z.boolean().optional(),
		reviewable_id: z.boolean().optional(),
		author_id: z.boolean().optional(),
		rating: z.boolean().optional(),
		comment: z.boolean().optional(),
		feedback: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		reviewable: z.union([z.boolean(), z.lazy(() => reviewableArgsSchema)]).optional(),
		author: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export default reviewsSelectSchema;
