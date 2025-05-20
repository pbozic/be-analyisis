import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_usersWhereInputSchema } from '../inputTypeSchemas/order_lobby_usersWhereInputSchema';
import { order_lobby_usersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/order_lobby_usersOrderByWithAggregationInputSchema';
import { Order_lobby_usersScalarFieldEnumSchema } from '../inputTypeSchemas/Order_lobby_usersScalarFieldEnumSchema';
import { order_lobby_usersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/order_lobby_usersScalarWhereWithAggregatesInputSchema';

export const order_lobby_usersGroupByArgsSchema: z.ZodType<Prisma.order_lobby_usersGroupByArgs> = z
	.object({
		where: order_lobby_usersWhereInputSchema.optional(),
		orderBy: z
			.union([
				order_lobby_usersOrderByWithAggregationInputSchema.array(),
				order_lobby_usersOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Order_lobby_usersScalarFieldEnumSchema.array(),
		having: order_lobby_usersScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default order_lobby_usersGroupByArgsSchema;
