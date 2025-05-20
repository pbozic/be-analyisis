import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const menu_itemsCreateextrasInputSchema: z.ZodType<Prisma.menu_itemsCreateextrasInput> = z
	.object({
		set: z.string().array(),
	})
	.strict();

export default menu_itemsCreateextrasInputSchema;
