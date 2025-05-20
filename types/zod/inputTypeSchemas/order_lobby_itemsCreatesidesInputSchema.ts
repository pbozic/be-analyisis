import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const order_lobby_itemsCreatesidesInputSchema: z.ZodType<Prisma.order_lobby_itemsCreatesidesInput> = z
	.object({
		set: z.string().array(),
	})
	.strict();

export default order_lobby_itemsCreatesidesInputSchema;
