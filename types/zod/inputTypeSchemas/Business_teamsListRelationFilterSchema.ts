import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsWhereInputSchema } from './business_teamsWhereInputSchema';

export const Business_teamsListRelationFilterSchema: z.ZodType<Prisma.Business_teamsListRelationFilter> = z
	.object({
		every: z.lazy(() => business_teamsWhereInputSchema).optional(),
		some: z.lazy(() => business_teamsWhereInputSchema).optional(),
		none: z.lazy(() => business_teamsWhereInputSchema).optional(),
	})
	.strict();

export default Business_teamsListRelationFilterSchema;
