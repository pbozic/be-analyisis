import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const reviewableCountOutputTypeSelectSchema: z.ZodType<Prisma.reviewableCountOutputTypeSelect> = z
	.object({
		reviews: z.boolean().optional(),
		user: z.boolean().optional(),
		business: z.boolean().optional(),
	})
	.strict();

export default reviewableCountOutputTypeSelectSchema;
