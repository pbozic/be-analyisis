import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const addressesCountOrderByAggregateInputSchema: z.ZodType<Prisma.addressesCountOrderByAggregateInput> = z
	.object({
		address_id: z.lazy(() => SortOrderSchema).optional(),
		address: z.lazy(() => SortOrderSchema).optional(),
		latitude: z.lazy(() => SortOrderSchema).optional(),
		longitude: z.lazy(() => SortOrderSchema).optional(),
		street: z.lazy(() => SortOrderSchema).optional(),
		house_number: z.lazy(() => SortOrderSchema).optional(),
		city: z.lazy(() => SortOrderSchema).optional(),
		country: z.lazy(() => SortOrderSchema).optional(),
		postal: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default addressesCountOrderByAggregateInputSchema;
