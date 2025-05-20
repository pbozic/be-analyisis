import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableIncludeSchema } from '../inputTypeSchemas/reviewableIncludeSchema';
import { reviewableUpdateInputSchema } from '../inputTypeSchemas/reviewableUpdateInputSchema';
import { reviewableUncheckedUpdateInputSchema } from '../inputTypeSchemas/reviewableUncheckedUpdateInputSchema';
import { reviewableWhereUniqueInputSchema } from '../inputTypeSchemas/reviewableWhereUniqueInputSchema';
import { reviewsFindManyArgsSchema } from '../outputTypeSchemas/reviewsFindManyArgsSchema';
import { usersFindManyArgsSchema } from '../outputTypeSchemas/usersFindManyArgsSchema';
import { businessFindManyArgsSchema } from '../outputTypeSchemas/businessFindManyArgsSchema';
import { ReviewableCountOutputTypeArgsSchema } from '../outputTypeSchemas/ReviewableCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const reviewableSelectSchema: z.ZodType<Prisma.reviewableSelect> = z
	.object({
		reviewable_id: z.boolean().optional(),
		reviews: z.union([z.boolean(), z.lazy(() => reviewsFindManyArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersFindManyArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ReviewableCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const reviewableUpdateArgsSchema: z.ZodType<Prisma.reviewableUpdateArgs> = z
	.object({
		select: reviewableSelectSchema.optional(),
		include: reviewableIncludeSchema.optional(),
		data: z.union([reviewableUpdateInputSchema, reviewableUncheckedUpdateInputSchema]),
		where: reviewableWhereUniqueInputSchema,
	})
	.strict();

export default reviewableUpdateArgsSchema;
