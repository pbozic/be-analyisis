import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const business_usersCountOrderByAggregateInputSchema: z.ZodType<Prisma.business_usersCountOrderByAggregateInput> =
	z
		.object({
			business_users_id: z.lazy(() => SortOrderSchema).optional(),
			online: z.lazy(() => SortOrderSchema).optional(),
			company_role: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			operating_address_id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default business_usersCountOrderByAggregateInputSchema;
