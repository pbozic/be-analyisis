import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const categoriesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.categoriesMaxOrderByAggregateInput> = z
	.object({
		categories_id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		tag: z.lazy(() => SortOrderSchema).optional(),
		icon_file_id: z.lazy(() => SortOrderSchema).optional(),
		category_type: z.lazy(() => SortOrderSchema).optional(),
		parent_categories_id: z.lazy(() => SortOrderSchema).optional(),
		translatable_id: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		deleted_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default categoriesMaxOrderByAggregateInputSchema;
