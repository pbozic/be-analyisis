import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const order_lobbiesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.order_lobbiesMaxOrderByAggregateInput> = z
	.object({
		order_lobbies_id: z.lazy(() => SortOrderSchema).optional(),
		lobby_name: z.lazy(() => SortOrderSchema).optional(),
		lobby_description: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		courier_note: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		restaurant_id: z.lazy(() => SortOrderSchema).optional(),
		creator_id: z.lazy(() => SortOrderSchema).optional(),
		delivery_orders_id: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default order_lobbiesMaxOrderByAggregateInputSchema;
