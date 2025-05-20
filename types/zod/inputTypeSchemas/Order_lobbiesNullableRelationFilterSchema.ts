import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';

export const Order_lobbiesNullableRelationFilterSchema: z.ZodType<Prisma.Order_lobbiesNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => order_lobbiesWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => order_lobbiesWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default Order_lobbiesNullableRelationFilterSchema;
