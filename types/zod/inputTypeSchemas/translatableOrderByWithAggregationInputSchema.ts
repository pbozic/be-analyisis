import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { translatableCountOrderByAggregateInputSchema } from './translatableCountOrderByAggregateInputSchema';
import { translatableMaxOrderByAggregateInputSchema } from './translatableMaxOrderByAggregateInputSchema';
import { translatableMinOrderByAggregateInputSchema } from './translatableMinOrderByAggregateInputSchema';

export const translatableOrderByWithAggregationInputSchema: z.ZodType<Prisma.translatableOrderByWithAggregationInput> =
	z
		.object({
			translatable_id: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => translatableCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => translatableMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => translatableMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default translatableOrderByWithAggregationInputSchema;
