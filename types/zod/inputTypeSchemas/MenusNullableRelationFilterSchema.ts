import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusWhereInputSchema } from './menusWhereInputSchema';

export const MenusNullableRelationFilterSchema: z.ZodType<Prisma.MenusNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => menusWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => menusWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default MenusNullableRelationFilterSchema;
