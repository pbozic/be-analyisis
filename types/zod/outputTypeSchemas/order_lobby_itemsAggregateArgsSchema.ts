import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_itemsWhereInputSchema } from '../inputTypeSchemas/order_lobby_itemsWhereInputSchema';
import { order_lobby_itemsOrderByWithRelationInputSchema } from '../inputTypeSchemas/order_lobby_itemsOrderByWithRelationInputSchema';
import { order_lobby_itemsWhereUniqueInputSchema } from '../inputTypeSchemas/order_lobby_itemsWhereUniqueInputSchema';

export const order_lobby_itemsAggregateArgsSchema: z.ZodType<Prisma.order_lobby_itemsAggregateArgs> = z
	.object({
		where: order_lobby_itemsWhereInputSchema.optional(),
		orderBy: z
			.union([
				order_lobby_itemsOrderByWithRelationInputSchema.array(),
				order_lobby_itemsOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: order_lobby_itemsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default order_lobby_itemsAggregateArgsSchema;
