import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const allowancesMinOrderByAggregateInputSchema: z.ZodType<Prisma.allowancesMinOrderByAggregateInput> = z
	.object({
		allowance_id: z.lazy(() => SortOrderSchema).optional(),
		group_user_id: z.lazy(() => SortOrderSchema).optional(),
		business_users_id: z.lazy(() => SortOrderSchema).optional(),
		amount_taxi_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_transfer_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_delivery_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_any_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_taxi_purchase_order: z.lazy(() => SortOrderSchema).optional(),
		amount_transfer_purchase_order: z.lazy(() => SortOrderSchema).optional(),
		amount_delivery_purchase_order: z.lazy(() => SortOrderSchema).optional(),
		amount_any_purchase_order: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default allowancesMinOrderByAggregateInputSchema;
