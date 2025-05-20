import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const menusMaxOrderByAggregateInputSchema: z.ZodType<Prisma.menusMaxOrderByAggregateInput> = z
	.object({
		menu_id: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		isDailyMeal: z.lazy(() => SortOrderSchema).optional(),
		date: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default menusMaxOrderByAggregateInputSchema;
