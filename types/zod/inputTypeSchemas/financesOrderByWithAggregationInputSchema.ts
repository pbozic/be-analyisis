import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { financesCountOrderByAggregateInputSchema } from './financesCountOrderByAggregateInputSchema';
import { financesMaxOrderByAggregateInputSchema } from './financesMaxOrderByAggregateInputSchema';
import { financesMinOrderByAggregateInputSchema } from './financesMinOrderByAggregateInputSchema';

export const financesOrderByWithAggregationInputSchema: z.ZodType<Prisma.financesOrderByWithAggregationInput> = z
	.object({
		finance_id: z.lazy(() => SortOrderSchema).optional(),
		bank_name: z.lazy(() => SortOrderSchema).optional(),
		account_holder: z.lazy(() => SortOrderSchema).optional(),
		account_number: z.lazy(() => SortOrderSchema).optional(),
		payment_preferences: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => financesCountOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => financesMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => financesMinOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default financesOrderByWithAggregationInputSchema;
