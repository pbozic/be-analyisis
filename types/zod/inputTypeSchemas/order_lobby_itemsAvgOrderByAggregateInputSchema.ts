import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const order_lobby_itemsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.order_lobby_itemsAvgOrderByAggregateInput> =
	z
		.object({
			quantity: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default order_lobby_itemsAvgOrderByAggregateInputSchema;
