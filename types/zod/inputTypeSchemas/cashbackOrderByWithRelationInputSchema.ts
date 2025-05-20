import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { taxi_ordersOrderByWithRelationInputSchema } from './taxi_ordersOrderByWithRelationInputSchema';
import { delivery_ordersOrderByWithRelationInputSchema } from './delivery_ordersOrderByWithRelationInputSchema';

export const cashbackOrderByWithRelationInputSchema: z.ZodType<Prisma.cashbackOrderByWithRelationInput> = z
	.object({
		cashback_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		amount: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		source: z.lazy(() => SortOrderSchema).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		earned_at: z.lazy(() => SortOrderSchema).optional(),
		expires_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		converted_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		taxi_order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		delivery_order_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
		taxi_order: z.lazy(() => taxi_ordersOrderByWithRelationInputSchema).optional(),
		delivery_order: z.lazy(() => delivery_ordersOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export default cashbackOrderByWithRelationInputSchema;
