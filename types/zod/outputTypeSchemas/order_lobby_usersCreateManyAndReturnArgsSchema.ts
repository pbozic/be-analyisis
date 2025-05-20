import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_usersCreateManyInputSchema } from '../inputTypeSchemas/order_lobby_usersCreateManyInputSchema';

export const order_lobby_usersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.order_lobby_usersCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([order_lobby_usersCreateManyInputSchema, order_lobby_usersCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default order_lobby_usersCreateManyAndReturnArgsSchema;
