import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const UsersListRelationFilterSchema: z.ZodType<Prisma.UsersListRelationFilter> = z
	.object({
		every: z.lazy(() => usersWhereInputSchema).optional(),
		some: z.lazy(() => usersWhereInputSchema).optional(),
		none: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default UsersListRelationFilterSchema;
