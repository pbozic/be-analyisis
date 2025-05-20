import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereInputSchema } from './scoring_pointsWhereInputSchema';

export const Scoring_pointsNullableRelationFilterSchema: z.ZodType<Prisma.Scoring_pointsNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => scoring_pointsWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => scoring_pointsWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default Scoring_pointsNullableRelationFilterSchema;
