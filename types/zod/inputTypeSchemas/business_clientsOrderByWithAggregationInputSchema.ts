import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { business_clientsCountOrderByAggregateInputSchema } from './business_clientsCountOrderByAggregateInputSchema';
import { business_clientsMaxOrderByAggregateInputSchema } from './business_clientsMaxOrderByAggregateInputSchema';
import { business_clientsMinOrderByAggregateInputSchema } from './business_clientsMinOrderByAggregateInputSchema';

export const business_clientsOrderByWithAggregationInputSchema: z.ZodType<Prisma.business_clientsOrderByWithAggregationInput> =
	z
		.object({
			business_clients_id: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			first_name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			last_name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			telephone: z.lazy(() => SortOrderSchema).optional(),
			telephone_code: z.lazy(() => SortOrderSchema).optional(),
			telephone_number: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => business_clientsCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => business_clientsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => business_clientsMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default business_clientsOrderByWithAggregationInputSchema;
