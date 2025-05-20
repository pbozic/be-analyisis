import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_itemsWhereInputSchema } from './menu_itemsWhereInputSchema';

export const Menu_itemsNullableRelationFilterSchema: z.ZodType<Prisma.Menu_itemsNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => menu_itemsWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => menu_itemsWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default Menu_itemsNullableRelationFilterSchema;
