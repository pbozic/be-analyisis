import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reviewsFindManyArgsSchema } from '../outputTypeSchemas/reviewsFindManyArgsSchema';
import { usersFindManyArgsSchema } from '../outputTypeSchemas/usersFindManyArgsSchema';
import { businessFindManyArgsSchema } from '../outputTypeSchemas/businessFindManyArgsSchema';
import { ReviewableCountOutputTypeArgsSchema } from '../outputTypeSchemas/ReviewableCountOutputTypeArgsSchema';

export const reviewableIncludeSchema: z.ZodType<Prisma.reviewableInclude> = z
	.object({
		reviews: z.union([z.boolean(), z.lazy(() => reviewsFindManyArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersFindManyArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ReviewableCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default reviewableIncludeSchema;
