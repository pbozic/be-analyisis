import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereInputSchema } from './order_lobbiesWhereInputSchema';

export const Order_lobbiesRelationFilterSchema: z.ZodType<Prisma.Order_lobbiesRelationFilter> = z
	.object({
		is: z.lazy(() => order_lobbiesWhereInputSchema).optional(),
		isNot: z.lazy(() => order_lobbiesWhereInputSchema).optional(),
	})
	.strict();

export default Order_lobbiesRelationFilterSchema;
