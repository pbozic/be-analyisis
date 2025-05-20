import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableCountOutputTypeSelectSchema } from './reviewableCountOutputTypeSelectSchema';

export const reviewableCountOutputTypeArgsSchema: z.ZodType<Prisma.reviewableCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => reviewableCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default reviewableCountOutputTypeSelectSchema;
