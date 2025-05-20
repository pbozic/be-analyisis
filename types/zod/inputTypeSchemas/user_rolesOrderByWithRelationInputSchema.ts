import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';

export const user_rolesOrderByWithRelationInputSchema: z.ZodType<Prisma.user_rolesOrderByWithRelationInput> = z
	.object({
		user_roles_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		primary: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export default user_rolesOrderByWithRelationInputSchema;
