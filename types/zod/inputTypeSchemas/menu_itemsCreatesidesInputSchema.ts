import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_itemsCreatesidesInputSchema: z.ZodType<Prisma.menu_itemsCreatesidesInput> = z
	.object({
		set: z.string().array(),
	})
	.strict();

export default menu_itemsCreatesidesInputSchema;
