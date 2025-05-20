import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const allowancesSumOrderByAggregateInputSchema: z.ZodType<Prisma.allowancesSumOrderByAggregateInput> = z
	.object({
		amount_taxi_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_transfer_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_delivery_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_any_wallet: z.lazy(() => SortOrderSchema).optional(),
		amount_taxi_purchase_order: z.lazy(() => SortOrderSchema).optional(),
		amount_transfer_purchase_order: z.lazy(() => SortOrderSchema).optional(),
		amount_delivery_purchase_order: z.lazy(() => SortOrderSchema).optional(),
		amount_any_purchase_order: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default allowancesSumOrderByAggregateInputSchema;
