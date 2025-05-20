import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const user_rolesMinOrderByAggregateInputSchema: z.ZodType<Prisma.user_rolesMinOrderByAggregateInput> = z
	.object({
		user_roles_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		primary: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default user_rolesMinOrderByAggregateInputSchema;
