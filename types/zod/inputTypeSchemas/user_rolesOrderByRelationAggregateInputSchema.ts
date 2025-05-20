import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const user_rolesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.user_rolesOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default user_rolesOrderByRelationAggregateInputSchema;
