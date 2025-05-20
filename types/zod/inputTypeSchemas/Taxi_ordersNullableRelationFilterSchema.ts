import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const Taxi_ordersNullableRelationFilterSchema: z.ZodType<Prisma.Taxi_ordersNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => taxi_ordersWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => taxi_ordersWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default Taxi_ordersNullableRelationFilterSchema;
