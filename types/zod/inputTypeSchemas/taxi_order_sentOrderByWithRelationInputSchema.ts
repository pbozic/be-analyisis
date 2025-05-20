import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { taxi_ordersOrderByWithRelationInputSchema } from './taxi_ordersOrderByWithRelationInputSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';

export const taxi_order_sentOrderByWithRelationInputSchema: z.ZodType<Prisma.taxi_order_sentOrderByWithRelationInput> =
	z
		.object({
			taxi_order_sent_id: z.lazy(() => SortOrderSchema).optional(),
			order_id: z.lazy(() => SortOrderSchema).optional(),
			driver_id: z.lazy(() => SortOrderSchema).optional(),
			accepted: z.lazy(() => SortOrderSchema).optional(),
			location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			timeline: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			rejected: z.lazy(() => SortOrderSchema).optional(),
			order: z.lazy(() => taxi_ordersOrderByWithRelationInputSchema).optional(),
			driver: z.lazy(() => driversOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default taxi_order_sentOrderByWithRelationInputSchema;
