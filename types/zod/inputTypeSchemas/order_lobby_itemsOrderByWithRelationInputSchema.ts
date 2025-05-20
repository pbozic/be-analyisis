import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { order_lobbiesOrderByWithRelationInputSchema } from './order_lobbiesOrderByWithRelationInputSchema';

export const order_lobby_itemsOrderByWithRelationInputSchema: z.ZodType<Prisma.order_lobby_itemsOrderByWithRelationInput> =
	z
		.object({
			order_lobby_items_id: z.lazy(() => SortOrderSchema).optional(),
			order_lobbies_id: z.lazy(() => SortOrderSchema).optional(),
			menu_item_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			sides: z.lazy(() => SortOrderSchema).optional(),
			extras: z.lazy(() => SortOrderSchema).optional(),
			quantity: z.lazy(() => SortOrderSchema).optional(),
			customer_note: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			order_lobbies: z.lazy(() => order_lobbiesOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default order_lobby_itemsOrderByWithRelationInputSchema;
