import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const order_lobby_usersSumOrderByAggregateInputSchema: z.ZodType<Prisma.order_lobby_usersSumOrderByAggregateInput> =
	z
		.object({
			limit: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default order_lobby_usersSumOrderByAggregateInputSchema;
