import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_itemsWhereInputSchema } from './order_lobby_itemsWhereInputSchema';

export const Order_lobby_itemsListRelationFilterSchema: z.ZodType<Prisma.Order_lobby_itemsListRelationFilter> = z
	.object({
		every: z.lazy(() => order_lobby_itemsWhereInputSchema).optional(),
		some: z.lazy(() => order_lobby_itemsWhereInputSchema).optional(),
		none: z.lazy(() => order_lobby_itemsWhereInputSchema).optional(),
	})
	.strict();

export default Order_lobby_itemsListRelationFilterSchema;
