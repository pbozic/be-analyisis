import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const order_lobby_itemsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.order_lobby_itemsOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default order_lobby_itemsOrderByRelationAggregateInputSchema;
