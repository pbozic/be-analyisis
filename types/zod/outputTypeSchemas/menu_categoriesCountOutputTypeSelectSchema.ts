import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const menu_categoriesCountOutputTypeSelectSchema: z.ZodType<Prisma.menu_categoriesCountOutputTypeSelect> = z
	.object({
		menu_items: z.boolean().optional(),
		menu_categories_categories: z.boolean().optional(),
		daily_meal_subscribers: z.boolean().optional(),
	})
	.strict();

export default menu_categoriesCountOutputTypeSelectSchema;
