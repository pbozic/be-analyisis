import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const BusinessNullableRelationFilterSchema: z.ZodType<Prisma.BusinessNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => businessWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => businessWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default BusinessNullableRelationFilterSchema;
