import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentWhereInputSchema } from './taxi_order_sentWhereInputSchema';

export const Taxi_order_sentListRelationFilterSchema: z.ZodType<Prisma.Taxi_order_sentListRelationFilter> = z
	.object({
		every: z.lazy(() => taxi_order_sentWhereInputSchema).optional(),
		some: z.lazy(() => taxi_order_sentWhereInputSchema).optional(),
		none: z.lazy(() => taxi_order_sentWhereInputSchema).optional(),
	})
	.strict();

export default Taxi_order_sentListRelationFilterSchema;
