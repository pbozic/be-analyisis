import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const allergensSumOrderByAggregateInputSchema: z.ZodType<Prisma.allergensSumOrderByAggregateInput> = z
	.object({
		code: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default allergensSumOrderByAggregateInputSchema;
