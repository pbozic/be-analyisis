import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';

export const Business_usersListRelationFilterSchema: z.ZodType<Prisma.Business_usersListRelationFilter> = z
	.object({
		every: z.lazy(() => business_usersWhereInputSchema).optional(),
		some: z.lazy(() => business_usersWhereInputSchema).optional(),
		none: z.lazy(() => business_usersWhereInputSchema).optional(),
	})
	.strict();

export default Business_usersListRelationFilterSchema;
