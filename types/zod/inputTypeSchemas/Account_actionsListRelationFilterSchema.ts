import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsWhereInputSchema } from './account_actionsWhereInputSchema';

export const Account_actionsListRelationFilterSchema: z.ZodType<Prisma.Account_actionsListRelationFilter> = z
	.object({
		every: z.lazy(() => account_actionsWhereInputSchema).optional(),
		some: z.lazy(() => account_actionsWhereInputSchema).optional(),
		none: z.lazy(() => account_actionsWhereInputSchema).optional(),
	})
	.strict();

export default Account_actionsListRelationFilterSchema;
