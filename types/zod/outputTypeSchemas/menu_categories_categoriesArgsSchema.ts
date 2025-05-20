import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categories_categoriesSelectSchema } from '../inputTypeSchemas/menu_categories_categoriesSelectSchema';
import { menu_categories_categoriesIncludeSchema } from '../inputTypeSchemas/menu_categories_categoriesIncludeSchema';

export const menu_categories_categoriesArgsSchema: z.ZodType<Prisma.menu_categories_categoriesDefaultArgs> = z
	.object({
		select: z.lazy(() => menu_categories_categoriesSelectSchema).optional(),
		include: z.lazy(() => menu_categories_categoriesIncludeSchema).optional(),
	})
	.strict();

export default menu_categories_categoriesArgsSchema;
