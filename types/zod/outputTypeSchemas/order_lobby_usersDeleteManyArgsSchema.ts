import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_usersWhereInputSchema } from '../inputTypeSchemas/order_lobby_usersWhereInputSchema';

export const order_lobby_usersDeleteManyArgsSchema: z.ZodType<Prisma.order_lobby_usersDeleteManyArgs> = z
	.object({
		where: order_lobby_usersWhereInputSchema.optional(),
	})
	.strict();

export default order_lobby_usersDeleteManyArgsSchema;
