import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';

export const CategoriesNullableRelationFilterSchema: z.ZodType<Prisma.CategoriesNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => categoriesWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => categoriesWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default CategoriesNullableRelationFilterSchema;
