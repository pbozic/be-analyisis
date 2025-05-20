import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { user_rolesCountOrderByAggregateInputSchema } from './user_rolesCountOrderByAggregateInputSchema';
import { user_rolesMaxOrderByAggregateInputSchema } from './user_rolesMaxOrderByAggregateInputSchema';
import { user_rolesMinOrderByAggregateInputSchema } from './user_rolesMinOrderByAggregateInputSchema';

export const user_rolesOrderByWithAggregationInputSchema: z.ZodType<Prisma.user_rolesOrderByWithAggregationInput> = z
	.object({
		user_roles_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		primary: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		_count: z.lazy(() => user_rolesCountOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => user_rolesMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => user_rolesMinOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default user_rolesOrderByWithAggregationInputSchema;
