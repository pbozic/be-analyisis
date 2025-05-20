import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const Delivery_ordersNullableRelationFilterSchema: z.ZodType<Prisma.Delivery_ordersNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => delivery_ordersWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => delivery_ordersWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default Delivery_ordersNullableRelationFilterSchema;
