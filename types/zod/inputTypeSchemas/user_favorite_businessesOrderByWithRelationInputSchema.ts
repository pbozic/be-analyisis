import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';

export const user_favorite_businessesOrderByWithRelationInputSchema: z.ZodType<Prisma.user_favorite_businessesOrderByWithRelationInput> =
	z
		.object({
			user_favorite_businesses_id: z.lazy(() => SortOrderSchema).optional(),
			user_id: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.lazy(() => SortOrderSchema).optional(),
			business_type: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			users: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
			businesses: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default user_favorite_businessesOrderByWithRelationInputSchema;
