import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { translationsCountOrderByAggregateInputSchema } from './translationsCountOrderByAggregateInputSchema';
import { translationsMaxOrderByAggregateInputSchema } from './translationsMaxOrderByAggregateInputSchema';
import { translationsMinOrderByAggregateInputSchema } from './translationsMinOrderByAggregateInputSchema';

export const translationsOrderByWithAggregationInputSchema: z.ZodType<Prisma.translationsOrderByWithAggregationInput> =
	z
		.object({
			translations_id: z.lazy(() => SortOrderSchema).optional(),
			translatable_id: z.lazy(() => SortOrderSchema).optional(),
			field: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			language: z.lazy(() => SortOrderSchema).optional(),
			translation: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => translationsCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => translationsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => translationsMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default translationsOrderByWithAggregationInputSchema;
