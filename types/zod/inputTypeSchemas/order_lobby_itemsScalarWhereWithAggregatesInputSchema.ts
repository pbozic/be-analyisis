import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const order_lobby_itemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.order_lobby_itemsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => order_lobby_itemsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => order_lobby_itemsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => order_lobby_itemsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => order_lobby_itemsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => order_lobby_itemsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			order_lobby_items_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			order_lobbies_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			menu_item_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			user_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			sides: z.lazy(() => StringNullableListFilterSchema).optional(),
			extras: z.lazy(() => StringNullableListFilterSchema).optional(),
			quantity: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			customer_note: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default order_lobby_itemsScalarWhereWithAggregatesInputSchema;
