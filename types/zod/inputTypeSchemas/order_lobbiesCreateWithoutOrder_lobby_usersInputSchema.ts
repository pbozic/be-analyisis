import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { order_lobby_itemsCreateNestedManyWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsCreateNestedManyWithoutOrder_lobbiesInputSchema';
import { delivery_ordersCreateNestedOneWithoutOrder_lobbiesInputSchema } from './delivery_ordersCreateNestedOneWithoutOrder_lobbiesInputSchema';
import { businessCreateNestedOneWithoutBusiness_order_lobbiesInputSchema } from './businessCreateNestedOneWithoutBusiness_order_lobbiesInputSchema';

export const order_lobbiesCreateWithoutOrder_lobby_usersInputSchema: z.ZodType<Prisma.order_lobbiesCreateWithoutOrder_lobby_usersInput> =
	z
		.object({
			order_lobbies_id: z.string().uuid().optional(),
			lobby_name: z.string(),
			lobby_description: z.string(),
			active: z.boolean().optional(),
			delivery_location: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			courier_note: z.string().optional().nullable(),
			restaurant_id: z.string(),
			creator_id: z.string(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			order_lobby_items: z
				.lazy(() => order_lobby_itemsCreateNestedManyWithoutOrder_lobbiesInputSchema)
				.optional(),
			delivery_orders: z.lazy(() => delivery_ordersCreateNestedOneWithoutOrder_lobbiesInputSchema).optional(),
			business: z.lazy(() => businessCreateNestedOneWithoutBusiness_order_lobbiesInputSchema).optional(),
		})
		.strict();

export default order_lobbiesCreateWithoutOrder_lobby_usersInputSchema;
