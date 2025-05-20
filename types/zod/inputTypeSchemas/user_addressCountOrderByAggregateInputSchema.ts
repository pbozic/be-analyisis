import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const user_addressCountOrderByAggregateInputSchema: z.ZodType<Prisma.user_addressCountOrderByAggregateInput> = z
	.object({
		user_id: z.lazy(() => SortOrderSchema).optional(),
		address_id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		icon: z.lazy(() => SortOrderSchema).optional(),
		primary: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default user_addressCountOrderByAggregateInputSchema;
