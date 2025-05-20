import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menu_categoriesArgsSchema } from '../outputTypeSchemas/menu_categoriesArgsSchema';
import { categoriesArgsSchema } from '../outputTypeSchemas/categoriesArgsSchema';

export const menu_categories_categoriesIncludeSchema: z.ZodType<Prisma.menu_categories_categoriesInclude> = z
	.object({
		menu_category: z.union([z.boolean(), z.lazy(() => menu_categoriesArgsSchema)]).optional(),
		category: z.union([z.boolean(), z.lazy(() => categoriesArgsSchema)]).optional(),
	})
	.strict();

export default menu_categories_categoriesIncludeSchema;
