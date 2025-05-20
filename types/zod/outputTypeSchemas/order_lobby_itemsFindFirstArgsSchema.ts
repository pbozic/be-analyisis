import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_itemsIncludeSchema } from '../inputTypeSchemas/order_lobby_itemsIncludeSchema';
import { order_lobby_itemsWhereInputSchema } from '../inputTypeSchemas/order_lobby_itemsWhereInputSchema';
import { order_lobby_itemsOrderByWithRelationInputSchema } from '../inputTypeSchemas/order_lobby_itemsOrderByWithRelationInputSchema';
import { order_lobby_itemsWhereUniqueInputSchema } from '../inputTypeSchemas/order_lobby_itemsWhereUniqueInputSchema';
import { Order_lobby_itemsScalarFieldEnumSchema } from '../inputTypeSchemas/Order_lobby_itemsScalarFieldEnumSchema';
import { order_lobbiesArgsSchema } from '../outputTypeSchemas/order_lobbiesArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const order_lobby_itemsSelectSchema: z.ZodType<Prisma.order_lobby_itemsSelect> = z
	.object({
		order_lobby_items_id: z.boolean().optional(),
		order_lobbies_id: z.boolean().optional(),
		menu_item_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		sides: z.boolean().optional(),
		extras: z.boolean().optional(),
		quantity: z.boolean().optional(),
		customer_note: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		order_lobbies: z.union([z.boolean(), z.lazy(() => order_lobbiesArgsSchema)]).optional(),
	})
	.strict();

export const order_lobby_itemsFindFirstArgsSchema: z.ZodType<Prisma.order_lobby_itemsFindFirstArgs> = z
	.object({
		select: order_lobby_itemsSelectSchema.optional(),
		include: order_lobby_itemsIncludeSchema.optional(),
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
		distinct: z
			.union([Order_lobby_itemsScalarFieldEnumSchema, Order_lobby_itemsScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();

export default order_lobby_itemsFindFirstArgsSchema;
