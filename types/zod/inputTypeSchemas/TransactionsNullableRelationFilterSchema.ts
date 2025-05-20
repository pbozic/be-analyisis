import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereInputSchema } from './transactionsWhereInputSchema';

export const TransactionsNullableRelationFilterSchema: z.ZodType<Prisma.TransactionsNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => transactionsWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => transactionsWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default TransactionsNullableRelationFilterSchema;
