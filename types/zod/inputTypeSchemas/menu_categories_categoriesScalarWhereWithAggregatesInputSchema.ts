import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';

export const menu_categories_categoriesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.menu_categories_categoriesScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => menu_categories_categoriesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => menu_categories_categoriesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => menu_categories_categoriesScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => menu_categories_categoriesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => menu_categories_categoriesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			menu_categories_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			categories_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		})
		.strict();

export default menu_categories_categoriesScalarWhereWithAggregatesInputSchema;
