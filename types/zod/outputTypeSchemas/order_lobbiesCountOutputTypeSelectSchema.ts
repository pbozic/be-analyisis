import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const order_lobbiesCountOutputTypeSelectSchema: z.ZodType<Prisma.order_lobbiesCountOutputTypeSelect> = z
	.object({
		order_lobby_items: z.boolean().optional(),
		order_lobby_users: z.boolean().optional(),
	})
	.strict();

export default order_lobbiesCountOutputTypeSelectSchema;
