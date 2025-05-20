import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewableIncludeSchema } from '../inputTypeSchemas/reviewableIncludeSchema';
import { reviewableWhereInputSchema } from '../inputTypeSchemas/reviewableWhereInputSchema';
import { reviewableOrderByWithRelationInputSchema } from '../inputTypeSchemas/reviewableOrderByWithRelationInputSchema';
import { reviewableWhereUniqueInputSchema } from '../inputTypeSchemas/reviewableWhereUniqueInputSchema';
import { ReviewableScalarFieldEnumSchema } from '../inputTypeSchemas/ReviewableScalarFieldEnumSchema';
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

export const reviewableFindFirstOrThrowArgsSchema: z.ZodType<Prisma.reviewableFindFirstOrThrowArgs> = z
	.object({
		select: reviewableSelectSchema.optional(),
		include: reviewableIncludeSchema.optional(),
		where: reviewableWhereInputSchema.optional(),
		orderBy: z
			.union([reviewableOrderByWithRelationInputSchema.array(), reviewableOrderByWithRelationInputSchema])
			.optional(),
		cursor: reviewableWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([ReviewableScalarFieldEnumSchema, ReviewableScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default reviewableFindFirstOrThrowArgsSchema;
