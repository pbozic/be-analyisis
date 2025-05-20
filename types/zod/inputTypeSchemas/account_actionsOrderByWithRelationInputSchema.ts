import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';

export const account_actionsOrderByWithRelationInputSchema: z.ZodType<Prisma.account_actionsOrderByWithRelationInput> =
	z
		.object({
			account_action_id: z.lazy(() => SortOrderSchema).optional(),
			business_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			action_creator_user_id: z.lazy(() => SortOrderSchema).optional(),
			reason: z.lazy(() => SortOrderSchema).optional(),
			action: z.lazy(() => SortOrderSchema).optional(),
			business: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
			user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
			action_creator: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default account_actionsOrderByWithRelationInputSchema;
