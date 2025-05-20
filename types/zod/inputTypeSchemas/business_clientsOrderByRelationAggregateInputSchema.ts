import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const business_clientsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.business_clientsOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default business_clientsOrderByRelationAggregateInputSchema;
