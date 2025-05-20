import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const settlementsMinOrderByAggregateInputSchema: z.ZodType<Prisma.settlementsMinOrderByAggregateInput> = z
	.object({
		settlement_id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		municipalities_id: z.lazy(() => SortOrderSchema).optional(),
		eid_naselje: z.lazy(() => SortOrderSchema).optional(),
		feature_id: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default settlementsMinOrderByAggregateInputSchema;
