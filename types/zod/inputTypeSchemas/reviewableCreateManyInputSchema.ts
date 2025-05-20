import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const reviewableCreateManyInputSchema: z.ZodType<Prisma.reviewableCreateManyInput> = z
	.object({
		reviewable_id: z.string().uuid().optional(),
	})
	.strict();

export default reviewableCreateManyInputSchema;
