import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const menusCountOutputTypeSelectSchema: z.ZodType<Prisma.menusCountOutputTypeSelect> = z
	.object({
		categories: z.boolean().optional(),
		daily_meal_subscribers: z.boolean().optional(),
	})
	.strict();

export default menusCountOutputTypeSelectSchema;
