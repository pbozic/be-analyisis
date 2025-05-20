import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { taxi_ordersOrderByWithRelationInputSchema } from './taxi_ordersOrderByWithRelationInputSchema';
import { delivery_ordersOrderByWithRelationInputSchema } from './delivery_ordersOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { documentsOrderByRelationAggregateInputSchema } from './documentsOrderByRelationAggregateInputSchema';
import { wallet_fundsOrderByWithRelationInputSchema } from './wallet_fundsOrderByWithRelationInputSchema';

export const transactionsOrderByWithRelationInputSchema: z.ZodType<Prisma.transactionsOrderByWithRelationInput> = z
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
		taxi_order: z.lazy(() => taxi_ordersOrderByWithRelationInputSchema).optional(),
		delivery_order: z.lazy(() => delivery_ordersOrderByWithRelationInputSchema).optional(),
		user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
		documents: z.lazy(() => documentsOrderByRelationAggregateInputSchema).optional(),
		wallet_funds: z.lazy(() => wallet_fundsOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export default transactionsOrderByWithRelationInputSchema;
