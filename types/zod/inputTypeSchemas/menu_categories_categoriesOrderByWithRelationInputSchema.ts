import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { menu_categoriesOrderByWithRelationInputSchema } from './menu_categoriesOrderByWithRelationInputSchema';
import { categoriesOrderByWithRelationInputSchema } from './categoriesOrderByWithRelationInputSchema';

export const menu_categories_categoriesOrderByWithRelationInputSchema: z.ZodType<Prisma.menu_categories_categoriesOrderByWithRelationInput> =
	z
		.object({
			menu_categories_id: z.lazy(() => SortOrderSchema).optional(),
			categories_id: z.lazy(() => SortOrderSchema).optional(),
			menu_category: z.lazy(() => menu_categoriesOrderByWithRelationInputSchema).optional(),
			category: z.lazy(() => categoriesOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default menu_categories_categoriesOrderByWithRelationInputSchema;
