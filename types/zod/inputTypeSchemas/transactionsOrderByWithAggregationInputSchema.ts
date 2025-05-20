import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { transactionsCountOrderByAggregateInputSchema } from './transactionsCountOrderByAggregateInputSchema';
import { transactionsAvgOrderByAggregateInputSchema } from './transactionsAvgOrderByAggregateInputSchema';
import { transactionsMaxOrderByAggregateInputSchema } from './transactionsMaxOrderByAggregateInputSchema';
import { transactionsMinOrderByAggregateInputSchema } from './transactionsMinOrderByAggregateInputSchema';
import { transactionsSumOrderByAggregateInputSchema } from './transactionsSumOrderByAggregateInputSchema';

export const transactionsOrderByWithAggregationInputSchema: z.ZodType<Prisma.transactionsOrderByWithAggregationInput> =
	z
		.object({
			transaction_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.lazy(() => SortOrderSchema).optional(),
			amount: z.lazy(() => SortOrderSchema).optional(),
			type: z.lazy(() => SortOrderSchema).optional(),
			description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			createdAt: z.lazy(() => SortOrderSchema).optional(),
			updatedAt: z.lazy(() => SortOrderSchema).optional(),
			delivery_order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			taxi_order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			wallet_fund_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			_count: z.lazy(() => transactionsCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => transactionsAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => transactionsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => transactionsMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => transactionsSumOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default transactionsOrderByWithAggregationInputSchema;
