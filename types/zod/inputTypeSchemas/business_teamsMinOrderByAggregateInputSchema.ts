import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const business_teamsMinOrderByAggregateInputSchema: z.ZodType<Prisma.business_teamsMinOrderByAggregateInput> = z
	.object({
		business_teams_id: z.lazy(() => SortOrderSchema).optional(),
		team_name: z.lazy(() => SortOrderSchema).optional(),
		business_id: z.lazy(() => SortOrderSchema).optional(),
		limit_per_person: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default business_teamsMinOrderByAggregateInputSchema;
