import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { order_lobby_itemsUpdateManyWithoutOrder_lobbiesNestedInputSchema } from './order_lobby_itemsUpdateManyWithoutOrder_lobbiesNestedInputSchema';
import { order_lobby_usersUpdateManyWithoutOrder_lobbiesNestedInputSchema } from './order_lobby_usersUpdateManyWithoutOrder_lobbiesNestedInputSchema';
import { delivery_ordersUpdateOneWithoutOrder_lobbiesNestedInputSchema } from './delivery_ordersUpdateOneWithoutOrder_lobbiesNestedInputSchema';

export const order_lobbiesUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.order_lobbiesUpdateWithoutBusinessInput> =
	z
		.object({
			order_lobbies_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			lobby_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			lobby_description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			active: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			delivery_location: z
				.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
				.optional(),
			courier_note: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			restaurant_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			creator_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			order_lobby_items: z
				.lazy(() => order_lobby_itemsUpdateManyWithoutOrder_lobbiesNestedInputSchema)
				.optional(),
			order_lobby_users: z
				.lazy(() => order_lobby_usersUpdateManyWithoutOrder_lobbiesNestedInputSchema)
				.optional(),
			delivery_orders: z.lazy(() => delivery_ordersUpdateOneWithoutOrder_lobbiesNestedInputSchema).optional(),
		})
		.strict();

export default order_lobbiesUpdateWithoutBusinessInputSchema;
