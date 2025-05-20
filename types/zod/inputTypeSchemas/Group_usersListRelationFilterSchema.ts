import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersWhereInputSchema } from './group_usersWhereInputSchema';

export const Group_usersListRelationFilterSchema: z.ZodType<Prisma.Group_usersListRelationFilter> = z
	.object({
		every: z.lazy(() => group_usersWhereInputSchema).optional(),
		some: z.lazy(() => group_usersWhereInputSchema).optional(),
		none: z.lazy(() => group_usersWhereInputSchema).optional(),
	})
	.strict();

export default Group_usersListRelationFilterSchema;
