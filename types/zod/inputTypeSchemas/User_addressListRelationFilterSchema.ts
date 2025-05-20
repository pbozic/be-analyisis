import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressWhereInputSchema } from './user_addressWhereInputSchema';

export const User_addressListRelationFilterSchema: z.ZodType<Prisma.User_addressListRelationFilter> = z
	.object({
		every: z.lazy(() => user_addressWhereInputSchema).optional(),
		some: z.lazy(() => user_addressWhereInputSchema).optional(),
		none: z.lazy(() => user_addressWhereInputSchema).optional(),
	})
	.strict();

export default User_addressListRelationFilterSchema;
