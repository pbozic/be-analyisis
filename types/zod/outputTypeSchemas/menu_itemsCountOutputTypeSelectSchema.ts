import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const menu_itemsCountOutputTypeSelectSchema: z.ZodType<Prisma.menu_itemsCountOutputTypeSelect> = z
	.object({
		documents: z.boolean().optional(),
	})
	.strict();

export default menu_itemsCountOutputTypeSelectSchema;
