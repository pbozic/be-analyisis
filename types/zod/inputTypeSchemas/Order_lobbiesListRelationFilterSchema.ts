import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';

export const Order_lobbiesListRelationFilterSchema: z.ZodType<Prisma.Order_lobbiesListRelationFilter> = z
	.object({
		every: z.lazy(() => order_lobbiesWhereInputSchema).optional(),
		some: z.lazy(() => order_lobbiesWhereInputSchema).optional(),
		none: z.lazy(() => order_lobbiesWhereInputSchema).optional(),
	})
	.strict();

export default Order_lobbiesListRelationFilterSchema;
