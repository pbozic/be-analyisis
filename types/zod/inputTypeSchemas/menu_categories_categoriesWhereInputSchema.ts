import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { Menu_categoriesRelationFilterSchema } from './Menu_categoriesRelationFilterSchema';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';
import { CategoriesRelationFilterSchema } from './CategoriesRelationFilterSchema';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';

export const menu_categories_categoriesWhereInputSchema: z.ZodType<Prisma.menu_categories_categoriesWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => menu_categories_categoriesWhereInputSchema),
				z.lazy(() => menu_categories_categoriesWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => menu_categories_categoriesWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => menu_categories_categoriesWhereInputSchema),
				z.lazy(() => menu_categories_categoriesWhereInputSchema).array(),
			])
			.optional(),
		menu_categories_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		categories_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		menu_category: z
			.union([z.lazy(() => Menu_categoriesRelationFilterSchema), z.lazy(() => menu_categoriesWhereInputSchema)])
			.optional(),
		category: z
			.union([z.lazy(() => CategoriesRelationFilterSchema), z.lazy(() => categoriesWhereInputSchema)])
			.optional(),
	})
	.strict();

export default menu_categories_categoriesWhereInputSchema;
