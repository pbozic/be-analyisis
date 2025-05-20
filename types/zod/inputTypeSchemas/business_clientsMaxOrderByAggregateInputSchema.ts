import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const business_clientsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.business_clientsMaxOrderByAggregateInput> =
	z
		.object({
			business_clients_id: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			first_name: z.lazy(() => SortOrderSchema).optional(),
			last_name: z.lazy(() => SortOrderSchema).optional(),
			email: z.lazy(() => SortOrderSchema).optional(),
			telephone: z.lazy(() => SortOrderSchema).optional(),
			telephone_code: z.lazy(() => SortOrderSchema).optional(),
			telephone_number: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default business_clientsMaxOrderByAggregateInputSchema;
