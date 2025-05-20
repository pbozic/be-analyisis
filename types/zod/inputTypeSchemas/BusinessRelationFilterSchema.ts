import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const BusinessRelationFilterSchema: z.ZodType<Prisma.BusinessRelationFilter> = z
	.object({
		is: z.lazy(() => businessWhereInputSchema).optional(),
		isNot: z.lazy(() => businessWhereInputSchema).optional(),
	})
	.strict();

export default BusinessRelationFilterSchema;
