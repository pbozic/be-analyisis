import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';

export const tokensOrderByWithRelationInputSchema: z.ZodType<Prisma.tokensOrderByWithRelationInput> = z
	.object({
		token_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		token: z.lazy(() => SortOrderSchema).optional(),
		expires_at: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		users: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export default tokensOrderByWithRelationInputSchema;
