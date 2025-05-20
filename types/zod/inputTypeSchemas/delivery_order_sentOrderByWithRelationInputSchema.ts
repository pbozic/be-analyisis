import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { delivery_ordersOrderByWithRelationInputSchema } from './delivery_ordersOrderByWithRelationInputSchema';
import { delivery_driversOrderByWithRelationInputSchema } from './delivery_driversOrderByWithRelationInputSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';

export const delivery_order_sentOrderByWithRelationInputSchema: z.ZodType<Prisma.delivery_order_sentOrderByWithRelationInput> =
	z
		.object({
			delivery_order_sent_id: z.lazy(() => SortOrderSchema).optional(),
			order_id: z.lazy(() => SortOrderSchema).optional(),
			accepted: z.lazy(() => SortOrderSchema).optional(),
			location: z.lazy(() => SortOrderSchema).optional(),
			timeline: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			delivery_driver_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			driver_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			order: z.lazy(() => delivery_ordersOrderByWithRelationInputSchema).optional(),
			delivery_driver: z.lazy(() => delivery_driversOrderByWithRelationInputSchema).optional(),
			driver: z.lazy(() => driversOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default delivery_order_sentOrderByWithRelationInputSchema;
