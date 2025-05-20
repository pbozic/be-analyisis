import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_itemsCreateManyInputSchema } from '../inputTypeSchemas/order_lobby_itemsCreateManyInputSchema';

export const order_lobby_itemsCreateManyArgsSchema: z.ZodType<Prisma.order_lobby_itemsCreateManyArgs> = z
	.object({
		data: z.union([order_lobby_itemsCreateManyInputSchema, order_lobby_itemsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default order_lobby_itemsCreateManyArgsSchema;
