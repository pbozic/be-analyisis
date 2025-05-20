import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_itemsUpdateManyMutationInputSchema } from '../inputTypeSchemas/order_lobby_itemsUpdateManyMutationInputSchema';
import { order_lobby_itemsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/order_lobby_itemsUncheckedUpdateManyInputSchema';
import { order_lobby_itemsWhereInputSchema } from '../inputTypeSchemas/order_lobby_itemsWhereInputSchema';

export const order_lobby_itemsUpdateManyArgsSchema: z.ZodType<Prisma.order_lobby_itemsUpdateManyArgs> = z
	.object({
		data: z.union([
			order_lobby_itemsUpdateManyMutationInputSchema,
			order_lobby_itemsUncheckedUpdateManyInputSchema,
		]),
		where: order_lobby_itemsWhereInputSchema.optional(),
	})
	.strict();

export default order_lobby_itemsUpdateManyArgsSchema;
