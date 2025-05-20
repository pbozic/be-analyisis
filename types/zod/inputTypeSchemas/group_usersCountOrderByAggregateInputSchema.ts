import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const group_usersCountOrderByAggregateInputSchema: z.ZodType<Prisma.group_usersCountOrderByAggregateInput> = z
	.object({
		group_user_id: z.lazy(() => SortOrderSchema).optional(),
		parent_user_id: z.lazy(() => SortOrderSchema).optional(),
		child_user_id: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		enabled: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default group_usersCountOrderByAggregateInputSchema;
