import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsWhereInputSchema } from './business_clientsWhereInputSchema';

export const Business_clientsNullableRelationFilterSchema: z.ZodType<Prisma.Business_clientsNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => business_clientsWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => business_clientsWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default Business_clientsNullableRelationFilterSchema;
