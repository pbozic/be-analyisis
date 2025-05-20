import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableWhereInputSchema } from '../inputTypeSchemas/reviewableWhereInputSchema';

export const reviewableDeleteManyArgsSchema: z.ZodType<Prisma.reviewableDeleteManyArgs> = z
	.object({
		where: reviewableWhereInputSchema.optional(),
	})
	.strict();

export default reviewableDeleteManyArgsSchema;
