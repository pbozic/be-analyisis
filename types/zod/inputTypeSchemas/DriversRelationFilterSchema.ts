import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const DriversRelationFilterSchema: z.ZodType<Prisma.DriversRelationFilter> = z
	.object({
		is: z.lazy(() => driversWhereInputSchema).optional(),
		isNot: z.lazy(() => driversWhereInputSchema).optional(),
	})
	.strict();

export default DriversRelationFilterSchema;
