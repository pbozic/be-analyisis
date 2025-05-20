import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_itemsWhereInputSchema } from '../inputTypeSchemas/order_lobby_itemsWhereInputSchema';

export const order_lobby_itemsDeleteManyArgsSchema: z.ZodType<Prisma.order_lobby_itemsDeleteManyArgs> = z
	.object({
		where: order_lobby_itemsWhereInputSchema.optional(),
	})
	.strict();

export default order_lobby_itemsDeleteManyArgsSchema;
