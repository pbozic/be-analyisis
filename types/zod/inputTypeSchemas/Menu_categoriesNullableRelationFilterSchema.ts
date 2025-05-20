import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesWhereInputSchema } from './menu_categoriesWhereInputSchema';

export const Menu_categoriesNullableRelationFilterSchema: z.ZodType<Prisma.Menu_categoriesNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => menu_categoriesWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => menu_categoriesWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default Menu_categoriesNullableRelationFilterSchema;
