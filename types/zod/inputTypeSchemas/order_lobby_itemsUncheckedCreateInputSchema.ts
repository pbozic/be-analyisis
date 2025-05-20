import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_itemsCreatesidesInputSchema } from './order_lobby_itemsCreatesidesInputSchema';
import { order_lobby_itemsCreateextrasInputSchema } from './order_lobby_itemsCreateextrasInputSchema';

export const order_lobby_itemsUncheckedCreateInputSchema: z.ZodType<Prisma.order_lobby_itemsUncheckedCreateInput> = z
	.object({
		order_lobby_items_id: z.string().uuid().optional(),
		order_lobbies_id: z.string(),
		menu_item_id: z.string(),
		user_id: z.string().optional().nullable(),
		sides: z.union([z.lazy(() => order_lobby_itemsCreatesidesInputSchema), z.string().array()]).optional(),
		extras: z.union([z.lazy(() => order_lobby_itemsCreateextrasInputSchema), z.string().array()]).optional(),
		quantity: z.number().int(),
		customer_note: z.string().optional().nullable(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default order_lobby_itemsUncheckedCreateInputSchema;
