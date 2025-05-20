import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_itemsWhereInputSchema } from '../inputTypeSchemas/order_lobby_itemsWhereInputSchema';
import { order_lobby_itemsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/order_lobby_itemsOrderByWithAggregationInputSchema';
import { Order_lobby_itemsScalarFieldEnumSchema } from '../inputTypeSchemas/Order_lobby_itemsScalarFieldEnumSchema';
import { order_lobby_itemsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/order_lobby_itemsScalarWhereWithAggregatesInputSchema';

export const order_lobby_itemsGroupByArgsSchema: z.ZodType<Prisma.order_lobby_itemsGroupByArgs> = z
	.object({
		where: order_lobby_itemsWhereInputSchema.optional(),
		orderBy: z
			.union([
				order_lobby_itemsOrderByWithAggregationInputSchema.array(),
				order_lobby_itemsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Order_lobby_itemsScalarFieldEnumSchema.array(),
		having: order_lobby_itemsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default order_lobby_itemsGroupByArgsSchema;
