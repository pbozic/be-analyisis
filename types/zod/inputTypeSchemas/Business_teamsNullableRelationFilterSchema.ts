import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsWhereInputSchema } from './business_teamsWhereInputSchema';

export const Business_teamsNullableRelationFilterSchema: z.ZodType<Prisma.Business_teamsNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => business_teamsWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => business_teamsWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default Business_teamsNullableRelationFilterSchema;
