import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const lost_itemsCountOutputTypeSelectSchema: z.ZodType<Prisma.lost_itemsCountOutputTypeSelect> = z
	.object({
		documents: z.boolean().optional(),
	})
	.strict();

export default lost_itemsCountOutputTypeSelectSchema;
